import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ai_language.dart';
import 'package:ngmy/ngmy_book_studio.dart';
import 'package:ngmy/ngmy_print_booklet.dart';

// Every character is half the font size wide.
double _w(String t, double size, bool bold) => t.length * size * 0.5;

void main() {
  test('booklet sides put pages so sheets folded inside each other read in order', () {
    expect(ngmyBookletSides(8), [(7, 0), (1, 6), (5, 2), (3, 4)]);
    expect(ngmyBookletSides(4), [(3, 0), (1, 2)]);
    final sides = ngmyBookletSides(40);
    expect(sides.length, 20);
    final all = sides.expand((s) => [s.$1, s.$2]).toList()..sort();
    expect(all, List.generate(40, (i) => i));
    for (final s in sides) {
      expect(s.$1 + s.$2, 39);
    }
  });

  test('pages flow on without big gaps; cover first, back cover last, whole sheets', () {
    final long = List.generate(900, (i) => 'word$i').join(' ');
    final doc = NgmyBookDoc(title: 'Big', chapters: [
      NgmyBookChapter(title: 'One', body: long),
      const NgmyBookChapter(title: 'Two', body: 'Short.'),
      const NgmyBookChapter(title: 'Three', body: 'Also short.'),
    ]);
    final pages = ngmyPaginateBook(doc, pageWidth: 396, pageHeight: 612, measure: _w);
    expect(pages.length % 4, 0);
    expect(pages.first.isCover, isTrue);
    expect(pages.last.isBack, isTrue);
    const contentH = 612 - kNgmyBookTopMargin - kNgmyBookBottomMargin;
    var words = 0;
    for (final p in pages) {
      for (final l in p.lines) {
        expect(l.y + l.size <= contentH + 0.01, isTrue);
        expect(_w(l.text, l.size, l.bold) <= 396 - kNgmyBookSideMargin * 2 + 0.01, isTrue);
        if (!l.bold) words += l.text.split(' ').where((w) => w.startsWith('word')).length;
      }
    }
    expect(words, 900);
    // Short chapters share a page instead of each taking a near-empty page.
    final two = pages.indexWhere((p) => p.lines.any((l) => l.text == 'Two'));
    final three = pages.indexWhere((p) => p.lines.any((l) => l.text == 'Three'));
    expect(two, three);
    // Padding pages are Notes pages, not empty ones.
    for (final p in pages.where((p) => !p.isCover && !p.isBack && p.lines.isEmpty)) {
      expect(p.kind, NgmyBookPageKind.notes);
    }
  });

  test('a page picture is placed under its title and pushes text down', () {
    final doc = NgmyBookDoc(title: 'P', chapters: [NgmyBookChapter(title: 'Pic', body: 'hello ' * 50)]);
    final pages = ngmyPaginateBook(doc, pageWidth: 396, pageHeight: 612, measure: _w, hasPicture: (_) => true);
    final p = pages[1];
    expect(p.pictures.single.chapter, 0);
    final bodyTop = p.lines.firstWhere((l) => !l.bold).y;
    expect(bodyTop >= p.pictures.single.y + kNgmyBookPictureHeight, isTrue);
  });

  test('a very long word is split instead of running off the page', () {
    final lines = ngmyWrapBookText('x' * 200, 100, 10, false, _w);
    for (final l in lines) {
      expect(_w(l, 10, false) <= 100, isTrue);
    }
    expect(lines.join(), 'x' * 200);
  });

  test('AI reply is read even with code fences, with its cover template', () {
    final doc = ngmyParseBookAi(
        '```json\n{"title":"Tale","cover_template":"starry","chapters":[{"title":"A","body":"b","image_query":"night sky"}]}\n```',
        author: 'Me');
    expect(doc!.title, 'Tale');
    expect(doc.author, 'Me');
    expect(doc.cover.template, 'starry');
    expect(doc.chapters.single.imageQuery, 'night sky');
    expect(ngmyParseBookAi('nope'), isNull);
  });

  test('language comes from the request, no picker needed', () {
    expect(ngmyRequestedLanguage('Make a book about our family in Swahili'), contains('Swahili'));
    expect(ngmyRequestedLanguage('Nitengenezee hadithi ya watoto kuhusu familia yetu'), contains('Swahili'));
    expect(ngmyRequestedLanguage('Tengeneza slides kuhusu biashara kwa Kiingereza'), 'English');
    expect(ngmyRequestedLanguage('A presentation about solar energy for my class'), isNull);
  });

  test('no ruled Notes lines unless asked for', () {
    final doc = NgmyBookDoc(title: 'N', chapters: [NgmyBookChapter(title: 'A', body: 'short ' * 30)]);
    final off = ngmyPaginateBook(doc, pageWidth: 396, pageHeight: 612, measure: _w);
    expect(off.every((p) => p.notesFrom == null), isTrue);
    final on = ngmyPaginateBook(doc, pageWidth: 396, pageHeight: 612, measure: _w, notes: true);
    expect(on.any((p) => p.notesFrom != null), isTrue);
  });

  testWidgets('PDF builds in both layouts', (tester) async {
    await tester.runAsync(() async {
      final doc = NgmyBookDoc(title: 'T', chapters: [NgmyBookChapter(title: 'A', body: 'hello ' * 400)]);
      final a = await ngmyBuildBookletPdf(doc, backColor: 0xFF0F1B3D);
      final b = await ngmyBuildBookletPdf(doc, booklet: false, paper: NgmyBookPaper.a4);
      expect(a.length, greaterThan(1000));
      expect(b.length, greaterThan(1000));
    });
  });
}

