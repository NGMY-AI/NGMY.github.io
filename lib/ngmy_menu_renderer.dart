import 'package:flutter/material.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_templates.dart';

/// Renders a published or preview menu with the selected template.
class NgmyMenuPreview extends StatelessWidget {
  const NgmyMenuPreview({
    super.key,
    required this.document,
    this.compact = false,
  });

  final NgmyMenuDocument document;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    final t = ngmyMenuTemplateById(document.templateId);
    final pad = compact ? 12.0 : 22.0;
    final radius = compact ? 14.0 : 22.0;

    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [t.bgStart, t.bgEnd]),
        borderRadius: BorderRadius.circular(radius),
        border: Border.all(color: t.accent.withValues(alpha: 0.4), width: compact ? 1 : 1.5),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: compact ? 0.18 : 0.32), blurRadius: compact ? 16 : 32, offset: Offset(0, compact ? 6 : 12)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: Stack(
          children: [
            if (t.layout == NgmyMenuLayoutStyle.artDeco)
              Positioned(
                top: compact ? 8 : 14,
                left: compact ? 8 : 14,
                right: compact ? 8 : 14,
                child: Container(
                  height: compact ? 40 : 56,
                  decoration: BoxDecoration(
                    border: Border(
                      top: BorderSide(color: t.accent.withValues(alpha: 0.5), width: 1),
                      bottom: BorderSide(color: t.accent.withValues(alpha: 0.5), width: 1),
                    ),
                  ),
                ),
              ),
            SingleChildScrollView(
              padding: EdgeInsets.all(pad),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _header(t, document),
                  if (document.tagline.trim().isNotEmpty) ...[
                    SizedBox(height: compact ? 4 : 8),
                    Text(
                      document.tagline,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: t.textSecondary,
                        fontSize: compact ? 10 : 13,
                        fontStyle: FontStyle.italic,
                        letterSpacing: 0.4,
                        height: 1.35,
                      ),
                    ),
                  ],
                  SizedBox(height: compact ? 12 : 20),
                  ...document.sections.map((s) => _section(t, s)),
                  SizedBox(height: compact ? 6 : 10),
                  Center(
                    child: Text(
                      'Powered by NGMY Menu',
                      style: TextStyle(color: t.textSecondary.withValues(alpha: 0.45), fontSize: compact ? 8 : 9, letterSpacing: 0.8),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _header(NgmyMenuTemplate t, NgmyMenuDocument doc) {
    final name = doc.restaurantName.trim().isEmpty ? 'Your Restaurant' : doc.restaurantName.trim();
    final isPlaceholder = doc.restaurantName.trim().isEmpty;

    TextStyle nameStyle = switch (t.headerStyle) {
      'ornate' => TextStyle(
          color: t.accent,
          fontSize: compact ? 20 : 30,
          fontWeight: FontWeight.w900,
          letterSpacing: 1.6,
          height: 1.1,
        ),
      'serif' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 18 : 28,
          fontWeight: FontWeight.w700,
          fontFamily: 'Georgia',
          letterSpacing: 0.6,
        ),
      'minimal' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 16 : 24,
          fontWeight: FontWeight.w300,
          letterSpacing: compact ? 3 : 5,
        ),
      _ => TextStyle(color: t.textPrimary, fontSize: compact ? 18 : 26, fontWeight: FontWeight.w900, letterSpacing: 0.5),
    };

    if (isPlaceholder) {
      nameStyle = nameStyle.copyWith(color: t.textSecondary, fontStyle: FontStyle.italic, fontWeight: FontWeight.w600);
    }

    return Column(
      children: [
        if (t.headerStyle == 'ornate' || t.layout == NgmyMenuLayoutStyle.ornateDots) ...[
          Row(
            children: [
              Expanded(child: _ornamentLine(t.accent)),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: compact ? 6 : 10),
                child: Icon(Icons.restaurant_menu_rounded, color: t.accent, size: compact ? 16 : 22),
              ),
              Expanded(child: _ornamentLine(t.accent)),
            ],
          ),
          SizedBox(height: compact ? 6 : 10),
        ],
        Text(name, textAlign: TextAlign.center, style: nameStyle),
        if (t.headerStyle == 'ornate') ...[
          SizedBox(height: compact ? 4 : 8),
          Container(
            height: 2,
            margin: EdgeInsets.symmetric(horizontal: compact ? 20 : 48),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [Colors.transparent, t.accent, Colors.transparent]),
            ),
          ),
        ],
        if (t.layout == NgmyMenuLayoutStyle.minimalLine) ...[
          SizedBox(height: compact ? 6 : 10),
          Container(height: 1, color: t.textSecondary.withValues(alpha: 0.25)),
        ],
      ],
    );
  }

  Widget _ornamentLine(Color accent) {
    return Container(
      height: 1,
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [Colors.transparent, accent.withValues(alpha: 0.7), Colors.transparent]),
      ),
    );
  }

  Widget _section(NgmyMenuTemplate t, NgmyMenuSection section) {
    final items = section.items.where((i) => i.name.trim().isNotEmpty || i.price.trim().isNotEmpty).toList();
    if (items.isEmpty) return const SizedBox.shrink();

    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 10 : 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _sectionTitle(t, section.title),
          SizedBox(height: compact ? 6 : 10),
          ...items.map((item) => _itemRow(t, item)),
        ],
      ),
    );
  }

  Widget _sectionTitle(NgmyMenuTemplate t, String title) {
    return switch (t.layout) {
      NgmyMenuLayoutStyle.minimalLine => Column(
          children: [
            Text(
              title.toUpperCase(),
              textAlign: TextAlign.center,
              style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w300, fontSize: compact ? 10 : 12, letterSpacing: compact ? 2.5 : 3.5),
            ),
            SizedBox(height: compact ? 4 : 6),
            Container(height: 1, color: t.textSecondary.withValues(alpha: 0.2)),
          ],
        ),
      NgmyMenuLayoutStyle.modernCards => Row(
          children: [
            Container(width: 3, height: compact ? 14 : 18, color: t.accent),
            SizedBox(width: compact ? 6 : 8),
            Text(
              title.toUpperCase(),
              style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 11 : 13, letterSpacing: 1.2),
            ),
          ],
        ),
      _ => Container(
          padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 16, vertical: compact ? 5 : 8),
          decoration: BoxDecoration(
            border: Border(
              top: BorderSide(color: t.accent.withValues(alpha: 0.35)),
              bottom: BorderSide(color: t.accent.withValues(alpha: 0.35)),
            ),
          ),
          child: Text(
            title.toUpperCase(),
            textAlign: TextAlign.center,
            style: TextStyle(color: t.accent, fontWeight: FontWeight.w800, fontSize: compact ? 10 : 12, letterSpacing: compact ? 1.2 : 1.8),
          ),
        ),
    };
  }

  Widget _itemRow(NgmyMenuTemplate t, NgmyMenuItem item) {
    return switch (t.layout) {
      NgmyMenuLayoutStyle.modernCards => _itemCard(t, item),
      NgmyMenuLayoutStyle.minimalLine => _itemMinimal(t, item),
      _ => _itemClassicDots(t, item),
    };
  }

  Widget _itemClassicDots(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 8 : 12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Flexible(
                child: Text(
                  item.name.trim().isEmpty ? 'Item' : item.name,
                  style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 15, height: 1.2),
                ),
              ),
              if (price.isNotEmpty) ...[
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: LayoutBuilder(
                      builder: (_, c) {
                        return CustomPaint(
                          size: Size(c.maxWidth, compact ? 10 : 12),
                          painter: _DotLeaderPainter(color: t.textSecondary.withValues(alpha: 0.35)),
                        );
                      },
                    ),
                  ),
                ),
                Text(price, style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 12 : 14)),
              ],
            ],
          ),
          ..._itemMeta(t, item),
        ],
      ),
    );
  }

  Widget _itemMinimal(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 10 : 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(
                  item.name.trim().isEmpty ? 'Item' : item.name,
                  style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w600, fontSize: compact ? 12 : 14, letterSpacing: 0.3),
                ),
              ),
              if (price.isNotEmpty)
                Text(price, style: TextStyle(color: t.accent, fontWeight: FontWeight.w700, fontSize: compact ? 12 : 14)),
            ],
          ),
          ..._itemMeta(t, item),
          Container(margin: EdgeInsets.only(top: compact ? 6 : 8), height: 1, color: t.textSecondary.withValues(alpha: 0.12)),
        ],
      ),
    );
  }

  Widget _itemCard(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Container(
      margin: EdgeInsets.only(bottom: compact ? 6 : 8),
      padding: EdgeInsets.all(compact ? 8 : 12),
      decoration: BoxDecoration(
        color: t.cardBg.withValues(alpha: 0.92),
        borderRadius: BorderRadius.circular(compact ? 10 : 14),
        border: Border.all(color: t.accent.withValues(alpha: 0.18)),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 8, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(
                  item.name.trim().isEmpty ? 'Item' : item.name,
                  style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 15),
                ),
              ),
              if (price.isNotEmpty)
                Container(
                  padding: EdgeInsets.symmetric(horizontal: compact ? 6 : 8, vertical: compact ? 2 : 4),
                  decoration: BoxDecoration(
                    color: t.accent.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(color: t.accent.withValues(alpha: 0.35)),
                  ),
                  child: Text(price, style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 11 : 13)),
                ),
            ],
          ),
          ..._itemMeta(t, item),
        ],
      ),
    );
  }

  List<Widget> _itemMeta(NgmyMenuTemplate t, NgmyMenuItem item) {
    final widgets = <Widget>[];
    if (item.description.trim().isNotEmpty) {
      widgets.add(Padding(
        padding: EdgeInsets.only(top: compact ? 3 : 5),
        child: Text(
          item.description,
          style: TextStyle(color: t.textSecondary, fontSize: compact ? 9 : 11, height: 1.35, fontStyle: FontStyle.italic),
        ),
      ));
    }
    if (item.ingredients.trim().isNotEmpty) {
      widgets.add(Padding(
        padding: EdgeInsets.only(top: compact ? 2 : 4),
        child: RichText(
          text: TextSpan(
            style: TextStyle(color: t.textSecondary.withValues(alpha: 0.85), fontSize: compact ? 9 : 10, height: 1.35),
            children: [
              TextSpan(text: 'Ingredients · ', style: TextStyle(color: t.accent.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: compact ? 9 : 10)),
              TextSpan(text: item.ingredients),
            ],
          ),
        ),
      ));
    }
    return widgets;
  }
}

class _DotLeaderPainter extends CustomPainter {
  _DotLeaderPainter({required this.color});

  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    const gap = 4.0;
    var x = 0.0;
    while (x < size.width) {
      canvas.drawCircle(Offset(x, size.height - 2), 0.8, paint);
      x += gap;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
