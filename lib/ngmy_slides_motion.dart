import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';

/// Video motion ("morph"): the moment between two slides, drawn as one moving
/// scene. Elements that appear on both slides — same morph key, same picture,
/// same words, or the same kind of shape — glide, grow and recolour from
/// where they were to where they go next, while the background flows into the
/// new colours. Everything else fades out, or arrives with its own entrance.

/// Which element of [from] each element of [to] continues (by element id of [to]).
Map<String, NgmySlideElement> ngmyMorphPairs(NgmySlide from, NgmySlide to) {
  final out = <String, NgmySlideElement>{};
  final used = <String>{};
  void tryPair(bool Function(NgmySlideElement a, NgmySlideElement b) same) {
    for (final b in to.elements) {
      if (out.containsKey(b.id)) continue;
      for (final a in from.elements) {
        if (used.contains(a.id) || a.type != b.type) continue;
        if (same(a, b)) {
          out[b.id] = a;
          used.add(a.id);
          break;
        }
      }
    }
  }

  tryPair((a, b) => a.morphKey.isNotEmpty && a.morphKey == b.morphKey);
  tryPair((a, b) => (a.imageRef ?? '').isNotEmpty && a.imageRef == b.imageRef);
  tryPair((a, b) => a.type == NgmySlideElementType.text && a.text.trim().isNotEmpty && a.text.trim() == b.text.trim());
  tryPair((a, b) => a.type == NgmySlideElementType.shape && a.shape == b.shape && a.morphKey.isEmpty && b.morphKey.isEmpty);
  return out;
}

double _lerp(double a, double b, double t) => a + (b - a) * t;

class NgmySlideMorph extends StatelessWidget {
  const NgmySlideMorph({super.key, required this.from, required this.to, required this.t});
  final NgmySlide from;
  final NgmySlide to;

  /// 0 = [from] exactly, 1 = [to] exactly.
  final double t;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      final w = c.maxWidth;
      final h = c.maxHeight;
      final scale = w / 960;
      final pairs = ngmyMorphPairs(from, to);
      final matchedFrom = pairs.values.map((e) => e.id).toSet();
      final e = Curves.easeInOutCubic.transform(t.clamp(0.0, 1.0));

      Color bg(NgmySlide s, bool end) => Color(end ? (s.backgroundEnd ?? s.background) : s.background);
      final bg1 = Color.lerp(bg(from, false), bg(to, false), e)!;
      final bg2 = Color.lerp(bg(from, true), bg(to, true), e)!;

      Widget place(double x, double y, double ew, double eh, Widget child) =>
          Positioned(left: x * w, top: y * h, width: ew * w, height: eh * h, child: child);

      Widget view(NgmySlideElement el) => NgmyLoopFx(
            fx: el.loopFx,
            seed: el.id.hashCode,
            child: NgmySlideElementView(element: el, scale: scale, showEmptyHint: false),
          );

      final children = <Widget>[];

      // 1) Leaving: what isn't on the next slide fades and eases away.
      for (final a in from.elements) {
        if (matchedFrom.contains(a.id)) continue;
        final out = Curves.easeIn.transform((t / 0.55).clamp(0.0, 1.0));
        children.add(place(
          a.x,
          a.y,
          a.w,
          a.h,
          Opacity(
            opacity: (1 - out).clamp(0.0, 1.0),
            child: Transform.translate(
              offset: Offset(-out * 30 * scale, 0),
              child: Transform.scale(scale: 1 - out * 0.06, child: view(a)),
            ),
          ),
        ));
      }

      // 2) Continuing and arriving, in the next slide's layer order.
      var arriving = 0;
      for (final b in to.elements) {
        final a = pairs[b.id];
        if (a != null) {
          final x = _lerp(a.x, b.x, e);
          final y = _lerp(a.y, b.y, e);
          final ew = _lerp(a.w, b.w, e);
          final eh = _lerp(a.h, b.h, e);
          final rot = _lerp(a.rotation, b.rotation, e);
          Widget content;
          if (b.type == NgmySlideElementType.shape) {
            final blend = b.copy()
              ..fillColor = Color.lerp(Color(a.fillColor), Color(b.fillColor), e)!.toARGB32()
              ..strokeColor = Color.lerp(Color(a.strokeColor), Color(b.strokeColor), e)!.toARGB32()
              ..rotation = 0;
            content = view(blend);
          } else if (b.type == NgmySlideElementType.image && a.imageRef == b.imageRef) {
            content = view(b);
          } else {
            // Words or pictures that change: cross-fade while they travel.
            content = Stack(
              fit: StackFit.expand,
              children: [
                Opacity(opacity: (1 - e).clamp(0.0, 1.0), child: view(a)),
                Opacity(opacity: e.clamp(0.0, 1.0), child: view(b)),
              ],
            );
          }
          children.add(place(x, y, ew, eh, rot == 0 ? content : Transform.rotate(angle: rot, child: content)));
        } else {
          // New on this slide: its own entrance, staggered, in the second half.
          final start = 0.35 + arriving * 0.07;
          final p = ((t - start) / 0.5).clamp(0.0, 1.0);
          arriving++;
          final tr = b.textTransition == NgmySlideTransition.none ? NgmySlideTransition.zoom : b.textTransition;
          children.add(place(b.x, b.y, b.w, b.h, ngmyEntranceAt(tr, p, view(b))));
        }
      }

      return DecoratedBox(
        decoration: BoxDecoration(gradient: LinearGradient(colors: [bg1, bg2])),
        child: Stack(clipBehavior: Clip.hardEdge, children: children),
      );
    });
  }
}

/// A slow, continuous camera move over the whole show (no jump between
/// slides, unlike a per-slide zoom): gentle push-in and drift.
class NgmyCinematicCamera extends StatefulWidget {
  const NgmyCinematicCamera({super.key, required this.child});
  final Widget child;
  @override
  State<NgmyCinematicCamera> createState() => _NgmyCinematicCameraState();
}

class _NgmyCinematicCameraState extends State<NgmyCinematicCamera> with SingleTickerProviderStateMixin {
  late final AnimationController _tick = AnimationController(vsync: this, duration: const Duration(seconds: 1))..repeat();

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _tick,
      child: widget.child,
      builder: (context, child) {
        final s = DateTime.now().millisecondsSinceEpoch / 1000.0;
        final zoom = 1.035 + math.sin(s * 2 * math.pi / 18) * 0.03;
        final ax = math.sin(s * 2 * math.pi / 23) * 0.6;
        final ay = math.cos(s * 2 * math.pi / 29) * 0.5;
        return Transform.scale(scale: zoom, alignment: Alignment(ax, ay), child: child);
      },
    );
  }
}
