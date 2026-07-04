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

  double get _radius => compact ? 20.0 : 28.0;

  double get _innerRadius => compact ? 14.0 : 18.0;

  @override
  Widget build(BuildContext context) {
    final t = ngmyMenuTemplateById(document.templateId);
    final pad = compact ? 12.0 : 22.0;
    final radius = _radius;

    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [t.bgStart, t.bgEnd]),
        borderRadius: BorderRadius.circular(radius),
        border: Border.all(color: t.accent.withValues(alpha: t.layout == NgmyMenuLayoutStyle.neonPanel ? 0.65 : 0.4), width: compact ? 1 : 1.5),
        boxShadow: [
          if (t.layout == NgmyMenuLayoutStyle.neonPanel)
            BoxShadow(color: t.accent.withValues(alpha: 0.35), blurRadius: compact ? 20 : 36, spreadRadius: 1),
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
            if (t.layout == NgmyMenuLayoutStyle.sidebarAccent)
              Positioned(
                left: 0,
                top: 0,
                bottom: 0,
                child: Container(
                  width: compact ? 5 : 8,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [t.accent, t.accent.withValues(alpha: 0.35)],
                    ),
                  ),
                ),
              ),
            if (t.layout == NgmyMenuLayoutStyle.magazineColumn)
              Positioned(
                top: 0,
                left: compact ? 10 : 18,
                child: Container(
                  width: compact ? 3 : 4,
                  height: compact ? 80 : 120,
                  color: t.accent,
                ),
              ),
            if (t.layout == NgmyMenuLayoutStyle.ticketStrip && t.headerStyle == 'retro')
              Positioned.fill(
                child: CustomPaint(painter: _StripePainter(color: t.accent.withValues(alpha: 0.06))),
              ),
            SingleChildScrollView(
              padding: EdgeInsets.fromLTRB(
                t.layout == NgmyMenuLayoutStyle.sidebarAccent ? pad + (compact ? 6 : 10) : pad,
                pad,
                pad,
                pad,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _header(t, document),
                  if (document.tagline.trim().isNotEmpty) ...[
                    SizedBox(height: compact ? 4 : 8),
                    Text(
                      document.tagline,
                      textAlign: _headerAlign(t),
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

  TextAlign _headerAlign(NgmyMenuTemplate t) {
    return switch (t.layout) {
      NgmyMenuLayoutStyle.magazineColumn || NgmyMenuLayoutStyle.sidebarAccent => TextAlign.left,
      _ => TextAlign.center,
    };
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
      'neon' || 'jazz' => TextStyle(
          color: t.accent,
          fontSize: compact ? 20 : 32,
          fontWeight: FontWeight.w900,
          letterSpacing: 2,
          shadows: [Shadow(color: t.accent.withValues(alpha: 0.8), blurRadius: 12)],
        ),
      'industrial' => TextStyle(
          color: t.accent,
          fontSize: compact ? 18 : 28,
          fontWeight: FontWeight.w800,
          letterSpacing: 4,
        ),
      'retro' => TextStyle(
          color: t.accent,
          fontSize: compact ? 22 : 34,
          fontWeight: FontWeight.w900,
          fontStyle: FontStyle.italic,
          letterSpacing: 1,
        ),
      'magazine' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 22 : 34,
          fontWeight: FontWeight.w900,
          letterSpacing: -0.5,
          height: 1.05,
        ),
      'stack' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 18 : 26,
          fontWeight: FontWeight.w900,
          letterSpacing: 6,
        ),
      'grid' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 16 : 22,
          fontWeight: FontWeight.w700,
          letterSpacing: 1.2,
        ),
      'tile' => TextStyle(
          color: t.accent,
          fontSize: compact ? 20 : 28,
          fontWeight: FontWeight.w800,
          letterSpacing: 1.4,
        ),
      _ => TextStyle(color: t.textPrimary, fontSize: compact ? 18 : 26, fontWeight: FontWeight.w900, letterSpacing: 0.5),
    };

    if (isPlaceholder) {
      nameStyle = nameStyle.copyWith(color: t.textSecondary, fontStyle: FontStyle.italic, fontWeight: FontWeight.w600);
    }

    final align = _headerAlign(t);

    return Column(
      crossAxisAlignment: align == TextAlign.left ? CrossAxisAlignment.start : CrossAxisAlignment.center,
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
        if (t.headerStyle == 'neon' || t.headerStyle == 'jazz')
          Container(
            padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 16, vertical: compact ? 4 : 6),
            decoration: BoxDecoration(
              border: Border.all(color: t.accent.withValues(alpha: 0.7)),
              borderRadius: BorderRadius.circular(4),
              boxShadow: [BoxShadow(color: t.accent.withValues(alpha: 0.35), blurRadius: 16)],
            ),
            child: Text('MENU', style: TextStyle(color: t.accent, fontSize: compact ? 9 : 11, fontWeight: FontWeight.w900, letterSpacing: 4)),
          ),
        if (t.headerStyle == 'neon' || t.headerStyle == 'jazz') SizedBox(height: compact ? 8 : 12),
        if (t.headerStyle == 'magazine')
          Text('MENU', style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 10 : 12, letterSpacing: 3)),
        if (t.headerStyle == 'magazine') SizedBox(height: compact ? 4 : 6),
        Text(name, textAlign: align, style: nameStyle),
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
        if (t.headerStyle == 'retro') ...[
          SizedBox(height: compact ? 6 : 8),
          Row(
            children: List.generate(8, (i) => Expanded(child: Container(margin: const EdgeInsets.symmetric(horizontal: 1), height: 3, color: i.isEven ? t.accent : Colors.transparent))),
          ),
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

    final body = Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _sectionTitle(t, section.title),
        SizedBox(height: compact ? 6 : 10),
        ...items.map((item) => _itemRow(t, item)),
      ],
    );

    if (t.layout == NgmyMenuLayoutStyle.neonPanel) {
      return Padding(
        padding: EdgeInsets.only(bottom: compact ? 10 : 16),
        child: Container(
          padding: EdgeInsets.all(compact ? 8 : 12),
          decoration: BoxDecoration(
            color: t.cardBg.withValues(alpha: 0.55),
            borderRadius: BorderRadius.circular(_innerRadius),
            border: Border.all(color: t.accent.withValues(alpha: 0.55), width: 1.5),
            boxShadow: [BoxShadow(color: t.accent.withValues(alpha: 0.2), blurRadius: 14)],
          ),
          child: body,
        ),
      );
    }

    return Padding(padding: EdgeInsets.only(bottom: compact ? 10 : 18), child: body);
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
      NgmyMenuLayoutStyle.magazineColumn => Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              padding: EdgeInsets.symmetric(horizontal: compact ? 8 : 10, vertical: compact ? 3 : 5),
              color: t.accent,
              child: Text(
                title.toUpperCase(),
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: compact ? 9 : 11, letterSpacing: 1),
              ),
            ),
            SizedBox(width: compact ? 8 : 10),
            Expanded(child: Container(height: 2, color: t.textSecondary.withValues(alpha: 0.2))),
          ],
        ),
      NgmyMenuLayoutStyle.sidebarAccent => Row(
          children: [
            Icon(Icons.circle, size: compact ? 6 : 8, color: t.accent),
            SizedBox(width: compact ? 6 : 8),
            Text(
              title.toUpperCase(),
              style: TextStyle(color: t.accent, fontWeight: FontWeight.w800, fontSize: compact ? 11 : 13, letterSpacing: 1.4),
            ),
          ],
        ),
      NgmyMenuLayoutStyle.tableGrid => Container(
          padding: EdgeInsets.symmetric(vertical: compact ? 4 : 6),
          decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: t.accent, width: 2)),
          ),
          child: Text(
            title.toUpperCase(),
            style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 10 : 12, letterSpacing: 1.5),
          ),
        ),
      NgmyMenuLayoutStyle.neonPanel => Text(
          title.toUpperCase(),
          style: TextStyle(
            color: t.accent,
            fontWeight: FontWeight.w900,
            fontSize: compact ? 11 : 13,
            letterSpacing: 2,
            shadows: [Shadow(color: t.accent.withValues(alpha: 0.6), blurRadius: 8)],
          ),
        ),
      NgmyMenuLayoutStyle.ticketStrip => Center(
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: compact ? 12 : 18, vertical: compact ? 4 : 6),
            decoration: BoxDecoration(
              color: t.accent.withValues(alpha: 0.15),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: t.accent.withValues(alpha: 0.5), width: 1.5),
            ),
            child: Text(
              title.toUpperCase(),
              style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 10 : 12, letterSpacing: 1.5),
            ),
          ),
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
      NgmyMenuLayoutStyle.ticketStrip => _itemTicket(t, item),
      NgmyMenuLayoutStyle.priceRibbon => _itemRibbon(t, item),
      NgmyMenuLayoutStyle.polaroidFrame => _itemPolaroid(t, item),
      NgmyMenuLayoutStyle.tableGrid => _itemTableRow(t, item),
      NgmyMenuLayoutStyle.neonPanel || NgmyMenuLayoutStyle.sidebarAccent || NgmyMenuLayoutStyle.magazineColumn => _itemSidebar(t, item),
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
        borderRadius: BorderRadius.circular(_innerRadius),
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
                    borderRadius: BorderRadius.circular(compact ? 10 : 12),
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

  Widget _itemTicket(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Container(
      margin: EdgeInsets.only(bottom: compact ? 8 : 10),
      padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 14, vertical: compact ? 8 : 10),
      decoration: BoxDecoration(
        color: t.cardBg.withValues(alpha: 0.85),
        borderRadius: BorderRadius.circular(_innerRadius),
        border: Border.all(color: t.accent.withValues(alpha: 0.45), width: 1.5),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: compact ? 3 : 4,
            height: compact ? 36 : 44,
            margin: EdgeInsets.only(right: compact ? 8 : 10),
            decoration: BoxDecoration(
              color: t.accent,
              borderRadius: BorderRadius.circular(6),
            ),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        item.name.trim().isEmpty ? 'Item' : item.name,
                        style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 14),
                      ),
                    ),
                    if (price.isNotEmpty)
                      Text(price, style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 12 : 14)),
                  ],
                ),
                ..._itemMeta(t, item),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _itemRibbon(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Container(
      margin: EdgeInsets.only(bottom: compact ? 10 : 14),
      decoration: BoxDecoration(
        color: t.cardBg.withValues(alpha: 0.7),
        borderRadius: BorderRadius.circular(_innerRadius),
        border: Border(left: BorderSide(color: t.accent, width: 3)),
      ),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Padding(
            padding: EdgeInsets.fromLTRB(compact ? 12 : 16, compact ? 10 : 14, compact ? 48 : 56, compact ? 10 : 14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  item.name.trim().isEmpty ? 'Item' : item.name,
                  style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 15),
                ),
                ..._itemMeta(t, item),
              ],
            ),
          ),
          if (price.isNotEmpty)
            Positioned(
              top: compact ? 6 : 8,
              right: compact ? -4 : -6,
              child: Transform.rotate(
                angle: 0.08,
                child: Container(
                  padding: EdgeInsets.symmetric(horizontal: compact ? 8 : 10, vertical: compact ? 4 : 5),
                  decoration: BoxDecoration(
                    color: t.accent,
                    borderRadius: BorderRadius.circular(compact ? 8 : 10),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 4, offset: const Offset(2, 2))],
                  ),
                  child: Text(
                    price,
                    style: TextStyle(color: t.bgStart, fontWeight: FontWeight.w900, fontSize: compact ? 10 : 12),
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }

  Widget _itemPolaroid(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Container(
      margin: EdgeInsets.only(bottom: compact ? 12 : 16, left: compact ? 4 : 8),
      padding: EdgeInsets.all(compact ? 8 : 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: t.headerStyle == 'stack' ? 0.95 : 0.88),
        borderRadius: BorderRadius.circular(_innerRadius),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 10, offset: Offset(compact ? 3 : 5, compact ? 3 : 5)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            height: compact ? 28 : 36,
            decoration: BoxDecoration(
              color: t.accent.withValues(alpha: 0.2),
              border: Border.all(color: t.accent.withValues(alpha: 0.35)),
              borderRadius: BorderRadius.vertical(top: Radius.circular(_innerRadius - 2)),
            ),
            child: Center(child: Icon(Icons.restaurant_rounded, color: t.accent.withValues(alpha: 0.6), size: compact ? 16 : 20)),
          ),
          SizedBox(height: compact ? 6 : 8),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Text(
                  item.name.trim().isEmpty ? 'Item' : item.name,
                  style: TextStyle(color: const Color(0xFF1C1917), fontWeight: FontWeight.w800, fontSize: compact ? 11 : 13),
                ),
              ),
              if (price.isNotEmpty)
                Text(price, style: TextStyle(color: t.accent.computeLuminance() > 0.5 ? t.bgStart : t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 11 : 13)),
            ],
          ),
          ..._itemMetaPolaroid(item),
        ],
      ),
    );
  }

  Widget _itemTableRow(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Container(
      padding: EdgeInsets.symmetric(vertical: compact ? 6 : 8),
      decoration: BoxDecoration(
        border: Border(bottom: BorderSide(color: t.textSecondary.withValues(alpha: 0.15))),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 3,
            child: Text(
              item.name.trim().isEmpty ? 'Item' : item.name,
              style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w700, fontSize: compact ? 11 : 13),
            ),
          ),
          if (item.description.trim().isNotEmpty)
            Expanded(
              flex: 4,
              child: Text(
                item.description,
                style: TextStyle(color: t.textSecondary, fontSize: compact ? 9 : 10, fontStyle: FontStyle.italic),
              ),
            ),
          if (price.isNotEmpty)
            SizedBox(
              width: compact ? 44 : 52,
              child: Text(
                price,
                textAlign: TextAlign.right,
                style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 11 : 13),
              ),
            ),
        ],
      ),
    );
  }

  Widget _itemSidebar(NgmyMenuTemplate t, NgmyMenuItem item) {
    final price = ngmyMenuFormatPrice(item.price);
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 8 : 10),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: compact ? 2 : 3,
            height: compact ? 32 : 40,
            margin: EdgeInsets.only(right: compact ? 8 : 10, top: 2),
            color: t.accent.withValues(alpha: 0.5),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        item.name.trim().isEmpty ? 'Item' : item.name,
                        style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 14),
                      ),
                    ),
                    if (price.isNotEmpty)
                      Text(price, style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 12 : 14)),
                  ],
                ),
                ..._itemMeta(t, item),
              ],
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _itemMeta(NgmyMenuTemplate t, NgmyMenuItem item) {
    if (t.layout == NgmyMenuLayoutStyle.tableGrid) return [];
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

  List<Widget> _itemMetaPolaroid(NgmyMenuItem item) {
    final widgets = <Widget>[];
    if (item.description.trim().isNotEmpty) {
      widgets.add(Padding(
        padding: EdgeInsets.only(top: compact ? 2 : 4),
        child: Text(
          item.description,
          style: TextStyle(color: const Color(0xFF57534E), fontSize: compact ? 8 : 10, height: 1.3, fontStyle: FontStyle.italic),
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

class _StripePainter extends CustomPainter {
  _StripePainter({required this.color});

  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    const stripeW = 24.0;
    for (var x = -size.height; x < size.width + size.height; x += stripeW * 2) {
      canvas.drawRect(Rect.fromLTWH(x, 0, stripeW, size.height), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
