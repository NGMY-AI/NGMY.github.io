import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_swahili_curriculum.dart';

SwahiliWord _word(String swahili) {
  for (final level in kSwahiliLevels) {
    for (final day in level.days) {
      for (final word in day.words) {
        if (word.swahili == swahili) return word;
      }
    }
  }
  throw StateError('Missing word: $swahili');
}

void main() {
  test('He/She phrases keep the full English sentence in test answers', () {
    expect(ngmySwahiliTestEnglishAnswer(_word('Yeye ni daktari')), 'He is a doctor');
    expect(ngmySwahiliTestEnglishAnswer(_word('Yeye ni mrefu')), 'He is tall');
    expect(ngmySwahiliTestEnglishAnswer(_word('Yeye ana huzuni')), 'He is sad');
  });

  test('short synonym pairs still pick a single clear English answer', () {
    expect(ngmySwahiliTestEnglishAnswer(_word('Mimi')), 'I');
    expect(ngmySwahiliTestEnglishAnswer(_word('Yeye')), 'He');
    expect(ngmySwahiliTestEnglishAnswer(_word('Sisi')), 'We');
  });

  test('every curriculum entry yields a non-empty English test answer', () {
    for (final level in kSwahiliLevels) {
      for (final day in level.days) {
        for (final word in day.words) {
          final answer = ngmySwahiliTestEnglishAnswer(word);
          expect(answer.trim(), isNotEmpty, reason: '${word.swahili} → empty answer');
          if (word.swahili.trim().contains(' ')) {
            expect(answer, isNot(equals('He')), reason: '${word.swahili} truncated to He');
            expect(answer, isNot(equals('She')), reason: '${word.swahili} truncated to She');
          }
        }
      }
    }
  });
}
