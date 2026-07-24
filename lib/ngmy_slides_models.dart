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

enum NgmySlideElementType { text, image, shape, pdf, signature }

enum NgmySlideAspectRatio {
  landscape169,
  portrait916,
}

enum NgmySlideShapeKind { rectangle, circle, triangle, arrow, line, parallelogram, hexagon }

enum NgmySlideLayout {
  blank,
  title,
  titleContent,
  twoColumn,
  section,
  comparison,
  flashcard,
  quiz,
  worksheet,
}

enum NgmySlideTransition {
  none,
  fade,
  slideLeft,
  slideRight,
  slideUp,
  slideDown,
  zoom,
  zoomOut,
  flip,
  flipVertical,
  rotate3d,
  cube,
  blur,
  dissolve,
  wipeLeft,
  wipeRight,
  bounce,
  push,
  flash,
  spiral,
  swing,
  curtain,
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
    this.fileName = '',
    this.pdfPage = 0,
    this.textTransition = NgmySlideTransition.none,
    this.textAnimDelayMs = 0,
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
  String fileName;
  int pdfPage;
  NgmySlideTransition textTransition;
  int textAnimDelayMs;

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
        fileName: fileName,
        pdfPage: pdfPage,
        textTransition: textTransition,
        textAnimDelayMs: textAnimDelayMs,
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
        'fileName': fileName,
        'pdfPage': pdfPage,
        'textTransition': textTransition.name,
        'textAnimDelayMs': textAnimDelayMs,
      };

  factory NgmySlideElement.fromJson(Map<String, dynamic> json) {
    final fwIndex = (json['fontWeight'] as num?)?.toInt() ?? FontWeight.w600.index;
    final fsIndex = (json['fontStyle'] as num?)?.toInt() ?? FontStyle.normal.index;
    final alignIndex = (json['align'] as num?)?.toInt() ?? TextAlign.left.index;
    return NgmySlideElement(
      id: (json['id'] ?? '').toString(),
      type: _elementTypeFromJson(json['type']),
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
      fileName: (json['fileName'] ?? '').toString(),
      pdfPage: (json['pdfPage'] as num?)?.toInt() ?? 0,
      textTransition: _transitionFromJson(json['textTransition']),
      textAnimDelayMs: (json['textAnimDelayMs'] as num?)?.toInt() ?? 0,
    );
  }
}

NgmySlideTransition _transitionFromJson(Object? raw) {
  final name = (raw ?? 'fade').toString();
  for (final t in NgmySlideTransition.values) {
    if (t.name == name) return t;
  }
  return NgmySlideTransition.fade;
}

NgmySlideElementType _elementTypeFromJson(Object? raw) {
  final name = (raw ?? 'text').toString();
  for (final t in NgmySlideElementType.values) {
    if (t.name == name) return t;
  }
  return NgmySlideElementType.text;
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
    this.durationSeconds = 0,
    this.slideDesignId = '',
    this.designRevision = 0,
    List<NgmySlideElement>? elements,
  }) : elements = elements ?? [];

  final String id;
  String title;
  String notes;
  NgmySlideLayout layout;
  int background;
  int? backgroundEnd;
  NgmySlideTransition transition;
  int durationSeconds;
  /// Active slide design template id — used to replace (not stack) design layers.
  String slideDesignId;
  /// Bumped on each design apply so canvas rebuilds cleanly.
  int designRevision;
  List<NgmySlideElement> elements;

  NgmySlide copy() => NgmySlide(
        id: id,
        title: title,
        notes: notes,
        layout: layout,
        background: background,
        backgroundEnd: backgroundEnd,
        transition: transition,
        durationSeconds: durationSeconds,
        slideDesignId: slideDesignId,
        designRevision: designRevision,
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
        'durationSeconds': durationSeconds,
        'slideDesignId': slideDesignId,
        'designRevision': designRevision,
        'elements': elements.map((e) => e.toJson()).toList(),
      };

  factory NgmySlide.fromJson(Map<String, dynamic> json) => NgmySlide(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        notes: (json['notes'] ?? '').toString(),
        layout: _layoutFromJson(json['layout']),
        background: (json['background'] as num?)?.toInt() ?? 0xFFFFFFFF,
        backgroundEnd: (json['backgroundEnd'] as num?)?.toInt(),
        transition: _transitionFromJson(json['transition']),
        durationSeconds: (json['durationSeconds'] as num?)?.toInt() ?? 0,
        slideDesignId: (json['slideDesignId'] ?? '').toString(),
        designRevision: (json['designRevision'] as num?)?.toInt() ?? 0,
        elements: (json['elements'] as List?)
                ?.whereType<Map>()
                .map((e) => NgmySlideElement.fromJson(Map<String, dynamic>.from(e)))
                .toList() ??
            [],
      );
}

NgmySlideLayout _layoutFromJson(Object? raw) {
  final name = (raw ?? 'titleContent').toString();
  for (final l in NgmySlideLayout.values) {
    if (l.name == name) return l;
  }
  return NgmySlideLayout.titleContent;
}

class NgmySlideDeck {
  NgmySlideDeck({
    required this.id,
    required this.name,
    this.themeId = 'office_blue',
    this.aspectRatio = NgmySlideAspectRatio.landscape169,
    this.autoAdvanceSeconds = 5,
    this.deckKind,
    this.marriageState,
    this.signatureStrokeWidth,
    this.signatureInkColor,
    DateTime? updatedAt,
    List<NgmySlide>? slides,
  })  : updatedAt = updatedAt ?? DateTime.now(),
        slides = slides ?? [NgmySlidesTemplates.blankSlide()];

  final String id;
  String name;
  String themeId;
  NgmySlideAspectRatio aspectRatio;
  int autoAdvanceSeconds;
  DateTime updatedAt;
  List<NgmySlide> slides;
  /// e.g. `marriage_agreement` for Congolese marriage certificates.
  String? deckKind;
  String? marriageState;
  /// Ink stroke width chosen on the document's first signature — reused as
  /// the default for every later signature box on this deck.
  double? signatureStrokeWidth;
  /// ARGB ink color from the first signature (same propagation as stroke).
  int? signatureInkColor;

  bool get isMarriageAgreement => deckKind == 'marriage_agreement';

  /// Any "locked template" document (Marriage Agreement, Hati ya Kuhowa,
  /// and future document categories) — these share the tap-to-fill-only
  /// editing behavior: everything except the blank fields and sign zones
  /// is locked in place.
  bool get isLockedTemplateDoc => deckKind == 'marriage_agreement' || deckKind == 'hati_kuhowa' || deckKind == 'hati_kuhoweya';

  double get aspectValue => aspectRatio == NgmySlideAspectRatio.portrait916 ? 9 / 16 : 16 / 9;

  NgmySlideDeck copy() => NgmySlideDeck(
        id: id,
        name: name,
        themeId: themeId,
        aspectRatio: aspectRatio,
        autoAdvanceSeconds: autoAdvanceSeconds,
        updatedAt: updatedAt,
        deckKind: deckKind,
        marriageState: marriageState,
        signatureStrokeWidth: signatureStrokeWidth,
        signatureInkColor: signatureInkColor,
        slides: slides.map((s) => s.copy()).toList(),
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'themeId': themeId,
        'aspectRatio': aspectRatio.name,
        'autoAdvanceSeconds': autoAdvanceSeconds,
        'updatedAt': updatedAt.toUtc().toIso8601String(),
        if (deckKind != null) 'deckKind': deckKind,
        if (marriageState != null) 'marriageState': marriageState,
        if (signatureStrokeWidth != null) 'signatureStrokeWidth': signatureStrokeWidth,
        if (signatureInkColor != null) 'signatureInkColor': signatureInkColor,
        'slides': slides.map((s) => s.toJson()).toList(),
      };

  factory NgmySlideDeck.fromJson(Map<String, dynamic> json) => NgmySlideDeck(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? 'Untitled Presentation').toString(),
        themeId: (json['themeId'] ?? 'office_blue').toString(),
        aspectRatio: _aspectFromJson(json['aspectRatio']),
        autoAdvanceSeconds: (json['autoAdvanceSeconds'] as num?)?.toInt().clamp(1, 120) ?? 5,
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
        deckKind: json['deckKind']?.toString(),
        marriageState: json['marriageState']?.toString(),
        signatureStrokeWidth: (json['signatureStrokeWidth'] as num?)?.toDouble(),
        signatureInkColor: (json['signatureInkColor'] as num?)?.toInt(),
        slides: (json['slides'] as List?)
                ?.whereType<Map>()
                .map((s) => NgmySlide.fromJson(Map<String, dynamic>.from(s)))
                .toList() ??
            [NgmySlidesTemplates.blankSlide()],
      );
}

NgmySlideAspectRatio _aspectFromJson(Object? raw) {
  final name = (raw ?? 'landscape169').toString();
  for (final a in NgmySlideAspectRatio.values) {
    if (a.name == name) return a;
  }
  return NgmySlideAspectRatio.landscape169;
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
  // Flutter Web's DateTime only ticks at millisecond resolution under the
  // hood, so a synchronous loop building many elements (e.g. a locked
  // template document) can call this dozens of times within the same
  // millisecond and get identical "microsecond" timestamps. A counter
  // suffix guarantees every id is unique regardless of how fast this is
  // called — duplicate ids caused tapping one field to select every other
  // element that happened to share its timestamp.
  static int _idCounter = 0;
  static String newId() => '${DateTime.now().microsecondsSinceEpoch}_${_idCounter++}';

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
            text: '• Tap text to select, then Edit to type\n• Use Format for size & color\n• Add images and shapes from Insert',
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
      case NgmySlideLayout.flashcard:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.1,
            y: 0.12,
            w: 0.8,
            h: 0.35,
            text: 'TERM / QUESTION',
            fontSize: 36,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
            align: TextAlign.center,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.1,
            y: 0.52,
            w: 0.8,
            h: 0.35,
            text: 'Definition or answer — flip mentally when presenting',
            fontSize: 22,
            fontWeight: FontWeight.w500,
            color: theme.bodyColor.value,
            align: TextAlign.center,
          ),
        ]);
      case NgmySlideLayout.quiz:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.06,
            w: 0.88,
            h: 0.18,
            text: 'Quiz Question',
            fontSize: 28,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.08,
            y: 0.28,
            w: 0.84,
            h: 0.62,
            text: 'A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice',
            fontSize: 20,
            color: theme.bodyColor.value,
          ),
        ]);
      case NgmySlideLayout.worksheet:
        slide.elements.addAll([
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.04,
            w: 0.88,
            h: 0.1,
            text: 'Worksheet / Assignment',
            fontSize: 26,
            fontWeight: FontWeight.w900,
            color: theme.titleColor.value,
          ),
          NgmySlideElement(
            id: newId(),
            type: NgmySlideElementType.text,
            x: 0.06,
            y: 0.16,
            w: 0.88,
            h: 0.78,
            text: 'Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________',
            fontSize: 18,
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
      slideBgEnd: Color(0xFFEFF6FF),
    ),
    NgmySlidesTheme(
      id: 'campus_green',
      label: 'Campus Green',
      accent: Color(0xFF059669),
      titleColor: Color(0xFF065F46),
      bodyColor: Color(0xFF374151),
      slideBg: Color(0xFFF0FDF4),
      slideBgEnd: Color(0xFFD1FAE5),
    ),
    NgmySlidesTheme(
      id: 'sunset',
      label: 'Sunset',
      accent: Color(0xFFEA580C),
      titleColor: Color(0xFF9A3412),
      bodyColor: Color(0xFF44403C),
      slideBg: Color(0xFFFFF7ED),
      slideBgEnd: Color(0xFFFED7AA),
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
      slideBgEnd: Color(0xFFFEF3C7),
    ),
    NgmySlidesTheme(
      id: 'rose_gold',
      label: 'Rose Gold',
      accent: Color(0xFFE11D48),
      titleColor: Color(0xFF881337),
      bodyColor: Color(0xFF4C0519),
      slideBg: Color(0xFFFFF1F2),
      slideBgEnd: Color(0xFFFECDD3),
    ),
    NgmySlidesTheme(
      id: 'ocean_teal',
      label: 'Ocean Teal',
      accent: Color(0xFF0D9488),
      titleColor: Color(0xFF115E59),
      bodyColor: Color(0xFF134E4A),
      slideBg: Color(0xFFF0FDFA),
      slideBgEnd: Color(0xFF99F6E4),
    ),
    NgmySlidesTheme(
      id: 'slate_pro',
      label: 'Slate Pro',
      accent: Color(0xFF475569),
      titleColor: Color(0xFF0F172A),
      bodyColor: Color(0xFF334155),
      slideBg: Color(0xFFF8FAFC),
      slideBgEnd: Color(0xFFE2E8F0),
    ),
    NgmySlidesTheme(
      id: 'neon_night',
      label: 'Neon Night',
      accent: Color(0xFF22D3EE),
      titleColor: Color(0xFF67E8F9),
      bodyColor: Color(0xFFE2E8F0),
      slideBg: Color(0xFF020617),
      slideBgEnd: Color(0xFF0F172A),
    ),
    NgmySlidesTheme(
      id: 'lavender',
      label: 'Lavender',
      accent: Color(0xFF8B5CF6),
      titleColor: Color(0xFF5B21B6),
      bodyColor: Color(0xFF4C1D95),
      slideBg: Color(0xFFF5F3FF),
      slideBgEnd: Color(0xFFDDD6FE),
    ),
    NgmySlidesTheme(id: 'coral', label: 'Coral', accent: Color(0xFFF97316), titleColor: Color(0xFF9A3412), bodyColor: Color(0xFF431407), slideBg: Color(0xFFFFF7ED), slideBgEnd: Color(0xFFFDBA74)),
    NgmySlidesTheme(id: 'forest', label: 'Forest', accent: Color(0xFF166534), titleColor: Color(0xFF14532D), bodyColor: Color(0xFF1F2937), slideBg: Color(0xFFECFDF5), slideBgEnd: Color(0xFF86EFAC)),
    NgmySlidesTheme(id: 'berry', label: 'Berry', accent: Color(0xFFA855F7), titleColor: Color(0xFF6B21A8), bodyColor: Color(0xFF3B0764), slideBg: Color(0xFFFAF5FF), slideBgEnd: Color(0xFFE9D5FF)),
    NgmySlidesTheme(id: 'sand', label: 'Sand', accent: Color(0xFFD97706), titleColor: Color(0xFF92400E), bodyColor: Color(0xFF44403C), slideBg: Color(0xFFFFFBEB), slideBgEnd: Color(0xFFFDE68A)),
    NgmySlidesTheme(id: 'ice', label: 'Ice', accent: Color(0xFF0284C7), titleColor: Color(0xFF075985), bodyColor: Color(0xFF334155), slideBg: Color(0xFFF0F9FF), slideBgEnd: Color(0xFFBAE6FD)),
    NgmySlidesTheme(id: 'charcoal', label: 'Charcoal', accent: Color(0xFF64748B), titleColor: Color(0xFFF8FAFC), bodyColor: Color(0xFFCBD5E1), slideBg: Color(0xFF1E293B), slideBgEnd: Color(0xFF0F172A)),
    NgmySlidesTheme(id: 'mint', label: 'Mint', accent: Color(0xFF10B981), titleColor: Color(0xFF047857), bodyColor: Color(0xFF065F46), slideBg: Color(0xFFECFDF5), slideBgEnd: Color(0xFFA7F3D0)),
    NgmySlidesTheme(id: 'crimson', label: 'Crimson', accent: Color(0xFFDC2626), titleColor: Color(0xFF991B1B), bodyColor: Color(0xFF450A0A), slideBg: Color(0xFFFEF2F2), slideBgEnd: Color(0xFFFECACA)),
    NgmySlidesTheme(id: 'gold', label: 'Gold', accent: Color(0xFFEAB308), titleColor: Color(0xFF854D0E), bodyColor: Color(0xFF422006), slideBg: Color(0xFFFEFCE8), slideBgEnd: Color(0xFFFEF08A)),
    NgmySlidesTheme(id: 'aqua', label: 'Aqua', accent: Color(0xFF06B6D4), titleColor: Color(0xFF155E75), bodyColor: Color(0xFF164E63), slideBg: Color(0xFFECFEFF), slideBgEnd: Color(0xFFA5F3FC)),
    NgmySlidesTheme(id: 'plum', label: 'Plum', accent: Color(0xFF9333EA), titleColor: Color(0xFF581C87), bodyColor: Color(0xFF3B0764), slideBg: Color(0xFFFDF4FF), slideBgEnd: Color(0xFFF0ABFC)),
    NgmySlidesTheme(id: 'steel', label: 'Steel', accent: Color(0xFF3B82F6), titleColor: Color(0xFF1E3A8A), bodyColor: Color(0xFF1E293B), slideBg: Color(0xFFEFF6FF), slideBgEnd: Color(0xFFBFDBFE)),
  ];

  static void applyThemeToDeck(NgmySlideDeck deck, NgmySlidesTheme theme) {
    deck.themeId = theme.id;
    for (final slide in deck.slides) {
      slide.background = theme.slideBg.value;
      slide.backgroundEnd = theme.slideBgEnd?.value;
      for (final e in slide.elements) {
        switch (e.type) {
          case NgmySlideElementType.text:
            if (e.fontSize >= 28 || e.fontWeight.index >= FontWeight.w800.index) {
              e.color = theme.titleColor.value;
            } else {
              e.color = theme.bodyColor.value;
            }
          case NgmySlideElementType.shape:
            e.fillColor = theme.accent.withValues(alpha: 0.22).value;
            e.strokeColor = theme.accent.value;
          default:
            break;
        }
      }
    }
  }

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
