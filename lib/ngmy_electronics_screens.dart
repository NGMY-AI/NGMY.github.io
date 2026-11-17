import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ads3d.dart';
import 'ngmy_fullscreen_stub.dart' if (dart.library.html) 'ngmy_fullscreen_web.dart';

export 'ngmy_ads3d.dart' show NgmyAdTap, NgmyAdSpec, NgmyAdInfoSheet, kNgmyAds3D, kNgmyAdLength, ngmyAdIndexAt;

// ═════════════════════════════════════════════════════════════════════════════
// Screens for the Electronics Lab TV and phone: NGMY ads and little apps.
// Everything is drawn live from the clock, so there are no video files.
// ═════════════════════════════════════════════════════════════════════════════

/// Draws [text] centred on [center], shrinking it so that it never gets wider than [maxW].
void _label(Canvas c, String text, Offset center, double size, Color col, {double maxW = 9999, bool bold = true, double spacing = 0}) {
  var sz = size;
  TextPainter make(double s) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: s, fontWeight: bold ? FontWeight.w900 : FontWeight.w600, letterSpacing: spacing)),
        textDirection: TextDirection.ltr,
        maxLines: 1,
      )..layout();
  var tp = make(sz);
  if (tp.width > maxW && tp.width > 0) {
    sz = math.max(2.0, sz * maxW / tp.width);
    tp = make(sz);
  }
  tp.paint(c, center - Offset(tp.width / 2, tp.height / 2));
}

Paint _fill(Color c) => Paint()..color = c;

// ─── NGMY ads ────────────────────────────────────────────────────────────────
// The ads themselves (a real looking phone in a studio, a 3D hero object and an end card) are drawn in ngmy_ads3d.dart.

/// How many different NGMY ads the loop plays.
int get kNgmyAdCount => kNgmyAds3D.length;

/// The name of the ad that plays at [t] in the loop.
String ngmyAdName(double t) => kNgmyAds3D[ngmyAdIndexAt(t)].brand;

/// The NGMY ads, one after another, ten seconds each. With [only] that one ad plays again and again.
void paintNgmyAd(Canvas c, Size s, double t, {int? only, NgmyAdTap? tap, bool loop = false}) {
  final i = only ?? ngmyAdIndexAt(t);
  paintNgmyAd3D(c, s, i, t % kNgmyAdLength, tap: tap, ofCount: loop || only == null);
}

// ─── Apps ────────────────────────────────────────────────────────────────────

class NgmyApp {
  const NgmyApp(this.name, this.emoji, this.color, this.blurb, this.ad);
  final String name, emoji, blurb;
  final Color color;

  /// -1 plays every NGMY ad, -2 is the calendar, 0 or more plays that one ad again and again.
  final int ad;
}

const List<NgmyApp> kNgmyApps = [
  NgmyApp('NGMY Ads', '📢', Color(0xFFF472B6), 'Every NGMY ad, as a real 3D commercial', -1),
  NgmyApp('Civic Registry', '🪪', Color(0xFF3B82F6), 'Enroll your family in your community', 0),
  NgmyApp('Jobs', '💼', Color(0xFFF59E0B), 'Find work and get hired', 1),
  NgmyApp('NGMY Store', '🛍️', Color(0xFFEA580C), 'African food and traditions', 2),
  NgmyApp('Kiswahili', '🗣️', Color(0xFF14B8A6), 'Learn Swahili and English', 3),
  NgmyApp('Doc Scanner', '📄', Color(0xFF6366F1), 'Scan, save and share', 4),
  NgmyApp('Invoices', '🧾', Color(0xFFEC4899), 'Professional invoices', 5),
  NgmyApp('Calendar', '📅', Color(0xFFEF4444), 'This month, today lit up', -2),
];

void paintNgmyApp(Canvas c, Size s, int app, double t, {NgmyAdTap? tap, int? pick}) {
  c.save();
  c.clipRect(Offset.zero & s);
  final a = kNgmyApps[app % kNgmyApps.length].ad;
  if (a == -2) {
    _calendarApp(c, s, t);
  } else if (a == -1) {
    paintNgmyAd(c, s, t, only: pick, tap: tap, loop: true);
  } else {
    paintNgmyAd(c, s, t, only: a, tap: tap);
  }
  c.restore();
}

void _calendarApp(Canvas c, Size s, double t) {
  final w = s.width, h = s.height;
  final now = DateTime.now();
  c.drawRect(Offset.zero & s, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF0F172A), Color(0xFF1E293B)]).createShader(Offset.zero & s));
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  c.drawRect(Rect.fromLTWH(0, 0, w, h * 0.15), _fill(const Color(0xFFDC2626)));
  _label(c, '${months[now.month - 1]} ${now.year}', Offset(w / 2, h * 0.075), h * 0.08, Colors.white, maxW: w * 0.9);
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  final cw = w / 7;
  for (var k = 0; k < 7; k++) {
    _label(c, days[k], Offset(cw * (k + 0.5), h * 0.21), h * 0.05, Colors.white54);
  }
  final first = DateTime(now.year, now.month, 1);
  final count = DateTime(now.year, now.month + 1, 0).day;
  final offset = first.weekday - 1;
  final rows = ((offset + count) / 7).ceil();
  final ch = (h * 0.74) / rows;
  for (var d = 1; d <= count; d++) {
    final idx = offset + d - 1;
    final ctr = Offset(cw * (idx % 7 + 0.5), h * 0.26 + ch * (idx ~/ 7 + 0.5));
    if (d == now.day) {
      c.drawCircle(ctr, math.min(cw, ch) * 0.42, _fill(const Color(0xFF38BDF8).withValues(alpha: 0.5 + 0.2 * math.sin(t * 3))));
    }
    _label(c, '$d', ctr, math.min(cw, ch) * 0.42, d == now.day ? Colors.white : Colors.white70);
  }
}

// ─── The big screens: phones, tablets, computers ─────────────────────────────

enum ScreenStyle { tv, iphone, android, fold, tablet, reader, computer }

class ScreenDevice {
  const ScreenDevice(this.name, this.style, this.frame, this.accent);
  final String name;
  final ScreenStyle style;
  final Color frame, accent;
}

/// Every part on the board that has a screen.
const Map<String, ScreenDevice> kScreenDevices = {
  'tv': ScreenDevice('Samsung Neo QLED 8K', ScreenStyle.tv, Color(0xFF111418), Color(0xFF38BDF8)),
  'lgtv': ScreenDevice('LG OLED evo G5', ScreenStyle.tv, Color(0xFF0A0A0A), Color(0xFFF43F5E)),
  'sonytv': ScreenDevice('Sony Bravia 9', ScreenStyle.tv, Color(0xFF1C1C1E), Color(0xFFA3A3A3)),
  'appletv': ScreenDevice('Apple TV 4K', ScreenStyle.tv, Color(0xFFD1D5DB), Color(0xFFE5E7EB)),
  'bangtv': ScreenDevice('Bang and Olufsen Beovision', ScreenStyle.tv, Color(0xFFB8B2A7), Color(0xFFD6B77B)),
  'phone': ScreenDevice('iPhone 18 Pro Max', ScreenStyle.iphone, Color(0xFF8A8580), Color(0xFF6366F1)),
  'iphonefold': ScreenDevice('iPhone Fold', ScreenStyle.fold, Color(0xFF9A958F), Color(0xFF8B5CF6)),
  'galaxy': ScreenDevice('Samsung Galaxy S26 Ultra', ScreenStyle.android, Color(0xFF2B2F36), Color(0xFF3B82F6)),
  'zfold': ScreenDevice('Samsung Galaxy Z Fold7', ScreenStyle.fold, Color(0xFF3B4048), Color(0xFF0EA5E9)),
  'pixel': ScreenDevice('Google Pixel 10 Pro XL', ScreenStyle.android, Color(0xFF9CA3AF), Color(0xFF22C55E)),
  'xiaomi': ScreenDevice('Xiaomi 16 Ultra', ScreenStyle.android, Color(0xFF111111), Color(0xFFF97316)),
  'huawei': ScreenDevice('Huawei Mate 80 Pro Max', ScreenStyle.android, Color(0xFFB91C1C), Color(0xFFEF4444)),
  'oppo': ScreenDevice('OPPO Find X9 Ultra', ScreenStyle.android, Color(0xFF14532D), Color(0xFF4ADE80)),
  'honor': ScreenDevice('Honor Magic V5', ScreenStyle.fold, Color(0xFF1E3A8A), Color(0xFF60A5FA)),
  'vivo': ScreenDevice('vivo X300 Pro', ScreenStyle.android, Color(0xFF7C2D12), Color(0xFFFB923C)),
  'tablet': ScreenDevice('iPad Pro M5', ScreenStyle.tablet, Color(0xFF9CA3AF), Color(0xFF38BDF8)),
  'ereader': ScreenDevice('Kindle Scribe', ScreenStyle.reader, Color(0xFF374151), Color(0xFFA3A3A3)),
  'laptop': ScreenDevice('MacBook Pro M5 Max', ScreenStyle.computer, Color(0xFF9CA3AF), Color(0xFF6366F1)),
  'imac': ScreenDevice('iMac 32 inch', ScreenStyle.computer, Color(0xFFE5E7EB), Color(0xFF0EA5E9)),
  'monitor': ScreenDevice('Pro Display XDR 8K', ScreenStyle.computer, Color(0xFF111111), Color(0xFF22D3EE)),
  'projector': ScreenDevice('Sony Laser Projector', ScreenStyle.computer, Color(0xFF1F2937), Color(0xFFFDE047)),
  'carscreen': ScreenDevice('Luxury car touchscreen', ScreenStyle.computer, Color(0xFF0B0F17), Color(0xFFEF4444)),
  'vision': ScreenDevice('Apple Vision Pro', ScreenStyle.computer, Color(0xFF4B5563), Color(0xFFA78BFA)),
  // The watch opens the same big screen as the phones (a near square screen like a fold), with the remote and full screen.
  'smartwatch': ScreenDevice('Apple Watch Ultra', ScreenStyle.fold, Color(0xFFB8B2A7), Color(0xFF34D399)),
};

bool isScreenKind(String kind) => kScreenDevices.containsKey(kind);
bool isTvKind(String kind) => kScreenDevices[kind]?.style == ScreenStyle.tv;

Future<void> showNgmyDeviceScreen(BuildContext context, String kind, {int charge = 0}) {
  return Navigator.of(context).push<void>(PageRouteBuilder(
    opaque: true,
    transitionDuration: const Duration(milliseconds: 260),
    pageBuilder: (_, __, ___) => NgmyDeviceScreen(kind: kind, charge: charge),
    transitionsBuilder: (_, a, __, child) => FadeTransition(opacity: a, child: ScaleTransition(scale: Tween(begin: 0.85, end: 1.0).animate(CurvedAnimation(parent: a, curve: Curves.easeOutCubic)), child: child)),
  ));
}

class NgmyDeviceScreen extends StatefulWidget {
  const NgmyDeviceScreen({super.key, this.kind = 'phone', this.charge = 0});
  final String kind;

  /// How full the battery looked when the device was opened (0..100).
  final int charge;

  @override
  State<NgmyDeviceScreen> createState() => _NgmyDeviceScreenState();
}

class _NgmyDeviceScreenState extends State<NgmyDeviceScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _clock = AnimationController(vsync: this, duration: const Duration(days: 1))..forward();
  int? _open;

  /// Full screen (like NGMY Slides), and in full screen whether a double tap has hidden the buttons.
  bool _full = false;
  bool _locked = false;

  // Touching the ads: where and when the picture was tapped (the phone or the hero spins), and in the NGMY Ads app
  // which ad it started from and when (the remote's − and + pick the ad).
  double _tapAt = -99;
  Offset _tapPos = const Offset(0.5, 0.5);
  int _adBase = 0;
  double _adStart = 0;

  ScreenDevice get _dev => kScreenDevices[widget.kind] ?? kScreenDevices['phone']!;

  @override
  void dispose() {
    if (_full) {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
      ngmyExitFullscreen();
    }
    _clock.dispose();
    super.dispose();
  }

  double get _t => (_clock.lastElapsedDuration?.inMilliseconds ?? 0) / 1000;

  bool get _inAdsApp => _open != null && kNgmyApps[_open!].ad == -1;

  /// The NGMY ad on the screen now (an index into kNgmyAds3D), or null when no ad is open.
  int? _adNow() {
    final o = _open;
    if (o == null) return null;
    final a = kNgmyApps[o].ad;
    if (a == -2) return null;
    if (a == -1) return (_adBase + (math.max(0.0, _t - _adStart) / kNgmyAdLength).floor()) % kNgmyAds3D.length;
    return a;
  }

  void _openApp(int? k) {
    setState(() {
      _open = k;
      _adBase = 0;
      _adStart = _t;
    });
  }

  /// Plays ad [i] in the NGMY Ads app.
  void _pickAd(int i) {
    final n = kNgmyAds3D.length;
    setState(() {
      _open = 0;
      _adBase = ((i % n) + n) % n;
      _adStart = _t;
    });
  }

  /// The remote's − and +, or a swipe: the previous or the next ad.
  void _stepAd(int d) => _pickAd((_adNow() ?? (d > 0 ? -1 : 0)) + d);

  void _tapPicture(Offset at, Size size) {
    if (size.width <= 0 || size.height <= 0 || _adNow() == null) return;
    setState(() {
      _tapPos = Offset(at.dx / size.width, at.dy / size.height);
      _tapAt = _t;
    });
  }

  Future<void> _learnMore() async {
    final i = _adNow();
    if (i == null) return;
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
    if (mounted && again) _pickAd(i);
  }

  /// Full screen, like NGMY Slides: the screen fills the whole window and the browser bars go away.
  void _toggleFull() {
    final on = !_full;
    setState(() {
      _full = on;
      _locked = false;
    });
    if (on) {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);
      ngmyEnterFullscreen(landscape: _dev.style == ScreenStyle.computer);
    } else {
      SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
      ngmyExitFullscreen();
    }
  }

  /// In full screen: a double tap hides every button, and another double tap brings them back.
  void _toggleLock() {
    if (!_full) return;
    HapticFeedback.mediumImpact();
    setState(() => _locked = !_locked);
    final messenger = ScaffoldMessenger.of(context)..hideCurrentSnackBar();
    if (_locked) {
      messenger.showSnackBar(const SnackBar(
        content: Text('Buttons hidden. Double-tap to show them again.'),
        duration: Duration(milliseconds: 1800),
        behavior: SnackBarBehavior.floating,
      ));
    }
  }

  bool get _controlsShown => !_full || !_locked;

  /// The picture of an open app: tap it to spin the phone or the coin, swipe for the next or the previous ad.
  Widget _appPicture(int k) => LayoutBuilder(
        builder: (context, box) => GestureDetector(
          key: const Key('device-picture'),
          behavior: HitTestBehavior.opaque,
          onTapUp: (d) => _tapPicture(d.localPosition, box.biggest),
          onDoubleTap: _full ? _toggleLock : null,
          onHorizontalDragEnd: (d) {
            final v = d.primaryVelocity ?? 0;
            if (v.abs() > 120 && _adNow() != null) _stepAd(v < 0 ? 1 : -1);
          },
          child: CustomPaint(painter: _painterFor(k), size: Size.infinite),
        ),
      );

  _ScreenPainter _painterFor(int k) {
    final t = _t;
    final tap = t - _tapAt < 1.4 ? NgmyAdTap(_tapPos, t - _tapAt) : null;
    if (kNgmyApps[k].ad == -1) {
      final local = math.max(0.0, t - _adStart);
      return _ScreenPainter(k, local, tap: tap, pick: (_adBase + (local / kNgmyAdLength).floor()) % kNgmyAds3D.length);
    }
    return _ScreenPainter(k, t, tap: tap);
  }

  /// A small Learn more pill, [h] tall.
  Widget _learnMoreButton(double h) => Material(
        color: Colors.white.withValues(alpha: 0.92),
        shape: const StadiumBorder(),
        child: InkWell(
          key: const Key('device-learn-more'),
          customBorder: const StadiumBorder(),
          onTap: _learnMore,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: h * 0.42),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(Icons.info_outline_rounded, size: h * 0.6, color: const Color(0xFF111827)),
              SizedBox(width: h * 0.18),
              Text('Learn more', style: TextStyle(color: const Color(0xFF111827), fontWeight: FontWeight.w800, fontSize: h * 0.48)),
            ]),
          ),
        ),
      );

  Widget _round(IconData i, String tip, VoidCallback f, {Key? key}) => IconButton(key: key, onPressed: f, tooltip: tip, style: IconButton.styleFrom(backgroundColor: Colors.black54), icon: Icon(i, color: Colors.white));

  /// The little remote, like the TV one: the previous ad, the next ad, the home screen and every NGMY ad.
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
      key: const Key('device-remote'),
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
      decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.72), borderRadius: BorderRadius.circular(22), border: Border.all(color: _dev.accent.withValues(alpha: 0.5))),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        key(Icons.skip_previous_rounded, 'AD −', () => _stepAd(-1)),
        key(Icons.skip_next_rounded, 'AD +', () => _stepAd(1)),
        key(Icons.home_rounded, 'HOME', () => _openApp(null), color: _dev.accent, on: _open == null),
        key(Icons.campaign_rounded, 'ADS', () => _openApp(0), color: const Color(0xFFF472B6), on: _inAdsApp),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    final dev = _dev;
    final show = _controlsShown;
    final topRow = Padding(
      padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
      child: Row(children: [
        _round(Icons.close_rounded, 'Back to the board', () => Navigator.of(context).maybePop()),
        const SizedBox(width: 8),
        _round(_full ? Icons.fullscreen_exit_rounded : Icons.fullscreen_rounded, _full ? 'Leave full screen' : 'Full screen', _toggleFull, key: const Key('device-fullscreen')),
        const SizedBox(width: 8),
        Expanded(
          child: Align(
            alignment: Alignment.centerRight,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(20)),
              child: Text(_open == null ? dev.name : '${dev.name} · ${kNgmyApps[_open!].name}', maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5)),
            ),
          ),
        ),
      ]),
    );
    final device = dev.style == ScreenStyle.computer ? _computer(dev) : _portrait(dev);
    return Scaffold(
      backgroundColor: const Color(0xFF05070C),
      body: SafeArea(
        top: !_full,
        bottom: !_full,
        left: !_full,
        right: !_full,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onDoubleTap: _full ? _toggleLock : null,
          child: _full
              // Full screen: only the screen, with the close and leave full screen buttons over it (no remote).
              ? Stack(fit: StackFit.expand, children: [
                  Center(child: device),
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
              // Not full screen: the buttons and the remote above the device, always in view (on a computer too).
              : Column(children: [
                  topRow,
                  const SizedBox(height: 6),
                  _remote(),
                  Expanded(child: Padding(padding: const EdgeInsets.only(bottom: 8), child: Center(child: device))),
                ]),
        ),
      ),
    );
  }

  // ── Phones and tablets ──

  double _aspect(ScreenStyle s) => switch (s) {
        ScreenStyle.iphone => 9 / 19.5,
        ScreenStyle.android => 9 / 20,
        ScreenStyle.fold => 1 / 1.08,
        ScreenStyle.tablet => 3 / 4,
        _ => 3 / 4.1,
      };

  Widget _portrait(ScreenDevice dev) {
    final iphone = dev.style == ScreenStyle.iphone;
    final radius = switch (dev.style) { ScreenStyle.iphone => 44.0, ScreenStyle.android => 30.0, ScreenStyle.fold => 22.0, ScreenStyle.tablet => 26.0, _ => 14.0 };
    Widget screen = AnimatedBuilder(
      animation: _clock,
      builder: (_, __) => ClipRRect(
        borderRadius: BorderRadius.circular(radius - 5),
        child: Stack(fit: StackFit.expand, children: [
          AnimatedSwitcher(
            duration: const Duration(milliseconds: 260),
            transitionBuilder: (child, a) => FadeTransition(opacity: a, child: ScaleTransition(scale: Tween(begin: 0.92, end: 1.0).animate(a), child: child)),
            child: KeyedSubtree(key: ValueKey(_open), child: _open == null ? _home(dev) : _appPage(dev, _open!)),
          ),
          if (iphone) _island(),
          if (dev.style == ScreenStyle.android) Positioned(top: 10, left: 0, right: 0, child: Center(child: Container(width: 11, height: 11, decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle)))),
          if (dev.style == ScreenStyle.fold) Positioned(top: 10, right: 22, child: Container(width: 9, height: 9, decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle))),
          if (_open != null || iphone) Positioned(bottom: 6, left: 0, right: 0, child: GestureDetector(onTap: () => _openApp(null), child: Center(child: Container(width: 120, height: 5, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.75), borderRadius: BorderRadius.circular(3)))))),
        ]),
      ),
    );
    if (dev.style == ScreenStyle.reader) {
      screen = ColorFiltered(colorFilter: const ColorFilter.mode(Colors.grey, BlendMode.saturation), child: screen);
    }
    return AspectRatio(
      aspectRatio: _aspect(dev.style),
      child: Container(
        margin: _full ? const EdgeInsets.all(6) : const EdgeInsets.fromLTRB(10, 14, 10, 14),
        padding: EdgeInsets.all(iphone ? 4 : 5),
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(dev.frame, Colors.white, iphone ? 0.25 : 0.08)!, dev.frame, Color.lerp(dev.frame, Colors.black, 0.5)!]),
          borderRadius: BorderRadius.circular(radius),
          boxShadow: [BoxShadow(color: dev.accent.withValues(alpha: 0.28), blurRadius: 36)],
        ),
        child: Container(decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(radius - 3)), padding: const EdgeInsets.all(1.5), child: screen),
      ),
    );
  }

  /// The iPhone's Dynamic Island: a black pill that grows to show what is playing.
  Widget _island() {
    final big = (_t % 12) < 4;
    return Positioned(
      top: 10,
      left: 0,
      right: 0,
      child: Center(
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 350),
          curve: Curves.easeOutBack,
          width: big ? 150 : 96,
          height: 28,
          decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(16)),
          child: Row(children: [
            const SizedBox(width: 10),
            if (big) const Expanded(child: Text('📢 NGMY Ads', maxLines: 1, overflow: TextOverflow.clip, style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800))) else const Spacer(),
            Container(width: 9, height: 9, decoration: BoxDecoration(color: big ? const Color(0xFF4ADE80) : const Color(0xFF111827), shape: BoxShape.circle)),
            const SizedBox(width: 10),
          ]),
        ),
      ),
    );
  }

  Widget _statusBar(ScreenDevice dev) {
    final now = DateTime.now();
    final pct = (widget.charge + (_t * 0.4).floor()).clamp(0, 100);
    final iphone = dev.style == ScreenStyle.iphone;
    return Padding(
      padding: EdgeInsets.fromLTRB(iphone ? 34 : 20, 12, iphone ? 28 : 18, 2),
      // On a small screen the bar shrinks to fit instead of running off the side.
      child: LayoutBuilder(builder: (context, box) => FittedBox(fit: BoxFit.scaleDown, alignment: Alignment.centerLeft, child: SizedBox(width: math.max(box.maxWidth, 230.0), child: Row(children: [
        Text('${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
        const Spacer(),
        for (var k = 0; k < 4; k++) Container(width: 3, height: 4.0 + k * 2, margin: const EdgeInsets.only(right: 1.5), decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(1))),
        const SizedBox(width: 4),
        const Text('5G', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10.5)),
        const SizedBox(width: 6),
        Container(
          width: 26,
          height: 12,
          decoration: BoxDecoration(border: Border.all(color: Colors.white70, width: 1), borderRadius: BorderRadius.circular(4)),
          child: Align(alignment: Alignment.centerLeft, child: FractionallySizedBox(widthFactor: pct / 100, child: Container(margin: const EdgeInsets.all(1.5), decoration: BoxDecoration(color: const Color(0xFF4ADE80), borderRadius: BorderRadius.circular(2))))),
        ),
        const SizedBox(width: 3),
        Text('$pct%', style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900, fontSize: 10.5)),
      ])))),
    );
  }

  Widget _icon(NgmyApp a, double size, {bool label = true}) => GestureDetector(
        onTap: () => _openApp(kNgmyApps.indexOf(a)),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Container(
            width: size,
            height: size,
            decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [a.color, Color.lerp(a.color, Colors.black, 0.5)!]), borderRadius: BorderRadius.circular(size * 0.26), boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 6, offset: Offset(0, 2))]),
            child: Center(child: Text(a.emoji, style: TextStyle(fontSize: size * 0.5))),
          ),
          if (label) ...[
            const SizedBox(height: 4),
            Text(a.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 10.5, fontWeight: FontWeight.w700, shadows: [Shadow(color: Colors.black54, blurRadius: 3)])),
          ],
        ]),
      );

  Widget _home(ScreenDevice dev) {
    final wide = dev.style == ScreenStyle.tablet || dev.style == ScreenStyle.fold;
    final reader = dev.style == ScreenStyle.reader;
    return Container(
      decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(dev.accent, Colors.black, 0.55)!, const Color(0xFF1E1B4B), Color.lerp(dev.accent, const Color(0xFF831843), 0.5)!])),
      child: Column(children: [
        _statusBar(dev),
        const SizedBox(height: 6),
        GestureDetector(
          onTap: () => _openApp(0),
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 14),
            height: wide ? 190 : 138,
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(24), border: Border.all(color: Colors.white24)),
            child: ClipRRect(borderRadius: BorderRadius.circular(23), child: CustomPaint(painter: _ScreenPainter(0, _t), size: Size.infinite)),
          ),
        ),
        const SizedBox(height: 12),
        Expanded(
          child: GridView.count(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
            crossAxisCount: wide ? 5 : 4,
            mainAxisSpacing: 12,
            crossAxisSpacing: 8,
            childAspectRatio: 0.92,
            children: [for (final a in kNgmyApps) Center(child: FittedBox(fit: BoxFit.scaleDown, child: _icon(a, wide ? 58 : 54)))],
          ),
        ),
        if (!reader)
          Container(
            margin: const EdgeInsets.fromLTRB(14, 0, 14, 22),
            padding: const EdgeInsets.symmetric(vertical: 9, horizontal: 8),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(28)),
            child: LayoutBuilder(builder: (context, box) => FittedBox(fit: BoxFit.scaleDown, child: SizedBox(width: math.max(box.maxWidth, 216.0), child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [for (final a in kNgmyApps.take(4)) _icon(a, 50, label: false)])))),
          ),
      ]),
    );
  }

  Widget _appPage(ScreenDevice dev, int k) {
    final ad = _adNow() != null;
    return Container(
      color: Colors.black,
      child: Column(children: [
        _statusBar(dev),
        Expanded(child: _appPicture(k)),
        SizedBox(
          height: 38,
          child: Stack(children: [
            Positioned.fill(
              child: GestureDetector(
                onTap: () => _openApp(null),
                child: Container(color: Colors.black, child: Center(child: Text(kNgmyApps[k].name, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700)))),
              ),
            ),
            if (ad && _controlsShown) Positioned(right: 10, top: 8, bottom: 8, child: _learnMoreButton(22)),
          ]),
        ),
      ]),
    );
  }

  // ── Computers ──

  /// What the computer shows: the menu bar, the desktop, the open app window and the dock.
  Widget _computerScreen(ScreenDevice dev, {required bool car}) => AnimatedBuilder(
        animation: _clock,
        builder: (_, __) => Container(
          color: const Color(0xFF05070C),
          child: Column(children: [
            Container(
              height: 24,
              color: Colors.black.withValues(alpha: 0.55),
              // In full screen the menu bar leaves room for the buttons that float at the top.
              padding: EdgeInsets.fromLTRB(_full ? 112 : 10, 0, _full && MediaQuery.sizeOf(context).width > 700 ? 250 : 10, 0),
              child: Row(children: [
                const Text('NGMY', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)),
                const SizedBox(width: 10),
                Expanded(child: Text(car ? 'Navigation   Media   Climate' : 'File   Edit   View   Window   Help', maxLines: 1, overflow: TextOverflow.clip, style: const TextStyle(color: Colors.white60, fontSize: 10.5))),
                Text('${DateTime.now().hour.toString().padLeft(2, '0')}:${DateTime.now().minute.toString().padLeft(2, '0')}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
              ]),
            ),
            Expanded(
              child: Stack(fit: StackFit.expand, children: [
                CustomPaint(painter: _WallpaperPainter(_t, dev.accent)),
                if (_open != null)
                  Positioned.fill(
                    child: Padding(
                      // In full screen the window sits below the X and full screen buttons that float at the top.
                      padding: EdgeInsets.fromLTRB(26, _full ? 40 : 12, 26, 58),
                      child: Container(
                        decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(10), border: Border.all(color: Colors.white24), boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 16)]),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(10),
                          child: Column(children: [
                            Container(
                              height: 26,
                              color: const Color(0xFF1F2937),
                              padding: const EdgeInsets.symmetric(horizontal: 8),
                              child: Row(children: [
                                GestureDetector(onTap: () => _openApp(null), child: Container(width: 12, height: 12, decoration: const BoxDecoration(color: Color(0xFFEF4444), shape: BoxShape.circle))),
                                const SizedBox(width: 5),
                                Container(width: 12, height: 12, decoration: const BoxDecoration(color: Color(0xFFFBBF24), shape: BoxShape.circle)),
                                const SizedBox(width: 5),
                                GestureDetector(onTap: _toggleFull, child: Container(width: 12, height: 12, decoration: const BoxDecoration(color: Color(0xFF22C55E), shape: BoxShape.circle))),
                                const SizedBox(width: 10),
                                Expanded(child: Text(kNgmyApps[_open!].name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11))),
                                // Learn more: small, on the right of the window bar, next to the name.
                                if (_adNow() != null && _controlsShown) _learnMoreButton(19),
                              ]),
                            ),
                            Expanded(child: _appPicture(_open!)),
                          ]),
                        ),
                      ),
                    ),
                  ),
                Positioned(
                  bottom: 8,
                  left: 0,
                  right: 0,
                  child: Center(
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white24)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [for (final a in kNgmyApps) Padding(padding: const EdgeInsets.symmetric(horizontal: 3), child: _icon(a, 34, label: false))]),
                    ),
                  ),
                ),
              ]),
            ),
          ]),
        ),
      );

  Widget _computer(ScreenDevice dev) {
    final car = widget.kind == 'carscreen';
    final light = widget.kind == 'imac';
    // Full screen: the computer screen fills the whole window, with no frame round it.
    if (_full) return SizedBox.expand(child: _computerScreen(dev, car: car));
    return AspectRatio(
      aspectRatio: 16 / 10.4,
      child: Container(
        margin: const EdgeInsets.fromLTRB(8, 12, 8, 8),
        padding: EdgeInsets.fromLTRB(8, 8, 8, light ? 26 : 8),
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(dev.frame, Colors.white, 0.18)!, dev.frame]),
          borderRadius: BorderRadius.circular(car ? 26 : 14),
          boxShadow: [BoxShadow(color: dev.accent.withValues(alpha: 0.25), blurRadius: 36)],
        ),
        child: ClipRRect(borderRadius: BorderRadius.circular(car ? 20 : 8), child: _computerScreen(dev, car: car)),
      ),
    );
  }
}

class _WallpaperPainter extends CustomPainter {
  _WallpaperPainter(this.t, this.accent);
  final double t;
  final Color accent;

  @override
  void paint(Canvas c, Size s) {
    c.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(accent, Colors.black, 0.6)!, const Color(0xFF1E1B4B), Color.lerp(accent, const Color(0xFF831843), 0.4)!]).createShader(Offset.zero & s));
    for (var k = 0; k < 5; k++) {
      final p = Offset(s.width * (0.15 + 0.2 * k + 0.05 * math.sin(t * 0.4 + k)), s.height * (0.3 + 0.3 * math.sin(t * 0.3 + k * 1.7)));
      c.drawCircle(p, s.height * (0.2 + 0.04 * k), Paint()..color = accent.withValues(alpha: 0.1)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 30));
    }
  }

  @override
  bool shouldRepaint(covariant _WallpaperPainter old) => true;
}

class _ScreenPainter extends CustomPainter {
  _ScreenPainter(this.app, this.t, {this.tap, this.pick});
  final int app;
  final double t;
  final NgmyAdTap? tap;
  final int? pick;

  @override
  void paint(Canvas canvas, Size size) => paintNgmyApp(canvas, size, app, t, tap: tap, pick: pick);

  @override
  bool shouldRepaint(covariant _ScreenPainter old) => true;
}
