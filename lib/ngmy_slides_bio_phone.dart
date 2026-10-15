import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_renderer.dart';

/// A Bio link page on a slide, shown on the screen of a modern iPhone (titanium frame,
/// Dynamic Island, side buttons, glass glare). Its links are real — tap one in Present mode
/// and it opens. The element's `text` holds the Bio as JSON.

/// The phone's screen in logical pixels (iPhone-style 19.5:9).
const double _kScreenW = 390;
const double _kScreenH = 844;
const double _kBezel = 13;

/// Bio JSON for a slide element (kept as-is, so links and pictures come along).
String ngmyBioToSlideText(NgmyBioDocument doc) => jsonEncode(doc.toJson());

NgmyBioDocument? ngmyBioFromSlideText(String text) {
  try {
    final m = jsonDecode(text);
    if (m is Map) return NgmyBioDocument.fromJson(Map<String, dynamic>.from(m));
  } catch (_) {}
  return null;
}

/// A slide box shaped like the phone: width : height.
const double kNgmyBioPhoneAspect = (_kScreenW + _kBezel * 2) / (_kScreenH + _kBezel * 2);

class NgmySlideBioPhone extends StatelessWidget {
  const NgmySlideBioPhone({super.key, required this.bioJson, this.interactive = true});

  final String bioJson;
  final bool interactive;

  @override
  Widget build(BuildContext context) {
    final doc = ngmyBioFromSlideText(bioJson);
    return FittedBox(
      fit: BoxFit.contain,
      child: SizedBox(
        width: _kScreenW + _kBezel * 2,
        height: _kScreenH + _kBezel * 2,
        child: _Phone(
          child: doc == null
              ? const ColoredBox(
                  color: Color(0xFF0B0B0F),
                  child: Center(child: Text('Bio link', style: TextStyle(color: Colors.white54, fontSize: 22))),
                )
              : MediaQuery(
                  // The bio lays itself out for a phone this size, whatever the slide's size.
                  data: MediaQuery.of(context).copyWith(size: const Size(_kScreenW, _kScreenH), padding: const EdgeInsets.only(top: 54)),
                  child: IgnorePointer(
                    ignoring: !interactive,
                    child: NgmyBioPreview(document: doc, maxWidth: _kScreenW, interactive: interactive),
                  ),
                ),
        ),
      ),
    );
  }
}

class _Phone extends StatelessWidget {
  const _Phone({required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    const outer = 64.0, inner = outer - _kBezel;
    return Stack(
      clipBehavior: Clip.none,
      children: [
        // Side buttons: action + volume on the left, power and camera control on the right.
        for (final b in const [(-3.0, 150.0, 34.0), (-3.0, 214.0, 62.0), (-3.0, 288.0, 62.0)])
          Positioned(left: b.$1, top: b.$2, child: _button(b.$3)),
        for (final b in const [(240.0, 96.0), (560.0, 46.0)])
          Positioned(right: -3, top: b.$1, child: _button(b.$2)),
        // Titanium frame.
        Positioned.fill(
          child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(outer),
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFF8E8A85), Color(0xFF3C3A37), Color(0xFFB9B4AD), Color(0xFF2E2C2A)],
                stops: [0, 0.35, 0.65, 1],
              ),
              boxShadow: const [
                BoxShadow(color: Color(0x66000000), blurRadius: 40, offset: Offset(0, 24)),
                BoxShadow(color: Color(0x33000000), blurRadius: 8, offset: Offset(0, 3)),
              ],
            ),
          ),
        ),
        // Black glass edge.
        Positioned.fill(
          left: 3,
          top: 3,
          right: 3,
          bottom: 3,
          child: DecoratedBox(
            decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(outer - 3)),
          ),
        ),
        // The screen.
        Positioned.fill(
          left: _kBezel,
          top: _kBezel,
          right: _kBezel,
          bottom: _kBezel,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(inner),
            child: ColoredBox(color: Colors.black, child: child),
          ),
        ),
        // Dynamic Island.
        Positioned(
          top: _kBezel + 12,
          left: 0,
          right: 0,
          child: Center(
            child: Container(
              width: 122,
              height: 36,
              decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(20)),
              alignment: const Alignment(0.62, 0),
              child: Container(
                width: 11,
                height: 11,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(colors: [Color(0xFF2B3A55), Color(0xFF0A0F1A)]),
                ),
              ),
            ),
          ),
        ),
        // Glass glare.
        Positioned.fill(
          left: _kBezel,
          top: _kBezel,
          right: _kBezel,
          bottom: _kBezel,
          child: IgnorePointer(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(inner),
              child: const DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0x1FFFFFFF), Color(0x00FFFFFF), Color(0x00FFFFFF), Color(0x0FFFFFFF)],
                    stops: [0, 0.32, 0.7, 1],
                  ),
                ),
              ),
            ),
          ),
        ),
        // Home indicator.
        Positioned(
          bottom: _kBezel + 9,
          left: 0,
          right: 0,
          child: IgnorePointer(
            child: Center(
              child: Container(width: 134, height: 5, decoration: BoxDecoration(color: Colors.white70, borderRadius: BorderRadius.circular(3))),
            ),
          ),
        ),
      ],
    );
  }

  static Widget _button(double h) => Container(
        width: 5,
        height: h,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(3),
          gradient: const LinearGradient(colors: [Color(0xFF6E6A65), Color(0xFFA9A49D), Color(0xFF55524E)]),
        ),
      );
}
