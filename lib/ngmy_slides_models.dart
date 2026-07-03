import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

String _ngmySlideDecorationKey(TextDecoration decoration) {
  if (decoration == TextDecoration.underline) return 'underline';
  if (decoration == TextDecoration.lineThrough) return 'lineThrough';
  return 'none';
}

TextDecoration _ngmySlideDecorationFromKey(Object? raw) {
  final key = raw?.toString() ?? 'none';
  switch (key) {
    case 'underline':
      return TextDecoration.underline;
    case 'lineThrough':
      return TextDecoration.lineThrough;
    default:
      return TextDecoration.none;
  }
}

enum NgmySlideElementType { text, image, shape }

enum NgmySlideShapeKind { rectangle, circle, triangle, arrow, line }

enum NgmySlideLayout {
  blank,
  title,
  titleContent,
  twoColumn,
  section,
  comparison,
}

enum NgmySlideTransition {
  none,
  fade,
  slideLeft,
  slideUp,
  zoom,
}

class NgmySlideElement {
  NgmySlideElement({
    required this.id,
    required this.type,
    this.x = 0.08,
    this.y = 0.12,
    this.w = 0.84,
    this.h = 0.2,
    this.text = '',
    this.fontSize = 24,
    this.fontWeight = FontWeight.w600,
    this.fontStyle = FontStyle.normal,
    this.decoration = TextDecoration.none,
    this.color = 0xFF111827,
    this.align = TextAlign.left,
    this.imageRef,
    this.shape = NgmySlideShapeKind.rectangle,
    this.fillColor = 0xFF2563EB,
    this.strokeColor = 0xFF1E40AF,
    this.strokeWidth = 2,
    this.rotation = 0,
    this.bulletList = false,
  });

  final String id;
  final NgmySlideElementType type;
  double x;
  double y;
  double w;
  double h;
  String text;
  double fontSize;
  FontWeight fontWeight;
  FontStyle fontStyle;
  TextDecoration decoration;
  int color;
  TextAlign align;
  String? imageRef;
  NgmySlideShapeKind shape;
  int fillColor;
  int strokeColor;
  double strokeWidth;
  double rotation;
  bool bulletList;

  NgmySlideElement copy() => NgmySlideElement(
        id: id,
        type: type,
        x: x,
        y: y,
        w: w,
        h: h,
        text: text,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        decoration: decoration,
        color: color,
        align: align,
        imageRef: imageRef,
        shape: shape,
        fillColor: fillColor,
        strokeColor: strokeColor,
        strokeWidth: strokeWidth,
        rotation: rotation,
        bulletList: bulletList,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'type': type.name,
        'x': x,
        'y': y,
        'w': w,
        'h': h,
        'text': text,
        'fontSize': fontSize,
        'fontWeight': fontWeight.index,
        'fontStyle': fontStyle.index,
        'decoration': _ngmySlideDecorationKey(decoration),
        'color': color,
        'align': align.index,
        'imageRef': imageRef,
        'shape': shape.name,
        'fillColor': fillColor,
        'strokeColor': strokeColor,
        'strokeWidth': strokeWidth,
        'rotation': rotation,
        'bulletList': bulletList,
      };

  factory NgmySlideElement.fromJson(Map<String, dynamic> json) {
    final fwIndex = (json['fontWeight'] as num?)?.toInt() ?? FontWeight.w600.index;
    final fsIndex = (json['fontStyle'] as num?)?.toInt() ?? FontStyle.normal.index;
    final alignIndex = (json['align'] as num?)?.toInt() ?? TextAlign.left.index;
    return NgmySlideElement(
      id: (json['id'] ?? '').toString(),
      type: NgmySlideElementType.values.byName((json['type'] ?? 'text').toString()),
      x: (json['x'] as num?)?.toDouble() ?? 0.08,
      y: (json['y'] as num?)?.toDouble() ?? 0.12,
      w: (json['w'] as num?)?.toDouble() ?? 0.84,
      h: (json['h'] as num?)?.toDouble() ?? 0.2,
      text: (json['text'] ?? '').toString(),
      fontSize: (json['fontSize'] as num?)?.toDouble() ?? 24,
      fontWeight: FontWeight.values[fwIndex.clamp(0, FontWeight.values.length - 1)],
      fontStyle: FontStyle.values[fsIndex.clamp(0, FontStyle.values.length - 1)],
      decoration: _ngmySlideDecorationFromKey(json['decoration']),
      color: (json['color'] as num?)?.toInt() ?? 0xFF111827,
      align: TextAlign.values[alignIndex.clamp(0, TextAlign.values.length - 1)],
      imageRef: json['imageRef']?.toString(),
      shape: NgmySlideShapeKind.values.byName((json['shape'] ?? 'rectangle').toString()),
      fillColor: (json['fillColor'] as num?)?.toInt() ?? 0xFF2563EB,
      strokeColor: (json['strokeColor'] as num?)?.toInt() ?? 0xFF1E40AF,
      strokeWidth: (json['strokeWidth'] as num?)?.toDouble() ?? 2,
      rotation: (json['rotation'] as num?)?.toDouble() ?? 0,
      bulletList: json['bulletList'] == true,
    );
  }
}

class NgmySlide {
  NgmySlide({
    required this.id,
    this.title = '',
    this.notes = '',
    this.layout = NgmySlideLayout.titleContent,
    this.background = 0xFFFFFFFF,
    this.backgroundEnd,
    this.transition = NgmySlideTransition.fade,
    List<NgmySlideElement>? elements,
  }) : elements = elements ?? [];

  final String id;
  String title;
  String notes;
  NgmySlideLayout layout;
  int background;
  int? backgroundEnd;
  NgmySlideTransition transition;
  List<NgmySlideElement> elements;

  NgmySlide copy() => NgmySlide(
        id: id,
        title: title,
        notes: notes,
        layout: layout,
        background: background,
        backgroundEnd: backgroundEnd,
        transition: transition,
        elements: elements.map((e) => e.copy()).toList(),
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'notes': notes,
        'layout': layout.name,
        'background': background,
        'backgroundEnd': backgroundEnd,
        'transition': transition.name,
        'elements': elements.map((e) => e.toJson()).toList(),
      };

  factory NgmySlide.fromJson(Map<String, dynamic> json) => NgmySlide(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        notes: (json['notes'] ?? '').toString(),
        layout: NgmySlideLayout.values.byName((json['layout'] ?? 'titleContent').toString()),
        background: (json['background'] as num?)?.toInt() ?? 0xFFFFFFFF,
        backgroundEnd: (json['backgroundEnd'] as num?)?.toInt(),
        transition: NgmySlideTransition.values.byName((json['transition'] ?? 'fade').toString()),
        elements: (json['elements'] as List?)
                ?.whereType<Map>()
                .map((e) => NgmySlideElement.fromJson(Map<String, dynamic>.from(e)))
                .toList() ??
            [],
      );
}

class NgmySlideDeck {
  NgmySlideDeck({
    required this.id,
    required this.name,
    this.themeId = 'office_blue',
    DateTime? updatedAt,
    List<NgmySlide>? slides,
  })  : updatedAt = updatedAt ?? DateTime.now(),
        slides = slides ?? [NgmySlidesTemplates.blankSlide()];

  final String id;
  String name;
  String themeId;
  DateTime updatedAt;
  List<NgmySlide> slides;

  NgmySlideDeck copy() => NgmySlideDeck(
        id: id,
        name: name,
        themeId: themeId,
        updatedAt: updatedAt,
        slides: slides.map((s) => s.copy()).toList(),
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'themeId': themeId,
        'updatedAt': updatedAt.toUtc().toIso8601String(),
        'slides': slides.map((s) => s.toJson()).toList(),
      };

  factory NgmySlideDeck.fromJson(Map<String, dynamic> json) => NgmySlideDeck(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? 'Untitled Presentation').toString(),
        themeId: (json['themeId'] ?? 'office_blue').toString(),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
        slides: (json['slides'] as List?)
                ?.whereType<Map>()
                .map((s) => NgmySlide.fromJson(Map<String, dynamic>.from(s)))
                .toList() ??
            [NgmySlidesTemplates.blankSlide()],
      );
}

class NgmySlidesTheme {
  const NgmySlidesTheme({
    required this.id,
    required this.label,
    required this.accent,
    required this.titleColor,
    required this.bodyColor,
    required this.slideBg,
    this.slideBgEnd,
  });

  final String id;
  final String label;
  final Color accent;
  final Color titleColor;
  final Color bodyColor;
  final Color slideBg;
  final Color? slideBgEnd;
}

class NgmySlidesTemplates {
  static String newId() => DateTime.now().microsecondsSinceEpoch.toString();

  static NgmySlide blankSlide() => NgmySlide(id: newId(), layout: NgmySlideLayout.blank);

  static NgmySlideDeck sampleDeck(String name) {
    final titleId = newId();
    final contentId = newId();
    return NgmySlideDeck(
      id: newId(),
      name: name,
      slides: [
        NgmySlide(
          id: newId(),
          title: 'Welcome',
          layout: NgmySlideLayout.title,
          background: 0xFF1E3A8A,
          backgroundEnd: 0xFF2563EB,
          elements: [
            NgmySlideElement(
              id: titleId,
              type: NgmySlideElementType.text,
              x: 0.08,
              y: 0.28,
              w: 0.84,
              h: 0.22,
              text: 'Your Presentation Title',
              fontSize: 44,
              fontWeight: FontWeight.w900,
              color: 0xFFFFFFFF,
              align: TextAlign.center,
            ),
            NgmySlideElement(
              id: contentId,
              type: NgmySlideElementType.text,
              x: 0.12,
              y: 0.58,
              w: 0.76,
              h: 0.12,
              text: 'Subtitle or class name',
              fontSize: 22,
              fontWeight: FontWeight.w500,
              color: 0xFFE0E7FF,
              align: TextAlign.center,
            ),
          ],
        ),
        NgmySlide(
          id: newId(),
          title: 'Agenda',
          layout: NgmySlideLayout.titleContent,
          elements: [
            NgmySlideElement(
              id: newId(),
              type: NgmySlideElementType.text,
              x: 0.06,
              y: 0.06,
              w: 0.88,
              h: 0.14,
              text: 'Agenda',
              fontSize: 34,
              fontWeight: FontWeight.w900,
              color: 0xFF1E3A8A,
            ),
            NgmySlideElement(
              id: newId(),
              type: NgmySlideElementType.text,
              x: 0.08,
              y: 0.24,
              w: 0.84,
              h: 0.62,
              text: '• Introduction\n• Main topic\n• Discussion\n• Summary',
              fontSize: 22,
              fontWeight: FontWeight.w500,
              color: 0xFF334155,
              bulletList: true,
            ),
          ],
        ),
      ],
    );
  }

  static void applyLayout(NgmySlide slide, NgmySlideLayout layout, NgmySlidesTheme theme) {
    slide.layout = layout;
    slide.elements.clear();
    switch (layout) {
      case NgmySlideLayout.blank:
        break;
      case NgmySlideLayout.title:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.08,
            y: 0.3,
            w: 0.84,
            h: 0.2,
            text: 'Click to add title',
            fontSize: 40,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
            align: TextAlign.center,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.12,
            y: 0.58,
            w: 0.76,
            h: 0.12,
            text: 'Click to add subtitle',
            fontSize: 20,
            fontWeight: FontWeight.w500,
            color: theme.bodyColor.value,
            align: TextAlign.center,
          ),
        ]);
      case NgmySlideLayout.titleContent:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.06,
            w: 0.88,
            h: 0.14,
            text: 'Click to add title',
            fontSize: 32,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.24,
            w: 0.88,
            h: 0.68,
            text: '• Click to add content\n• Use the toolbar to format text\n• Add images and shapes from Insert',
            fontSize: 20,
            fontWeight: FontWeight.w500,
            color: theme.bodyColor.value,
            bulletList: true,
          ),
        ]);
      case NgmySlideLayout.twoColumn:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.06,
            w: 0.88,
            h: 0.12,
            text: 'Two Column Slide',
            fontSize: 30,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.22,
            w: 0.42,
            h: 0.7,
            text: 'Left column\n\n• Point A\n• Point B',
            fontSize: 18,
            color: theme.bodyColor.value,
            bulletList: true,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.52,
            y: 0.22,
            w: 0.42,
            h: 0.7,
            text: 'Right column\n\n• Point C\n• Point D',
            fontSize: 18,
            color: theme.bodyColor.value,
            bulletList: true,
          ),
        ]);
      case NgmySlideLayout.section:
        slide.background = theme.accent.value;
        slide.backgroundEnd = theme.accent.withValues(alpha: 0.85).value;
        slide.elements.add(
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.08,
            y: 0.38,
            w: 0.84,
            h: 0.2,
            text: 'Section Header',
            fontSize: 42,
            fontWeight: FontWeight.w900,
            color: 0xFFFFFFFF,
            align: TextAlign.center,
          ),
        );
      case NgmySlideLayout.comparison:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.06,
            w: 0.88,
            h: 0.12,
            text: 'Compare',
            fontSize: 30,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.shape,
            x: 0.06,
            y: 0.22,
            w: 0.42,
            h: 0.68,
            shape: NgmySlideShapeKind.rectangle,
            fillColor: theme.accent.withValues(alpha: 0.12).value,
            strokeColor: theme.accent.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.08,
            y: 0.26,
            w: 0.38,
            h: 0.6,
            text: 'Option A',
            fontSize: 20,
            fontWeight: FontWeight.w700,
            color: theme.bodyColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.shape,
            x: 0.52,
            y: 0.22,
            w: 0.42,
            h: 0.68,
            shape: NgmySlideShapeKind.rectangle,
            fillColor: theme.accent.withValues(alpha: 0.06).value,
            strokeColor: theme.accent.withValues(alpha: 0.5).value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.54,
            y: 0.26,
            w: 0.38,
            h: 0.6,
            text: 'Option B',
            fontSize: 20,
            fontWeight: FontWeight.w700,
            color: theme.bodyColor.value,
          ),
        ]);
    }
  }

  static const themes = <NgmySlidesTheme>[
    NgmySlidesTheme(
      id: 'office_blue',
      label: 'Office Blue',
      accent: Color(0xFF2563EB),
      titleColor: Color(0xFF1E3A8A),
      bodyColor: Color(0xFF334155),
      slideBg: Color(0xFFFFFFFF),
    ),
    NgmySlidesTheme(
      id: 'campus_green',
      label: 'Campus Green',
      accent: Color(0xFF059669),
      titleColor: Color(0xFF065F46),
      bodyColor: Color(0xFF374151),
      slideBg: Color(0xFFF0FDF4),
    ),
    NgmySlidesTheme(
      id: 'sunset',
      label: 'Sunset',
      accent: Color(0xFFEA580C),
      titleColor: Color(0xFF9A3412),
      bodyColor: Color(0xFF44403C),
      slideBg: Color(0xFFFFF7ED),
    ),
    NgmySlidesTheme(
      id: 'midnight',
      label: 'Midnight',
      accent: Color(0xFF7C3AED),
      titleColor: Color(0xFFE9D5FF),
      bodyColor: Color(0xFFCBD5E1),
      slideBg: Color(0xFF0F172A),
      slideBgEnd: Color(0xFF1E1B4B),
    ),
    NgmySlidesTheme(
      id: 'classic',
      label: 'Classic',
      accent: Color(0xFFB45309),
      titleColor: Color(0xFF1C1917),
      bodyColor: Color(0xFF57534E),
      slideBg: Color(0xFFFFFBEB),
    ),
  ];

  static NgmySlidesTheme themeById(String id) =>
      themes.firstWhere((t) => t.id == id, orElse: () => themes.first);
}

class NgmySlidesStorage {
  static String _prefsKey(String email) => 'ngmy_slides_decks_${email.toLowerCase().trim()}';

  static Future<List<NgmySlideDeck>> loadDecks(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey(email));
      if (raw == null || raw.trim().isEmpty) return [];
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded
          .whereType<Map>()
          .map((m) => NgmySlideDeck.fromJson(Map<String, dynamic>.from(m)))
          .toList();
    } catch (_) {
      return [];
    }
  }

  static Future<void> saveDecks(String email, List<NgmySlideDeck> decks) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _prefsKey(email),
        jsonEncode(decks.map((d) => d.toJson()).toList()),
      );
    } catch (_) {}
  }
}
