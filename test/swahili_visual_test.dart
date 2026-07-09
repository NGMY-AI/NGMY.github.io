import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_swahili_visuals.dart';

void main() {
  test('pronouns and descriptions get distinct matching photos', () {
    final mrefu = resolveSwahiliWordVisual(swahili: 'Yeye ni mrefu', english: 'She/He is tall');
    final mfupi = resolveSwahiliWordVisual(swahili: 'Yeye ni mfupi', english: 'She/He is short');
    final maarufu = resolveSwahiliWordVisual(swahili: 'Yeye ni maarufu', english: 'He/She is famous');
    final yeye = resolveSwahiliWordVisual(swahili: 'Yeye', english: 'He / she');
    final mimi = resolveSwahiliWordVisual(swahili: 'Mimi', english: 'I / me');

    expect(mrefu.imageUrl, isNot(equals(mfupi.imageUrl)));
    expect(maarufu.imageUrl, isNot(equals(mrefu.imageUrl)));
    expect(yeye.imageUrl, contains('photo-1681038097688'));
    expect(mimi.imageUrl, contains('photo-1695835871463'));
  });
}
