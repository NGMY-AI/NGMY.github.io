import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'ngmy_screen_cache.dart';
import 'ngmy_text_cache.dart';
import 'package:flutter/services.dart';

import 'ngmy_fullscreen_stub.dart' if (dart.library.html) 'ngmy_fullscreen_web.dart';
import 'ngmy_electronics_tv_ads.dart';
import 'ngmy_electronics_tv_movies.dart';

import 'ngmy_electronics_cartoons.dart';
import 'ngmy_electronics_screens.dart';
import 'ngmy_electronics_tv_brands.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The lab TV: every channel is an NGMY animation (drawn live, no video files).
// ═════════════════════════════════════════════════════════════════════════════

class NgmyTvChannel {
  const NgmyTvChannel(this.title, this.blurb);
  final String title;
  final String blurb;
}

const List<NgmyTvChannel> kNgmyTvChannels = [
  NgmyTvChannel('NGMY Tree Story', 'A family grows, one branch at a time'),
  NgmyTvChannel('NGMY Store', 'Open the doors to something new'),
  NgmyTvChannel('NGMY Construction Lab', 'Build, wire and finish a real house'),
  NgmyTvChannel('NGMY Electronics Lab', 'Build circuits that really light up'),
  NgmyTvChannel('NGMY Advisors', 'Say hi to a friendly advisor'),
  NgmyTvChannel('Spark Adventure', 'Follow Sparky round a circuit board'),
  NgmyTvChannel('NGMY Game Center', 'Play games and win coins'),
  NgmyTvChannel('NGMY Business Cards', 'Make a card people remember'),
  NgmyTvChannel('NGMY Civic Registry', 'Your family, counted and helped'),
  NgmyTvChannel('NGMY Creator Hub', 'Record, film and create'),
];

/// The TV advert each channel plays (null for Tree Story and Spark Adventure, which are shows, not adverts).
const Map<int, int> _kChannelTvAd = {1: 7, 2: 0, 3: 1, 4: 2, 6: 3, 7: 6, 8: 4, 9: 5};

/// The NGMY ad (an index into kNgmyAds3D) that channel [ch] plays, or null when it is not an advert.
int? ngmyTvChannelAd(int ch) {
  final a = _kChannelTvAd[ch % kNgmyTvChannels.length];
  return a == null ? null : ngmyTvAdSpecIndex(a);
}

/// Paints one frame of the TV picture (the boot logo for the first seconds, then the channel).
/// [age] is how many seconds the TV has been on; [t] is the running clock.
void paintNgmyTv(Canvas c, Size s, int channel, double t, {double age = 99, int app = -1, NgmyAdTap? tap, int? pick}) {
  if (s.width <= 0 || s.height <= 0) return;
  // A small TV (the one on the lab board) shows the very same picture as the big screen: it is drawn at a normal
  // screen size and made smaller to fit.
  if (s.shortestSide < 180) {
    final k = 180 / s.shortestSide;
    // The picture is made fifteen times a second and kept (TVs on the same channel share it), so the board stays smooth.
    final boot = age < 3.0;
    ngmyDrawCachedScreen(c, ('tv', channel, app, pick, s.width, s.height, boot), s, boot ? age : t, (pc) {
      pc.scale(1 / k);
      paintNgmyTv(pc, Size(s.width * k, s.height * k), channel, t, age: age, app: app, tap: tap, pick: pick);
    });
    return;
  }
  c.save();
  c.clipRect(Offset.zero & s);
  if (age < 3.0) {
    _boot(c, s, age);
  } else if (app >= 0) {
    paintNgmyApp(c, s, app, t, tap: tap, pick: pick);
    // An ad in an app gets the same name bar at the bottom as a channel.
    final a = kNgmyApps[app % kNgmyApps.length].ad;
    if (a != -2) {
      final i = a >= 0 ? a : (pick ?? ngmyAdIndexAt(t));
      _bug(c, s, 'ADS  ·  ${kNgmyAds3D[i % kNgmyAds3D.length].brand}');
    }
  } else {
    final k = ((age - 3.0) / 0.5).clamp(0.0, 1.0);
    final ch = channel % kNgmyTvChannels.length;
    final tvAd = _kChannelTvAd[ch];
    if (ch == 0) {
      _treeStory(c, s, t);
    } else if (tvAd == null) {
      paintSparkAdventure(c, s, t);
    } else {
      paintNgmyTvAd(c, s, tvAd, t, tap: tap);
    }
    _bug(c, s, 'CH ${ch + 1}  ·  ${kNgmyTvChannels[ch].title}');
    if (k < 1) c.drawRect(Offset.zero & s, Paint()..color = Colors.white.withValues(alpha: 0.6 * (1 - k)));
  }
  // A soft glass reflection (no scan lines: every screen is crystal clear).
  c.drawPath(Path()..moveTo(0, 0)..lineTo(s.width * 0.45, 0)..lineTo(0, s.height * 0.5)..close(), Paint()..color = Colors.white.withValues(alpha: 0.04));
  c.restore();
}

void _text(Canvas c, String t, Offset o, double size, Color col, {bool bold = true, TextAlign align = TextAlign.left, double? width, double spacing = 0}) {
  final tp = ngmyCachedText(t, TextStyle(color: ngmyTextColorStep(col), fontSize: ngmyTextSizeStep(size), fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: spacing), align: align, maxWidth: width ?? 9999);
  final dx = align == TextAlign.center && width != null ? (width - tp.width) / 2 : 0.0;
  tp.paint(c, o + Offset(dx, 0));
}

void _boot(Canvas c, Size s, double age) {
  c.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF020409));
  final glow = (age < 0.5 ? age / 0.5 : (age > 2.4 ? (3.0 - age) / 0.6 : 1.0)).clamp(0.0, 1.0);
  c.drawCircle(s.center(Offset.zero), s.shortestSide * 0.5, Paint()..shader = RadialGradient(colors: [const Color(0xFF38BDF8).withValues(alpha: 0.35 * glow), Colors.transparent]).createShader(Rect.fromCircle(center: s.center(Offset.zero), radius: s.shortestSide * 0.5)));
  _text(c, 'NGMY', Offset(0, s.height * 0.36), s.height * 0.2, Colors.white.withValues(alpha: glow), align: TextAlign.center, width: s.width, spacing: s.height * 0.03);
  _text(c, 'T V', Offset(0, s.height * 0.6), s.height * 0.08, const Color(0xFF38BDF8).withValues(alpha: glow), align: TextAlign.center, width: s.width, spacing: s.height * 0.05);
  // A line that sweeps while it warms up.
  c.drawRect(Rect.fromLTWH(s.width * 0.3, s.height * 0.78, s.width * 0.4 * (age / 3.0), 3), Paint()..color = const Color(0xFF38BDF8).withValues(alpha: glow));
}

/// The NGMY mark in the top corner and the name bar at the bottom (the big TV puts a small Learn more on the right of the bar).
void _bug(Canvas c, Size s, String label) {
  final h = s.height;
  final r = RRect.fromRectAndRadius(Rect.fromLTWH(s.width - h * 0.34, h * 0.04, h * 0.3, h * 0.1), Radius.circular(h * 0.03));
  c.drawRRect(r, Paint()..color = Colors.black.withValues(alpha: 0.55));
  _text(c, 'NGMY', Offset(r.left + h * 0.025, r.top + h * 0.012), h * 0.07, Colors.white, spacing: 1);
  // Caption bar.
  final bar = Rect.fromLTWH(0, h * 0.86, s.width, h * 0.14);
  c.drawRect(bar, Paint()..color = Colors.black.withValues(alpha: 0.6));
  _text(c, label, Offset(h * 0.04, h * 0.885), h * 0.075, Colors.white, width: s.width * 0.74 - h * 0.04);
}

/// Text that shrinks to fit its box and sits in the middle of it.
void _fit(Canvas c, String text, Rect box, double size, Color col, {bool bold = true, double spacing = 0}) {
  TextPainter make(double v) => ngmyCachedText(text, TextStyle(color: ngmyTextColorStep(col), fontSize: ngmyTextSizeStep(v), fontWeight: bold ? FontWeight.w900 : FontWeight.w700, letterSpacing: spacing));
  var tp = make(size);
  if (tp.width > box.width && tp.width > 0) tp = make(size * box.width / tp.width);
  tp.paint(c, box.center - Offset(tp.width / 2, tp.height / 2));
}

// 0 ── The NGMY Family Tree: a tree grows from the grandparents (the roots) up through the parents to the children, with a face on every branch.
void _treeStory(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final cy = t % 14.0;
  double prog(double a, double d) => ((cy - a) / d).clamp(0.0, 1.0);
  double ease(double x) => Curves.easeInOut.transform(x);
  const gold = Color(0xFFF5C14B), navy = Color(0xFF0B1F4B);
  // Evening sky from navy to gold, with a sun glow behind the tree and a few stars.
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF0B1F4B), Color(0xFF1E4FA3), Color(0xFFF59E0B), Color(0xFFFDE68A)], stops: [0.0, 0.42, 0.8, 1.0]).createShader(Offset.zero & s));
  final tx = w * 0.34;
  Offset p(double dx, double y) => Offset(tx + dx * h, y * h);
  final sun = p(0, 0.5);
  c.drawCircle(sun, h * 0.75, Paint()..shader = RadialGradient(colors: [const Color(0xFFFDE68A).withValues(alpha: 0.55), Colors.transparent]).createShader(Rect.fromCircle(center: sun, radius: h * 0.75)));
  final rnd = math.Random(11);
  for (var i = 0; i < 26; i++) {
    c.drawCircle(Offset(rnd.nextDouble() * w, rnd.nextDouble() * h * 0.45), 0.6 + rnd.nextDouble() * 1.1, Paint()..color = Colors.white.withValues(alpha: 0.35 + 0.4 * math.sin(t * 2 + i)));
  }
  // Rolling green hills.
  for (var l = 0; l < 2; l++) {
    final path = Path()..moveTo(0, h);
    for (var x = 0.0; x <= w; x += 6) {
      path.lineTo(x, h * (l == 0 ? 0.78 : 0.82) + math.sin(x / (l == 0 ? 70 : 50) + l * 2) * h * 0.02);
    }
    path.lineTo(w, h);
    c.drawPath(path, Paint()..color = l == 0 ? const Color(0xFF3F8F4D) : const Color(0xFF2F6F3B));
  }
  final base = p(0, 0.81);
  final trunk = ease(prog(0.2, 1.6));
  final bloom = ease(prog(2.4, 2.6));
  // The leafy crown, behind the branches.
  final crown = const [(-0.30, 0.32, 0.2), (-0.08, 0.17, 0.22), (0.14, 0.14, 0.2), (0.34, 0.3, 0.2), (0.0, 0.32, 0.26), (-0.42, 0.46, 0.15), (0.42, 0.46, 0.15), (0.0, 0.07, 0.15)];
  for (final (dx, y, r) in crown) {
    final sway = math.sin(t * 1.4 + dx * 7) * h * 0.006;
    c.drawCircle(p(dx, y) + Offset(sway, 0), h * r * bloom, Paint()..color = const Color(0xFF166534));
    c.drawCircle(p(dx, y - 0.015) + Offset(sway, 0), h * r * 0.82 * bloom, Paint()..color = const Color(0xFF15803D));
  }
  // The trunk, roots and branches.
  for (final x in const [-1.0, 1.0]) {
    paintFamilyLimb(c, base, base + Offset(x * h * 0.04, h * 0.01), base + Offset(x * h * 0.12, h * 0.015), h * 0.04, h * 0.01, trunk);
  }
  paintFamilyLimb(c, base, p(0.02, 0.7), p(0, 0.6), h * 0.085, h * 0.055, trunk);
  final b1 = ease(prog(1.8, 1.6));
  paintFamilyLimb(c, p(0, 0.6), p(-0.1, 0.55), p(-0.34, 0.44), h * 0.05, h * 0.026, b1);
  paintFamilyLimb(c, p(0, 0.6), p(0.1, 0.55), p(0.34, 0.44), h * 0.05, h * 0.026, b1);
  final b2 = ease(prog(3.2, 1.3));
  paintFamilyLimb(c, p(-0.34, 0.44), p(-0.17, 0.33), p(0, 0.39), h * 0.024, h * 0.018, b2);
  paintFamilyLimb(c, p(0.34, 0.44), p(0.17, 0.33), p(0, 0.39), h * 0.024, h * 0.018, b2);
  final b3 = ease(prog(4.4, 1.3));
  paintFamilyLimb(c, p(0, 0.39), p(-0.1, 0.3), p(-0.17, 0.2), h * 0.02, h * 0.012, b3);
  paintFamilyLimb(c, p(0, 0.39), p(0.1, 0.3), p(0.17, 0.2), h * 0.02, h * 0.012, b3);
  paintFamilyLimb(c, p(-0.27, 0.72), p(-0.14, 0.78), p(0, 0.7), h * 0.016, h * 0.012, ease(prog(3.6, 1.0)));
  paintFamilyLimb(c, p(0.27, 0.72), p(0.14, 0.78), p(0, 0.7), h * 0.016, h * 0.012, ease(prog(3.6, 1.0)));
  // Leaves along the crown, shining and swaying.
  final lr = math.Random(5);
  for (var i = 0; i < 110; i++) {
    final (dx, y, r) = crown[i % crown.length];
    final a = lr.nextDouble() * math.pi * 2, d = math.sqrt(lr.nextDouble()) * r * 0.95;
    final pos = p(dx + math.cos(a) * d, y + math.sin(a) * d) + Offset(math.sin(t * 1.6 + i) * h * 0.006, 0);
    c.save();
    c.translate(pos.dx, pos.dy);
    c.rotate(a + math.sin(t * 1.3 + i) * 0.2);
    final sc = (bloom * 1.4 - (i % 10) * 0.05).clamp(0.0, 1.0);
    c.drawOval(Rect.fromCenter(center: Offset.zero, width: h * 0.03 * sc, height: h * 0.015 * sc), Paint()..color = Color.lerp(const Color(0xFF22C55E), const Color(0xFF86EFAC), (math.sin(t * 2 + i) + 1) / 2)!);
    c.restore();
  }
  // The faces pop open: the grandparents at the roots, the parents on the big branches, the children at the top.
  void face(int kind, String name, Offset at, double r, double start) {
    final k = prog(start, 0.6);
    if (k <= 0) return;
    c.save();
    c.translate(at.dx, at.dy);
    c.scale(Curves.elasticOut.transform(k).clamp(0.01, 1.3));
    paintFamilyPortrait(c, Offset.zero, r, kind, t, glow: cy > 9.5 ? 0.5 + 0.3 * math.sin(t * 3 + kind) : 0);
    paintFamilyTag(c, Offset(0, r * 1.42), r, name);
    c.restore();
  }

  face(0, 'Bibi', p(-0.27, 0.72), h * 0.075, 5.0);
  face(1, 'Babu', p(0.27, 0.72), h * 0.075, 5.6);
  face(2, 'Mama', p(-0.34, 0.44), h * 0.085, 6.4);
  face(3, 'Baba', p(0.34, 0.44), h * 0.085, 7.0);
  face(4, 'Dada', p(-0.17, 0.2), h * 0.075, 8.0);
  face(5, 'Kaka', p(0.17, 0.2), h * 0.075, 8.6);
  // Hearts that join the couples.
  void heart(Offset at, double r, double start) {
    final k = prog(start, 0.5);
    if (k <= 0) return;
    final sc = Curves.elasticOut.transform(k).clamp(0.01, 1.3) * (1 + 0.07 * math.sin(t * 6));
    c.drawCircle(at, r * sc, Paint()..color = const Color(0xFFEC4899));
    c.drawCircle(at, r * sc, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white);
    _text(c, '♥', at - Offset(r * 0.5 * sc, r * 0.62 * sc), r * 1.3 * sc, Colors.white);
  }

  heart(p(0, 0.7), h * 0.028, 5.9);
  heart(p(0, 0.39), h * 0.035, 7.4);
  if (cy > 9.3) {
    for (var i = 0; i < 7; i++) {
      final ph = ((cy - 9.3) * 0.4 + i / 7) % 1.0;
      _text(c, '♥', p(math.sin(i * 2.3 + t * 2) * 0.3, 0.38 - ph * 0.3), h * (0.04 + 0.02 * (i % 3)), const Color(0xFFFB7185).withValues(alpha: (1 - ph) * 0.85));
    }
  }
  // The title card on the right.
  final slide = (1 - ease(prog(1.0, 0.9))) * w * 0.4;
  final card = Rect.fromLTWH(w * 0.655 + slide, h * 0.1, w * 0.315, h * 0.64);
  c.drawRRect(RRect.fromRectAndRadius(card, Radius.circular(h * 0.05)), Paint()..color = navy.withValues(alpha: 0.88));
  c.drawRRect(RRect.fromRectAndRadius(card, Radius.circular(h * 0.05)), Paint()..style = PaintingStyle.stroke..strokeWidth = h * 0.012..color = gold);
  Rect row(double y, double hh) => Rect.fromLTWH(card.left + card.width * 0.08, h * y, card.width * 0.84, h * hh);
  _fit(c, 'NGMY', row(0.13, 0.06), h * 0.06, gold, spacing: h * 0.012);
  _fit(c, 'Family', row(0.2, 0.1), h * 0.1, Colors.white);
  _fit(c, 'Tree', row(0.3, 0.1), h * 0.1, Colors.white);
  const lines = ['Add every person', 'Link mums, dads, kids', 'Keep it for ever'];
  for (var i = 0; i < lines.length; i++) {
    final k = prog(5.5 + i * 1.5, 0.5);
    if (k <= 0) continue;
    _fit(c, '♥ ${lines[i]}', row(0.43 + i * 0.075, 0.06).shift(Offset((1 - k) * 30, 0)), h * 0.05, const Color(0xFFFBCFE8).withValues(alpha: k), bold: false);
  }
  final bk = prog(11.0, 0.5);
  if (bk > 0) {
    final pill = Rect.fromCenter(center: Offset(card.center.dx, h * 0.67), width: card.width * 0.6 * Curves.easeOutBack.transform(bk), height: h * 0.075);
    c.drawRRect(RRect.fromRectAndRadius(pill, Radius.circular(h * 0.04)), Paint()..color = gold);
    if (bk > 0.8) _fit(c, 'ngmy.org', pill.deflate(h * 0.01), h * 0.05, navy);
  }
  if (cy > 11.6) _fit(c, 'Family is everything', Rect.fromLTWH(0, h * 0.82, tx * 2, h * 0.05), h * 0.05, Colors.white.withValues(alpha: ((cy - 11.6) / 0.5).clamp(0.0, 1.0)));
  // A soft fade between one run and the next.
  final fade = cy < 0.4 ? 1 - cy / 0.4 : (cy > 13.5 ? (cy - 13.5) / 0.5 : 0.0);
  if (fade > 0) c.drawRect(Offset.zero & s, Paint()..color = Colors.black.withValues(alpha: fade));
}











// ─── The big screen ──────────────────────────────────────────────────────────

/// Opens the TV full screen. It starts with the NGMY logo for 3 seconds, plays the chosen channel and
/// goes back to the board by itself after [stayFor] (or when the person taps the close button).
Future<int?> showNgmyTvScreen(BuildContext context, {int channel = 0, Duration stayFor = const Duration(seconds: 60), bool showBoot = true, String title = 'NGMY TV', String kind = 'tv'}) {
  return Navigator.of(context).push<int>(PageRouteBuilder(
    opaque: true,
    transitionDuration: const Duration(milliseconds: 260),
    pageBuilder: (_, __, ___) => NgmyTvScreen(channel: channel, stayFor: stayFor, showBoot: showBoot, title: title, kind: kind),
    transitionsBuilder: (_, a, __, child) => FadeTransition(opacity: a, child: ScaleTransition(scale: Tween(begin: 0.85, end: 1.0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: child)),
  ));
}

class NgmyTvScreen extends StatefulWidget {
  const NgmyTvScreen({super.key, this.channel = 0, this.stayFor = const Duration(seconds: 60), this.showBoot = true, this.title = 'NGMY TV', this.kind = 'tv'});
  final String title;
  final String kind;
  final int channel;
  final bool showBoot;
  final Duration stayFor;

  @override
  State<NgmyTvScreen> createState() => _NgmyTvScreenState();
}

class _NgmyTvScreenState extends State<NgmyTvScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _clock = AnimationController(vsync: this, duration: const Duration(days: 1))..forward();
  late int _ch = widget.channel;
  int _app = -1; // -1: watching a channel, otherwise the app that is open
  bool _menu = false;
  Timer? _auto;
  double _channelSince = 0;
  /// Full screen (like NGMY Slides), and in full screen whether a double tap has hidden the buttons.
  bool _full = false;
  bool _locked = false;

  /// The TV plays its channels one after another: each one for ten seconds (one whole advert), then the next, round and round.
  Timer? _cycle;
  late double _chStart = widget.showBoot ? 3.0 : 0.0;
  double get _nowSec => (_clock.lastElapsedDuration?.inMilliseconds ?? 0) / 1000;

  // Touching the ads: where and when the picture was tapped (the phone or the hero spins), and in the NGMY Ads app
  // which ad it started from and when (so a chapter can be picked).
  double _tapAt = -99;
  Offset _tapPos = const Offset(0.5, 0.5);
  int _adBase = 0;
  double _adStart = 0;

  bool get _inAdsApp => _app >= 0 && kNgmyApps[_app].ad == -1;

  /// The NGMY ad on the screen now (an index into kNgmyAds3D), or null when it is not an ad.
  int? _adNow() {
    if (_menu) return null;
    if (_app >= 0) {
      final a = kNgmyApps[_app].ad;
      if (a == -2) return null;
      if (a == -1) return (_adBase + (math.max(0.0, _nowSec - _adStart) / kNgmyAdLength).floor()) % kNgmyAds3D.length;
      return a;
    }
    return ngmyTvChannelAd(_ch);
  }

  void _tapPicture(Offset at, Size size) {
    if (size.width <= 0 || size.height <= 0) return;
    setState(() {
      _tapPos = Offset(at.dx / size.width, at.dy / size.height);
      _tapAt = _nowSec;
      _touched();
    });
    NgmyTone.play(660, ms: 90, wave: 'tri', volume: 0.25);
  }

  /// Plays ad [i] in the NGMY Ads app (a chapter).
  void _pickAd(int i) {
    final n = kNgmyAds3D.length;
    setState(() {
      _app = 0;
      _menu = false;
      _adBase = ((i % n) + n) % n;
      _adStart = _nowSec;
      _touched();
    });
    NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.25);
  }

  /// A swipe on the picture: the next or the previous ad (or channel).
  void _swipe(int d) {
    if (_inAdsApp) {
      _pickAd((_adNow() ?? 0) + d);
    } else {
      _go(d);
    }
  }

  void _replay() {
    setState(() {
      if (_inAdsApp) {
        _adBase = _adNow() ?? _adBase;
        _adStart = _nowSec;
      } else {
        _chStart = _nowSec;
        _channelSince = math.max(1, _channelSince);
      }
      _touched();
    });
    _armCycle();
  }

  Future<void> _learnMore() async {
    final i = _adNow();
    if (i == null) return;
    _cycle?.cancel();
    setState(_touched);
    var again = false;
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (sheet) => NgmyAdInfoSheet(
        ad: kNgmyAds3D[i],
        onReplay: () {
          again = true;
          Navigator.of(sheet).pop();
        },
      ),
    );
    if (!mounted) return;
    if (again) {
      _replay();
    } else {
      _armCycle();
    }
  }

  void _armCycle() {
    _cycle?.cancel();
    _cycle = Timer(Duration(seconds: _chStart > 0 && _nowSec < 3.2 ? 13 : 10), _nextChannel);
  }

  void _nextChannel() {
    if (!mounted) return;
    if (_app < 0 && !_menu) {
      setState(() {
        _ch = (_ch + 1) % kNgmyTvChannels.length;
        _channelSince = _clock.lastElapsedDuration?.inMilliseconds.toDouble() ?? 1;
        _chStart = _nowSec;
      });
      NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.2);
    }
    _armCycle();
  }

  @override
  void initState() {
    super.initState();
    _auto = Timer(widget.stayFor, _close);
    _armCycle();
    NgmyTone.play(520, ms: 80, wave: 'tri', volume: 0.25);
  }

  void _close() {
    if (mounted && Navigator.of(context).canPop()) Navigator.of(context).pop(_ch);
  }

  /// Using the remote means the person is here and watching: the one-minute timer stops.
  void _touched() {
    _auto?.cancel();
    _auto = null;
  }

  void _go(int d) {
    setState(() {
      _app = -1;
      _ch = (_ch + d) % kNgmyTvChannels.length;
      if (_ch < 0) _ch += kNgmyTvChannels.length;
      _channelSince = _clock.lastElapsedDuration?.inMilliseconds.toDouble() ?? 1;
      _chStart = _nowSec;
      _armCycle();
      _touched();
    });
    NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.3);
  }

  void _openApp(int a) {
    setState(() {
      _app = a;
      _menu = false;
      _adBase = 0;
      _adStart = _nowSec;
      _touched();
    });
    NgmyTone.play(700, ms: 60, wave: 'tri', volume: 0.3);
  }

  @override
  void dispose() {
    if (_full) {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
      ngmyExitFullscreen();
    }
    _auto?.cancel();
    _cycle?.cancel();
    _clock.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final show = _controlsShown;
    final topRow = Padding(
      // In full screen the buttons come down below the phone clock and notch (and a little more), so they are easy to reach.
      padding: EdgeInsets.fromLTRB(10, _full ? MediaQuery.paddingOf(context).top + 26 : 10, 10, 0),
      child: Row(children: [
        _round(Icons.close_rounded, 'Back to the board', _close),
        const SizedBox(width: 8),
        _round(_full ? Icons.fullscreen_exit_rounded : Icons.fullscreen_rounded, _full ? 'Leave full screen' : 'Full screen', _toggleFull, key: const Key('tv-fullscreen')),
        const SizedBox(width: 8),
        Expanded(
          child: Align(
            alignment: Alignment.centerRight,
            child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
            child: Text(_app >= 0 ? '${widget.title} · ${kNgmyApps[_app].name}' : '${widget.title} · CH ${_ch + 1}', maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5)),
            ),
          ),
        ),
      ]),
    );
    final frameSide = BorderSide(color: _frame, width: _kFrame);
    final tv = Center(
      child: AspectRatio(
        aspectRatio: 16 / 9,
        child: Stack(fit: StackFit.expand, children: [
        Container(
          key: const Key('tv-frame'),
          decoration: _full
              ? const BoxDecoration(color: Colors.black)
              // The bottom edge of the frame is a little taller, with the maker's name or logo in its middle.
              : BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  border: Border(left: frameSide, top: frameSide, right: frameSide, bottom: BorderSide(color: _frame, width: _kFrameBottom)),
                  boxShadow: [BoxShadow(color: tvBrandAccent(widget.kind).withValues(alpha: 0.25), blurRadius: 40)],
                ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(_full ? 0 : 4),
            child: LayoutBuilder(builder: (context, box) {
              final bar = box.maxHeight * 0.14;
              final bh = (bar * 0.62).clamp(18.0, 30.0);
              return Stack(fit: StackFit.expand, children: [
                // Tap the picture: the phone (or the coin, the card, the medal) spins. Swipe: the next or the previous ad.
                // In full screen, a double tap hides the buttons or brings them back.
                GestureDetector(
                  key: const Key('tv-picture'),
                  behavior: HitTestBehavior.opaque,
                  onTapUp: (d) => _tapPicture(d.localPosition, box.biggest),
                  onDoubleTap: _full ? _toggleLock : null,
                  onHorizontalDragEnd: (d) {
                    final v = d.primaryVelocity ?? 0;
                    if (v.abs() > 120) _swipe(v < 0 ? 1 : -1);
                  },
                  child: AnimatedBuilder(
                    animation: _clock,
                    builder: (_, __) {
                      final ms = (_clock.lastElapsedDuration?.inMilliseconds ?? 0).toDouble();
                      final t = ms / 1000;
                      // The logo only shows when the TV first starts, not at every channel change.
                      final age = _channelSince == 0 && widget.showBoot ? t : 99.0;
                      final tap = t - _tapAt < 1.4 ? NgmyAdTap(_tapPos, t - _tapAt) : null;
                      final ads = _inAdsApp;
                      final local = math.max(0.0, t - _adStart);
                      final pick = ads ? (_adBase + (local / kNgmyAdLength).floor()) % kNgmyAds3D.length : null;
                      final tt = ads ? local : (age < 3.0 ? t : math.max(0.0, t - _chStart));
                      return CustomPaint(painter: _TvPainter(_ch, tt, age, _app, tap: tap, pick: pick), size: Size.infinite);
                    },
                  ),
                ),
                if (_menu) _appsMenu(),
                // Learn more: small, on the right of the name bar at the bottom of the picture. It hides with the other buttons.
                if (show && !_menu && _adNow() != null)
                  Positioned(right: bar * 0.3, bottom: bar / 2 - bh / 2, height: bh, child: _learnMoreButton(bh)),
              ]);
            }),
          ),
        ),
        if (!_full)
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            height: _kFrameBottom,
            child: IgnorePointer(child: Center(child: NgmyTvMakerMark(kind: widget.kind, height: _kFrameBottom * 0.62))),
          ),
        ]),
      ),
    );
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        top: !_full,
        bottom: !_full,
        left: !_full,
        right: !_full,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () => setState(_touched),
          onDoubleTap: _full ? _toggleLock : null,
          child: _full
              // Full screen: only the picture, with the close and leave full screen buttons over it (no remote).
              ? Stack(fit: StackFit.expand, children: [
                  tv,
                  Positioned(
                    left: 0,
                    right: 0,
                    top: 0,
                    child: AnimatedOpacity(
                      opacity: show ? 1 : 0,
                      duration: const Duration(milliseconds: 250),
                      child: IgnorePointer(ignoring: !show, child: topRow),
                    ),
                  ),
                ])
              // Not full screen: the buttons and the remote above the picture and the name box under it, always in
              // view (on a computer too); the picture takes the room in between.
              : Column(children: [
                  topRow,
                  const SizedBox(height: 6),
                  _remote(),
                  const SizedBox(height: 8),
                  Expanded(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: tv)),
                  Container(
                    key: const Key('tv-info'),
                    margin: const EdgeInsets.fromLTRB(12, 8, 12, 12),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.65), borderRadius: BorderRadius.circular(18)),
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Text(_app >= 0 ? kNgmyApps[_app].name : kNgmyTvChannels[_ch].title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                      Text(_app >= 0 ? kNgmyApps[_app].blurb : kNgmyTvChannels[_ch].blurb, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white60, fontSize: 11.5)),
                    ]),
                  ),
                ]),
        ),
      ),
    );
  }

  /// The width of the TV frame around the picture (none in full screen).
  static const double _kFrame = 6;

  /// The bottom edge of the frame, taller so the maker's name or logo fits in it.
  static const double _kFrameBottom = 16;

  /// The buttons always show, except in full screen after a double tap hid them.
  bool get _controlsShown => !_full || !_locked;

  /// Full screen, like NGMY Slides: the picture fills the screen and the browser bars go away.
  void _toggleFull() {
    final on = !_full;
    setState(() {
      _full = on;
      _locked = false;
      _touched();
    });
    if (on) {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
      ngmyEnterFullscreen(landscape: true);
    } else {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
      ngmyExitFullscreen();
    }
  }

  /// In full screen: a double tap hides every button, and another double tap brings them back.
  void _toggleLock() {
    HapticFeedback.mediumImpact();
    setState(() {
      _locked = !_locked;
      _touched();
    });
    final messenger = ScaffoldMessenger.of(context)..hideCurrentSnackBar();
    if (_locked) {
      messenger.showSnackBar(const SnackBar(
        content: Text('Buttons hidden. Double-tap to show them again.'),
        duration: Duration(milliseconds: 1800),
        behavior: SnackBarBehavior.floating,
      ));
    }
  }

  /// The little remote control, at the top in the middle.
  Widget _remote() {
    Widget key(IconData icon, String label, VoidCallback f, {Color color = Colors.white, bool on = false}) => GestureDetector(
          onTap: f,
          child: Container(
            width: 56,
            padding: const EdgeInsets.symmetric(vertical: 6),
            margin: const EdgeInsets.symmetric(horizontal: 3),
            decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.28) : Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? color : Colors.white24)),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, color: color, size: 20),
              const SizedBox(height: 1),
              Text(label, style: TextStyle(color: color, fontSize: 9.5, fontWeight: FontWeight.w800)),
            ]),
          ),
        );
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
      decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.72), borderRadius: BorderRadius.circular(22), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.5))),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        key(Icons.remove_rounded, 'CH −', () => _go(-1)),
        key(Icons.add_rounded, 'CH +', () => _go(1)),
        key(Icons.live_tv_rounded, 'TV', () => _go(0), color: const Color(0xFF38BDF8), on: _app < 0),
        key(Icons.apps_rounded, 'APPS', () => setState(() {
              _menu = !_menu;
              _touched();
            }), color: const Color(0xFFA78BFA), on: _menu),
        key(Icons.campaign_rounded, 'ADS', () => _openApp(0), color: const Color(0xFFF472B6), on: _app == 0),
      ]),
    );
  }

  /// A small Learn more pill, [h] tall, for the name bar at the bottom of the picture.
  Widget _learnMoreButton(double h) => Material(
        color: Colors.white.withValues(alpha: 0.92),
        shape: const StadiumBorder(),
        child: InkWell(
          key: const Key('tv-learn-more'),
          customBorder: const StadiumBorder(),
          onTap: _learnMore,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: h * 0.42),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(Icons.info_outline_rounded, size: h * 0.55, color: const Color(0xFF111827)),
              SizedBox(width: h * 0.18),
              Text('Learn more', style: TextStyle(color: const Color(0xFF111827), fontWeight: FontWeight.w800, fontSize: h * 0.44)),
            ]),
          ),
        ),
      );

  /// The apps screen is drawn inside the TV, not over it.
  Widget _appsMenu() => NgmyTvHome(kind: widget.kind, onOpen: _openApp, onClose: () => setState(() => _menu = false));

  Color get _frame => switch (tvBrandOf(widget.kind)) { 'apple' => const Color(0xFF9CA3AF), 'bo' => const Color(0xFFB8B2A7), 'sony' => const Color(0xFF2A2A2D), 'lg' => const Color(0xFF0A0A0A), _ => const Color(0xFF1F2937) };

  Widget _round(IconData i, String tip, VoidCallback f, {Key? key}) => IconButton(key: key, onPressed: f, tooltip: tip, style: IconButton.styleFrom(backgroundColor: Colors.black54), icon: Icon(i, color: Colors.white));
}

class _TvPainter extends CustomPainter {
  _TvPainter(this.ch, this.t, this.age, this.app, {this.tap, this.pick});
  final int ch, app;
  final double t, age;
  final NgmyAdTap? tap;
  final int? pick;

  @override
  void paint(Canvas canvas, Size size) => paintNgmyTv(canvas, size, ch, t, age: age, app: app, tap: tap, pick: pick);

  @override
  bool shouldRepaint(covariant _TvPainter old) => true;
}
