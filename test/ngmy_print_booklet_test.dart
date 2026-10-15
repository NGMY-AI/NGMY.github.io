import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_book_studio.dart';
import 'package:ngmy/ngmy_print_booklet.dart';

// Every character is half the font size wide.
double _w(String t, double size, bool bold) => t.length * size * 0.5;

void main() {
  test('booklet sides put pages so a folded stack reads in order', () {
    expect(ngmyBookletSides(8), [(7, 0), (1, 6), (5, 2), (3, 4)]);
    expect(ngmyBookletSides(4), [(3, 0), (1, 2)]);
    final sides = ngmyBookletSides(40);
    expect(sides.length, 20);
    final all = sides.expand((s) => [s.$1, s.$2]).toList()..sort();
    expect(all, List.generate(40, (i) => i));
    // Each sheet: the two pages on a side always add up to n-1 (they face across the fold).
    for (final s in sides) {
      expect(s.$1 + s.$2, 39);
    }
  });

  test('long chapters flow onto as many pages as needed, padded to whole sheets', () {
    final long = List.generate(900, (i) => 'word$i').join(' ');
    final doc = NgmyBookDoc(title: 'Big', chapters: [
      NgmyBookChapter(title: 'One', body: long),
      const NgmyBookChapter(title: 'Two', body: 'Short.'),
    ]);
    final pages = ngmyPaginateBook(doc, pageWidth: 396, pageHeight: 612, measure: _w);
    expect(pages.length % 4, 0);
    expect(pages.first.isCover, isTrue);
    expect(pages.length, greaterThan(4));
    // Lines stay inside the writing area and the words all made it.
    const contentH = 612 - kNgmyBookTopMargin - kNgmyBookBottomMargin;
    var words = 0;
    for (final p in pages) {
      for (final l in p.lines) {
        expect(l.y + l.size <= contentH + 0.01, isTrue);
        expect(_w(l.text, l.size, l.bold) <= 396 - kNgmyBookSideMargin * 2 + 0.01, isTrue);
        if (!l.bold && !p.isCover) words += l.text.split(' ').where((w) => w.startsWith('word')).length;
      }
    }
    expect(words, 900);
    // "Two" starts on its own page.
    final twoPage = pages.indexWhere((p) => p.lines.any((l) => l.text == 'Two'));
    expect(pages[twoPage].lines.first.text, 'Two');
  });

  test('a very long word is split instead of running off the page', () {
    final lines = ngmyWrapBookText('x' * 200, 100, 10, false, _w);
    for (final l in lines) {
      expect(_w(l, 10, false) <= 100, isTrue);
    }
    expect(lines.join(), 'x' * 200);
  });

  test('AI reply is read even with code fences', () {
    final doc = ngmyParseBookAi('```json\n{"title":"Tale","chapters":[{"title":"A","body":"b"}]}\n```', author: 'Me');
    expect(doc!.title, 'Tale');
    expect(doc.author, 'Me');
    expect(doc.chapters.single.title, 'A');
    expect(ngmyParseBookAi('nope'), isNull);
  });

  testWidgets('PDF builds in both layouts', (tester) async {
    await tester.runAsync(() async {
      final doc = NgmyBookDoc(title: 'T', chapters: [NgmyBookChapter(title: 'A', body: 'hello ' * 400)]);
      final a = await ngmyBuildBookletPdf(doc);
      final b = await ngmyBuildBookletPdf(doc, booklet: false, paper: NgmyBookPaper.a4);
      expect(a.length, greaterThan(1000));
      expect(b.length, greaterThan(1000));
    });
  });
}
