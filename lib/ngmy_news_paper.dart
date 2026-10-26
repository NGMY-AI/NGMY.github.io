import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// The words of one newspaper page.
class NgmyNewsDoc {
  const NgmyNewsDoc({
    this.paper = 'The NGMY Times',
    this.headline = '',
    this.subhead = '',
    this.byline = 'By the NGMY Newsroom',
    this.caption = '',
    this.body = const [],
    this.pullQuote = '',
    this.sidebarTitle = '',
    this.sidebarText = '',
    this.category = 'NGMY NEWS',
  });

  final String paper;
  final String category;
  final String headline;
  final String subhead;
  final String byline;
  final String caption;
  final List<String> body;
  final String pullQuote;
  final String sidebarTitle;
  final String sidebarText;

  bool get isEmpty => headline.trim().isEmpty && body.isEmpty;

  NgmyNewsDoc copyWith({String? paper, String? headline, String? subhead, String? byline, String? caption, List<String>? body, String? pullQuote, String? sidebarTitle, String? sidebarText, String? category}) => NgmyNewsDoc(
        category: category ?? this.category,
        paper: paper ?? this.paper,
        headline: headline ?? this.headline,
        subhead: subhead ?? this.subhead,
        byline: byline ?? this.byline,
        caption: caption ?? this.caption,
        body: body ?? this.body,
        pullQuote: pullQuote ?? this.pullQuote,
        sidebarTitle: sidebarTitle ?? this.sidebarTitle,
        sidebarText: sidebarText ?? this.sidebarText,
      );

  Map<String, dynamic> toJson() => {
        'paper': paper,
        'headline': headline,
        'subhead': subhead,
        'byline': byline,
        'caption': caption,
        'body': body,
        'pullQuote': pullQuote,
        'sidebarTitle': sidebarTitle,
        'sidebarText': sidebarText,
        'category': category,
      };

  /// Takes what the AI sent. Anything missing keeps its old value, so a small change does not wipe the page.
  NgmyNewsDoc applyJson(Map<String, dynamic> j) {
    String? s(String k) => j[k] is String ? (j[k] as String).trim() : null;
    List<String>? paras;
    final b = j['body'];
    if (b is List) {
      paras = [for (final p in b) if ('$p'.trim().isNotEmpty) '$p'.trim()];
    } else if (b is String && b.trim().isNotEmpty) {
      paras = b.split(RegExp(r'\n\s*\n')).map((e) => e.trim()).where((e) => e.isNotEmpty).toList();
    }
    return copyWith(
      paper: (s('paper') ?? '').isEmpty ? null : s('paper'),
      headline: (s('headline') ?? '').isEmpty ? null : s('headline'),
      subhead: s('subhead'),
      byline: (s('byline') ?? '').isEmpty ? null : s('byline'),
      caption: s('caption'),
      body: paras != null && paras.isNotEmpty ? paras : null,
      pullQuote: s('pullQuote'),
      sidebarTitle: s('sidebarTitle'),
      sidebarText: s('sidebarText'),
      category: (s('category') ?? '').isEmpty ? null : s('category')!.toUpperCase(),
    );
  }

  factory NgmyNewsDoc.fromJson(Map<String, dynamic> j) => const NgmyNewsDoc().applyJson(j);
}

/// How the page is built: where the headline, picture and columns go.
enum NewsLayout { classic, sideBySide, splash, magazine, wrap, scrapbook, circle, rail, banner, minimal, cardWorld, cardSplit, cardBreaking, cardFeature }

/// How the picture is framed.
enum NewsFrame { plain, double, polaroid, rounded, circle, tape, cutCorner, film, arch, shadow, torn }

/// How a newspaper looks: its page structure, picture frame, fonts and colours.
class NgmyNewsTemplate {
  const NgmyNewsTemplate({
    required this.id,
    required this.name,
    required this.group,
    required this.layout,
    required this.frame,
    required this.paper,
    required this.paper2,
    required this.ink,
    required this.accent,
    required this.mast,
    required this.mastFont,
    required this.headFont,
    required this.bodyFont,
    required this.voice,
    this.vintage = false,
    this.photoFilter = 'none',
    this.dark = false,
    this.caps = false,
  });

  final String id;
  final String name;
  final String group;
  final NewsLayout layout;
  final NewsFrame frame;
  final int paper;
  final int paper2;
  final int ink;
  final int accent;

  /// blackletter | centered | bar | split
  final String mast;
  final String mastFont;
  final String headFont;
  final String bodyFont;

  /// How the AI should write for this paper.
  final String voice;
  final bool vintage;

  /// none | bw | sepia
  final String photoFilter;
  final bool dark;

  /// The headline is set in capitals.
  final bool caps;
}

const String kNewsBlackletter = 'NgmyBlackletter';
const String kNewsOldStandard = 'NgmyOldStandard';
const String kNewsAbril = 'NgmyAbril';

const List<NgmyNewsTemplate> kNgmyNewsTemplates = [
  // ── Row one ──
  NgmyNewsTemplate(id: 'world', name: 'NGMY World', group: 'Cards', layout: NewsLayout.cardWorld, frame: NewsFrame.rounded, paper: 0xFF0B1F44, paper2: 0xFF050E22, ink: 0xFFFFFFFF, accent: 0xFF1D6BFF, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', dark: true, voice: 'a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary'),
  NgmyNewsTemplate(id: 'business', name: 'Business Wire', group: 'Cards', layout: NewsLayout.cardSplit, frame: NewsFrame.rounded, paper: 0xFFFFFFFF, paper2: 0xFFF8FAFC, ink: 0xFF0F172A, accent: 0xFFE11D2E, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', voice: 'a clean business news site: precise, informative and professional, with a plain, strong headline'),
  NgmyNewsTemplate(id: 'breaking', name: 'Breaking Red', group: 'Cards', layout: NewsLayout.cardBreaking, frame: NewsFrame.rounded, paper: 0xFF0B0B0F, paper2: 0xFF2A060B, ink: 0xFFFFFFFF, accent: 0xFFE11D2E, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', dark: true, voice: 'a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary'),
  NgmyNewsTemplate(id: 'feature', name: 'Tech Feature', group: 'Cards', layout: NewsLayout.cardFeature, frame: NewsFrame.rounded, paper: 0xFFFFFFFF, paper2: 0xFFF1F5F9, ink: 0xFF0F172A, accent: 0xFF2563EB, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', voice: 'a modern feature article: informative, engaging and well explained'),
  NgmyNewsTemplate(id: 'parchment', name: 'Royal Circle', group: 'Classic', layout: NewsLayout.circle, frame: NewsFrame.circle, paper: 0xFFF4EBD2, paper2: 0xFFE8D9B0, ink: 0xFF2F2210, accent: 0xFF6B21A8, mast: 'centered', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, vintage: true, photoFilter: 'sepia', voice: 'a stately royal edition: dignified, noble and ceremonial'),
  NgmyNewsTemplate(id: 'ocean', name: 'Blue Ocean', group: 'Fresh', layout: NewsLayout.circle, frame: NewsFrame.circle, paper: 0xFFEFF6FF, paper2: 0xFFDBEAFE, ink: 0xFF0C1E3E, accent: 0xFF0369A1, mast: 'centered', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, voice: 'a calm, trustworthy paper: clear, steady and reassuring'),
  NgmyNewsTemplate(id: 'forest', name: 'Green Leaf', group: 'Fresh', layout: NewsLayout.rail, frame: NewsFrame.double, paper: 0xFFF0FDF4, paper2: 0xFFDCFCE7, ink: 0xFF052E16, accent: 0xFF15803D, mast: 'centered', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, voice: 'a calm community paper about growth and togetherness: gentle, hopeful and clear'),
  NgmyNewsTemplate(id: 'herald', name: 'NGMY Herald', group: 'Fresh', layout: NewsLayout.sideBySide, frame: NewsFrame.rounded, paper: 0xFFFFFFFF, paper2: 0xFFF5F3FF, ink: 0xFF1E1B4B, accent: 0xFF7C3AED, mast: 'split', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, voice: 'the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple'),
  NgmyNewsTemplate(id: 'daily', name: 'The Daily', group: 'Fresh', layout: NewsLayout.classic, frame: NewsFrame.shadow, paper: 0xFFFFFFFF, paper2: 0xFFF4F4F2, ink: 0xFF111111, accent: 0xFFD62828, mast: 'bar', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, caps: true, voice: 'a modern daily newspaper: crisp, clear and energetic, with a punchy headline'),
  NgmyNewsTemplate(id: 'tabloid', name: 'Big Tabloid', group: 'Fresh', layout: NewsLayout.splash, frame: NewsFrame.cutCorner, paper: 0xFFFFFFFF, paper2: 0xFFFFF7E0, ink: 0xFF111111, accent: 0xFFE11D48, mast: 'bar', mastFont: 'Roboto', headFont: kNewsAbril, bodyFont: 'Roboto', caps: true, voice: 'a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)'),
  // ── Row two ──
  NgmyNewsTemplate(id: 'modern', name: 'Modern Digest', group: 'Fresh', layout: NewsLayout.minimal, frame: NewsFrame.rounded, paper: 0xFFF8FAFC, paper2: 0xFFE2E8F0, ink: 0xFF0F172A, accent: 0xFF0D9488, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', voice: 'a clean modern digest: simple words, short paragraphs, friendly and clear'),
  NgmyNewsTemplate(id: 'midnight', name: 'Midnight Edition', group: 'Dark', layout: NewsLayout.magazine, frame: NewsFrame.plain, paper: 0xFF111827, paper2: 0xFF0B1020, ink: 0xFFF1F5F9, accent: 0xFFFACC15, mast: 'logo', mastFont: 'Roboto', headFont: kNewsAbril, bodyFont: kNewsOldStandard, dark: true, caps: true, voice: 'a dramatic late-night edition: confident, cinematic and polished'),
  NgmyNewsTemplate(id: 'metro', name: 'Metro Wire', group: 'Fresh', layout: NewsLayout.banner, frame: NewsFrame.cutCorner, paper: 0xFFF1F5F9, paper2: 0xFFE2E8F0, ink: 0xFF0B1220, accent: 0xFF2563EB, mast: 'logo', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', caps: true, voice: 'a modern news wire: fast, factual and direct, like breaking news'),
  NgmyNewsTemplate(id: 'sunrise', name: 'Sunrise Post', group: 'Fresh', layout: NewsLayout.magazine, frame: NewsFrame.arch, paper: 0xFFFFF7ED, paper2: 0xFFFFEDD5, ink: 0xFF3B1D08, accent: 0xFFEA580C, mast: 'split', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, voice: 'a cheerful morning paper: bright, optimistic and welcoming'),
  NgmyNewsTemplate(id: 'neon', name: 'Neon Beat', group: 'Dark', layout: NewsLayout.scrapbook, frame: NewsFrame.tape, paper: 0xFF1E1B4B, paper2: 0xFF0F0A2E, ink: 0xFFF5F3FF, accent: 0xFFEC4899, mast: 'split', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: 'Roboto', dark: true, voice: 'a youthful neon culture paper: fresh, bold, energetic and fun'),
  NgmyNewsTemplate(id: 'gold', name: 'Golden Press', group: 'Dark', layout: NewsLayout.wrap, frame: NewsFrame.shadow, paper: 0xFF14110A, paper2: 0xFF0A0904, ink: 0xFFFEF3C7, accent: 0xFFFACC15, mast: 'logo', mastFont: 'Roboto', headFont: kNewsAbril, bodyFont: kNewsOldStandard, dark: true, caps: true, voice: 'a luxurious golden press edition: grand, elegant and prestigious'),
  NgmyNewsTemplate(id: 'minimal', name: 'Paper White', group: 'Fresh', layout: NewsLayout.minimal, frame: NewsFrame.shadow, paper: 0xFFFFFFFF, paper2: 0xFFFAFAFA, ink: 0xFF18181B, accent: 0xFF18181B, mast: 'split', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, voice: 'a quiet, elegant long-read: thoughtful, simple and beautifully written'),
  NgmyNewsTemplate(id: 'gazette', name: 'Fresh Gazette', group: 'Classic', layout: NewsLayout.classic, frame: NewsFrame.double, paper: 0xFFF6EFDD, paper2: 0xFFEADFC2, ink: 0xFF2A1B0E, accent: 0xFF9A3412, mast: 'centered', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, caps: true, voice: 'a refined town gazette: formal, dignified and warm, with a strong headline'),
  NgmyNewsTemplate(id: 'times', name: 'Classic Times', group: 'Classic', layout: NewsLayout.sideBySide, frame: NewsFrame.plain, paper: 0xFFFAF8F2, paper2: 0xFFEFEBDD, ink: 0xFF16130E, accent: 0xFF1E3A8A, mast: 'centered', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, photoFilter: 'bw', voice: 'a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead'),
  NgmyNewsTemplate(id: 'scrapbook', name: 'Memory Scrapbook', group: 'Classic', layout: NewsLayout.scrapbook, frame: NewsFrame.polaroid, paper: 0xFFF7EBCB, paper2: 0xFFEAD7A6, ink: 0xFF3A2A1A, accent: 0xFFB45309, mast: 'split', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, photoFilter: 'sepia', voice: 'a warm scrapbook clipping: personal, nostalgic and heartfelt'),
];

NgmyNewsTemplate ngmyNewsTemplateById(String id) => kNgmyNewsTemplates.firstWhere((t) => t.id == id, orElse: () => kNgmyNewsTemplates.first);

bool _fontsLoaded = false;

/// Loads the newspaper fonts the first time they are needed (they are not part of the app's start-up).
Future<void> ngmyLoadNewsFonts() async {
  if (_fontsLoaded) return;
  Future<void> family(String name, List<String> files) async {
    final loader = FontLoader(name);
    for (final f in files) {
      loader.addFont(rootBundle.load('assets/news_fonts/$f'));
    }
    await loader.load();
  }

  try {
    await Future.wait([
      family(kNewsBlackletter, ['UnifrakturCook-Bold.ttf']),
      family(kNewsOldStandard, ['OldStandard-Regular.ttf', 'OldStandard-Bold.ttf', 'OldStandard-Italic.ttf']),
      family(kNewsAbril, ['AbrilFatface-Regular.ttf']),
    ]);
    _fontsLoaded = true;
  } catch (_) {
    // The page still draws with the app's normal fonts.
  }
}

/// The size of one newspaper page, in the units the layout is drawn in.
const double kNewsPageW = 900;
const double kNewsPageH = 1260;

const List<String> _months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const List<String> _days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

String ngmyNewsDateLine(DateTime d) => '${_days[d.weekday - 1]}, ${_months[d.month - 1]} ${d.day}, ${d.year}';

String _roman(int n) {
  const m = [(1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'), (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')];
  var out = '';
  for (final (v, s) in m) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}

/// Splits [paragraphs] into [n] columns that each fit in [w] x [h], word by word. Whatever does not fit is left out
/// (the page shrinks the type first, so that does not happen unless the article is far too long).
List<String> ngmySplitIntoColumns(List<String> paragraphs, TextStyle style, double w, double h, int n, {double firstColumnShorterBy = 0, double lastColumnShorterBy = 0}) {
  final words = <String>[];
  for (var i = 0; i < paragraphs.length; i++) {
    final ws = paragraphs[i].split(RegExp(r'[ \t]+')).where((e) => e.isNotEmpty);
    words.addAll(ws);
    if (i < paragraphs.length - 1) words.add('\n\n');
  }
  final cols = <String>[];
  var at = 0;
  for (var c = 0; c < n; c++) {
    final height = h - (c == 0 ? firstColumnShorterBy : 0) - (c == n - 1 ? lastColumnShorterBy : 0);
    var lo = 0, hi = words.length - at;
    String join(int count) => words.sublist(at, at + count).join(' ').replaceAll(' \n\n ', '\n\n').replaceAll(' \n\n', '\n\n').replaceAll('\n\n ', '\n\n');
    bool fits(int count) {
      if (count == 0) return true;
      final tp = TextPainter(text: TextSpan(text: join(count), style: style), textDirection: TextDirection.ltr, textAlign: TextAlign.justify)..layout(maxWidth: w);
      return tp.height <= height;
    }

    while (lo < hi) {
      final mid = (lo + hi + 1) ~/ 2;
      if (fits(mid)) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    cols.add(lo == 0 ? '' : join(lo).trim());
    at += lo;
    if (at >= words.length) break;
  }
  while (cols.length < n) {
    cols.add('');
  }
  return cols;
}

/// Flows [paragraphs] through boxes of different sizes, one after another ([specs] are width and height), word by word.
List<String> ngmyFlowText(List<String> paragraphs, TextStyle style, List<(double, double)> specs) {
  final words = <String>[];
  for (var i = 0; i < paragraphs.length; i++) {
    words.addAll(paragraphs[i].split(RegExp(r'[ \t]+')).where((e) => e.isNotEmpty));
    if (i < paragraphs.length - 1) words.add('\n\n');
  }
  final out = <String>[];
  var at = 0;
  for (final (w, h) in specs) {
    if (at >= words.length || w < 20 || h < 20) {
      out.add('');
      continue;
    }
    String join(int count) => words.sublist(at, at + count).join(' ').replaceAll(' \n\n ', '\n\n').replaceAll(' \n\n', '\n\n').replaceAll('\n\n ', '\n\n');
    bool fits(int count) {
      if (count == 0) return true;
      final tp = TextPainter(text: TextSpan(text: join(count), style: style), textDirection: TextDirection.ltr, textAlign: TextAlign.justify)..layout(maxWidth: w);
      return tp.height <= h;
    }

    var lo = 0, hi = words.length - at;
    while (lo < hi) {
      final mid = (lo + hi + 1) ~/ 2;
      if (fits(mid)) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    out.add(lo == 0 ? '' : join(lo).trim());
    at += lo;
  }
  return out;
}

/// True when [flowed] holds (nearly) every word of [paragraphs].
bool _flowKeptEverything(List<String> paragraphs, List<String> flowed) {
  int n(String s) => s.split(RegExp(r'\s+')).where((e) => e.isNotEmpty).length;
  return flowed.fold<int>(0, (a, b) => a + n(b)) >= paragraphs.fold<int>(0, (a, b) => a + n(b));
}

/// One newspaper page, drawn at [kNewsPageW] x [kNewsPageH]. Scale it with a FittedBox.
class NgmyNewspaperView extends StatelessWidget {
  const NgmyNewspaperView({super.key, required this.doc, required this.template, this.photo, this.logo, this.date});

  final NgmyNewsDoc doc;
  final NgmyNewsTemplate template;
  final Uint8List? photo;
  final Uint8List? logo;
  final DateTime? date;

  static const List<double> _bw = [0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0, 0, 0, 0, 0, 1, 0];
  static const List<double> _sepia = [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0];
  static const double _pad = 38;
  static const double _innerW = kNewsPageW - _pad * 2;

  NgmyNewsTemplate get t => template;
  Color get ink => Color(t.ink);
  Color get accent => Color(t.accent);
  Color get paperC => Color(t.paper);

  TextStyle _t(String family, double size, {FontWeight weight = FontWeight.w400, FontStyle style = FontStyle.normal, Color? color, double height = 1.25, double spacing = 0}) =>
      TextStyle(fontFamily: family, fontSize: size, fontWeight: weight, fontStyle: style, color: color ?? ink, height: height, letterSpacing: spacing);

  /// The biggest size (between [min] and [max]) at which [text] fits in [w] and [lines] lines.
  double _fit(String text, String family, FontWeight weight, double w, int lines, double max, double min, {double height = 1.05, FontStyle style = FontStyle.normal}) {
    var size = max;
    while (size > min) {
      final tp = TextPainter(
        text: TextSpan(text: text, style: TextStyle(fontFamily: family, fontSize: size, fontWeight: weight, fontStyle: style, height: height)),
        textDirection: TextDirection.ltr,
        maxLines: lines,
      )..layout(maxWidth: w);
      if (!tp.didExceedMaxLines) return size;
      size -= 2;
    }
    return min;
  }

  Widget _rule({double thick = 1.2, double gap = 3, bool double_ = false, Color? color}) {
    final c = color ?? ink;
    return Column(children: [Container(height: thick, color: c), if (double_) ...[SizedBox(height: gap), Container(height: 0.8, color: c)]]);
  }

  String get _paperName => doc.paper.trim().isEmpty ? 'The NGMY Times' : doc.paper.trim();
  String get _headText {
    final h = doc.headline.trim().isEmpty ? 'Your headline appears here' : doc.headline.trim();
    return t.caps ? h.toUpperCase() : h;
  }

  Widget _headline(double w, {TextAlign align = TextAlign.center, int lines = 2, double max = 78, double min = 30, Color? color}) {
    final size = _fit(_headText, t.headFont, FontWeight.w700, w, lines, max, min, height: 1.02);
    return Text(_headText, textAlign: align, maxLines: lines, overflow: TextOverflow.ellipsis, style: _t(t.headFont, size, weight: FontWeight.w700, height: 1.02, color: color));
  }

  Widget _subhead(double w, {TextAlign align = TextAlign.center, double max = 24, Color? color, int lines = 3}) {
    if (doc.subhead.trim().isEmpty) return const SizedBox.shrink();
    final size = _fit(doc.subhead, t.bodyFont, FontWeight.w400, w, lines, max, 15, height: 1.2, style: FontStyle.italic);
    return Padding(padding: const EdgeInsets.only(top: 8), child: Text(doc.subhead.trim(), textAlign: align, maxLines: lines, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, size, style: FontStyle.italic, height: 1.2, color: color)));
  }

  Widget _byline({bool lines = true, Color? color}) {
    final label = Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Text(doc.byline.trim().toUpperCase(), style: _t('Roboto', 12, weight: FontWeight.w800, color: color ?? accent, spacing: 1.4)));
    if (!lines) return label;
    return Row(children: [Expanded(child: Container(height: 1.2, color: ink)), label, Expanded(child: Container(height: 1.2, color: ink))]);
  }

  Widget _caption(double w, {TextAlign align = TextAlign.center}) {
    if (doc.caption.trim().isEmpty) return const SizedBox.shrink();
    return Padding(padding: const EdgeInsets.only(top: 6), child: SizedBox(width: w, child: Text(doc.caption.trim(), textAlign: align, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, 13.5, style: FontStyle.italic, height: 1.2))));
  }

  // ── Masthead ──
  Widget _masthead(double w, {bool compact = false}) {
    final d = date ?? DateTime.now();
    final paper = _paperName;
    final dayOfYear = d.difference(DateTime(d.year)).inDays + 1;
    final vol = 'VOL. ${_roman(math.max(1, d.year - 2021))}  ·  NO. ${dayOfYear + 3000}';
    final info = _t('Roboto', 12, weight: FontWeight.w700, spacing: 1.2);
    final big = compact ? 0.62 : 1.0;
    final size = t.mast == 'blackletter'
        ? _fit(paper, t.mastFont, FontWeight.w700, w, 1, 96 * big, 36, height: 1.0)
        : _fit(paper.toUpperCase(), t.mastFont, FontWeight.w700, w, 1, (t.mast == 'bar' ? 76 : 72) * big, 30, height: 1.0);
    switch (t.mast) {
      case 'bar':
        return Column(children: [
          Container(padding: EdgeInsets.symmetric(horizontal: 18, vertical: compact ? 6 : 10), color: accent, child: Row(children: [Expanded(child: Text(paper.toUpperCase(), maxLines: 1, overflow: TextOverflow.clip, style: _t(t.mastFont, size * 0.84, weight: FontWeight.w700, color: t.dark ? paperC : Colors.white, height: 1.0, spacing: 1)))])),
          const SizedBox(height: 8),
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(ngmyNewsDateLine(d).toUpperCase(), style: info), Text(vol, style: info), Text('FREE · NGMY.ORG', style: info)]),
          const SizedBox(height: 6),
          _rule(thick: 3, double_: true),
        ]);
      case 'split':
        return Column(children: [
          Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            Container(width: 14, height: size * 0.8, color: accent),
            const SizedBox(width: 14),
            Expanded(child: Text(paper, maxLines: 1, overflow: TextOverflow.clip, style: _t(t.mastFont, size * 0.9, weight: FontWeight.w700, height: 1.0))),
          ]),
          const SizedBox(height: 10),
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(ngmyNewsDateLine(d), style: _t('Roboto', 13, weight: FontWeight.w700, color: accent, spacing: 0.6)), Text(vol, style: info)]),
          const SizedBox(height: 8),
          _rule(thick: 3, color: accent),
        ]);
      case 'logo':
        return _logoMasthead(w, compact: compact);
      case 'blackletter':
        return Column(children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(vol, style: info), Text('PRICE: FREE · NGMY.ORG', style: info)]),
          const SizedBox(height: 4),
          _rule(thick: 1.4, double_: true),
          SizedBox(height: compact ? 4 : 10),
          Text(paper, maxLines: 1, textAlign: TextAlign.center, style: _t(t.mastFont, size, weight: FontWeight.w700, height: 1.0)),
          SizedBox(height: compact ? 4 : 8),
          _rule(thick: 1.4, double_: true),
          const SizedBox(height: 4),
          Text(ngmyNewsDateLine(d).toUpperCase(), textAlign: TextAlign.center, style: info),
          const SizedBox(height: 4),
          _rule(thick: 3),
        ]);
      default:
        return Column(children: [
          Text(paper.toUpperCase(), maxLines: 1, textAlign: TextAlign.center, style: _t(t.mastFont, size, weight: FontWeight.w700, height: 1.0, spacing: 3)),
          const SizedBox(height: 8),
          _rule(thick: 1.2, double_: true),
          const SizedBox(height: 4),
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(ngmyNewsDateLine(d).toUpperCase(), style: info), Text(vol, style: info), Text('NGMY.ORG', style: info)]),
          const SizedBox(height: 4),
          _rule(thick: 3),
        ]);
    }
  }

  /// The "NGMY NEWS" logo: heavy NGMY, a coloured NEWS tag, and the paper's name as a tagline.
  Widget _logoMasthead(double w, {bool compact = false}) {
    final sz = compact ? 52.0 : 64.0;
    final tag = _paperName.toUpperCase();
    return Column(children: [
      Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
        Text('NGMY', style: _t('Roboto', sz, weight: FontWeight.w900, height: 1.0, spacing: -1.5)),
        const SizedBox(width: 8),
        Transform.rotate(
          angle: -0.03,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: sz * 0.2, vertical: sz * 0.04),
            decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(sz * 0.16)),
            child: Text('NEWS', style: _t('Roboto', sz * 0.72, weight: FontWeight.w900, style: FontStyle.italic, color: t.dark && t.id == 'midnight' || t.id == 'gold' ? Colors.black : Colors.white, height: 1.05, spacing: -0.5)),
          ),
        ),
        const Spacer(),
        Flexible(child: Text(tag, textAlign: TextAlign.right, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t('Roboto', 12.5, weight: FontWeight.w700, color: ink.withValues(alpha: 0.85), spacing: 1.2, height: 1.3))),
      ]),
      const SizedBox(height: 8),
      Container(height: 1.4, color: ink.withValues(alpha: 0.25)),
    ]);
  }

  /// A small rounded label, like the category on a news site.
  Widget _pill(String text, {Color? color, Color? textColor, double size = 14}) => Container(
        padding: EdgeInsets.symmetric(horizontal: size * 0.9, vertical: size * 0.45),
        decoration: BoxDecoration(color: color ?? accent, borderRadius: BorderRadius.circular(size)),
        child: Text(text, style: _t('Roboto', size, weight: FontWeight.w900, color: textColor ?? Colors.white, spacing: 0.4, height: 1.0)),
      );

  /// Date and time on the left, the source on the right, like the bottom of a news card.
  Widget _meta({IconData right = Icons.public_rounded, Color? color}) {
    final d = date ?? DateTime.now();
    final h = d.hour % 12 == 0 ? 12 : d.hour % 12;
    final c = color ?? ink.withValues(alpha: 0.75);
    final st = _t('Roboto', 15, weight: FontWeight.w500, color: c, height: 1.0);
    return Row(children: [
      Icon(Icons.calendar_today_outlined, size: 18, color: c),
      const SizedBox(width: 8),
      Text('${_months[d.month - 1].substring(0, 3)} ${d.day}, ${d.year}  ·  $h:${d.minute.toString().padLeft(2, '0')} ${d.hour >= 12 ? 'PM' : 'AM'}', style: st),
      Container(width: 1, height: 20, margin: const EdgeInsets.symmetric(horizontal: 16), color: c.withValues(alpha: 0.4)),
      Icon(right, size: 19, color: c),
      const SizedBox(width: 8),
      Text('NGMY News', style: st),
    ]);
  }

  Widget _sansHeadline(double w, {int lines = 3, double max = 64, double min = 30, Color? color}) {
    final text = doc.headline.trim().isEmpty ? 'Your headline appears here' : doc.headline.trim();
    final size = _fit(text, 'Roboto', FontWeight.w800, w, lines, max, min, height: 1.08);
    return Text(text, maxLines: lines, overflow: TextOverflow.ellipsis, style: _t('Roboto', size, weight: FontWeight.w800, height: 1.08, spacing: -0.8, color: color));
  }

  Widget _summary(double w, {int lines = 3, double size = 22}) {
    if (doc.subhead.trim().isEmpty) return const SizedBox.shrink();
    return Padding(padding: const EdgeInsets.only(top: 10), child: Text(doc.subhead.trim(), maxLines: lines, overflow: TextOverflow.ellipsis, style: _t('Roboto', size, color: ink.withValues(alpha: 0.88), height: 1.35)));
  }

  // ── The picture and its frame ──
  Widget _image(double w, double h) {
    Widget img;
    if (photo != null) {
      img = Image.memory(photo!, fit: BoxFit.cover, width: w, height: h, gaplessPlayback: true);
      if (t.photoFilter == 'bw') img = ColorFiltered(colorFilter: const ColorFilter.matrix(_bw), child: img);
      if (t.photoFilter == 'sepia') img = ColorFiltered(colorFilter: const ColorFilter.matrix(_sepia), child: img);
    } else {
      img = Container(width: w, height: h, color: ink.withValues(alpha: 0.10), child: Center(child: Icon(Icons.add_a_photo_outlined, size: math.min(w, h) * 0.25, color: ink.withValues(alpha: 0.35))));
    }
    return SizedBox(
      width: w,
      height: h,
      child: Stack(fit: StackFit.expand, children: [
        img,
        if (t.vintage) DecoratedBox(decoration: BoxDecoration(gradient: RadialGradient(colors: [Colors.transparent, const Color(0xFF3B2412).withValues(alpha: 0.38)], radius: 0.95))),
      ]),
    );
  }

  /// The picture in this paper's frame, [w] x [h] in all.
  Widget _photo(double w, double h) {
    switch (t.frame) {
      case NewsFrame.double:
        return Container(width: w, height: h, padding: const EdgeInsets.all(5), decoration: BoxDecoration(border: Border.all(color: ink, width: 3)), child: Container(decoration: BoxDecoration(border: Border.all(color: ink, width: 1)), padding: const EdgeInsets.all(4), child: _image(w - 24, h - 24)));
      case NewsFrame.polaroid:
        return Transform.rotate(
          angle: -0.035,
          child: Container(
            width: w,
            height: h,
            padding: const EdgeInsets.fromLTRB(14, 14, 14, 0),
            decoration: BoxDecoration(color: const Color(0xFFFFFEF8), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(4, 8))]),
            child: Column(children: [
              _image(w - 28, h - 28 - 58),
              Expanded(child: Center(child: Text(doc.caption.trim().isEmpty ? 'NGMY' : doc.caption.trim(), maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: _t(t.bodyFont, 13.5, style: FontStyle.italic, color: const Color(0xFF3A2A1A), height: 1.1)))),
            ]),
          ),
        );
      case NewsFrame.rounded:
        return Container(width: w, height: h, decoration: BoxDecoration(borderRadius: BorderRadius.circular(30), border: Border.all(color: accent, width: 5)), child: ClipRRect(borderRadius: BorderRadius.circular(25), child: _image(w - 10, h - 10)));
      case NewsFrame.circle:
        final d = math.min(w, h);
        return SizedBox(width: w, height: h, child: Center(child: Container(width: d, height: d, padding: const EdgeInsets.all(5), decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: accent, width: 6), color: paperC), child: ClipOval(child: _image(d - 10, d - 10)))));
      case NewsFrame.tape:
        return Transform.rotate(
          angle: 0.025,
          child: SizedBox(
            width: w,
            height: h,
            child: Stack(clipBehavior: Clip.none, children: [
              Positioned.fill(child: Container(padding: const EdgeInsets.all(9), decoration: BoxDecoration(color: Colors.white, boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 10, offset: const Offset(3, 6))]), child: _image(w - 18, h - 18))),
              Positioned(left: -18, top: -10, child: Transform.rotate(angle: -0.6, child: Container(width: 90, height: 26, color: const Color(0xFFFDE68A).withValues(alpha: 0.85)))),
              Positioned(right: -18, bottom: -10, child: Transform.rotate(angle: -0.6, child: Container(width: 90, height: 26, color: const Color(0xFFFDE68A).withValues(alpha: 0.85)))),
            ]),
          ),
        );
      case NewsFrame.cutCorner:
        return SizedBox(width: w, height: h, child: CustomPaint(foregroundPainter: _CutCornerBorder(accent), child: ClipPath(clipper: const _CutCornerClipper(), child: _image(w, h))));
      case NewsFrame.film:
        return Container(
          width: w,
          height: h,
          color: const Color(0xFF0A0A0A),
          padding: const EdgeInsets.symmetric(vertical: 22, horizontal: 8),
          child: Stack(fit: StackFit.expand, children: [
            _image(w - 16, h - 44),
            for (final top in [true, false])
              Positioned(
                left: 0,
                right: 0,
                top: top ? -18 : null,
                bottom: top ? null : -18,
                child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [for (var i = 0; i < math.max(6, (w / 34).floor()); i++) Container(width: 14, height: 10, decoration: BoxDecoration(color: const Color(0xFFE5E7EB), borderRadius: BorderRadius.circular(2)))]),
              ),
          ]),
        );
      case NewsFrame.arch:
        return Container(width: w, height: h, decoration: BoxDecoration(borderRadius: BorderRadius.vertical(top: Radius.circular(w / 2), bottom: const Radius.circular(8)), border: Border.all(color: accent, width: 5)), child: ClipRRect(borderRadius: BorderRadius.vertical(top: Radius.circular(w / 2 - 5), bottom: const Radius.circular(3)), child: _image(w - 10, h - 10)));
      case NewsFrame.shadow:
        return Container(width: w, height: h, padding: const EdgeInsets.all(10), decoration: BoxDecoration(color: Colors.white, boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 22, offset: const Offset(0, 12))]), child: _image(w - 20, h - 20));
      case NewsFrame.torn:
        return SizedBox(width: w, height: h, child: ClipPath(clipper: const _TornClipper(), child: _image(w, h)));
      case NewsFrame.plain:
        return Container(width: w, height: h, padding: const EdgeInsets.all(4), decoration: BoxDecoration(border: Border.all(color: ink, width: 2.4)), child: _image(w - 14, h - 14));
    }
  }

  /// The caption under a picture (a polaroid carries its own).
  Widget _capFor(double w, {TextAlign align = TextAlign.center}) => t.frame == NewsFrame.polaroid ? const SizedBox.shrink() : _caption(w, align: align);

  // ── Sidebar / pull quote box ──
  bool get _sidebarOn => doc.sidebarText.trim().isNotEmpty || doc.pullQuote.trim().isNotEmpty;

  Widget _sidebar(double w, double h) {
    final title = doc.sidebarTitle.trim().isEmpty ? (doc.pullQuote.trim().isNotEmpty ? '' : 'NGMY NOTES') : doc.sidebarTitle.trim();
    final text = doc.sidebarText.trim();
    return Container(
      width: w,
      height: h,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(border: Border.all(color: ink, width: 1.6), color: accent.withValues(alpha: t.dark ? 0.14 : 0.07)),
      child: ClipRect(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          if (doc.pullQuote.trim().isNotEmpty && text.isEmpty)
            Expanded(child: Center(child: Text('“${doc.pullQuote.trim()}”', textAlign: TextAlign.center, maxLines: 7, overflow: TextOverflow.ellipsis, style: _t(t.headFont, 19, weight: FontWeight.w700, style: FontStyle.italic, height: 1.15))))
          else ...[
            if (title.isNotEmpty) Text(title.toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: _t('Roboto', 12.5, weight: FontWeight.w900, color: accent, spacing: 1.2)),
            if (title.isNotEmpty) const SizedBox(height: 4),
            Expanded(child: Text(text.isEmpty ? doc.pullQuote.trim() : text, maxLines: 9, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, 13, height: 1.25))),
          ],
        ]),
      ),
    );
  }

  List<String> get _paras => doc.body.isEmpty ? <String>['Your story appears here. Add a picture, then ask the AI to write it.'] : doc.body;

  /// Equal columns that fill the space they are given. The last one carries the sidebar.
  Widget _columns(int n, {bool sidebar = true, double gap = 22, double startSize = 18}) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth.isFinite ? box.maxWidth : _innerW;
      final h = box.maxHeight.isFinite ? box.maxHeight : 340.0;
      final colW = (w - gap * (n - 1)) / n;
      final sideH = sidebar && _sidebarOn ? math.min(150.0, h * 0.42) : 0.0;
      var size = startSize;
      var cols = <String>[];
      for (; size >= 10.5; size -= 0.5) {
        cols = ngmyFlowText(_paras, _t(t.bodyFont, size, height: 1.28), [for (var i = 0; i < n; i++) (colW, h - (i == n - 1 ? sideH : 0))]);
        if (_flowKeptEverything(_paras, cols)) break;
      }
      // Balance: columns of nearly the same length, not one full column and the rest empty.
      final lineH = size * 1.28;
      final all = TextPainter(text: TextSpan(text: _paras.join('\n\n'), style: _t(t.bodyFont, size, height: 1.28)), textDirection: TextDirection.ltr, textAlign: TextAlign.justify)..layout(maxWidth: colW);
      for (var extra = 1.0; extra < 40; extra += 1) {
        final double cap = math.min(h, all.height / n + lineH * extra);
        final tryCols = ngmyFlowText(_paras, _t(t.bodyFont, size, height: 1.28), [for (var i = 0; i < n; i++) (colW, math.min<double>(cap, h - (i == n - 1 ? sideH : 0)))]);
        if (_flowKeptEverything(_paras, tryCols)) {
          cols = tryCols;
          break;
        }
      }
      final style = _t(t.bodyFont, size, height: 1.28);
      return Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        for (var c = 0; c < n; c++) ...[
          if (c > 0) Padding(padding: EdgeInsets.symmetric(horizontal: gap / 2 - 0.5), child: Container(width: 1, color: ink.withValues(alpha: 0.5))),
          SizedBox(
            width: colW,
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Expanded(child: Text(cols.length > c ? cols[c] : '', textAlign: TextAlign.justify, style: style)),
              if (sideH > 0 && c == n - 1) _sidebar(colW, sideH - 12),
            ]),
          ),
        ],
      ]);
    });
  }

  /// A row of [colsLeft] text columns, the picture in the middle, and [colsRight] columns, then [below] columns under it.
  Widget _wrapRegion({required Widget middle, required double midW, required double topH, required int below, bool sidebar = true}) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth.isFinite ? box.maxWidth : _innerW;
      final h = box.maxHeight.isFinite ? box.maxHeight : 700.0;
      const gap = 22.0;
      final sideW = (w - midW - gap * 2) / 2;
      final belowW = (w - gap * (below - 1)) / below;
      final belowH = h - topH - 12;
      final sideH = sidebar && _sidebarOn ? math.min(140.0, belowH * 0.4) : 0.0;
      var size = 17.0;
      var parts = <String>[];
      for (; size >= 10.5; size -= 0.5) {
        parts = ngmyFlowText(_paras, _t(t.bodyFont, size, height: 1.28), [(sideW, topH), (sideW, topH), for (var i = 0; i < below; i++) (belowW, belowH - (i == below - 1 ? sideH : 0))]);
        if (_flowKeptEverything(_paras, parts)) break;
      }
      final style = _t(t.bodyFont, size, height: 1.28);
      Widget col(String s, double cw) => SizedBox(width: cw, child: Text(s, textAlign: TextAlign.justify, style: style));
      return Column(children: [
        SizedBox(height: topH, child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [col(parts[0], sideW), const SizedBox(width: gap), SizedBox(width: midW, child: middle), const SizedBox(width: gap), col(parts[1], sideW)])),
        const SizedBox(height: 12),
        Expanded(
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            for (var c = 0; c < below; c++) ...[
              if (c > 0) Padding(padding: const EdgeInsets.symmetric(horizontal: gap / 2 - 0.5), child: Container(width: 1, color: ink.withValues(alpha: 0.5))),
              SizedBox(width: belowW, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Expanded(child: Text(parts[2 + c], textAlign: TextAlign.justify, style: style)), if (sideH > 0 && c == below - 1) _sidebar(belowW, sideH - 12)])),
            ],
          ]),
        ),
      ]);
    });
  }

  // ── The ten page structures ──
  Widget _pageBody() {
    const w = _innerW;
    switch (t.layout) {
      case NewsLayout.classic:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w),
          const SizedBox(height: 14),
          _headline(w),
          _subhead(w),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 12),
          Center(child: _photo(w, 360)),
          _capFor(w),
          const SizedBox(height: 12),
          Expanded(child: _columns(3)),
        ]);
      case NewsLayout.sideBySide:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w),
          const SizedBox(height: 16),
          SizedBox(
            height: 350,
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              SizedBox(width: 440, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [_headline(440, align: TextAlign.left, lines: 3, max: 62, min: 26), _subhead(440, align: TextAlign.left, max: 20, lines: 2), const Spacer(), _byline(lines: false, color: accent)])),
              const SizedBox(width: 22),
              Column(children: [_photo(362, 310), _capFor(362)]),
            ]),
          ),
          const SizedBox(height: 10),
          _rule(thick: 2),
          const SizedBox(height: 12),
          Expanded(child: _columns(3)),
        ]);
      case NewsLayout.splash:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
            color: accent,
            child: Column(children: [
              _headline(w - 36, lines: 3, max: 92, min: 34, color: t.dark ? paperC : Colors.white),
              if (doc.subhead.trim().isNotEmpty) _subhead(w - 36, max: 22, color: t.dark ? paperC : Colors.white),
            ]),
          ),
          const SizedBox(height: 12),
          Stack(children: [
            Center(child: _photo(w, 390)),
            if (doc.caption.trim().isNotEmpty && t.frame != NewsFrame.polaroid)
              Positioned(left: 0, right: 0, bottom: 0, child: Container(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8), color: Colors.black.withValues(alpha: 0.65), child: Text(doc.caption.trim(), maxLines: 2, overflow: TextOverflow.ellipsis, style: _t('Roboto', 14, weight: FontWeight.w700, color: Colors.white, height: 1.15)))),
          ]),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 10),
          Expanded(child: _columns(2, startSize: 21)),
        ]);
      case NewsLayout.magazine:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 12),
          Stack(alignment: Alignment.bottomCenter, children: [
            _photo(w, 560),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: Container(
                padding: const EdgeInsets.fromLTRB(22, 60, 22, 22),
                decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.transparent, Colors.black.withValues(alpha: 0.85)])),
                child: _headline(w - 44, align: TextAlign.left, lines: 3, max: 74, min: 30, color: Colors.white),
              ),
            ),
          ]),
          _subhead(w, align: TextAlign.left),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 10),
          Expanded(child: _columns(3)),
        ]);
      case NewsLayout.wrap:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w),
          const SizedBox(height: 14),
          _headline(w),
          _subhead(w),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 12),
          Expanded(child: _wrapRegion(middle: Column(children: [_photo(300, 300), _capFor(300)]), midW: 300, topH: 360, below: 3)),
        ]);
      case NewsLayout.scrapbook:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 18),
          SizedBox(
            height: 400,
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              SizedBox(width: 440, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [_headline(440, align: TextAlign.left, lines: 3, max: 62, min: 26), _subhead(440, align: TextAlign.left, max: 20, lines: 2), const Spacer(), _byline(lines: false)])),
              const SizedBox(width: 20),
              Padding(padding: const EdgeInsets.only(top: 6), child: _photo(364, t.frame == NewsFrame.polaroid ? 400 : 330)),
            ]),
          ),
          const SizedBox(height: 14),
          Expanded(child: _columns(2, startSize: 21)),
        ]);
      case NewsLayout.circle:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w),
          const SizedBox(height: 12),
          _headline(w, lines: 2, max: 70),
          _subhead(w, max: 21),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 12),
          Expanded(child: _wrapRegion(middle: Center(child: _photo(340, 340)), midW: 340, topH: 350, below: 3)),
        ]);
      case NewsLayout.rail:
        const railW = 230.0;
        const mainW = w - railW - 24;
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 14),
          Expanded(
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              SizedBox(
                width: railW,
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  Container(padding: const EdgeInsets.all(12), color: accent, child: Text(ngmyNewsDateLine(date ?? DateTime.now()).toUpperCase(), textAlign: TextAlign.center, style: _t('Roboto', 13, weight: FontWeight.w900, color: t.dark ? paperC : Colors.white, spacing: 1.2))),
                  const SizedBox(height: 14),
                  if (doc.pullQuote.trim().isNotEmpty) Text('“${doc.pullQuote.trim()}”', style: _t(t.headFont, 24, weight: FontWeight.w700, style: FontStyle.italic, height: 1.15)),
                  const Spacer(),
                  if (_sidebarOn) _sidebar(railW, 250),
                ]),
              ),
              Container(width: 1.2, margin: const EdgeInsets.symmetric(horizontal: 11), color: ink),
              SizedBox(
                width: mainW,
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  _headline(mainW, align: TextAlign.left, lines: 3, max: 62, min: 28),
                  _subhead(mainW, align: TextAlign.left, max: 20),
                  const SizedBox(height: 8),
                  _byline(lines: false),
                  const SizedBox(height: 8),
                  Center(child: _photo(mainW, 330)),
                  _capFor(mainW),
                  const SizedBox(height: 10),
                  Expanded(child: _columns(2, sidebar: false, startSize: 17)),
                ]),
              ),
            ]),
          ),
        ]);
      case NewsLayout.banner:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.fromLTRB(18, 10, 18, 14),
            color: t.dark ? accent : ink,
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('★  SPECIAL REPORT  ★', style: _t('Roboto', 13, weight: FontWeight.w900, color: t.dark ? Colors.black : accent, spacing: 3)),
              const SizedBox(height: 6),
              _headline(w - 36, align: TextAlign.left, lines: 2, max: 72, min: 30, color: t.dark ? Colors.black : paperC),
            ]),
          ),
          _subhead(w, align: TextAlign.left),
          const SizedBox(height: 10),
          Center(child: _photo(w, 310)),
          _capFor(w),
          const SizedBox(height: 8),
          _byline(),
          const SizedBox(height: 10),
          Expanded(child: _columns(3)),
        ]);
      case NewsLayout.cardWorld:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 16),
          Stack(children: [
            _photo(w, 430),
            Positioned(left: 18, bottom: 18, child: _pill(doc.category, size: 17)),
          ]),
          const SizedBox(height: 18),
          _sansHeadline(w, lines: 3, max: 66),
          _summary(w),
          const SizedBox(height: 12),
          Container(height: 1, color: ink.withValues(alpha: 0.25)),
          const SizedBox(height: 12),
          _meta(),
          const SizedBox(height: 14),
          Expanded(child: _columns(2, startSize: 18)),
        ]);
      case NewsLayout.cardSplit:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 18),
          SizedBox(
            height: 500,
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              SizedBox(
                width: 410,
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  _pill(doc.category, color: accent.withValues(alpha: 0.14), textColor: accent, size: 15),
                  const SizedBox(height: 16),
                  _sansHeadline(410, lines: 4, max: 58, min: 28),
                  _summary(410, lines: 6, size: 20),
                  const Spacer(),
                ]),
              ),
              const SizedBox(width: 24),
              _photo(390, 500),
            ]),
          ),
          const SizedBox(height: 14),
          _meta(),
          const SizedBox(height: 16),
          Expanded(child: _columns(2, startSize: 18)),
        ]);
      case NewsLayout.cardBreaking:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 16),
          Stack(children: [
            _photo(w, 420),
            Positioned(
              left: 0,
              bottom: 22,
              child: Transform(
                transform: Matrix4.skewX(-0.25),
                child: Container(
                  padding: const EdgeInsets.fromLTRB(26, 10, 60, 10),
                  decoration: BoxDecoration(color: accent, boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 10)]),
                  child: Text('BREAKING NEWS', style: _t('Roboto', 30, weight: FontWeight.w900, style: FontStyle.italic, color: Colors.white, height: 1.0)),
                ),
              ),
            ),
          ]),
          const SizedBox(height: 18),
          _sansHeadline(w, lines: 3, max: 62),
          _summary(w),
          const SizedBox(height: 12),
          Container(height: 1, color: ink.withValues(alpha: 0.25)),
          const SizedBox(height: 12),
          _meta(right: Icons.send_rounded),
          const SizedBox(height: 14),
          Expanded(child: _columns(2, startSize: 18)),
        ]);
      case NewsLayout.cardFeature:
        final related = doc.sidebarTitle.trim().isNotEmpty ? doc.sidebarTitle.trim() : (doc.pullQuote.trim().isNotEmpty ? doc.pullQuote.trim() : 'More from NGMY News');
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 16),
          Stack(children: [
            _photo(w, 380),
            Positioned(left: 16, top: 16, child: _pill(doc.category, color: ink.withValues(alpha: 0.85), textColor: paperC, size: 15)),
          ]),
          const SizedBox(height: 16),
          _sansHeadline(w, lines: 2, max: 60),
          _summary(w, lines: 2),
          const SizedBox(height: 10),
          _meta(),
          const SizedBox(height: 14),
          Expanded(child: _columns(2, startSize: 18, sidebar: false)),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(border: Border.all(color: ink.withValues(alpha: 0.18)), borderRadius: BorderRadius.circular(18), color: accent.withValues(alpha: 0.05)),
            child: Row(children: [
              ClipRRect(borderRadius: BorderRadius.circular(14), child: _image(150, 104)),
              const SizedBox(width: 16),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                  _pill('RELATED', color: accent.withValues(alpha: 0.14), textColor: accent, size: 12),
                  const SizedBox(height: 8),
                  Text(related, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t('Roboto', 19, weight: FontWeight.w800, height: 1.15)),
                ]),
              ),
              Icon(Icons.chevron_right_rounded, size: 30, color: ink.withValues(alpha: 0.6)),
            ]),
          ),
        ]);
      case NewsLayout.minimal:
        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _masthead(w, compact: true),
          const SizedBox(height: 18),
          _headline(w, align: TextAlign.left, lines: 3, max: 62, min: 30),
          _subhead(w, align: TextAlign.left, max: 22, lines: 2),
          const SizedBox(height: 10),
          _byline(lines: false),
          const SizedBox(height: 10),
          Center(child: _photo(w, 330)),
          _capFor(w, align: TextAlign.left),
          const SizedBox(height: 16),
          Expanded(child: _columns(2, gap: 40, startSize: 21)),
        ]);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: kNewsPageW,
      height: kNewsPageH,
      child: ClipRect(
        child: Stack(children: [
          Positioned.fill(child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [paperC, Color(t.paper2)])))),
          if (t.vintage) Positioned.fill(child: CustomPaint(painter: _AgedPaperPainter(ink))),
          Padding(
            padding: const EdgeInsets.fromLTRB(_pad, 30, _pad, 20),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Expanded(child: _pageBody()),
              const SizedBox(height: 8),
              Container(height: 1.4, color: ink),
              const SizedBox(height: 5),
              Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                Text('PRINTED WITH NGMY NEWS', style: _t('Roboto', 11, weight: FontWeight.w800, spacing: 1.4)),
                Text('CREATED BY NGMY.ORG', style: _t('Roboto', 11, weight: FontWeight.w900, spacing: 1.4, color: accent)),
              ]),
            ]),
          ),
          // Watermark 1: a big slanted NGMY across the page.
          Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _SlantWatermarkPainter(ink.withValues(alpha: t.dark ? 0.07 : 0.06))))),
          // Watermark 2: the NGMY seal, bottom right.
          Positioned(
            right: 40,
            bottom: 52,
            child: IgnorePointer(
              child: Opacity(
                opacity: 0.6,
                child: Container(
                  padding: const EdgeInsets.fromLTRB(8, 6, 12, 6),
                  decoration: BoxDecoration(color: paperC.withValues(alpha: 0.75), border: Border.all(color: ink.withValues(alpha: 0.5), width: 1.2), borderRadius: BorderRadius.circular(40)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    if (logo != null) ClipOval(child: Image.memory(logo!, width: 30, height: 30, fit: BoxFit.cover)) else Icon(Icons.public_rounded, size: 28, color: ink),
                    const SizedBox(width: 8),
                    Text('NGMY.ORG', style: _t('Roboto', 15, weight: FontWeight.w900, spacing: 1.6, height: 1.0)),
                  ]),
                ),
              ),
            ),
          ),
        ]),
      ),
    );
  }
}

class _CutCornerClipper extends CustomClipper<Path> {
  const _CutCornerClipper();
  static Path of(Size s, [double c = 46]) => Path()
    ..moveTo(c, 0)
    ..lineTo(s.width, 0)
    ..lineTo(s.width, s.height - c)
    ..lineTo(s.width - c, s.height)
    ..lineTo(0, s.height)
    ..lineTo(0, c)
    ..close();
  @override
  Path getClip(Size size) => of(size);
  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

class _CutCornerBorder extends CustomPainter {
  const _CutCornerBorder(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size size) => canvas.drawPath(_CutCornerClipper.of(size), Paint()..color = color..style = PaintingStyle.stroke..strokeWidth = 6);
  @override
  bool shouldRepaint(covariant _CutCornerBorder old) => old.color != color;
}

/// A torn paper edge: jagged top and bottom.
class _TornClipper extends CustomClipper<Path> {
  const _TornClipper();
  @override
  Path getClip(Size s) {
    final r = math.Random(3);
    final p = Path()..moveTo(0, 8);
    for (var x = 0.0; x < s.width; x += 14) {
      p.lineTo(x, r.nextDouble() * 14);
    }
    p.lineTo(s.width, 8);
    p.lineTo(s.width, s.height - 8);
    for (var x = s.width; x > 0; x -= 14) {
      p.lineTo(x, s.height - r.nextDouble() * 14);
    }
    p.lineTo(0, s.height - 8);
    return p..close();
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

/// Old paper: speckles, a fold line and darker, burnt edges.
class _AgedPaperPainter extends CustomPainter {
  const _AgedPaperPainter(this.ink);
  final Color ink;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(7);
    final p = Paint();
    for (var i = 0; i < 700; i++) {
      p.color = ink.withValues(alpha: 0.03 + r.nextDouble() * 0.07);
      canvas.drawCircle(Offset(r.nextDouble() * size.width, r.nextDouble() * size.height), 0.4 + r.nextDouble() * 1.4, p);
    }
    for (var i = 0; i < 5; i++) {
      final c = Offset(r.nextDouble() * size.width, r.nextDouble() * size.height);
      final rad = 50 + r.nextDouble() * 90;
      p.shader = RadialGradient(colors: [const Color(0xFF8B5A2B).withValues(alpha: 0.13), Colors.transparent]).createShader(Rect.fromCircle(center: c, radius: rad));
      canvas.drawCircle(c, rad, p);
    }
    p.shader = null;
  }

  @override
  bool shouldRepaint(covariant _AgedPaperPainter old) => false;
}

class _SlantWatermarkPainter extends CustomPainter {
  const _SlantWatermarkPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final tp = TextPainter(
      text: TextSpan(text: 'NGMY', style: TextStyle(fontFamily: 'Roboto', color: color, fontSize: size.width * 0.34, fontWeight: FontWeight.w900, letterSpacing: 10)),
      textDirection: TextDirection.ltr,
    )..layout();
    canvas.save();
    canvas.translate(size.width / 2, size.height * 0.52);
    canvas.rotate(-0.5);
    tp.paint(canvas, Offset(-tp.width / 2, -tp.height / 2));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _SlantWatermarkPainter old) => old.color != color;
}
