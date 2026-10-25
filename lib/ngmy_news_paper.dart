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
  });

  final String paper;
  final String headline;
  final String subhead;
  final String byline;
  final String caption;
  final List<String> body;
  final String pullQuote;
  final String sidebarTitle;
  final String sidebarText;

  bool get isEmpty => headline.trim().isEmpty && body.isEmpty;

  NgmyNewsDoc copyWith({String? paper, String? headline, String? subhead, String? byline, String? caption, List<String>? body, String? pullQuote, String? sidebarTitle, String? sidebarText}) => NgmyNewsDoc(
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
    );
  }

  factory NgmyNewsDoc.fromJson(Map<String, dynamic> j) => const NgmyNewsDoc().applyJson(j);
}

/// How a newspaper looks.
class NgmyNewsTemplate {
  const NgmyNewsTemplate({
    required this.id,
    required this.name,
    required this.group,
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
    this.columns = 3,
    this.dark = false,
  });

  final String id;
  final String name;
  final String group;
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
  final int columns;
  final bool dark;
}

const String kNewsBlackletter = 'NgmyBlackletter';
const String kNewsOldStandard = 'NgmyOldStandard';
const String kNewsAbril = 'NgmyAbril';

const List<NgmyNewsTemplate> kNgmyNewsTemplates = [
  NgmyNewsTemplate(
    id: 'gazette', name: 'Old Gazette', group: 'Old', paper: 0xFFEFDDB0, paper2: 0xFFD9BE86, ink: 0xFF2A1B0E, accent: 0xFF7A1F12,
    mast: 'blackletter', mastFont: kNewsBlackletter, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, vintage: true, photoFilter: 'sepia',
    voice: 'an old-fashioned town gazette from the 1920s: formal, dignified, a little poetic, with a bold dramatic headline',
  ),
  NgmyNewsTemplate(
    id: 'chronicle', name: 'Sepia Chronicle', group: 'Old', paper: 0xFFE8D2A4, paper2: 0xFFC9A66B, ink: 0xFF3B2412, accent: 0xFF5B3A1A,
    mast: 'centered', mastFont: kNewsOldStandard, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, vintage: true, photoFilter: 'sepia',
    voice: 'a classic sepia chronicle from long ago: warm, storytelling, with a grand headline',
  ),
  NgmyNewsTemplate(
    id: 'times', name: 'Classic Times', group: 'Old', paper: 0xFFF3EEE0, paper2: 0xFFE6DFCB, ink: 0xFF16130E, accent: 0xFF16130E,
    mast: 'blackletter', mastFont: kNewsBlackletter, headFont: kNewsOldStandard, bodyFont: kNewsOldStandard, vintage: false, photoFilter: 'bw',
    voice: 'a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead',
  ),
  NgmyNewsTemplate(
    id: 'daily', name: 'The Daily', group: 'Modern', paper: 0xFFFFFFFF, paper2: 0xFFF4F4F2, ink: 0xFF111111, accent: 0xFFD62828,
    mast: 'bar', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, photoFilter: 'none',
    voice: 'a modern daily newspaper: crisp, clear and energetic, with a punchy headline',
  ),
  NgmyNewsTemplate(
    id: 'tabloid', name: 'Big Tabloid', group: 'Modern', paper: 0xFFFFFFFF, paper2: 0xFFFFF7E0, ink: 0xFF111111, accent: 0xFFE11D48,
    mast: 'bar', mastFont: 'Roboto', headFont: kNewsAbril, bodyFont: 'Roboto', photoFilter: 'none', columns: 2,
    voice: 'a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)',
  ),
  NgmyNewsTemplate(
    id: 'modern', name: 'Modern Digest', group: 'Modern', paper: 0xFFF8FAFC, paper2: 0xFFE2E8F0, ink: 0xFF0F172A, accent: 0xFF0D9488,
    mast: 'split', mastFont: 'Roboto', headFont: 'Roboto', bodyFont: 'Roboto', photoFilter: 'none', columns: 3,
    voice: 'a clean modern digest: simple words, short paragraphs, friendly and clear',
  ),
  NgmyNewsTemplate(
    id: 'midnight', name: 'Midnight Edition', group: 'Modern', paper: 0xFF111827, paper2: 0xFF0B1020, ink: 0xFFF1F5F9, accent: 0xFFFACC15,
    mast: 'centered', mastFont: kNewsOldStandard, headFont: kNewsAbril, bodyFont: kNewsOldStandard, photoFilter: 'none', dark: true,
    voice: 'a dramatic late-night edition: confident, cinematic and polished',
  ),
  NgmyNewsTemplate(
    id: 'herald', name: 'NGMY Herald', group: 'Modern', paper: 0xFFFFFFFF, paper2: 0xFFF5F3FF, ink: 0xFF1E1B4B, accent: 0xFF7C3AED,
    mast: 'split', mastFont: kNewsAbril, headFont: kNewsAbril, bodyFont: kNewsOldStandard, photoFilter: 'none',
    voice: 'the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple',
  ),
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

  TextStyle _t(String family, double size, {FontWeight weight = FontWeight.w400, FontStyle style = FontStyle.normal, Color? color, double height = 1.25, double spacing = 0}) =>
      TextStyle(fontFamily: family, fontSize: size, fontWeight: weight, fontStyle: style, color: color ?? Color(template.ink), height: height, letterSpacing: spacing);

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
    final c = color ?? Color(template.ink);
    return Column(children: [
      Container(height: thick, color: c),
      if (double_) ...[SizedBox(height: gap), Container(height: 0.8, color: c)],
    ]);
  }

  Widget _masthead(double w) {
    final t = template;
    final d = date ?? DateTime.now();
    final ink = Color(t.ink);
    final accent = Color(t.accent);
    final paper = doc.paper.trim().isEmpty ? 'The NGMY Times' : doc.paper.trim();
    final dayOfYear = d.difference(DateTime(d.year)).inDays + 1;
    final vol = 'VOL. ${_roman(math.max(1, d.year - 2021))}  ·  NO. ${dayOfYear + 3000}';
    final info = _t('Roboto', 12, weight: FontWeight.w700, color: ink, spacing: 1.2);
    final size = t.mast == 'blackletter'
        ? _fit(paper, t.mastFont, FontWeight.w700, w, 1, 96, 40, height: 1.0)
        : _fit(paper.toUpperCase(), t.mastFont, FontWeight.w700, w, 1, t.mast == 'bar' ? 76 : 72, 32, height: 1.0);
    switch (t.mast) {
      case 'bar':
        return Column(children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
            color: accent,
            child: Row(children: [
              Expanded(child: Text(paper.toUpperCase(), maxLines: 1, overflow: TextOverflow.clip, style: _t(t.mastFont, size * 0.84, weight: FontWeight.w700, color: Colors.white, height: 1.0, spacing: 1))),
            ]),
          ),
          const SizedBox(height: 8),
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            Text(ngmyNewsDateLine(d).toUpperCase(), style: info),
            Text(vol, style: info),
            Text('FREE · NGMY.ORG', style: info),
          ]),
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
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            Text(ngmyNewsDateLine(d), style: _t('Roboto', 13, weight: FontWeight.w700, color: accent, spacing: 0.6)),
            Text(vol, style: info),
          ]),
          const SizedBox(height: 8),
          _rule(thick: 3, color: accent),
        ]);
      case 'blackletter':
        return Column(children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            Text(vol, style: info),
            Text('PRICE: FREE · NGMY.ORG', style: info),
          ]),
          const SizedBox(height: 4),
          _rule(thick: 1.4, double_: true),
          const SizedBox(height: 10),
          Text(paper, maxLines: 1, textAlign: TextAlign.center, style: _t(t.mastFont, size, weight: FontWeight.w700, height: 1.0)),
          const SizedBox(height: 8),
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

  Widget _photoBox(double w, double h) {
    final t = template;
    final accent = Color(t.accent);
    Widget img;
    if (photo != null) {
      img = Image.memory(photo!, fit: BoxFit.cover, width: w, height: h, gaplessPlayback: true);
      if (t.photoFilter == 'bw') img = ColorFiltered(colorFilter: const ColorFilter.matrix(_bw), child: img);
      if (t.photoFilter == 'sepia') img = ColorFiltered(colorFilter: const ColorFilter.matrix(_sepia), child: img);
    } else {
      img = Container(
        width: w,
        height: h,
        color: Color(t.ink).withValues(alpha: 0.08),
        child: Center(child: Icon(Icons.add_a_photo_outlined, size: 64, color: Color(t.ink).withValues(alpha: 0.35))),
      );
    }
    return Container(
      width: w,
      height: h,
      decoration: BoxDecoration(border: Border.all(color: Color(t.ink), width: 2.4)),
      padding: const EdgeInsets.all(4),
      child: ClipRect(
        child: Stack(fit: StackFit.expand, children: [
          img,
          if (t.vintage) DecoratedBox(decoration: BoxDecoration(gradient: RadialGradient(colors: [Colors.transparent, const Color(0xFF3B2412).withValues(alpha: 0.38)], radius: 0.95))),
          Positioned(left: 0, top: 0, child: Container(width: 8, height: h, color: accent.withValues(alpha: 0))),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final t = template;
    final ink = Color(t.ink);
    final accent = Color(t.accent);
    const pad = 38.0;
    const innerW = kNewsPageW - pad * 2;
    final head = doc.headline.trim().isEmpty ? 'YOUR HEADLINE APPEARS HERE' : doc.headline.trim();
    final headCaps = t.headFont == kNewsAbril || t.id == 'gazette' || t.id == 'chronicle';
    final headText = headCaps && t.id != 'times' ? head.toUpperCase() : head;
    final headSize = _fit(headText, t.headFont, FontWeight.w700, innerW, 2, 78, 34, height: 1.02);
    final subSize = _fit(doc.subhead, t.bodyFont, FontWeight.w400, innerW, 2, 24, 16, height: 1.2, style: FontStyle.italic);
    final photoH = photo == null ? 330.0 : 360.0;

    // Body column sizes. A sidebar or pull quote takes the bottom of the last column.
    final cols = t.columns;
    const gap = 22.0;
    final colW = (innerW - gap * (cols - 1)) / cols;
    const colH = 335.0;
    var bodySize = 18.0;
    List<String> columns = const [];
    final sidebarOn = doc.sidebarText.trim().isNotEmpty || doc.pullQuote.trim().isNotEmpty;
    final sideH = sidebarOn ? 150.0 : 0.0;
    final paras = doc.body.isEmpty ? <String>['Your story appears here. Add a picture, then ask the AI to write it.'] : doc.body;
    final fullLen = paras.join(' ').length;
    for (; bodySize >= 10.5; bodySize -= 0.5) {
      final style = _t(t.bodyFont, bodySize, height: 1.28);
      columns = ngmySplitIntoColumns(paras, style, colW, colH, cols, lastColumnShorterBy: sideH);
      if (columns.join(' ').replaceAll(RegExp(r'\s+'), ' ').length >= fullLen - cols * 2) break;
    }
    final bodyStyle = _t(t.bodyFont, bodySize, height: 1.28);

    Widget sidebar() {
      final title = doc.sidebarTitle.trim().isEmpty ? (doc.pullQuote.trim().isNotEmpty ? '' : 'NGMY NOTES') : doc.sidebarTitle.trim();
      final text = doc.sidebarText.trim();
      return Container(
        width: colW,
        height: sideH - 12,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(border: Border.all(color: ink, width: 1.6), color: accent.withValues(alpha: t.dark ? 0.12 : 0.07)),
        child: ClipRect(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            if (doc.pullQuote.trim().isNotEmpty && text.isEmpty)
              Expanded(child: Center(child: Text('“${doc.pullQuote.trim()}”', textAlign: TextAlign.center, maxLines: 6, overflow: TextOverflow.ellipsis, style: _t(t.headFont, 19, weight: FontWeight.w700, style: FontStyle.italic, color: ink, height: 1.15))))
            else ...[
              if (title.isNotEmpty) Text(title.toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: _t('Roboto', 12.5, weight: FontWeight.w900, color: accent, spacing: 1.2)),
              if (title.isNotEmpty) const SizedBox(height: 4),
              Expanded(child: Text(text.isEmpty ? doc.pullQuote.trim() : text, maxLines: 8, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, 13, height: 1.25))),
            ],
          ]),
        ),
      );
    }

    return SizedBox(
      width: kNewsPageW,
      height: kNewsPageH,
      child: ClipRect(
        child: Stack(children: [
          // The paper.
          Positioned.fill(child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(t.paper), Color(t.paper2)])))),
          if (t.vintage) Positioned.fill(child: CustomPaint(painter: _AgedPaperPainter(Color(t.ink)))),
          Padding(
            padding: const EdgeInsets.fromLTRB(pad, 30, pad, 20),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _masthead(innerW),
              const SizedBox(height: 14),
              Text(headText, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t(t.headFont, headSize, weight: FontWeight.w700, height: 1.02)),
              if (doc.subhead.trim().isNotEmpty) ...[
                const SizedBox(height: 8),
                Text(doc.subhead.trim(), textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, subSize, style: FontStyle.italic, height: 1.2)),
              ],
              const SizedBox(height: 8),
              Row(children: [
                Expanded(child: Container(height: 1.2, color: ink)),
                Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Text(doc.byline.trim().toUpperCase(), style: _t('Roboto', 12, weight: FontWeight.w800, color: accent, spacing: 1.4))),
                Expanded(child: Container(height: 1.2, color: ink)),
              ]),
              const SizedBox(height: 12),
              _photoBox(innerW, photoH),
              if (doc.caption.trim().isNotEmpty) ...[
                const SizedBox(height: 6),
                Text(doc.caption.trim(), textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: _t(t.bodyFont, 13.5, style: FontStyle.italic, height: 1.2)),
              ],
              const SizedBox(height: 12),
              SizedBox(
                height: colH,
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  for (var c = 0; c < cols; c++) ...[
                    if (c > 0)
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: gap / 2 - 0.5),
                        child: Container(width: 1, color: ink.withValues(alpha: 0.5)),
                      ),
                    SizedBox(
                      width: colW - (c > 0 ? 0 : 0),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Expanded(child: Text(columns.length > c ? columns[c] : '', textAlign: TextAlign.justify, style: bodyStyle)),
                        if (sidebarOn && c == cols - 1) sidebar(),
                      ]),
                    ),
                  ],
                ]),
              ),
              const Spacer(),
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
                opacity: 0.55,
                child: Container(
                  padding: const EdgeInsets.fromLTRB(8, 6, 12, 6),
                  decoration: BoxDecoration(color: Color(t.paper).withValues(alpha: 0.7), border: Border.all(color: ink.withValues(alpha: 0.5), width: 1.2), borderRadius: BorderRadius.circular(40)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    if (logo != null) ClipOval(child: Image.memory(logo!, width: 30, height: 30, fit: BoxFit.cover)) else Icon(Icons.public_rounded, size: 28, color: ink),
                    const SizedBox(width: 8),
                    Text('NGMY.ORG', style: _t('Roboto', 15, weight: FontWeight.w900, spacing: 1.6, color: ink, height: 1.0)),
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
    // The fold across the middle.
    p.color = const Color(0xFF3B2412).withValues(alpha: 0.10);
    canvas.drawRect(Rect.fromLTWH(0, size.height / 2 - 1.5, size.width, 3), p);
    // Burnt edges.
    final rect = Offset.zero & size;
    canvas.drawRect(rect, Paint()..shader = RadialGradient(radius: 0.85, colors: [Colors.transparent, const Color(0xFF4A2C0F).withValues(alpha: 0.30)], stops: const [0.62, 1.0]).createShader(rect));
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
