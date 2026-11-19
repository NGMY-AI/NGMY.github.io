import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_lab.dart';

void main() {
  const lessons = [
    (title: 'Outlet', other: 'A regular wall outlet'),
    (title: 'Light switch', other: 'One switch for one light'),
    (title: 'Sink drain', other: 'P-trap and tailpiece'),
    (title: 'Smart switch', other: 'Needs a neutral'),
    (title: 'Dryer outlet', other: '240 volt'),
    (title: 'Hanging drywall', other: 'Sheets, screws, tape, mud, sand'),
  ];

  test('from the first letter only lessons with a word starting with it, title starts first', () {
    final s = ngmyRankLessons('s', lessons).map((i) => lessons[i].title).toList();
    expect(s.take(2).toSet(), {'Sink drain', 'Smart switch'});
    expect(s, contains('Light switch'));
    expect(s, isNot(contains('Outlet')), reason: 'no word of the outlet starts with s');
  });

  test('narrows while typing', () {
    expect(ngmyRankLessons('sw', lessons).map((i) => lessons[i].title).toList(), ['Light switch', 'Smart switch']);
    expect(ngmyRankLessons('dr', lessons).map((i) => lessons[i].title).first, 'Dryer outlet');
    expect(ngmyRankLessons('', lessons).length, lessons.length);
  });

  test('falls back to letters inside a word when nothing starts with them', () {
    expect(ngmyRankLessons('witch', lessons).map((i) => lessons[i].title).toList(), ['Light switch', 'Smart switch']);
  });
}
