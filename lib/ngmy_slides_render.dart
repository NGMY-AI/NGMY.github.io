import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_hati_kiapo_uongozi.dart';
import 'ngmy_slides_luxe_fx.dart';
import 'ngmy_slides_bio_phone.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_pdf_embed_stub.dart'
    if (dart.library.html) 'ngmy_slides_pdf_embed_web.dart';

/// Shared slide element rendering for canvas, thumbnails, and slideshow.
class NgmySlideElementView extends StatelessWidget {
  const NgmySlideElementView({
    super.key,
    required this.element,
    required this.scale,
    this.editing = false,
    this.selected = false,
    this.compactText = false,
    this.controller,
    this.focusNode,
    this.onTextChanged,
    this.onTap,
    this.onDoubleTap,
    this.showEmptyHint = true,
    this.kiapoVideoCanUpload = false,
  });

  final NgmySlideElement element;
  final double scale;
  final bool editing;
  final bool selected;
  final bool compactText;
  final TextEditingController? controller;
  final FocusNode? focusNode;
  final ValueChanged<String>? onTextChanged;
  final VoidCallback? onTap;
  final VoidCallback? onDoubleTap;

  /// Editor/thumbnail affordance only — "Tap to select · Edit to type" and
  /// the blank-signature icon have no place in Present mode, PDF export, or
  /// print, where an empty field should just read as blank space.
  final bool showEmptyHint;

  /// When true, empty kiapo video slot shows registrar upload hint.
  final bool kiapoVideoCanUpload;

  @override
  Widget build(BuildContext context) {
    if (ngmyKiapoElementIsVideoZone(element)) {
      return NgmyKiapoVideoSlot(
        videoRef: element.imageRef,
        scale: scale,
        emptyHint: showEmptyHint,
        canUpload: kiapoVideoCanUpload,
      );
    }
    switch (element.type) {
      case NgmySlideElementType.text:
        return _textView();
      case NgmySlideElementType.image:
      case NgmySlideElementType.signature:
        return _imageView();
      case NgmySlideElementType.pdf:
        return _pdfView();
      case NgmySlideElementType.shape:
        return CustomPaint(painter: NgmyShapePainter(element), size: Size.infinite);
      case NgmySlideElementType.bio:
        // Links are tappable when shown (not while it's being moved around in the editor).
        return NgmySlideBioPhone(bioJson: element.text, interactive: !editing && onTap == null);
    }
  }

  TextStyle _textStyle() {
    final fx = element.textFx;
    final c = Color(element.color);
    var weight = element.fontWeight;
    var fstyle = element.fontStyle;
    var deco = element.decoration;
    double? spacing;
    Color? bg;
    var color = c;
    List<Shadow>? shadows;
    switch (fx) {
      case 'caps':
        weight = FontWeight.w900;
        spacing = 3 * scale;
      case 'elegant':
        weight = FontWeight.w300;
        fstyle = FontStyle.italic;
        spacing = 1.2 * scale;
      case 'shadow':
        shadows = [Shadow(color: const Color(0x99000000), offset: Offset(0, 4 * scale), blurRadius: 8 * scale)];
      case 'neon':
        shadows = [
          Shadow(color: c, blurRadius: 6 * scale),
          Shadow(color: c, blurRadius: 16 * scale),
          Shadow(color: c.withValues(alpha: 0.8), blurRadius: 30 * scale),
        ];
      case 'marker':
        bg = const Color(0xFFFACC15);
        color = const Color(0xFF111827);
        weight = FontWeight.w900;
      case 'stamp':
        weight = FontWeight.w900;
        spacing = 6 * scale;
        deco = TextDecoration.underline;
    }
    return TextStyle(
      fontSize: element.fontSize * scale,
      fontWeight: weight,
      fontStyle: fstyle,
      decoration: deco,
      color: color,
      backgroundColor: bg,
      letterSpacing: spacing,
      shadows: shadows,
      height: 1.25,
    );
  }

  bool get _upper => element.textFx == 'caps' || element.textFx == 'stamp';

  /// The words, with *starred* parts drawn bigger and heavier when [NgmySlideElement.rich] is on.
  Widget _richOrPlain(String s, TextStyle style, StrutStyle strut, {bool clipSingleLine = false, Paint? stroke}) {
    final shown = _upper ? s.toUpperCase() : s;
    TextStyle st(TextStyle b) => stroke == null
        ? b
        : TextStyle(
            fontSize: b.fontSize,
            fontWeight: b.fontWeight,
            fontStyle: b.fontStyle,
            letterSpacing: b.letterSpacing,
            height: b.height,
            foreground: stroke,
          );
    final parts = element.rich ? shown.split('*') : <String>[shown];
    if (parts.length < 3) {
      return Text(
        parts.join(),
        style: st(style),
        strutStyle: strut,
        textAlign: element.align,
        softWrap: !clipSingleLine,
        maxLines: clipSingleLine ? 1 : null,
        overflow: clipSingleLine ? TextOverflow.clip : TextOverflow.visible,
      );
    }
    return Text.rich(
      TextSpan(children: [
        for (var i = 0; i < parts.length; i++)
          if (parts[i].isNotEmpty)
            TextSpan(
              text: parts[i],
              // Parts between a pair of stars are the big ones; a lone last star stays plain.
              style: (i.isOdd && i < parts.length - 1)
                  ? st(style.copyWith(fontSize: (style.fontSize ?? 24) * 1.7, fontWeight: FontWeight.w900))
                  : st(style),
            ),
      ]),
      style: st(style),
      textAlign: element.align,
    );
  }

  Widget _textView() {
    // Padding must scale with the canvas — otherwise this fixed pixel
    // padding (originally tuned for scale≈1 print/PDF sizing) can exceed a
    // short label's whole box height on a small phone canvas, which pushes
    // the text off-center instead of centering it in the box.
    final pad = compactText
        ? EdgeInsets.symmetric(horizontal: 2 * scale, vertical: 1 * scale)
        : EdgeInsets.fromLTRB(6 * scale, 10 * scale, 6 * scale, 12 * scale);
    final style = _textStyle().copyWith(height: 1.35);
    final strut = StrutStyle(fontSize: element.fontSize * scale, height: 1.35, forceStrutHeight: true);
    final align = _alignToAlignment(element.align);

    Widget child;
    if (editing && controller != null) {
      child = TextField(
        key: ValueKey('slide_tf_${element.id}'),
        controller: controller,
        focusNode: focusNode,
        autofocus: false,
        maxLines: null,
        minLines: 1,
        keyboardType: TextInputType.multiline,
        textInputAction: TextInputAction.newline,
        style: style,
        strutStyle: strut,
        textAlign: element.align,
        textAlignVertical: TextAlignVertical.top,
        cursorColor: const Color(0xFF2563EB),
        decoration: const InputDecoration(
          border: InputBorder.none,
          isDense: true,
          contentPadding: EdgeInsets.zero,
          hintText: 'Type here…',
          hintStyle: TextStyle(color: Color(0xFF94A3B8), fontWeight: FontWeight.w500),
        ),
        onChanged: onTextChanged,
      );
    } else {
      final empty = element.text.trim().isEmpty ||
          element.text.trim().toLowerCase() == 'click to edit text' ||
          element.text.trim().toLowerCase() == 'tap to edit text';
      final showHint = empty && showEmptyHint;
      // Only the short mahari amount blanks are single-line + clipped
      // (so text cannot spill into the AKUNA DENI gap). Tall paragraph
      // fields like the intro frame must keep wrapping — compactText alone
      // is also used for those and must NOT force one line.
      final clipSingleLine = compactText && element.fileName.contains('mahari_');
      child = GestureDetector(
        onTap: onTap,
        onDoubleTap: onDoubleTap,
        behavior: HitTestBehavior.opaque,
        child: (showHint || (element.textFx.isEmpty && !element.rich))
            ? Text(
                showHint ? 'Tap to select · Edit to type' : (empty ? '' : element.text),
                key: ValueKey('slide_txt_${element.id}_${element.text.hashCode}'),
                style: showHint
                    ? style.copyWith(color: Color(element.color).withValues(alpha: 0.45), fontStyle: FontStyle.italic)
                    : style,
                strutStyle: strut,
                textAlign: element.align,
                softWrap: !clipSingleLine,
                maxLines: clipSingleLine ? 1 : null,
                overflow: clipSingleLine ? TextOverflow.clip : TextOverflow.visible,
              )
            : KeyedSubtree(
                key: ValueKey('slide_txt_${element.id}_${element.text.hashCode}_${element.textFx}'),
                child: element.textFx == 'outline'
                    ? Stack(children: [
                        _richOrPlain(
                          element.text,
                          style,
                          element.rich ? const StrutStyle() : strut,
                          stroke: Paint()
                            ..style = PaintingStyle.stroke
                            ..strokeWidth = 3 * scale
                            ..strokeJoin = StrokeJoin.round
                            ..color = const Color(0xFF111827),
                        ),
                        _richOrPlain(element.text, style, element.rich ? const StrutStyle() : strut),
                      ])
                    : _richOrPlain(element.text, style, element.rich ? const StrutStyle() : strut, clipSingleLine: clipSingleLine),
              ),
      );
    }

    return Padding(
      padding: pad,
      child: Align(alignment: align, child: child),
    );
  }

  Alignment _alignToAlignment(TextAlign align) {
    switch (align) {
      case TextAlign.center:
        return Alignment.center;
      case TextAlign.right:
      case TextAlign.end:
        return Alignment.centerRight;
      default:
        return Alignment.centerLeft;
    }
  }

  Widget _imageView() {
    final ref = element.imageRef;
    if (ref == null || !ref.startsWith('data:image')) {
      if (!showEmptyHint) return const SizedBox.shrink();
      return Center(child: Icon(element.type == NgmySlideElementType.signature ? Icons.draw_rounded : Icons.image_not_supported_outlined, color: Colors.white54, size: 32));
    }
    final img = _buildImageMemory(ref);
    if (element.type == NgmySlideElementType.signature) {
      // Padding must scale with the canvas — a fixed 6px padding can eat
      // most (or all) of a small signature box on a phone-sized canvas,
      // squeezing the actual signature down to nothing while the white
      // background still shows, which looked like "nothing appears".
      return Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(6),
          border: Border.all(color: const Color(0xFFCBD5E1)),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 6, offset: const Offset(0, 2))],
        ),
        padding: EdgeInsets.all(2 * scale),
        child: img,
      );
    }
    if (element.frame.isNotEmpty || element.ring.isNotEmpty) {
      // Shaped picture (circle, triangle…) with its ring: fill the shape.
      return ngmyFramedPicture(image: _buildImageMemory(ref, cover: true), frame: element.frame, ring: element.ring);
    }
    return img;
  }

  Widget _buildImageMemory(String ref, {bool cover = false}) {
    try {
      final bytes = base64Decode(ref.split(',').last);
      final coverBg = element.fileName == 'marriage_locked_bg' || element.fileName.endsWith('_bg');
      return Image.memory(
        bytes,
        key: ValueKey('img_${element.id}_${bytes.length}'),
        fit: coverBg || cover ? BoxFit.cover : BoxFit.contain,
        gaplessPlayback: true,
        errorBuilder: (_, __, ___) => const Center(child: Icon(Icons.broken_image_outlined, color: Colors.white54)),
      );
    } catch (_) {
      return const Center(child: Icon(Icons.broken_image_outlined, color: Colors.white54));
    }
  }

  Widget _pdfView() {
    final ref = element.imageRef;
    if (ref == null || ref.isEmpty) {
      return const Center(child: Icon(Icons.picture_as_pdf_rounded, color: Color(0xFFDC2626), size: 40));
    }
    return ngmySlidesPdfEmbed(
      dataUrl: ref,
      pdfPage: element.pdfPage,
      fileName: element.fileName,
    );
  }
}

class NgmyShapePainter extends CustomPainter {
  NgmyShapePainter(this.element);
  final NgmySlideElement element;

  @override
  void paint(Canvas canvas, Size size) {
    final fill = Paint()..color = Color(element.fillColor);
    final stroke = Paint()
      ..color = Color(element.strokeColor)
      ..style = PaintingStyle.stroke
      ..strokeWidth = element.strokeWidth;
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    switch (element.shape) {
      case NgmySlideShapeKind.rectangle:
        canvas.drawRect(rect, fill);
        canvas.drawRect(rect, stroke);
      case NgmySlideShapeKind.circle:
        canvas.drawOval(rect, fill);
        canvas.drawOval(rect, stroke);
      case NgmySlideShapeKind.triangle:
        final path = Path()
          ..moveTo(size.width / 2, 0)
          ..lineTo(size.width, size.height)
          ..lineTo(0, size.height)
          ..close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
      case NgmySlideShapeKind.arrow:
        final path = Path()
          ..moveTo(0, size.height * 0.45)
          ..lineTo(size.width * 0.65, size.height * 0.45)
          ..lineTo(size.width * 0.65, size.height * 0.2)
          ..lineTo(size.width, size.height * 0.5)
          ..lineTo(size.width * 0.65, size.height * 0.8)
          ..lineTo(size.width * 0.65, size.height * 0.55)
          ..lineTo(0, size.height * 0.55)
          ..close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
      case NgmySlideShapeKind.line:
        canvas.drawLine(Offset(0, size.height / 2), Offset(size.width, size.height / 2), stroke..strokeWidth = element.strokeWidth + 2);
      case NgmySlideShapeKind.parallelogram:
        final skew = size.width * 0.22;
        final path = Path()
          ..moveTo(skew, 0)
          ..lineTo(size.width, 0)
          ..lineTo(size.width - skew, size.height)
          ..lineTo(0, size.height)
          ..close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
      case NgmySlideShapeKind.hexagon:
        final cx = size.width / 2;
        final cy = size.height / 2;
        final r = math.min(size.width, size.height) / 2;
        final path = Path();
        for (var i = 0; i < 6; i++) {
          final angle = math.pi / 3 * i - math.pi / 6;
          final x = cx + r * math.cos(angle);
          final y = cy + r * math.sin(angle);
          if (i == 0) {
            path.moveTo(x, y);
          } else {
            path.lineTo(x, y);
          }
        }
        path.close();
        canvas.drawPath(path, fill);
        canvas.drawPath(path, stroke);
    }
  }

  @override
  bool shouldRepaint(covariant NgmyShapePainter oldDelegate) => oldDelegate.element != element;
}

Widget ngmyMiniSlidePreview(NgmySlide slide) {
  return LayoutBuilder(
    builder: (context, c) {
      final w = c.maxWidth;
      final h = c.maxHeight;
      return ClipRRect(
        borderRadius: BorderRadius.circular(6),
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: slide.backgroundEnd != null
                ? LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(slide.background), Color(slide.backgroundEnd!)],
                  )
                : null,
            color: slide.backgroundEnd == null ? Color(slide.background) : null,
          ),
          child: Stack(
            children: slide.elements.take(6).map((e) {
              return Positioned(
                left: e.x * w,
                top: e.y * h,
                width: e.w * w,
                height: e.h * h,
                child: NgmySlideElementView(element: e, scale: w / 960),
              );
            }).toList(),
          ),
        ),
      );
    },
  );
}

String ngmySlideTransitionEmoji(NgmySlideTransition t) {
  switch (t) {
    case NgmySlideTransition.none:
      return '⏭️';
    case NgmySlideTransition.fade:
      return '🌫️';
    case NgmySlideTransition.slideLeft:
      return '⬅️';
    case NgmySlideTransition.slideRight:
      return '➡️';
    case NgmySlideTransition.slideUp:
      return '⬆️';
    case NgmySlideTransition.slideDown:
      return '⬇️';
    case NgmySlideTransition.zoom:
      return '🔍';
    case NgmySlideTransition.zoomOut:
      return '🔎';
    case NgmySlideTransition.flip:
      return '🔄';
    case NgmySlideTransition.flipVertical:
      return '🔃';
    case NgmySlideTransition.rotate3d:
      return '🎡';
    case NgmySlideTransition.cube:
      return '🧊';
    case NgmySlideTransition.blur:
      return '✨';
    case NgmySlideTransition.dissolve:
      return '💫';
    case NgmySlideTransition.wipeLeft:
      return '🧹';
    case NgmySlideTransition.wipeRight:
      return '🧽';
    case NgmySlideTransition.bounce:
      return '🏀';
    case NgmySlideTransition.push:
      return '👉';
    case NgmySlideTransition.flash:
      return '⚡';
    case NgmySlideTransition.spiral:
      return '🌀';
    case NgmySlideTransition.swing:
      return '🎢';
    case NgmySlideTransition.curtain:
      return '🎭';
  }
}

String ngmySlideTransitionChipLabel(NgmySlideTransition tr) {
  if (tr == NgmySlideTransition.none) return 'None';
  return ngmySlideTransitionEmoji(tr);
}

bool _ngmyPreviewDialogOpen = false;

Future<void> _showAutoDismissPreview(
  BuildContext context, {
  required String title,
  required Widget preview,
  Duration duration = const Duration(milliseconds: 1500),
}) async {
  if (!context.mounted) return;
  final nav = Navigator.of(context, rootNavigator: true);
  if (_ngmyPreviewDialogOpen && nav.canPop()) {
    nav.pop();
  }
  _ngmyPreviewDialogOpen = true;
  Timer? timer;
  await showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Animation preview',
    barrierColor: Colors.black87,
    transitionDuration: const Duration(milliseconds: 180),
    pageBuilder: (ctx, anim, secondary) {
      timer = Timer(duration, () {
        if (ctx.mounted && Navigator.of(ctx, rootNavigator: true).canPop()) {
          Navigator.of(ctx, rootNavigator: true).pop();
        }
      });
      return FadeTransition(
        opacity: anim,
        child: Center(
          child: Material(
            color: Colors.transparent,
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 16),
              constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(ctx).width * 0.94),
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
              decoration: BoxDecoration(
                color: const Color(0xFF111827),
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: Colors.white12),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 28, offset: const Offset(0, 12))],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                            const SizedBox(height: 4),
                            Text('Applied — tap Done or wait 1.5 seconds', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11, fontWeight: FontWeight.w600)),
                          ],
                        ),
                      ),
                      TextButton(
                        onPressed: () {
                          timer?.cancel();
                          Navigator.of(ctx, rootNavigator: true).pop();
                        },
                        style: TextButton.styleFrom(
                          foregroundColor: Colors.white,
                          backgroundColor: const Color(0xFF2563EB),
                          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  preview,
                ],
              ),
            ),
          ),
        ),
      );
    },
  );
  timer?.cancel();
  _ngmyPreviewDialogOpen = false;
}

/// Preview a slide transition — applies immediately, auto-closes after 3 seconds.
Future<void> showNgmyTransitionPreview(
  BuildContext context, {
  required NgmySlideTransition transition,
  required VoidCallback onApply,
}) async {
  onApply();
  if (!context.mounted) return;
  final previewW = (MediaQuery.sizeOf(context).width * 0.88).clamp(280.0, 440.0);
  final title = transition == NgmySlideTransition.none
      ? '⏭️ None — no slide transition'
      : '${ngmySlideTransitionEmoji(transition)} Slide transition preview';
  await _showAutoDismissPreview(
    context,
    title: title,
    duration: transition == NgmySlideTransition.none ? const Duration(milliseconds: 800) : const Duration(milliseconds: 1500),
    preview: SizedBox(
      width: previewW,
      height: previewW * 0.56,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: _TransitionPreviewLoop(transition: transition),
      ),
    ),
  );
}

class _TransitionPreviewLoop extends StatefulWidget {
  const _TransitionPreviewLoop({required this.transition});
  final NgmySlideTransition transition;

  @override
  State<_TransitionPreviewLoop> createState() => _TransitionPreviewLoopState();
}

class _TransitionPreviewLoopState extends State<_TransitionPreviewLoop> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Widget _buildSlide(String label, Color color) {
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [color, color.withValues(alpha: 0.7)]),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
    );
  }

  Widget _animatedPreview() {
    final out = _buildSlide('Slide A', const Color(0xFF2563EB));
    final inn = _buildSlide('Slide B', const Color(0xFF059669));
    if (widget.transition == NgmySlideTransition.none) {
      return Stack(
        fit: StackFit.expand,
        children: [
          out,
          Center(child: Text('No transition', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontWeight: FontWeight.w700, fontSize: 16))),
        ],
      );
    }
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (context, _) {
        final t = _ctrl.value;
        switch (widget.transition) {
          case NgmySlideTransition.none:
            return inn;
          case NgmySlideTransition.fade:
          case NgmySlideTransition.dissolve:
            return Stack(fit: StackFit.expand, children: [out, Opacity(opacity: t, child: inn)]);
          case NgmySlideTransition.slideLeft:
          case NgmySlideTransition.push:
            return Stack(fit: StackFit.expand, children: [out, Transform.translate(offset: Offset((1 - t) * 220, 0), child: inn)]);
          case NgmySlideTransition.slideRight:
            return Stack(fit: StackFit.expand, children: [out, Transform.translate(offset: Offset(-(1 - t) * 220, 0), child: inn)]);
          case NgmySlideTransition.slideUp:
          case NgmySlideTransition.curtain:
            return Stack(fit: StackFit.expand, children: [out, Transform.translate(offset: Offset(0, (1 - t) * 140), child: inn)]);
          case NgmySlideTransition.slideDown:
            return Stack(fit: StackFit.expand, children: [out, Transform.translate(offset: Offset(0, -(1 - t) * 140), child: inn)]);
          case NgmySlideTransition.zoom:
            return Stack(fit: StackFit.expand, children: [out, Transform.scale(scale: 0.6 + t * 0.4, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.zoomOut:
            return Stack(fit: StackFit.expand, children: [out, Transform.scale(scale: 1.3 - t * 0.3, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.flip:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY(t * 3.14159),
              child: t < 0.5 ? out : inn,
            );
          case NgmySlideTransition.flipVertical:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX(t * 3.14159),
              child: t < 0.5 ? out : inn,
            );
          case NgmySlideTransition.rotate3d:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..setEntry(3, 2, 0.002)..rotateY(t * 1.2)..rotateX(t * 0.5),
              child: Opacity(opacity: 0.4 + t * 0.6, child: inn),
            );
          case NgmySlideTransition.cube:
            return Transform(
              alignment: Alignment.centerRight,
              transform: Matrix4.identity()..setEntry(3, 2, 0.002)..rotateY(-t * 1.4),
              child: Opacity(opacity: t, child: inn),
            );
          case NgmySlideTransition.blur:
            return Stack(fit: StackFit.expand, children: [out, Opacity(opacity: t, child: Transform.scale(scale: 1.02 - t * 0.02, child: inn))]);
          case NgmySlideTransition.wipeLeft:
            return Stack(fit: StackFit.expand, children: [out, ClipRect(clipper: _WipeClipper(t), child: inn)]);
          case NgmySlideTransition.wipeRight:
            return Stack(fit: StackFit.expand, children: [out, ClipRect(clipper: _WipeClipper(1 - t), child: inn)]);
          case NgmySlideTransition.bounce:
            final bounce = Curves.bounceOut.transform(t);
            return Stack(fit: StackFit.expand, children: [out, Transform.scale(scale: 0.5 + bounce * 0.5, child: Opacity(opacity: t, child: inn))]);
          case NgmySlideTransition.flash:
            return Stack(fit: StackFit.expand, children: [out, Opacity(opacity: t < 0.15 ? 1 : t, child: ColoredBox(color: Colors.white.withValues(alpha: t < 0.15 ? 0.9 : 0), child: inn))]);
          case NgmySlideTransition.spiral:
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..rotateZ(t * 6.28)..scale(t, t),
              child: inn,
            );
          case NgmySlideTransition.swing:
            return Transform.rotate(angle: (t - 0.5) * 0.35, child: Stack(fit: StackFit.expand, children: [out, Opacity(opacity: t, child: inn)]));
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) => _animatedPreview();
}

class _WipeClipper extends CustomClipper<Rect> {
  _WipeClipper(this.progress);
  final double progress;

  @override
  Rect getClip(Size size) => Rect.fromLTWH(0, 0, size.width * progress.clamp(0, 1), size.height);

  @override
  bool shouldReclip(covariant _WipeClipper oldClipper) => oldClipper.progress != progress;
}

/// Wraps a slide element with an entrance animation (text / any element with textTransition set).
class NgmyElementEntrance extends StatefulWidget {
  const NgmyElementEntrance({
    super.key,
    required this.element,
    required this.child,
    this.animate = true,
    this.staggerIndex = 0,
  });

  final NgmySlideElement element;
  final Widget child;
  final bool animate;
  final int staggerIndex;

  @override
  State<NgmyElementEntrance> createState() => _NgmyElementEntranceState();
}

class _NgmyElementEntranceState extends State<NgmyElementEntrance> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 650));
    if (!widget.animate || widget.element.textTransition == NgmySlideTransition.none) {
      _ctrl.value = 1;
      return;
    }
    final delay = widget.element.textAnimDelayMs + widget.staggerIndex * 120;
    Future.delayed(Duration(milliseconds: delay), () {
      if (mounted) _ctrl.forward();
    });
  }

  @override
  void didUpdateWidget(covariant NgmyElementEntrance oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.element.id != widget.element.id ||
        oldWidget.element.textTransition != widget.element.textTransition ||
        oldWidget.staggerIndex != widget.staggerIndex) {
      _ctrl.reset();
      if (!widget.animate || widget.element.textTransition == NgmySlideTransition.none) {
        _ctrl.value = 1;
      } else {
        final delay = widget.element.textAnimDelayMs + widget.staggerIndex * 120;
        Future.delayed(Duration(milliseconds: delay), () {
          if (mounted) _ctrl.forward();
        });
      }
    }
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  Widget _buildAnimated(Widget child, Animation<double> a) =>
      ngmyEntranceAt(widget.element.textTransition, a.value, child);

  @override
  Widget build(BuildContext context) {
    if (widget.element.textTransition == NgmySlideTransition.none || !widget.animate) {
      return widget.child;
    }
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, child) => _buildAnimated(child!, _ctrl),
      child: widget.child,
    );
  }
}

/// An element's entrance at progress [p] (0 → hidden, 1 → in place).
/// Shared by Present mode and the video-motion morph.
Widget ngmyEntranceAt(NgmySlideTransition transition, double p, Widget child) {
    final t = Curves.easeOutCubic.transform(p.clamp(0.0, 1.0));
    switch (transition) {
      case NgmySlideTransition.none:
        return child;
      case NgmySlideTransition.fade:
      case NgmySlideTransition.dissolve:
      case NgmySlideTransition.flash:
        return Opacity(opacity: t, child: child);
      case NgmySlideTransition.slideLeft:
      case NgmySlideTransition.push:
        return Transform.translate(offset: Offset((1 - t) * 48, 0), child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.slideRight:
        return Transform.translate(offset: Offset(-(1 - t) * 48, 0), child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.slideUp:
      case NgmySlideTransition.curtain:
        return Transform.translate(offset: Offset(0, (1 - t) * 36), child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.slideDown:
        return Transform.translate(offset: Offset(0, -(1 - t) * 36), child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.zoom:
      case NgmySlideTransition.bounce:
        return Transform.scale(scale: 0.5 + t * 0.5, child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.zoomOut:
        return Transform.scale(scale: 1.4 - t * 0.4, child: Opacity(opacity: t, child: child));
      case NgmySlideTransition.flip:
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY((1 - t) * 1.2),
          child: Opacity(opacity: t, child: child),
        );
      case NgmySlideTransition.flipVertical:
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateX((1 - t) * 1.2),
          child: Opacity(opacity: t, child: child),
        );
      case NgmySlideTransition.rotate3d:
      case NgmySlideTransition.spiral:
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.002)
            ..rotateZ((1 - t) * 0.8)
            ..scale(0.6 + t * 0.4),
          child: Opacity(opacity: t, child: child),
        );
      case NgmySlideTransition.cube:
      case NgmySlideTransition.blur:
      case NgmySlideTransition.wipeLeft:
      case NgmySlideTransition.wipeRight:
      case NgmySlideTransition.swing:
        return Transform.translate(offset: Offset((1 - t) * 24, 0), child: Opacity(opacity: t, child: child));
    }
  }

/// Slide renderer with animated text/element entrances for Present mode.
class NgmySlideAnimatedRender extends StatelessWidget {
  const NgmySlideAnimatedRender({super.key, required this.slide, this.animate = true, this.livingFx = false});

  final NgmySlide slide;
  final bool animate;
  /// Keep 3D art floating even when entrances are off (after a morph).
  final bool livingFx;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, c) {
        final w = c.maxWidth;
        final h = c.maxHeight;
        var animIndex = 0;
        return DecoratedBox(
          decoration: BoxDecoration(
            gradient: slide.backgroundEnd != null
                ? LinearGradient(colors: [Color(slide.background), Color(slide.backgroundEnd!)])
                : null,
            color: slide.backgroundEnd == null ? Color(slide.background) : null,
          ),
          child: Stack(
            clipBehavior: Clip.none,
            children: slide.elements.map((e) {
              final stagger = e.textTransition != NgmySlideTransition.none ? animIndex++ : 0;
              return Positioned(
                left: e.x * w,
                top: e.y * h,
                width: e.w * w,
                height: e.h * h,
                child: NgmyLoopFx(
                  fx: e.loopFx,
                  enabled: animate || livingFx,
                  seed: e.id.hashCode,
                  child: NgmyElementEntrance(
                    element: e,
                    animate: animate,
                    staggerIndex: stagger,
                    child: NgmySlideElementView(element: e, scale: w / 960, showEmptyHint: false),
                  ),
                ),
              );
            }).toList(),
          ),
        );
      },
    );
  }
}

/// Preview element entrance animation — applies immediately, auto-closes after 3 seconds.
Future<void> showNgmyTextTransitionPreview(
  BuildContext context, {
  required NgmySlideTransition transition,
  required VoidCallback onApply,
}) async {
  onApply();
  if (!context.mounted) return;
  final previewW = (MediaQuery.sizeOf(context).width * 0.88).clamp(300.0, 440.0);
  final title = transition == NgmySlideTransition.none
      ? '⏭️ None — no element animation'
      : '${ngmySlideTransitionEmoji(transition)} Element animation preview';
  await _showAutoDismissPreview(
    context,
    title: title,
    duration: transition == NgmySlideTransition.none ? const Duration(milliseconds: 800) : const Duration(milliseconds: 1500),
    preview: SizedBox(
      width: previewW,
      height: previewW * 0.62,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: _ElementAnimationPreview(transition: transition),
      ),
    ),
  );
}

class _ElementAnimationPreview extends StatefulWidget {
  const _ElementAnimationPreview({required this.transition});
  final NgmySlideTransition transition;

  @override
  State<_ElementAnimationPreview> createState() => _ElementAnimationPreviewState();
}

class _ElementAnimationPreviewState extends State<_ElementAnimationPreview> {
  var _cycle = 0;

  @override
  void initState() {
    super.initState();
    if (widget.transition != NgmySlideTransition.none) {
      Future.delayed(const Duration(milliseconds: 1100), () {
        if (mounted) setState(() => _cycle++);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1E3A8A), Color(0xFF2563EB)],
        ),
      ),
      child: widget.transition == NgmySlideTransition.none
          ? Center(child: Text('No animation on elements', style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w700, fontSize: 16)))
          : Stack(
              children: [
                Positioned(
                  left: 24,
                  top: 28,
                  child: NgmyElementEntrance(
                    key: ValueKey('shape_${widget.transition}_$_cycle'),
                    element: NgmySlideElement(
                      id: 'preview_shape',
                      type: NgmySlideElementType.shape,
                      fillColor: 0xFFF97316,
                      textTransition: widget.transition,
                    ),
                    animate: true,
                    child: Container(
                      width: 72,
                      height: 72,
                      decoration: BoxDecoration(
                        color: const Color(0xFFF97316),
                        borderRadius: BorderRadius.circular(14),
                      ),
                    ),
                  ),
                ),
                Positioned(
                  left: 24,
                  right: 24,
                  bottom: 32,
                  child: NgmyElementEntrance(
                    key: ValueKey('text_${widget.transition}_$_cycle'),
                    element: NgmySlideElement(
                      id: 'preview_text',
                      type: NgmySlideElementType.text,
                      text: 'Element flies in',
                      textTransition: widget.transition,
                      fontSize: 22,
                      color: 0xFFFFFFFF,
                    ),
                    animate: true,
                    staggerIndex: 1,
                    child: Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.14),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: Colors.white24),
                      ),
                      child: const Text('Element flies in', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 20)),
                    ),
                  ),
                ),
              ],
            ),
    );
  }
}

/// Keeps an element alive while its slide is on screen:
/// 'float3d' — bobs and tilts in 3D (3D icons, emoji),
/// 'drift'   — slow wander (background orbs),
/// 'pulse'   — gentle breathing (accent bars).
class NgmyLoopFx extends StatefulWidget {
  const NgmyLoopFx({super.key, required this.fx, required this.child, this.enabled = true, this.seed = 0});
  final String fx;
  final Widget child;
  final bool enabled;
  final int seed;

  @override
  State<NgmyLoopFx> createState() => _NgmyLoopFxState();
}

class _NgmyLoopFxState extends State<NgmyLoopFx> with SingleTickerProviderStateMixin {
  AnimationController? _c;

  bool get _on => widget.enabled && (const {'float3d', 'drift', 'pulse'}.contains(widget.fx) || ngmyIsLuxeFx(widget.fx));

  @override
  void initState() {
    super.initState();
    if (_on) {
      _c = AnimationController(
        vsync: this,
        duration: Duration(milliseconds: ngmyLuxeFxMillis(widget.fx) ?? (widget.fx == 'drift' ? 9000 : (widget.fx == 'pulse' ? 2600 : 4200))),
      )..repeat();
    }
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = _c;
    if (!_on || c == null) return widget.child;
    final phase = (widget.seed % 7) / 7 * math.pi * 2;
    return AnimatedBuilder(
      animation: c,
      child: widget.child,
      builder: (context, child) {
        // From the clock, not the controller, so the motion carries on
        // seamlessly when one slide view hands over to the next.
        final dur = c.duration!.inMilliseconds;
        final a = (DateTime.now().millisecondsSinceEpoch % dur) / dur * math.pi * 2 + phase;
        if (ngmyIsLuxeFx(widget.fx)) return ngmyLuxeFxBuild(widget.fx, a, widget.seed, child!);
        switch (widget.fx) {
          case 'float3d':
            return Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()
                ..setEntry(3, 2, 0.0016)
                ..translate(0.0, math.sin(a) * 7)
                ..rotateY(math.sin(a) * 0.32)
                ..rotateX(math.cos(a) * 0.12)
                ..scale(1 + math.sin(a * 2) * 0.025),
              child: child,
            );
          case 'drift':
            return Transform.translate(
              offset: Offset(math.sin(a) * 14, math.cos(a * 0.8) * 10),
              child: Transform.scale(scale: 1 + math.sin(a * 0.5) * 0.05, child: child),
            );
          default: // pulse
            return Opacity(opacity: 0.82 + math.sin(a) * 0.18, child: Transform.scale(scale: 1 + math.sin(a) * 0.04, child: child));
        }
      },
    );
  }
}

// ── Picture shapes and rings (presentation style) ───────────────────────────

const kNgmySlideFrames = <(String, String)>[
  ('', 'Original'),
  ('circle', 'Circle'),
  ('rounded', 'Rounded'),
  ('triangle', 'Triangle'),
  ('hexagon', 'Hexagon'),
  ('diamond', 'Diamond'),
  ('arch', 'Arch'),
];

const kNgmySlideRings = <(String, String)>[
  ('', 'No ring'),
  ('gold', 'Gold'),
  ('platinum', 'Platinum'),
  ('glow', 'Glow'),
  ('rainbow', 'Rainbow'),
  ('double', 'Double line'),
  ('neon', 'Neon'),
  ('framed', 'Gallery frame'),
  ('rosegold', 'Rose gold'),
  ('jewels', 'Jeweled'),
  ('aurora', 'Aurora'),
];

/// The outline of a picture shape inside [r].
Path ngmySlideFramePath(String frame, Rect r) {
  switch (frame) {
    case 'circle':
      return Path()..addOval(r);
    case 'rounded':
      return Path()..addRRect(RRect.fromRectAndRadius(r, Radius.circular(r.shortestSide * 0.18)));
    case 'triangle':
      return Path()
        ..moveTo(r.center.dx, r.top)
        ..lineTo(r.right, r.bottom)
        ..lineTo(r.left, r.bottom)
        ..close();
    case 'hexagon':
      final p = Path();
      for (var i = 0; i < 6; i++) {
        final a = math.pi / 6 + i * math.pi / 3;
        final pt = Offset(r.center.dx + math.cos(a) * r.width / 2, r.center.dy + math.sin(a) * r.height / 2);
        i == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
      }
      return p..close();
    case 'diamond':
      return Path()
        ..moveTo(r.center.dx, r.top)
        ..lineTo(r.right, r.center.dy)
        ..lineTo(r.center.dx, r.bottom)
        ..lineTo(r.left, r.center.dy)
        ..close();
    case 'arch':
      return Path()
        ..moveTo(r.left, r.bottom)
        ..lineTo(r.left, r.top + r.width / 2)
        ..arcToPoint(Offset(r.right, r.top + r.width / 2), radius: Radius.circular(r.width / 2))
        ..lineTo(r.right, r.bottom)
        ..close();
    default:
      return Path()..addRect(r);
  }
}

class _FrameClipper extends CustomClipper<Path> {
  _FrameClipper(this.frame, this.inset);
  final String frame;
  final double inset;
  @override
  Path getClip(Size s) => ngmySlideFramePath(frame, (Offset.zero & s).deflate(inset));
  @override
  bool shouldReclip(covariant _FrameClipper old) => old.frame != frame || old.inset != inset;
}

class _RingPainter extends CustomPainter {
  _RingPainter(this.frame, this.ring, this.inset);
  final String frame;
  final String ring;
  final double inset;

  @override
  void paint(Canvas canvas, Size s) {
    final r = (Offset.zero & s).deflate(inset);
    final path = ngmySlideFramePath(frame, r);
    final w = s.shortestSide;
    Paint stroke(double width) => Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = width
      ..strokeJoin = StrokeJoin.round;
    switch (ring) {
      case 'gold':
        canvas.drawPath(path, stroke(w * 0.045)
          ..shader = const SweepGradient(colors: [Color(0xFFFDE68A), Color(0xFFB8860B), Color(0xFFF5C451), Color(0xFF8A6417), Color(0xFFFDE68A)]).createShader(r));
        canvas.drawPath(ngmySlideFramePath(frame, r.deflate(w * 0.03)), stroke(w * 0.006)..color = const Color(0x99FFF7E6));
      case 'platinum':
        canvas.drawPath(path, stroke(w * 0.04)
          ..shader = const SweepGradient(colors: [Color(0xFFF8FAFC), Color(0xFF94A3B8), Color(0xFFE2E8F0), Color(0xFF64748B), Color(0xFFF8FAFC)]).createShader(r));
      case 'glow':
        canvas.drawPath(path, stroke(w * 0.05)
          ..color = Colors.white.withValues(alpha: 0.55)
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, w * 0.04));
        canvas.drawPath(path, stroke(w * 0.012)..color = Colors.white);
      case 'rainbow':
        canvas.drawPath(path, stroke(w * 0.04)
          ..shader = const SweepGradient(colors: [Color(0xFFF472B6), Color(0xFFA78BFA), Color(0xFF22D3EE), Color(0xFF4ADE80), Color(0xFFFACC15), Color(0xFFF472B6)]).createShader(r));
      case 'double':
        canvas.drawPath(path, stroke(w * 0.012)..color = Colors.white);
        canvas.drawPath(ngmySlideFramePath(frame, r.inflate(w * 0.03)), stroke(w * 0.008)..color = Colors.white.withValues(alpha: 0.75));
      case 'neon':
        canvas.drawPath(path, stroke(w * 0.06)
          ..color = const Color(0xFF22D3EE).withValues(alpha: 0.7)
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, w * 0.035));
        canvas.drawPath(path, stroke(w * 0.016)..color = const Color(0xFFA5F3FC));
      case 'rosegold':
        canvas.drawPath(path, stroke(w * 0.05)
          ..shader = const SweepGradient(colors: [Color(0xFFFBCFE8), Color(0xFFB76E79), Color(0xFFF9D5D3), Color(0xFF9D4E5C), Color(0xFFFBCFE8)]).createShader(r));
        canvas.drawPath(ngmySlideFramePath(frame, r.deflate(w * 0.032)), stroke(w * 0.006)..color = const Color(0xCCFFF1F2));
        canvas.drawPath(ngmySlideFramePath(frame, r.inflate(w * 0.03)), stroke(w * 0.004)..color = const Color(0x99E8B4B8));
      case 'jewels':
        // Gold band set with sparkling gems all the way round.
        canvas.drawPath(path, stroke(w * 0.055)
          ..shader = const SweepGradient(colors: [Color(0xFFFDE68A), Color(0xFFB8860B), Color(0xFFF5C451), Color(0xFF8A6417), Color(0xFFFDE68A)]).createShader(r));
        const gems = [Color(0xFFFFFFFF), Color(0xFFE11D48), Color(0xFF38BDF8), Color(0xFF10B981)];
        for (final metric in path.computeMetrics()) {
          final count = (metric.length / (w * 0.09)).floor().clamp(8, 40);
          for (var i = 0; i < count; i++) {
            final pos = metric.getTangentForOffset(metric.length * i / count)?.position;
            if (pos == null) continue;
            final col = gems[i % gems.length];
            canvas.drawCircle(pos, w * 0.018, Paint()..color = col);
            canvas.drawCircle(pos.translate(-w * 0.006, -w * 0.006), w * 0.006, Paint()..color = Colors.white.withValues(alpha: 0.9));
          }
        }
      case 'aurora':
        canvas.drawPath(path, stroke(w * 0.08)
          ..shader = const SweepGradient(colors: [Color(0xFF34D399), Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6), Color(0xFF34D399)]).createShader(r)
          ..maskFilter = MaskFilter.blur(BlurStyle.normal, w * 0.03));
        canvas.drawPath(path, stroke(w * 0.018)
          ..shader = const SweepGradient(colors: [Color(0xFFA7F3D0), Color(0xFFA5F3FC), Color(0xFFDDD6FE), Color(0xFFFBCFE8), Color(0xFFA7F3D0)]).createShader(r));
      case 'framed':
        canvas.drawPath(path, stroke(w * 0.07)..color = Colors.white);
        canvas.drawPath(ngmySlideFramePath(frame, r.deflate(w * 0.035)), stroke(w * 0.004)..color = const Color(0x33000000));
    }
  }

  @override
  bool shouldRepaint(covariant _RingPainter old) => old.frame != frame || old.ring != ring || old.inset != inset;
}

/// A picture in its shape, with its ring, as big as fits.
Widget ngmyFramedPicture({required Widget image, required String frame, required String ring}) {
  final square = const {'circle', 'triangle', 'hexagon', 'diamond'}.contains(frame);
  return LayoutBuilder(builder: (context, c) {
    final side = math.min(c.maxWidth, c.maxHeight);
    final size = square || frame.isEmpty && ring.isNotEmpty ? Size.square(side) : Size(c.maxWidth, c.maxHeight);
    final shape = frame.isEmpty ? 'rounded' : frame;
    final inset = ring.isEmpty ? 0.0 : size.shortestSide * (ring == 'framed' ? 0.07 : 0.05);
    return Center(
      child: SizedBox(
        width: size.width,
        height: size.height,
        child: Stack(
          fit: StackFit.expand,
          children: [
            if (ring == 'framed' || ring == 'gold')
              // Soft drop shadow under the picture.
              CustomPaint(painter: _ShadowPainter(shape, inset)),
            ClipPath(clipper: _FrameClipper(shape, inset), child: image),
            if (ring.isNotEmpty) CustomPaint(painter: _RingPainter(shape, ring, inset)),
          ],
        ),
      ),
    );
  });
}

class _ShadowPainter extends CustomPainter {
  _ShadowPainter(this.frame, this.inset);
  final String frame;
  final double inset;
  @override
  void paint(Canvas canvas, Size s) {
    canvas.drawShadow(ngmySlideFramePath(frame, (Offset.zero & s).deflate(inset)), Colors.black, s.shortestSide * 0.05, false);
  }

  @override
  bool shouldRepaint(covariant _ShadowPainter old) => old.frame != frame || old.inset != inset;
}
