import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_print_booklet.dart';

/// A ready-made front cover. Users can change its colours, picture, title position and
/// lettering; the AI picks one by [id].
class NgmyCoverTemplate {
  const NgmyCoverTemplate({
    required this.id,
    required this.name,
    required this.bg1,
    required this.bg2,
    required this.accent,
    required this.ink,
    this.position = 'middle',
    this.font = 'classic',
    this.photoSlot = 'small',
    this.uppercase = false,
  });
  final String id;
  final String name;
  final int bg1;
  final int bg2;
  final int accent;
  final int ink;
  final String position;
  final String font;

  /// 'full' (picture fills the cover), 'circle', 'top' (upper half), 'small' (small round above the title).
  final String photoSlot;
  final bool uppercase;
}

const kNgmyCoverTemplates = <NgmyCoverTemplate>[
  NgmyCoverTemplate(id: 'royal', name: 'Royal', bg1: 0xFF0F1B3D, bg2: 0xFF1E3A8A, accent: 0xFFD4AF37, ink: 0xFFFFF8E7, uppercase: true),
  NgmyCoverTemplate(id: 'sunset', name: 'Sunset', bg1: 0xFFFF7A45, bg2: 0xFFE0457B, accent: 0xFFFFD166, ink: 0xFFFFFFFF, position: 'bottom', font: 'display'),
  NgmyCoverTemplate(id: 'photo', name: 'Big Photo', bg1: 0xFF111827, bg2: 0xFF374151, accent: 0xFFF59E0B, ink: 0xFFFFFFFF, position: 'bottom', font: 'display', photoSlot: 'full'),
  NgmyCoverTemplate(id: 'portrait', name: 'Portrait', bg1: 0xFFFDF6EC, bg2: 0xFFF3E3CC, accent: 0xFFB45309, ink: 0xFF3D2E1F, photoSlot: 'circle'),
  NgmyCoverTemplate(id: 'band', name: 'Bold Band', bg1: 0xFF0E7490, bg2: 0xFF155E75, accent: 0xFFFDE68A, ink: 0xFF0B1F2A, font: 'display', uppercase: true),
  NgmyCoverTemplate(id: 'split', name: 'Split', bg1: 0xFFFFFFFF, bg2: 0xFF7C3AED, accent: 0xFF7C3AED, ink: 0xFF1F2937, position: 'bottom', font: 'modern', photoSlot: 'top'),
  NgmyCoverTemplate(id: 'story', name: 'Storybook', bg1: 0xFF7DD3FC, bg2: 0xFFE0F2FE, accent: 0xFF22C55E, ink: 0xFF1E3A8A, position: 'top', font: 'display'),
  NgmyCoverTemplate(id: 'geo', name: 'Geometric', bg1: 0xFF111827, bg2: 0xFF1F2937, accent: 0xFF10B981, ink: 0xFFFFFFFF, font: 'modern', uppercase: true),
  NgmyCoverTemplate(id: 'vintage', name: 'Vintage', bg1: 0xFFF5EBDD, bg2: 0xFFEADBC4, accent: 0xFF8B4513, ink: 0xFF4A3424),
  NgmyCoverTemplate(id: 'starry', name: 'Starry Night', bg1: 0xFF0B1026, bg2: 0xFF312E81, accent: 0xFFFDE68A, ink: 0xFFFFFFFF, font: 'classic'),
];

NgmyCoverTemplate ngmyCoverTemplate(String id) =>
    kNgmyCoverTemplates.firstWhere((t) => t.id == id, orElse: () => kNgmyCoverTemplates.first);

/// The colours a cover really uses (template defaults + the user's changes).
({Color bg1, Color bg2, Color accent, Color ink}) ngmyCoverColors(NgmyBookCover c) {
  final t = ngmyCoverTemplate(c.template);
  return (
    bg1: Color(c.bg1 ?? t.bg1),
    bg2: Color(c.bg2 ?? t.bg2),
    accent: Color(c.accent ?? t.accent),
    ink: Color(c.ink ?? t.ink),
  );
}

/// The front cover, drawn at book-page size in points ([width] × [height]).
class NgmyBookCoverView extends StatelessWidget {
  const NgmyBookCoverView({super.key, required this.doc, this.width = 396, this.height = 612});
  final NgmyBookDoc doc;
  final double width;
  final double height;

  @override
  Widget build(BuildContext context) {
    final cover = doc.cover;
    final t = ngmyCoverTemplate(cover.template);
    final c = ngmyCoverColors(cover);
    final photo = ngmyDataUriBytes(cover.photo);
    final position = cover.position.isEmpty ? t.position : cover.position;
    final font = cover.font.isEmpty ? t.font : cover.font;
    final rawTitle = doc.title.trim().isEmpty ? 'Untitled Book' : doc.title.trim();
    final title = t.uppercase ? rawTitle.toUpperCase() : rawTitle;
    final titleSize = title.length > 40 ? 26.0 : title.length > 22 ? 32.0 : 40.0;

    TextStyle titleStyle(Color color) => switch (font) {
          'modern' => TextStyle(color: color, fontSize: titleSize, fontWeight: FontWeight.w800, height: 1.1, letterSpacing: t.uppercase ? 1.5 : 0),
          'display' => TextStyle(color: color, fontSize: titleSize + 4, fontWeight: FontWeight.w900, height: 1.02, letterSpacing: -0.5),
          _ => TextStyle(
              color: color, fontFamily: 'Georgia', fontSize: titleSize, fontWeight: FontWeight.w700, height: 1.15, letterSpacing: t.uppercase ? 2 : 0),
        };

    // The picture's place depends on the template.
    final slot = photo == null ? 'none' : t.photoSlot;
    final onPhoto = slot == 'full';
    final textColor = onPhoto ? Colors.white : c.ink;

    Widget smallPhoto(double d) => Container(
          width: d,
          height: d,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            border: Border.all(color: c.accent, width: 4),
            image: DecorationImage(image: MemoryImage(photo!), fit: BoxFit.cover),
          ),
        );

    final block = Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: t.id == 'split' || onPhoto ? CrossAxisAlignment.start : CrossAxisAlignment.center,
      children: [
        if (slot == 'circle') ...[smallPhoto(math.min(width * 0.62, 240)), const SizedBox(height: 26)],
        if (slot == 'small') ...[smallPhoto(118), const SizedBox(height: 22)],
        if (t.id == 'royal' || t.id == 'vintage') ...[_Ornament(color: c.accent), const SizedBox(height: 16)],
        Text(title, textAlign: t.id == 'split' || onPhoto ? TextAlign.left : TextAlign.center, style: titleStyle(textColor)),
        const SizedBox(height: 14),
        Container(width: 64, height: 3, decoration: BoxDecoration(color: c.accent, borderRadius: BorderRadius.circular(3))),
        if (doc.subtitle.trim().isNotEmpty) ...[
          const SizedBox(height: 14),
          Text(doc.subtitle.trim(),
              textAlign: t.id == 'split' || onPhoto ? TextAlign.left : TextAlign.center,
              style: TextStyle(color: textColor.withValues(alpha: 0.88), fontSize: 15, fontWeight: FontWeight.w500, height: 1.3)),
        ],
        if (doc.author.trim().isNotEmpty) ...[
          const SizedBox(height: 22),
          Text(doc.author.trim().toUpperCase(),
              style: TextStyle(color: textColor.withValues(alpha: 0.85), fontSize: 11.5, letterSpacing: 2.4, fontWeight: FontWeight.w700)),
        ],
      ],
    );

    final align = switch (position) {
      'top' => Alignment.topCenter,
      'bottom' => Alignment.bottomCenter,
      _ => Alignment.center,
    };

    Widget content = Padding(
      padding: EdgeInsets.fromLTRB(46, slot == 'top' ? height * 0.52 + 20 : 60, 46, 64),
      child: Align(alignment: t.id == 'split' ? Alignment.bottomLeft : (onPhoto ? Alignment.bottomLeft : align), child: block),
    );
    if (t.id == 'band') {
      content = Align(
        alignment: align,
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: position == 'middle' ? 0 : 70),
          child: Container(
            width: double.infinity,
            color: c.accent,
            padding: const EdgeInsets.symmetric(horizontal: 34, vertical: 30),
            child: block,
          ),
        ),
      );
    }

    return SizedBox(
      width: width,
      height: height,
      child: Material(
        type: MaterialType.transparency,
        child: ClipRect(
          child: Stack(fit: StackFit.expand, children: [
            _CoverBackground(template: t, colors: c, photo: photo, slot: slot, height: height),
            content,
          ]),
        ),
      ),
    );
  }
}

class _CoverBackground extends StatelessWidget {
  const _CoverBackground({required this.template, required this.colors, required this.photo, required this.slot, required this.height});
  final NgmyCoverTemplate template;
  final ({Color bg1, Color bg2, Color accent, Color ink}) colors;
  final Uint8List? photo;
  final String slot;
  final double height;

  @override
  Widget build(BuildContext context) {
    final c = colors;
    final gradient = BoxDecoration(
      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c.bg1, c.bg2]),
    );
    final layers = <Widget>[template.id == 'split' ? ColoredBox(color: c.bg1) : Container(decoration: gradient)];
    if (slot == 'full') {
      layers
        ..add(Image.memory(photo!, fit: BoxFit.cover, gaplessPlayback: true))
        ..add(const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0x00000000), Color(0x22000000), Color(0xCC000000)],
              stops: [0, 0.45, 1],
            ),
          ),
        ));
    } else if (slot == 'top') {
      layers.add(Positioned(
        left: 0,
        right: 0,
        top: 0,
        height: height * 0.52,
        child: Image.memory(photo!, fit: BoxFit.cover, gaplessPlayback: true),
      ));
    }
    layers.add(CustomPaint(painter: _CoverPainter(template.id, c, hasTopPhoto: slot == 'top')));
    return Stack(fit: StackFit.expand, children: layers);
  }
}

class _CoverPainter extends CustomPainter {
  _CoverPainter(this.id, this.c, {this.hasTopPhoto = false});
  final String id;
  final ({Color bg1, Color bg2, Color accent, Color ink}) c;
  final bool hasTopPhoto;

  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()..isAntiAlias = true;
    switch (id) {
      case 'royal':
        p
          ..style = PaintingStyle.stroke
          ..color = c.accent
          ..strokeWidth = 2.4;
        canvas.drawRect(Rect.fromLTWH(18, 18, s.width - 36, s.height - 36), p);
        p.strokeWidth = 0.9;
        canvas.drawRect(Rect.fromLTWH(26, 26, s.width - 52, s.height - 52), p);
        p.style = PaintingStyle.fill;
        for (final o in [const Offset(26, 26), Offset(s.width - 26, 26), Offset(26, s.height - 26), Offset(s.width - 26, s.height - 26)]) {
          canvas.save();
          canvas.translate(o.dx, o.dy);
          canvas.rotate(math.pi / 4);
          canvas.drawRect(const Rect.fromLTWH(-5, -5, 10, 10), p);
          canvas.restore();
        }
      case 'sunset':
        final center = Offset(s.width / 2, s.height * 0.38);
        final r = s.width * 0.36;
        p.shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c.accent, c.accent.withValues(alpha: 0.75)])
            .createShader(Rect.fromCircle(center: center, radius: r));
        canvas.drawCircle(center, r, p);
        p.shader = null;
        p.color = c.bg2;
        for (var i = 0; i < 6; i++) {
          final y = center.dy + r * 0.15 + i * (r * 0.16);
          canvas.drawRect(Rect.fromLTWH(0, y, s.width, 3.0 + i * 1.6), p);
        }
        p.color = Colors.black.withValues(alpha: 0.18);
        final hills = Path()
          ..moveTo(0, s.height * 0.62)
          ..quadraticBezierTo(s.width * 0.3, s.height * 0.55, s.width * 0.6, s.height * 0.63)
          ..quadraticBezierTo(s.width * 0.85, s.height * 0.69, s.width, s.height * 0.6)
          ..lineTo(s.width, s.height)
          ..lineTo(0, s.height)
          ..close();
        canvas.drawPath(hills, p);
      case 'portrait':
        p.color = c.accent.withValues(alpha: 0.14);
        canvas.drawCircle(Offset(s.width * 0.9, s.height * 0.08), s.width * 0.32, p);
        canvas.drawCircle(Offset(s.width * 0.05, s.height * 0.95), s.width * 0.28, p);
        p.color = c.accent;
        canvas.drawRect(Rect.fromLTWH(0, 0, s.width, 6), p);
        canvas.drawRect(Rect.fromLTWH(0, s.height - 6, s.width, 6), p);
      case 'band':
        p
          ..style = PaintingStyle.stroke
          ..color = c.accent.withValues(alpha: 0.55)
          ..strokeWidth = 1;
        for (var i = 0; i < 18; i++) {
          canvas.drawLine(Offset(-s.height + i * 50.0, s.height), Offset(i * 50.0, 0), p);
        }
      case 'split':
        if (!hasTopPhoto) {
          p.shader = LinearGradient(colors: [c.bg2, c.bg2.withValues(alpha: 0.7)]).createShader(Rect.fromLTWH(0, 0, s.width, s.height * 0.52));
          canvas.drawRect(Rect.fromLTWH(0, 0, s.width, s.height * 0.52), p);
          p.shader = null;
          p.color = Colors.white.withValues(alpha: 0.14);
          for (var i = 0; i < 5; i++) {
            canvas.drawCircle(Offset(s.width * (0.15 + i * 0.2), s.height * (0.12 + (i % 2) * 0.22)), 26.0 + i * 9, p);
          }
        }
        p.color = c.accent;
        canvas.drawRect(Rect.fromLTWH(46, s.height * 0.52 + 2, 54, 6), p);
      case 'story':
        p.color = Colors.white.withValues(alpha: 0.9);
        for (final o in [Offset(s.width * 0.24, s.height * 0.5), Offset(s.width * 0.74, s.height * 0.58)]) {
          canvas.drawOval(Rect.fromCenter(center: o, width: 90, height: 34), p);
          canvas.drawOval(Rect.fromCenter(center: o.translate(-22, -12), width: 50, height: 36), p);
          canvas.drawOval(Rect.fromCenter(center: o.translate(18, -16), width: 56, height: 42), p);
        }
        p.color = const Color(0xFFFDE047);
        canvas.drawCircle(Offset(s.width * 0.82, s.height * 0.44), 30, p);
        p.color = c.accent.withValues(alpha: 0.75);
        canvas.drawPath(
            Path()
              ..moveTo(0, s.height * 0.72)
              ..quadraticBezierTo(s.width * 0.35, s.height * 0.6, s.width * 0.7, s.height * 0.74)
              ..quadraticBezierTo(s.width * 0.9, s.height * 0.8, s.width, s.height * 0.72)
              ..lineTo(s.width, s.height)
              ..lineTo(0, s.height)
              ..close(),
            p);
        p.color = c.accent;
        canvas.drawPath(
            Path()
              ..moveTo(0, s.height * 0.84)
              ..quadraticBezierTo(s.width * 0.45, s.height * 0.74, s.width, s.height * 0.86)
              ..lineTo(s.width, s.height)
              ..lineTo(0, s.height)
              ..close(),
            p);
      case 'geo':
        final tri = [
          (Offset.zero, Offset(s.width * 0.55, 0), Offset(0, s.height * 0.35), c.accent.withValues(alpha: 0.9)),
          (Offset(s.width, s.height), Offset(s.width * 0.35, s.height), Offset(s.width, s.height * 0.6), c.accent.withValues(alpha: 0.8)),
          (Offset(s.width, 0), Offset(s.width, s.height * 0.28), Offset(s.width * 0.7, 0), Colors.white.withValues(alpha: 0.12)),
          (Offset(0, s.height), Offset(0, s.height * 0.7), Offset(s.width * 0.3, s.height), Colors.white.withValues(alpha: 0.1)),
        ];
        for (final (a, b, d, col) in tri) {
          p.color = col;
          canvas.drawPath(Path()..addPolygon([a, b, d], true), p);
        }
      case 'vintage':
        p
          ..style = PaintingStyle.stroke
          ..color = c.accent
          ..strokeWidth = 1.2;
        final r1 = Rect.fromLTWH(22, 22, s.width - 44, s.height - 44);
        canvas.drawRect(r1, p);
        canvas.drawRect(r1.deflate(6), p);
        for (final o in [r1.topLeft, r1.topRight, r1.bottomLeft, r1.bottomRight]) {
          canvas.drawCircle(o, 9, p);
          canvas.drawCircle(o, 4, p);
        }
      case 'starry':
        final rnd = math.Random(7);
        p.color = Colors.white;
        for (var i = 0; i < 90; i++) {
          final r = rnd.nextDouble() * 1.4 + 0.3;
          p.color = Colors.white.withValues(alpha: 0.4 + rnd.nextDouble() * 0.6);
          canvas.drawCircle(Offset(rnd.nextDouble() * s.width, rnd.nextDouble() * s.height), r, p);
        }
        final moon = Offset(s.width * 0.76, s.height * 0.17);
        p.color = c.accent;
        final path = Path.combine(
          PathOperation.difference,
          Path()..addOval(Rect.fromCircle(center: moon, radius: 34)),
          Path()..addOval(Rect.fromCircle(center: moon.translate(14, -8), radius: 30)),
        );
        canvas.drawPath(path, p);
    }
  }

  @override
  bool shouldRepaint(covariant _CoverPainter old) => old.id != id || old.c != c || old.hasTopPhoto != hasTopPhoto;
}

class _Ornament extends StatelessWidget {
  const _Ornament({required this.color});
  final Color color;
  @override
  Widget build(BuildContext context) {
    return Row(mainAxisSize: MainAxisSize.min, children: [
      Container(width: 34, height: 1.2, color: color),
      const SizedBox(width: 8),
      Transform.rotate(angle: math.pi / 4, child: Container(width: 9, height: 9, color: color)),
      const SizedBox(width: 8),
      Container(width: 34, height: 1.2, color: color),
    ]);
  }
}

// ─── Cover designer ───────────────────────────────────────────────────────

const _kSwatches = <int>[
  0xFF0F1B3D, 0xFF1E3A8A, 0xFF2563EB, 0xFF0E7490, 0xFF0F766E, 0xFF15803D, 0xFF22C55E, 0xFF84CC16,
  0xFFFDE68A, 0xFFF59E0B, 0xFFD4AF37, 0xFFFF7A45, 0xFFDC2626, 0xFFE0457B, 0xFFDB2777, 0xFF7C3AED,
  0xFF8B4513, 0xFF4A3424, 0xFFF5EBDD, 0xFFFDF6EC, 0xFFFFFFFF, 0xFF9CA3AF, 0xFF374151, 0xFF111827,
];

/// Full-screen cover designer: templates, colours, your picture, title place and lettering.
/// Returns the new cover (or null when closed without saving).
Future<NgmyBookCover?> showNgmyBookCoverDesigner(BuildContext context, NgmyBookDoc doc) {
  return Navigator.of(context).push<NgmyBookCover>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => _CoverDesigner(doc: doc)),
  );
}

class _CoverDesigner extends StatefulWidget {
  const _CoverDesigner({required this.doc});
  final NgmyBookDoc doc;
  @override
  State<_CoverDesigner> createState() => _CoverDesignerState();
}

class _CoverDesignerState extends State<_CoverDesigner> {
  late NgmyBookCover _cover = widget.doc.cover;
  String _colorSlot = 'bg1';

  NgmyBookDoc get _doc => widget.doc.copyWith(cover: _cover);

  Future<void> _pickPhoto() async {
    try {
      final x = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1400, imageQuality: 82);
      if (x == null) return;
      final bytes = await x.readAsBytes();
      final mime = x.mimeType ?? (x.name.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg');
      setState(() => _cover = _cover.copyWith(photo: 'data:$mime;base64,${base64Encode(bytes)}'));
    } catch (_) {}
  }

  void _setColor(int v) {
    setState(() {
      _cover = switch (_colorSlot) {
        'bg2' => _cover.copyWith(bg2: v),
        'accent' => _cover.copyWith(accent: v),
        'ink' => _cover.copyWith(ink: v),
        _ => _cover.copyWith(bg1: v),
      };
    });
  }

  Widget _section(String title, Widget child) => Padding(
        padding: const EdgeInsets.only(top: 18),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w900, fontSize: 14)),
          const SizedBox(height: 8),
          child,
        ]),
      );

  Widget _chip(String label, bool on, VoidCallback onTap) => Padding(
        padding: const EdgeInsets.only(right: 8, bottom: 8),
        child: ChoiceChip(
          label: Text(label),
          selected: on,
          onSelected: (_) => onTap(),
          selectedColor: const Color(0xFFB45309),
          labelStyle: TextStyle(color: on ? Colors.white : const Color(0xFF3D2E1F), fontWeight: FontWeight.w700),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final colors = ngmyCoverColors(_cover);
    final current = switch (_colorSlot) {
      'bg2' => colors.bg2,
      'accent' => colors.accent,
      'ink' => colors.ink,
      _ => colors.bg1,
    };
    return Scaffold(
      backgroundColor: const Color(0xFF2B1D14),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: const Color(0xFFFAF3E8),
        title: const Text('Design the cover', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, _cover),
            child: const Text('Done', style: TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900, fontSize: 16)),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
        children: [
          Center(
            child: Container(
              decoration: BoxDecoration(boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 10))]),
              child: SizedBox(
                width: 220,
                height: 220 * 612 / 396,
                child: FittedBox(child: NgmyBookCoverView(doc: _doc)),
              ),
            ),
          ),
          _section(
            'Templates',
            SizedBox(
              height: 150,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: kNgmyCoverTemplates.length,
                separatorBuilder: (_, __) => const SizedBox(width: 10),
                itemBuilder: (_, i) {
                  final t = kNgmyCoverTemplates[i];
                  final on = t.id == _cover.template;
                  return GestureDetector(
                    onTap: () => setState(() => _cover = _cover.copyWith(template: t.id, resetColors: true, position: '', font: '')),
                    child: Column(children: [
                      Container(
                        decoration: BoxDecoration(
                          border: Border.all(color: on ? const Color(0xFFFDE68A) : Colors.transparent, width: 3),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: SizedBox(
                          width: 76,
                          height: 76 * 612 / 396,
                          child: FittedBox(
                            child: NgmyBookCoverView(doc: _doc.copyWith(cover: NgmyBookCover(template: t.id, photo: _cover.photo))),
                          ),
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(t.name, style: TextStyle(color: on ? const Color(0xFFFDE68A) : const Color(0xCCFAF3E8), fontSize: 11, fontWeight: FontWeight.w700)),
                    ]),
                  );
                },
              ),
            ),
          ),
          _section(
            'Your picture',
            Row(children: [
              FilledButton.icon(
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB45309)),
                onPressed: _pickPhoto,
                icon: const Icon(Icons.add_photo_alternate_rounded, size: 18),
                label: Text(_cover.photo.isEmpty ? 'Add a picture' : 'Change picture'),
              ),
              if (_cover.photo.isNotEmpty) ...[
                const SizedBox(width: 8),
                TextButton(
                  onPressed: () => setState(() => _cover = _cover.copyWith(photo: '')),
                  child: const Text('Remove', style: TextStyle(color: Color(0xFFFCA5A5))),
                ),
              ],
            ]),
          ),
          _section(
            'Colours',
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Wrap(children: [
                _chip('Background', _colorSlot == 'bg1', () => setState(() => _colorSlot = 'bg1')),
                _chip('Second colour', _colorSlot == 'bg2', () => setState(() => _colorSlot = 'bg2')),
                _chip('Accent', _colorSlot == 'accent', () => setState(() => _colorSlot = 'accent')),
                _chip('Title', _colorSlot == 'ink', () => setState(() => _colorSlot = 'ink')),
              ]),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final v in _kSwatches)
                  GestureDetector(
                    onTap: () => _setColor(v),
                    child: Container(
                      width: 34,
                      height: 34,
                      decoration: BoxDecoration(
                        color: Color(v),
                        shape: BoxShape.circle,
                        border: Border.all(color: current.toARGB32() == v ? const Color(0xFFFDE68A) : Colors.white24, width: current.toARGB32() == v ? 3 : 1),
                      ),
                    ),
                  ),
              ]),
              TextButton.icon(
                onPressed: () => setState(() => _cover = _cover.copyWith(resetColors: true)),
                icon: const Icon(Icons.restart_alt_rounded, size: 18, color: Color(0xCCFAF3E8)),
                label: const Text('Template colours', style: TextStyle(color: Color(0xCCFAF3E8))),
              ),
            ]),
          ),
          _section(
            'Title place',
            Wrap(children: [
              for (final (id, label) in const [('', 'Template'), ('top', 'Top'), ('middle', 'Middle'), ('bottom', 'Bottom')])
                _chip(label, _cover.position == id, () => setState(() => _cover = _cover.copyWith(position: id))),
            ]),
          ),
          _section(
            'Lettering',
            Wrap(children: [
              for (final (id, label) in const [('', 'Template'), ('classic', 'Classic'), ('modern', 'Modern'), ('display', 'Bold')])
                _chip(label, _cover.font == id, () => setState(() => _cover = _cover.copyWith(font: id))),
            ]),
          ),
        ],
      ),
    );
  }
}
