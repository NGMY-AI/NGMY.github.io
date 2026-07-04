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
    final pad = compact ? 14.0 : 20.0;

    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [t.bgStart, t.bgEnd]),
        borderRadius: BorderRadius.circular(compact ? 12 : 20),
        border: Border.all(color: t.accent.withValues(alpha: 0.35), width: 1.2),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 24, offset: const Offset(0, 8))],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(compact ? 12 : 20),
        child: SingleChildScrollView(
          padding: EdgeInsets.all(pad),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _header(t, document),
              if (document.tagline.trim().isNotEmpty) ...[
                SizedBox(height: compact ? 6 : 10),
                Text(
                  document.tagline,
                  textAlign: TextAlign.center,
                  style: TextStyle(color: t.textSecondary, fontSize: compact ? 11 : 13, fontStyle: FontStyle.italic),
                ),
              ],
              SizedBox(height: compact ? 14 : 22),
              ...document.sections.map((s) => _section(t, s, compact)),
              SizedBox(height: compact ? 8 : 12),
              Center(
                child: Text(
                  'Powered by NGMY Menu',
                  style: TextStyle(color: t.textSecondary.withValues(alpha: 0.5), fontSize: 9, letterSpacing: 0.6),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _header(NgmyMenuTemplate t, NgmyMenuDocument doc) {
    final nameStyle = switch (t.headerStyle) {
      'ornate' => TextStyle(
          color: t.accent,
          fontSize: compact ? 22 : 28,
          fontWeight: FontWeight.w900,
          letterSpacing: 1.2,
          shadows: [Shadow(color: t.accent.withValues(alpha: 0.4), blurRadius: 12)],
        ),
      'serif' => TextStyle(
          color: t.textPrimary,
          fontSize: compact ? 20 : 26,
          fontWeight: FontWeight.w700,
          fontFamily: 'Georgia',
          letterSpacing: 0.8,
        ),
      'minimal' => TextStyle(color: t.textPrimary, fontSize: compact ? 18 : 24, fontWeight: FontWeight.w300, letterSpacing: 4),
      _ => TextStyle(color: t.textPrimary, fontSize: compact ? 20 : 26, fontWeight: FontWeight.w900),
    };

    return Column(
      children: [
        if (t.headerStyle == 'ornate')
          Row(
            children: [
              Expanded(child: Container(height: 1, color: t.accent.withValues(alpha: 0.5))),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: Icon(Icons.restaurant_menu_rounded, color: t.accent, size: compact ? 18 : 22),
              ),
              Expanded(child: Container(height: 1, color: t.accent.withValues(alpha: 0.5))),
            ],
          ),
        SizedBox(height: compact ? 8 : 12),
        Text(doc.restaurantName, textAlign: TextAlign.center, style: nameStyle),
        if (t.headerStyle == 'ornate') ...[
          const SizedBox(height: 6),
          Container(
            height: 2,
            margin: EdgeInsets.symmetric(horizontal: compact ? 24 : 40),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [Colors.transparent, t.accent, Colors.transparent]),
            ),
          ),
        ],
      ],
    );
  }

  Widget _section(NgmyMenuTemplate t, NgmyMenuSection section, bool compact) {
    if (section.items.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 12 : 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 14, vertical: compact ? 6 : 8),
            decoration: BoxDecoration(
              color: t.accent.withValues(alpha: t.bgStart.computeLuminance() > 0.5 ? 0.12 : 0.18),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: t.accent.withValues(alpha: 0.25)),
            ),
            child: Text(
              section.title.toUpperCase(),
              textAlign: TextAlign.center,
              style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 11 : 13, letterSpacing: 1.4),
            ),
          ),
          SizedBox(height: compact ? 8 : 12),
          ...section.items.map((item) => _itemRow(t, item, compact)),
        ],
      ),
    );
  }

  Widget _itemRow(NgmyMenuTemplate t, NgmyMenuItem item, bool compact) {
    return Container(
      margin: EdgeInsets.only(bottom: compact ? 6 : 8),
      padding: EdgeInsets.all(compact ? 8 : 12),
      decoration: BoxDecoration(
        color: t.cardBg.withValues(alpha: 0.85),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: t.textSecondary.withValues(alpha: 0.12)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(item.name, style: TextStyle(color: t.textPrimary, fontWeight: FontWeight.w800, fontSize: compact ? 13 : 15)),
                if (item.description.trim().isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 3),
                    child: Text(
                      item.description,
                      style: TextStyle(color: t.textSecondary, fontSize: compact ? 10 : 12, height: 1.3),
                    ),
                  ),
              ],
            ),
          ),
          if (item.price.trim().isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(left: 8),
              child: Text(
                item.price,
                style: TextStyle(color: t.accent, fontWeight: FontWeight.w900, fontSize: compact ? 12 : 14),
              ),
            ),
        ],
      ),
    );
  }
}
