import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

// The contribution pop-up, in Swahili: it comes up in the middle of the screen when a member of a state that has a contribution going opens the app and
// has not contributed yet. Orange like the Help + Insurance place, with fine lines at the back, glowing and moving. Two buttons at the top (go to the
// Civic Registry, close), then what the contribution is for and where to send it (tap or copy).

/// Shows the pop-up on the root navigator. [onOpenRegistry] is called when the person taps the registry button (the pop-up closes first).
Future<void> showNgmyContributionPopup(
  BuildContext context, {
  required String state,
  required String purpose,
  String scopeLabel = '',
  String cashApp = '',
  String zelle = '',
  String phone = '',
  required VoidCallback onOpenRegistry,
}) {
  return showGeneralDialog<void>(
    context: context,
    useRootNavigator: true,
    barrierDismissible: false,
    barrierLabel: 'Mchango',
    barrierColor: Colors.black.withValues(alpha: 0.74),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, a, b) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, _) {
      final k = Curves.easeOutBack.transform(anim.value.clamp(0.0, 1.0));
      return Opacity(
        opacity: anim.value.clamp(0.0, 1.0),
        child: Transform.scale(
          scale: 0.78 + 0.22 * k,
          child: NgmyContributionPopupCard(
            state: state,
            purpose: purpose,
            scopeLabel: scopeLabel,
            cashApp: cashApp,
            zelle: zelle,
            phone: phone,
            onOpenRegistry: () {
              Navigator.of(ctx, rootNavigator: true).pop();
              onOpenRegistry();
            },
            onClose: () => Navigator.of(ctx, rootNavigator: true).pop(),
          ),
        ),
      );
    },
  );
}

const Color _kOrange = Color(0xFFF97316), _kDeep = Color(0xFFC2410C), _kAmber = Color(0xFFFBBF24), _kBrown = Color(0xFF7C2D12);

class NgmyContributionPopupCard extends StatefulWidget {
  const NgmyContributionPopupCard({super.key, required this.state, required this.purpose, this.scopeLabel = '', this.cashApp = '', this.zelle = '', this.phone = '', required this.onOpenRegistry, required this.onClose});
  final String state, purpose, scopeLabel, cashApp, zelle, phone;
  final VoidCallback onOpenRegistry, onClose;

  @override
  State<NgmyContributionPopupCard> createState() => _NgmyContributionPopupCardState();
}

class _NgmyContributionPopupCardState extends State<NgmyContributionPopupCard> with TickerProviderStateMixin {
  // One slow loop drives everything that moves: the scanning band, the sparks, the ring round the badge, the glow and the shine on the button.
  late final AnimationController _loop = AnimationController(vsync: this, duration: const Duration(seconds: 7))..repeat();
  // One short run for the things that come in one after another.
  late final AnimationController _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 1500))..forward();
  String _copied = '';

  @override
  void dispose() {
    _loop.dispose();
    _enter.dispose();
    super.dispose();
  }

  Future<void> _copy(String key, String text) async {
    await Clipboard.setData(ClipboardData(text: text.trim()));
    if (!mounted) return;
    setState(() => _copied = key);
    Future<void>.delayed(const Duration(milliseconds: 1600), () {
      if (mounted && _copied == key) setState(() => _copied = '');
    });
  }

  Future<void> _open(Uri uri) async {
    try {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    } catch (_) {}
  }

  /// Something that slides up and fades in when its turn comes ([index] 0, 1, 2...).
  Widget _in(int index, Widget child) {
    final start = (0.18 + index * 0.12).clamp(0.0, 0.8);
    final anim = CurvedAnimation(parent: _enter, curve: Interval(start, math.min(1.0, start + 0.35), curve: Curves.easeOutCubic));
    return AnimatedBuilder(
      animation: anim,
      builder: (context, c) => Opacity(opacity: anim.value, child: Transform.translate(offset: Offset(0, (1 - anim.value) * 22), child: c)),
      child: child,
    );
  }

  Widget _row({required int index, required String key, required IconData icon, required String title, required String value, required Color color, VoidCallback? onTap, String hint = ''}) {
    final copied = _copied == key;
    return _in(
      index,
      Padding(
        padding: const EdgeInsets.only(bottom: 9),
        child: _Press(
          onTap: onTap ?? () => _copy(key, value),
          child: Container(
            padding: const EdgeInsets.fromLTRB(10, 9, 6, 9),
            decoration: BoxDecoration(
              color: Colors.black.withValues(alpha: 0.26),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Color.lerp(color, Colors.white, 0.25)!.withValues(alpha: 0.75), width: 1.3),
            ),
            child: Row(children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [color, Color.lerp(color, Colors.black, 0.45)!]), boxShadow: [BoxShadow(color: color.withValues(alpha: 0.5), blurRadius: 10)]),
                child: Icon(icon, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: _kAmber, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.4)),
                  Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16.5)),
                  if (hint.isNotEmpty) Text(hint, style: const TextStyle(color: Colors.white60, fontSize: 10.5)),
                ]),
              ),
              IconButton(
                key: Key('contribution-copy-$key'),
                tooltip: 'Nakili',
                onPressed: () => _copy(key, value),
                icon: AnimatedSwitcher(
                  duration: const Duration(milliseconds: 250),
                  transitionBuilder: (c, a) => ScaleTransition(scale: a, child: c),
                  child: Icon(copied ? Icons.check_circle_rounded : Icons.copy_rounded, key: ValueKey(copied), color: copied ? const Color(0xFF86EFAC) : Colors.white, size: 22),
                ),
              ),
            ]),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final cash = widget.cashApp.trim(), zelle = widget.zelle.trim(), phone = widget.phone.trim();
    final handle = cash.startsWith(r'$') ? cash.substring(1) : cash;
    var row = 0;
    return Material(
      type: MaterialType.transparency,
      child: SafeArea(
        child: Center(
          // Never touching the sides: always a good space left and right, and in the middle of the screen.
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 24),
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 400),
              child: AnimatedBuilder(
                animation: _loop,
                builder: (context, child) {
                  final glow = 0.5 + 0.5 * math.sin(_loop.value * 2 * math.pi);
                  return Container(
                    key: const Key('contribution-popup'),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(32),
                      border: Border.all(color: Color.lerp(_kOrange, _kAmber, glow)!, width: 2.2),
                      boxShadow: [BoxShadow(color: Color.lerp(_kOrange, _kAmber, glow)!.withValues(alpha: 0.45), blurRadius: 34 + 14 * glow, spreadRadius: 1)],
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(30),
                      child: Stack(children: [
                        Positioned.fill(
                          child: DecoratedBox(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFFB923C), _kOrange, _kDeep, _kBrown]))),
                        ),
                        // The fine lines at the back, the scanning band and the sparks.
                        Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _BackPainter(_loop.value)))),
                        child!,
                      ]),
                    ),
                  );
                },
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
                  child: SingleChildScrollView(
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      // The two buttons at the top.
                      Row(children: [
                        Expanded(
                          child: _Press(
                            key: const Key('contribution-open-registry'),
                            onTap: widget.onOpenRegistry,
                            child: AnimatedBuilder(
                              animation: _loop,
                              builder: (context, c) {
                                final pulse = 1 + 0.025 * math.sin(_loop.value * 2 * math.pi * 3);
                                final sweep = (_loop.value * 3) % 1.0;
                                return Transform.scale(
                                  scale: pulse,
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(vertical: 13),
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(24),
                                      gradient: LinearGradient(
                                        begin: Alignment.centerLeft,
                                        end: Alignment.centerRight,
                                        // A shine slides across the button.
                                        colors: const [Color(0xFFFFFBEB), Colors.white, Color(0xFFFEF3C7), Color(0xFFFFFBEB)],
                                        stops: [0, (sweep - 0.15).clamp(0.0, 1.0), sweep.clamp(0.0, 1.0), 1],
                                      ),
                                      boxShadow: [BoxShadow(color: _kAmber.withValues(alpha: 0.6), blurRadius: 16, offset: const Offset(0, 4))],
                                    ),
                                    child: c,
                                  ),
                                );
                              },
                              child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                                Icon(Icons.how_to_vote_rounded, color: _kDeep, size: 20),
                                SizedBox(width: 8),
                                Flexible(child: Text('Fungua Usajili wa Raia', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: _kBrown, fontWeight: FontWeight.w900, fontSize: 14.5))),
                              ]),
                            ),
                          ),
                        ),
                        const SizedBox(width: 10),
                        _Press(
                          key: const Key('contribution-close'),
                          onTap: widget.onClose,
                          child: Container(
                            width: 48,
                            height: 48,
                            decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.black.withValues(alpha: 0.3), border: Border.all(color: Colors.white54, width: 1.4)),
                            child: const Icon(Icons.close_rounded, color: Colors.white, size: 25),
                          ),
                        ),
                      ]),
                      const SizedBox(height: 16),
                      // The badge: a round, glowing heart of giving with a ring turning round it.
                      _in(
                        0,
                        SizedBox(
                          width: 104,
                          height: 104,
                          child: AnimatedBuilder(
                            animation: _loop,
                            builder: (context, _) => CustomPaint(
                              painter: _RingPainter(_loop.value),
                              child: Center(
                                child: Container(
                                  width: 76,
                                  height: 76,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    gradient: const RadialGradient(colors: [Color(0xFFFFF7ED), Color(0xFFFDE68A), Color(0xFFF59E0B)]),
                                    boxShadow: [BoxShadow(color: _kAmber.withValues(alpha: 0.4 + 0.3 * math.sin(_loop.value * 2 * math.pi * 2).abs()), blurRadius: 24, spreadRadius: 2)],
                                  ),
                                  child: Transform.scale(scale: 1 + 0.07 * math.sin(_loop.value * 2 * math.pi * 3), child: const Icon(Icons.volunteer_activism_rounded, color: _kBrown, size: 40)),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      _in(1, Text('Mchango umefunguliwa katika ${widget.state}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 21, height: 1.15, shadows: [Shadow(color: Colors.black38, blurRadius: 8)]))),
                      if (widget.scopeLabel.isNotEmpty) ...[
                        const SizedBox(height: 7),
                        _in(
                          1,
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 4),
                            decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.28), borderRadius: BorderRadius.circular(15), border: Border.all(color: _kAmber.withValues(alpha: 0.7))),
                            child: Text(widget.scopeLabel, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11.5)),
                          ),
                        ),
                      ],
                      const SizedBox(height: 12),
                      _in(
                        2,
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.fromLTRB(16, 13, 16, 15),
                          // A dark, solid frame with a bright border, so the words stand out clearly from the orange.
                          decoration: BoxDecoration(color: const Color(0xFF2A0F04).withValues(alpha: 0.92), borderRadius: BorderRadius.circular(22), border: Border.all(color: _kAmber, width: 2), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))]),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Row(children: [
                              Container(width: 26, height: 26, decoration: const BoxDecoration(shape: BoxShape.circle, color: _kAmber), child: const Icon(Icons.help_outline_rounded, color: _kBrown, size: 18)),
                              const SizedBox(width: 9),
                              const Flexible(child: Text('NI KWA AJILI YA NINI?', style: TextStyle(color: _kAmber, fontWeight: FontWeight.w900, fontSize: 14.5, letterSpacing: 0.6))),
                            ]),
                            const SizedBox(height: 9),
                            Text(widget.purpose.trim().isEmpty ? 'Mchango wa jamii' : widget.purpose.trim(), style: const TextStyle(color: Colors.white, fontSize: 18.5, fontWeight: FontWeight.w900, height: 1.3)),
                          ]),
                        ),
                      ),
                      const SizedBox(height: 14),
                      _in(3, const Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(left: 4, bottom: 8), child: Text('TUMA MCHANGO WAKO KWA', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5, letterSpacing: 0.6, shadows: [Shadow(color: Colors.black54, blurRadius: 6)]))))),
                      if (cash.isNotEmpty) _row(index: 4 + row++, key: 'cash', icon: Icons.attach_money_rounded, title: 'CASH APP', value: cash, color: const Color(0xFF22C55E), hint: 'Gusa kufungua Cash App', onTap: () => _open(Uri.parse('https://cash.app/\$$handle'))),
                      if (zelle.isNotEmpty) _row(index: 4 + row++, key: 'zelle', icon: Icons.account_balance_wallet_rounded, title: 'ZELLE', value: zelle, color: const Color(0xFFA78BFA), hint: 'Gusa kunakili'),
                      if (phone.isNotEmpty) _row(index: 4 + row++, key: 'phone', icon: Icons.call_rounded, title: 'PIGA SIMU KUOMBA MSAADA', value: phone, color: const Color(0xFF38BDF8), hint: 'Gusa kupiga simu', onTap: () => _open(Uri.parse('tel:$phone'))),
                      const SizedBox(height: 4),
                      _in(7, const Text('Ukishachangia, ujumbe huu hautatokea tena. Unaweza kuuona kila wakati katika Usajili wa Raia.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontSize: 11.5, height: 1.3))),
                    ]),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// A tap target that shrinks a little while it is pressed.
class _Press extends StatefulWidget {
  const _Press({super.key, required this.child, required this.onTap});
  final Widget child;
  final VoidCallback onTap;

  @override
  State<_Press> createState() => _PressState();
}

class _PressState extends State<_Press> {
  bool _down = false;

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => setState(() => _down = true),
        onTapCancel: () => setState(() => _down = false),
        onTapUp: (_) => setState(() => _down = false),
        onTap: widget.onTap,
        child: AnimatedScale(scale: _down ? 0.95 : 1, duration: const Duration(milliseconds: 110), child: widget.child),
      );
}

/// The fine lines at the back (slanted, and a few across), a band of light that goes down over them, and sparks that float up.
class _BackPainter extends CustomPainter {
  _BackPainter(this.t);
  final double t;

  @override
  void paint(Canvas canvas, Size s) {
    final line = Paint()
      ..color = Colors.white.withValues(alpha: 0.09)
      ..strokeWidth = 1.2;
    for (var x = -s.height; x < s.width; x += 22) {
      canvas.drawLine(Offset(x, s.height), Offset(x + s.height, 0), line);
    }
    final fine = Paint()
      ..color = Colors.white.withValues(alpha: 0.05)
      ..strokeWidth = 1;
    for (var y = 18.0; y < s.height; y += 36) {
      canvas.drawLine(Offset(0, y), Offset(s.width, y), fine);
    }
    // The band of light moving down.
    final by = ((t * 1.0) % 1.0) * (s.height + 160) - 80;
    final band = Rect.fromLTWH(0, by - 60, s.width, 120);
    canvas.drawRect(band, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0), Colors.white.withValues(alpha: 0.13), Colors.white.withValues(alpha: 0)]).createShader(band));
    // Sparks floating up.
    for (var i = 0; i < 14; i++) {
      final ph = ((t * (0.6 + (i % 4) * 0.15)) + i / 14) % 1.0;
      final x = s.width * (((i * 0.37) + 0.08) % 1.0) + 8 * math.sin(ph * 6 + i);
      final y = s.height * (1.05 - ph * 1.1);
      final a = math.sin(ph * math.pi);
      canvas.drawCircle(Offset(x, y), 1.6 + (i % 3), Paint()..color = const Color(0xFFFDE68A).withValues(alpha: 0.55 * a));
    }
  }

  @override
  bool shouldRepaint(covariant _BackPainter old) => old.t != t;
}

/// A dashed ring turning round the badge, with a small light travelling on it.
class _RingPainter extends CustomPainter {
  _RingPainter(this.t);
  final double t;

  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 3;
    final p = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round
      ..color = Colors.white.withValues(alpha: 0.75);
    final start = t * 2 * math.pi;
    for (var i = 0; i < 12; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), start + i * math.pi / 6, math.pi / 12, false, p);
    }
    final a = -t * 2 * math.pi * 1.6;
    canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * (r + 1), 4.5, Paint()..color = const Color(0xFFFEF3C7));
    canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * (r + 1), 9, Paint()..color = const Color(0xFFFEF3C7).withValues(alpha: 0.28));
  }

  @override
  bool shouldRepaint(covariant _RingPainter old) => old.t != t;
}
