import 'dart:math' as math;

import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_core_reaction_lab.dart';

/// Core Protocol: four auto-playing "unfold" sequences. Each one builds three glass slabs in a
/// different, physically-shaded way (a folding accordion, flipping panels, rising towers, and
/// pieces flying in to assemble). No touch needed; they loop.
class NgmyCoreProtocolSimsScreen extends StatefulWidget {
  const NgmyCoreProtocolSimsScreen({super.key});

  @override
  State<NgmyCoreProtocolSimsScreen> createState() => _NgmyCoreProtocolSimsScreenState();
}

/// The same dark page colour as the home screen.
const Color _kBg = Color(0xFF121212);

enum _UnfoldStyle { accordion, flip, towers, assemble }

class _UnfoldMeta {
  const _UnfoldMeta({
    required this.style,
    required this.title,
    required this.blurb,
    required this.colors,
    required this.icons,
    required this.labels,
    required this.subs,
  });

  final _UnfoldStyle style;
  final String title;
  final String blurb;
  final List<Color> colors;
  final List<IconData> icons; // three, top to bottom
  final List<String> labels;
  final List<String> subs;

  Color get glow => Color.lerp(colors.first, colors.last, 0.4)!;
}

const _kSequences = <_UnfoldMeta>[
  _UnfoldMeta(
    style: _UnfoldStyle.accordion,
    title: 'MESSAGE FUNNEL',
    blurb: 'Panels fold out of each other, one hinge at a time',
    colors: [Color(0xFF818CF8), Color(0xFF4338CA)],
    icons: [Icons.mail_rounded, Icons.sms_rounded, Icons.campaign_rounded],
    labels: ['Mail', 'SMS', 'Ad'],
    subs: ['Lands in the inbox', 'Texts the phone', 'Shows on the feed'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.flip,
    title: 'VAULT UNLOCK',
    blurb: 'Locked panels flip over to reveal what is inside',
    colors: [Color(0xFF2DD4BF), Color(0xFF0F766E)],
    icons: [Icons.lock_open_rounded, Icons.key_rounded, Icons.shield_rounded],
    labels: ['Unlock', 'Verify', 'Secure'],
    subs: ['Opens the door', 'Checks the key', 'Locks it safe'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.towers,
    title: 'GROWTH SKYLINE',
    blurb: 'Solid towers rise from the floor and light up',
    colors: [Color(0xFF34D399), Color(0xFF047857)],
    icons: [Icons.savings_rounded, Icons.trending_up_rounded, Icons.payments_rounded],
    labels: ['Save', 'Grow', 'Earn'],
    subs: ['', '', ''],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.assemble,
    title: 'ORBIT ASSEMBLY',
    blurb: 'Pieces spiral in from all sides and lock together',
    colors: [Color(0xFFA78BFA), Color(0xFFDB2777)],
    icons: [Icons.rocket_launch_rounded, Icons.bolt_rounded, Icons.auto_awesome_rounded],
    labels: ['Launch', 'Charge', 'Shine'],
    subs: ['Lifts off', 'Powers up', 'Lights the sky'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.accordion,
    title: 'SHIELD STACK',
    blurb: 'Three layers of protection fold down into place',
    colors: [Color(0xFFFBBF24), Color(0xFFB45309)],
    icons: [Icons.security_rounded, Icons.verified_user_rounded, Icons.gpp_good_rounded],
    labels: ['Guard', 'Verify', 'Safe'],
    subs: ['Watches the door', 'Checks who you are', 'Everything is locked'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.accordion,
    title: 'NEWS FLASH',
    blurb: 'A story unfolds from headline to share',
    colors: [Color(0xFFF87171), Color(0xFFB91C1C)],
    icons: [Icons.newspaper_rounded, Icons.notifications_active_rounded, Icons.share_rounded],
    labels: ['Story', 'Alert', 'Share'],
    subs: ['The headline', 'Everyone is told', 'It spreads'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.accordion,
    title: 'SKY DECK',
    blurb: 'Plan the trip: fly, find, stay',
    colors: [Color(0xFF2DD4BF), Color(0xFF115E59)],
    icons: [Icons.flight_rounded, Icons.map_rounded, Icons.hotel_rounded],
    labels: ['Fly', 'Find', 'Stay'],
    subs: ['Wheels up', 'Know the way', 'A bed waits'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.flip,
    title: 'PAYMENT PATH',
    blurb: 'Card, bank, done: three panels flip',
    colors: [Color(0xFF60A5FA), Color(0xFF1D4ED8)],
    icons: [Icons.credit_card_rounded, Icons.account_balance_rounded, Icons.check_circle_rounded],
    labels: ['Card', 'Bank', 'Done'],
    subs: ['Tap to pay', 'Moves the money', 'All paid'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.flip,
    title: 'DREAM BOARD',
    blurb: 'What you love, what shines, what you win',
    colors: [Color(0xFFF472B6), Color(0xFFBE185D)],
    icons: [Icons.favorite_rounded, Icons.star_rounded, Icons.emoji_events_rounded],
    labels: ['Love', 'Shine', 'Win'],
    subs: ['Keep it close', 'Be seen', 'Take the prize'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.flip,
    title: 'STAGE LIGHTS',
    blurb: 'Mic, music, curtain up',
    colors: [Color(0xFFC084FC), Color(0xFF6B21A8)],
    icons: [Icons.mic_rounded, Icons.headphones_rounded, Icons.theaters_rounded],
    labels: ['Mic', 'Music', 'Show'],
    subs: ['Say it loud', 'Feel the beat', 'The curtain rises'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.towers,
    title: 'CITY BUILD',
    blurb: 'A home, a block and a whole city rise',
    colors: [Color(0xFFFB923C), Color(0xFF9A3412)],
    icons: [Icons.home_rounded, Icons.apartment_rounded, Icons.location_city_rounded],
    labels: ['Home', 'Block', 'City'],
    subs: ['', '', ''],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.towers,
    title: 'SIGNAL RISE',
    blurb: 'Wi-Fi, towers and satellites climb',
    colors: [Color(0xFF22D3EE), Color(0xFF0E7490)],
    icons: [Icons.wifi_rounded, Icons.cell_tower_rounded, Icons.satellite_alt_rounded],
    labels: ['Wi-Fi', 'Tower', 'Space'],
    subs: ['', '', ''],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.assemble,
    title: 'COMET CREW',
    blurb: 'A crew arrives from every side',
    colors: [Color(0xFF4ADE80), Color(0xFF15803D)],
    icons: [Icons.flight_takeoff_rounded, Icons.public_rounded, Icons.groups_rounded],
    labels: ['Depart', 'World', 'Crew'],
    subs: ['Takes off', 'Crosses the globe', 'Everyone meets'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.assemble,
    title: 'NEON DROP',
    blurb: 'Music, sparks and a celebration drop in',
    colors: [Color(0xFFFACC15), Color(0xFFEA580C)],
    icons: [Icons.music_note_rounded, Icons.flash_on_rounded, Icons.celebration_rounded],
    labels: ['Music', 'Spark', 'Party'],
    subs: ['The first beat', 'Lights flash', 'Hands up'],
  ),
];

class _NgmyCoreProtocolSimsScreenState extends State<NgmyCoreProtocolSimsScreen> {
  _UnfoldMeta? _active;

  @override
  Widget build(BuildContext context) {
    final active = _active;
    return PopScope(
      canPop: active == null,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop && active != null) setState(() => _active = null);
      },
      child: Scaffold(
        backgroundColor: _kBg,
        body: active == null
            ? _SequencePicker(
                onPick: (s) => setState(() => _active = s),
                onLab: () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => const NgmyReactionLabScreen())),
                onClose: () => Navigator.of(context).maybePop(),
              )
            : _SequenceCanvas(key: ValueKey(active.title), meta: active, onExit: () => setState(() => _active = null)),
      ),
    );
  }
}

// ── Picker: three boxes in every row ────────────────────────────────────────

class _SequencePicker extends StatelessWidget {
  const _SequencePicker({required this.onPick, required this.onLab, required this.onClose});
  final ValueChanged<_UnfoldMeta> onPick;
  final VoidCallback onLab;
  final VoidCallback onClose;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 6, 16, 4),
          child: Row(children: [
            IconButton(onPressed: onClose, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
            const SizedBox(width: 2),
            const Expanded(
              child: Text('CORE PROTOCOL', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 2, fontSize: 17)),
            ),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 0, 20, 10),
          child: Align(
            alignment: Alignment.centerLeft,
            child: Text('Build your own in the Lab, or watch a sequence play.', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 13)),
          ),
        ),
        Expanded(
          child: GridView.builder(
            padding: const EdgeInsets.fromLTRB(14, 6, 14, 28),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, childAspectRatio: 0.82),
            itemCount: _kSequences.length + 1,
            itemBuilder: (_, i) => i == 0 ? _LabTile(onTap: onLab) : _PickTile(meta: _kSequences[i - 1], onTap: () => onPick(_kSequences[i - 1])),
          ),
        ),
      ]),
    );
  }
}

/// The Lab: a box with a glow, so it stands out as the place to build.
class _LabTile extends StatelessWidget {
  const _LabTile({required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    const c = Color(0xFF34D399);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.fromLTRB(8, 10, 8, 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0F3D2C), Color(0xFF151518)]),
            border: Border.all(color: c.withValues(alpha: 0.8), width: 1.4),
            boxShadow: [BoxShadow(color: c.withValues(alpha: 0.3), blurRadius: 18, spreadRadius: -4)],
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(shape: BoxShape.circle, gradient: const LinearGradient(colors: [Color(0xFF34D399), Color(0xFF047857)]), boxShadow: [BoxShadow(color: c.withValues(alpha: 0.5), blurRadius: 12)]),
              child: const Icon(Icons.hub_rounded, color: Colors.white, size: 26),
            ),
            const SizedBox(height: 8),
            const Text('REACTION LAB', textAlign: TextAlign.center, style: TextStyle(color: c, fontWeight: FontWeight.w900, letterSpacing: 0.8, fontSize: 11)),
            const SizedBox(height: 3),
            Text('Connect parts, make your own', textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 9.5, height: 1.25)),
          ]),
        ),
      ),
    );
  }
}

class _PickTile extends StatelessWidget {
  const _PickTile({required this.meta, required this.onTap});
  final _UnfoldMeta meta;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final c = meta.colors;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.fromLTRB(8, 10, 8, 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(const Color(0xFF1B1B1F), c.first, 0.24)!, const Color(0xFF151518)]),
            border: Border.all(color: c.first.withValues(alpha: 0.35)),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 12, offset: const Offset(0, 6))],
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            SizedBox(
              width: 58,
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                for (var i = 0; i < 3; i++)
                  Container(
                    margin: EdgeInsets.only(bottom: i == 2 ? 0 : 4, left: i * 4.0, right: (2 - i) * 4.0),
                    height: 17,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(6),
                      gradient: LinearGradient(colors: [c.first, c.last]),
                      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), offset: const Offset(0, 2.5))],
                    ),
                    child: Icon(meta.icons[i], size: 11, color: Colors.white),
                  ),
              ]),
            ),
            const SizedBox(height: 10),
            Text(meta.title, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: meta.glow, fontWeight: FontWeight.w900, letterSpacing: 0.6, fontSize: 10.5, height: 1.2)),
            const SizedBox(height: 4),
            Icon(Icons.play_circle_fill_rounded, color: c.first, size: 20),
          ]),
        ),
      ),
    );
  }
}

// ── The shared slab: a thick glass card lit from above ──────────────────────

class _Slab extends StatelessWidget {
  const _Slab({
    required this.width,
    required this.height,
    required this.colors,
    required this.icon,
    required this.label,
    required this.sub,
    this.shade = 0,
    this.glow = 0,
    this.spec = -1,
  });

  final double width;
  final double height;
  final List<Color> colors;
  final IconData icon;
  final String label;
  final String sub;

  /// 0..1: how much it is turned away from the light (darker).
  final double shade;

  /// 0..1: how strongly it glows.
  final double glow;

  /// Position of the moving highlight (0..1), or -1 for none.
  final double spec;

  @override
  Widget build(BuildContext context) {
    const r = 22.0;
    final edge = Color.lerp(colors.last, Colors.black, 0.62)!;
    return SizedBox(
      width: width,
      height: height,
      child: Stack(clipBehavior: Clip.none, children: [
        // The thickness of the slab, seen from slightly above.
        Positioned(
          left: 2,
          right: 2,
          top: 8,
          bottom: -8,
          child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(r), color: edge)),
        ),
        Positioned.fill(
          child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(r),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.55), blurRadius: 26, offset: const Offset(0, 18)),
                BoxShadow(color: colors.first.withValues(alpha: 0.1 + 0.4 * glow), blurRadius: 30, spreadRadius: -6),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(r),
              child: Stack(children: [
                Positioned.fill(
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [Color.lerp(colors.first, Colors.white, 0.14)!, colors.first, colors.last, Color.lerp(colors.last, Colors.black, 0.45)!],
                        stops: const [0, 0.35, 0.75, 1],
                      ),
                    ),
                  ),
                ),
                // Light falling on the top half, like glass.
                Positioned(
                  left: 0,
                  right: 0,
                  top: 0,
                  height: height * 0.52,
                  child: DecoratedBox(
                    decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.28), Colors.white.withValues(alpha: 0)])),
                  ),
                ),
                if (spec >= 0) Positioned.fill(child: CustomPaint(painter: _SpecPainter(spec))),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: Row(children: [
                    Container(
                      width: 54,
                      height: 54,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withValues(alpha: 0.16),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.5), width: 1.4),
                        boxShadow: [BoxShadow(color: Colors.white.withValues(alpha: 0.25 * glow), blurRadius: 14)],
                      ),
                      child: Icon(icon, color: Colors.white, size: 28),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19, shadows: [Shadow(color: Colors.black38, blurRadius: 6, offset: Offset(0, 2))])),
                        if (sub.isNotEmpty) ...[
                          const SizedBox(height: 4),
                          Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 12, fontWeight: FontWeight.w600)),
                        ],
                        const SizedBox(height: 9),
                        Container(height: 5, width: width * 0.42, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.28), borderRadius: BorderRadius.circular(3))),
                      ]),
                    ),
                  ]),
                ),
                // Turned away from the light: darker.
                if (shade > 0) Positioned.fill(child: IgnorePointer(child: ColoredBox(color: Colors.black.withValues(alpha: (shade * 0.6).clamp(0.0, 0.7))))),
                Positioned.fill(
                  child: IgnorePointer(
                    child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(r), border: Border.all(color: Colors.white.withValues(alpha: 0.3), width: 1.2))),
                  ),
                ),
              ]),
            ),
          ),
        ),
      ]),
    );
  }
}

class _SpecPainter extends CustomPainter {
  _SpecPainter(this.t);
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final x = -size.width * 0.4 + (size.width * 1.8) * t;
    final rect = Rect.fromLTWH(x, -10, size.width * 0.28, size.height + 20);
    canvas.save();
    canvas.translate(rect.center.dx, rect.center.dy);
    canvas.rotate(0.35);
    final r = Rect.fromCenter(center: Offset.zero, width: rect.width, height: rect.height * 1.6);
    canvas.drawRect(r, Paint()..shader = LinearGradient(colors: [Colors.transparent, Colors.white.withValues(alpha: 0.3), Colors.transparent]).createShader(r));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _SpecPainter old) => old.t != t;
}

/// The back of a panel before it flips: dark glass with a fine grid and a lock ring.
class _SlabBack extends StatelessWidget {
  const _SlabBack({required this.width, required this.height, required this.colors});
  final double width;
  final double height;
  final List<Color> colors;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width,
      height: height,
      child: DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [const Color(0xFF26262B), const Color(0xFF111114)]),
          border: Border.all(color: colors.first.withValues(alpha: 0.4), width: 1.2),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 24, offset: const Offset(0, 14))],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: CustomPaint(painter: _BackPainter(colors.first), child: Center(child: Icon(Icons.lock_rounded, color: colors.first.withValues(alpha: 0.7), size: 34))),
        ),
      ),
    );
  }
}

class _BackPainter extends CustomPainter {
  _BackPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color.withValues(alpha: 0.09)
      ..strokeWidth = 1;
    for (double x = 0; x < size.width; x += 18) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), p);
    }
    for (double y = 0; y < size.height; y += 18) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), p);
    }
    canvas.drawCircle(size.center(Offset.zero), 30, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = color.withValues(alpha: 0.35));
  }

  @override
  bool shouldRepaint(covariant _BackPainter old) => false;
}

// ── The canvas that plays a sequence ────────────────────────────────────────

class _SequenceCanvas extends StatefulWidget {
  const _SequenceCanvas({super.key, required this.meta, required this.onExit});
  final _UnfoldMeta meta;
  final VoidCallback onExit;

  @override
  State<_SequenceCanvas> createState() => _SequenceCanvasState();
}

class _SequenceCanvasState extends State<_SequenceCanvas> with TickerProviderStateMixin {
  late final AnimationController _seq = AnimationController(vsync: this, duration: const Duration(milliseconds: 11000))..repeat();
  late final AnimationController _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2000))..repeat(reverse: true);

  @override
  void dispose() {
    _seq.dispose();
    _pulse.dispose();
    super.dispose();
  }

  static double seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  @override
  Widget build(BuildContext context) {
    final meta = widget.meta;
    return Stack(fit: StackFit.expand, children: [
      // A very faint wash of the sequence colour on a dark page, no blue cast.
      AnimatedBuilder(
        animation: _pulse,
        builder: (_, __) => DecoratedBox(
          decoration: BoxDecoration(
            gradient: RadialGradient(center: const Alignment(0, 0.1), radius: 0.9, colors: [meta.glow.withValues(alpha: 0.06 + 0.03 * _pulse.value), _kBg]),
          ),
        ),
      ),
      SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 6, 16, 0),
            child: Row(children: [
              IconButton(onPressed: widget.onExit, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              Expanded(child: Text(meta.title, style: TextStyle(color: meta.glow, fontWeight: FontWeight.w900, letterSpacing: 1.8, fontSize: 14))),
            ]),
          ),
          Expanded(
            child: LayoutBuilder(builder: (context, box) {
              final w = math.min(box.maxWidth - 36, 350.0);
              return Center(
                child: AnimatedBuilder(
                  animation: Listenable.merge([_seq, _pulse]),
                  builder: (context, _) {
                    final t = _seq.value;
                    // Built by about 0.5, held, then faded for the replay.
                    final fade = t < 0.9 ? 1.0 : (1 - seg(t, 0.9, 0.98));
                    final pulse = Curves.easeInOut.transform(_pulse.value);
                    return Opacity(
                      opacity: fade,
                      child: switch (meta.style) {
                        _UnfoldStyle.accordion => _accordion(meta, t, pulse, w),
                        _UnfoldStyle.flip => _flip(meta, t, pulse, w),
                        _UnfoldStyle.towers => _towers(meta, t, pulse, w),
                        _UnfoldStyle.assemble => _assemble(meta, t, pulse, w),
                      },
                    );
                  },
                ),
              );
            }),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 18),
            child: Text(meta.blurb, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12)),
          ),
        ]),
      ),
    ]);
  }

  // 1. Accordion: each panel hangs from a hinge on the one above and swings down into place.
  Widget _accordion(_UnfoldMeta m, double t, double pulse, double w) {
    const h = 112.0;
    const gap = 6.0;
    const starts = [0.04, 0.2, 0.36];
    final total = 3 * h + 2 * gap;
    final children = <Widget>[];
    for (var i = 2; i >= 0; i--) {
      final p = Curves.easeOutBack.transform(seg(t, starts[i], starts[i] + 0.15));
      final angle = ((1 - p) * math.pi / 2).clamp(-0.1, math.pi / 2);
      final shade = (angle / (math.pi / 2)).clamp(0.0, 1.0);
      final settled = seg(t, starts[i] + 0.12, starts[i] + 0.2);
      children.add(Positioned(
        top: i * (h + gap),
        left: 0,
        right: 0,
        child: Opacity(
          opacity: seg(t, starts[i] - 0.01, starts[i] + 0.03),
          child: Transform(
            alignment: Alignment.topCenter,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.0013)
              ..rotateX(angle),
            child: _Slab(
              width: w,
              height: h,
              colors: m.colors,
              icon: m.icons[i],
              label: m.labels[i],
              sub: m.subs[i],
              shade: shade,
              glow: settled * (0.4 + 0.6 * pulse),
              spec: seg(t, starts[i] + 0.1, starts[i] + 0.3) > 0 && seg(t, starts[i] + 0.1, starts[i] + 0.3) < 1 ? seg(t, starts[i] + 0.1, starts[i] + 0.3) : -1,
            ),
          ),
        ),
      ));
    }
    // A glowing seam at each hinge as the panel swings out.
    for (var i = 1; i < 3; i++) {
      final s = seg(t, starts[i] - 0.02, starts[i] + 0.1);
      children.add(Positioned(
        top: i * (h + gap) - gap / 2 - 2,
        left: 0,
        right: 0,
        height: 4,
        child: CustomPaint(painter: _SeamPainter(m.colors.first, s, 1 - seg(t, starts[i] + 0.12, starts[i] + 0.22))),
      ));
    }
    return SizedBox(width: w, height: total + 10, child: Stack(clipBehavior: Clip.none, children: children));
  }

  // 2. Flip: dark locked panels turn over, lifting toward you as they turn.
  Widget _flip(_UnfoldMeta m, double t, double pulse, double w) {
    const h = 108.0;
    const gap = 22.0;
    const starts = [0.05, 0.2, 0.35];
    final total = 3 * h + 2 * gap;
    final children = <Widget>[];
    for (var i = 0; i < 3; i++) {
      final p = Curves.easeInOutCubic.transform(seg(t, starts[i], starts[i] + 0.17));
      final a = (1 - p) * math.pi;
      final front = a < math.pi / 2;
      final lift = 1 + math.sin(p * math.pi) * 0.08;
      final settled = seg(t, starts[i] + 0.15, starts[i] + 0.25);
      children.add(Positioned(
        top: i * (h + gap),
        left: 0,
        right: 0,
        child: Opacity(
          opacity: seg(t, starts[i] - 0.03, starts[i] + 0.01),
          child: Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.0011)
              ..scale(lift)
              ..rotateY(a),
            child: front
                ? _Slab(
                    width: w,
                    height: h,
                    colors: m.colors,
                    icon: m.icons[i],
                    label: m.labels[i],
                    sub: m.subs[i],
                    shade: math.sin(a) * 0.5,
                    glow: settled * (0.4 + 0.6 * pulse),
                    spec: p > 0.5 && p < 1 ? (p - 0.5) * 2 : -1,
                  )
                : Transform(
                    alignment: Alignment.center,
                    transform: Matrix4.identity()..rotateY(math.pi),
                    child: _SlabBack(width: w, height: h, colors: m.colors),
                  ),
          ),
        ),
      ));
    }
    return SizedBox(width: w, height: total + 10, child: Stack(clipBehavior: Clip.none, children: children));
  }

  // 3. Towers: three solid blocks grow up from a floor, then their windows light up.
  Widget _towers(_UnfoldMeta m, double t, double pulse, double w) {
    final maxH = math.min(300.0, w * 0.95);
    const heights = [0.55, 0.78, 1.0];
    const starts = [0.04, 0.17, 0.3];
    final grow = [for (var i = 0; i < 3; i++) Curves.easeOutCubic.transform(seg(t, starts[i], starts[i] + 0.2))];
    final lights = seg(t, 0.4, 0.62);
    return SizedBox(
      width: w,
      height: maxH + 90,
      child: Stack(clipBehavior: Clip.none, children: [
        Positioned.fill(
          child: CustomPaint(
            painter: _TowersPainter(colors: m.colors, grow: grow, heights: heights, maxH: maxH, lights: lights, pulse: pulse, scan: seg(t, 0.45, 0.7)),
          ),
        ),
        // The icons sit on the front of each tower and the labels under the floor.
        for (var i = 0; i < 3; i++)
          Positioned(
            left: _TowersPainter.towerLeft(w, i),
            width: _TowersPainter.towerWidth(w),
            top: maxH + 36 - heights[i] * maxH * grow[i] + 12,
            child: Opacity(opacity: grow[i] > 0.85 ? 1 : 0, child: Icon(m.icons[i], color: Colors.white, size: 26)),
          ),
        for (var i = 0; i < 3; i++)
          Positioned(
            left: _TowersPainter.towerLeft(w, i),
            width: _TowersPainter.towerWidth(w),
            top: maxH + 52,
            child: Opacity(opacity: seg(t, starts[i] + 0.15, starts[i] + 0.25), child: Text(m.labels[i], textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 13))),
          ),
      ]),
    );
  }

  // 4. Assemble: slabs spiral in from three sides and lock into a neat stack with a ripple.
  Widget _assemble(_UnfoldMeta m, double t, double pulse, double w) {
    const h = 96.0;
    final cw = w * 0.84;
    const finals = [-92.0, 0.0, 92.0];
    const starts = [0.04, 0.2, 0.36];
    const restRot = [-0.045, 0.03, -0.015];
    final starts0 = [Offset(-w * 1.0, -150.0), Offset(w * 1.0, -40.0), const Offset(0, 330.0)];
    final children = <Widget>[];
    for (var i = 0; i < 3; i++) {
      final raw = seg(t, starts[i], starts[i] + 0.2);
      final p = Curves.easeOutCubic.transform(raw);
      final end = Offset(0, finals[i]);
      final ctrl = Offset(starts0[i].dx * 0.35, starts0[i].dy * 0.2 - 90);
      final pos = _bezier(starts0[i], ctrl, end, p);
      final spin = (1 - p) * (i.isEven ? 2.8 : -2.8);
      final settle = seg(t, starts[i] + 0.2, starts[i] + 0.3);
      children.add(Positioned.fill(
        child: Center(
          child: Opacity(
            opacity: seg(t, starts[i] - 0.01, starts[i] + 0.03),
            child: Transform.translate(
              offset: pos,
              child: Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.001)
                  ..rotateZ(spin + restRot[i] * p)
                  ..rotateY((1 - p) * 0.9)
                  ..scale(0.55 + 0.45 * p),
                child: _Slab(width: cw, height: h, colors: m.colors, icon: m.icons[i], label: m.labels[i], sub: m.subs[i], shade: (1 - p) * 0.4, glow: settle * (0.4 + 0.6 * pulse), spec: raw > 0.7 ? (raw - 0.7) / 0.3 : -1),
              ),
            ),
          ),
        ),
      ));
      // A ripple where the slab lands.
      final rip = seg(t, starts[i] + 0.17, starts[i] + 0.33);
      if (rip > 0 && rip < 1) {
        children.add(Positioned.fill(
          child: Center(child: Transform.translate(offset: Offset(0, finals[i] + h / 2 - 4), child: CustomPaint(size: Size(cw, 30), painter: _RipplePainter(m.colors.first, rip)))),
        ));
      }
    }
    return SizedBox(width: w, height: 330, child: Stack(clipBehavior: Clip.none, children: children));
  }

  static Offset _bezier(Offset a, Offset c, Offset b, double t) {
    final u = 1 - t;
    return Offset(u * u * a.dx + 2 * u * t * c.dx + t * t * b.dx, u * u * a.dy + 2 * u * t * c.dy + t * t * b.dy);
  }
}

class _SeamPainter extends CustomPainter {
  _SeamPainter(this.color, this.progress, this.fade);
  final Color color;
  final double progress;
  final double fade;

  @override
  void paint(Canvas canvas, Size size) {
    if (progress <= 0 || fade <= 0) return;
    final cx = size.width / 2;
    final half = size.width / 2 * progress;
    final rect = Rect.fromLTRB(cx - half, 0, cx + half, size.height);
    canvas.drawRRect(
      RRect.fromRectAndRadius(rect, const Radius.circular(2)),
      Paint()
        ..color = color.withValues(alpha: 0.9 * fade)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5),
    );
    canvas.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(2)), Paint()..color = Colors.white.withValues(alpha: 0.9 * fade));
  }

  @override
  bool shouldRepaint(covariant _SeamPainter old) => old.progress != progress || old.fade != fade;
}

class _RipplePainter extends CustomPainter {
  _RipplePainter(this.color, this.t);
  final Color color;
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    for (var i = 0; i < 2; i++) {
      final k = (t - i * 0.18).clamp(0.0, 1.0);
      if (k <= 0) continue;
      final rect = Rect.fromCenter(center: c, width: size.width * (0.5 + k * 0.7), height: size.height * (0.3 + k * 0.9));
      canvas.drawOval(rect, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = color.withValues(alpha: (1 - k) * 0.7));
    }
  }

  @override
  bool shouldRepaint(covariant _RipplePainter old) => old.t != t;
}

/// Three solid blocks with a lit front, a shaded side and a bright top, standing on a reflective floor.
class _TowersPainter extends CustomPainter {
  _TowersPainter({required this.colors, required this.grow, required this.heights, required this.maxH, required this.lights, required this.pulse, required this.scan});

  final List<Color> colors;
  final List<double> grow;
  final List<double> heights;
  final double maxH;
  final double lights;
  final double pulse;
  final double scan;

  static double towerWidth(double w) => w * 0.23;
  static double towerLeft(double w, int i) => (w - (3 * towerWidth(w) + 2 * w * 0.1 + towerWidth(w) * 0.3)) / 2 + i * (towerWidth(w) + w * 0.1);

  @override
  void paint(Canvas canvas, Size size) {
    final base = maxH + 36;
    final tw = towerWidth(size.width);
    final d = tw * 0.34;
    final dx = d * 0.85;
    final dy = -d * 0.5;
    // The floor, with a soft glow where the towers stand.
    final floor = Rect.fromLTWH(0, base - 4, size.width, 60);
    canvas.drawRect(floor, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [colors.first.withValues(alpha: 0.18), Colors.transparent]).createShader(floor));
    canvas.drawLine(Offset(0, base), Offset(size.width, base), Paint()..color = Colors.white.withValues(alpha: 0.18)..strokeWidth = 1);

    for (var i = 0; i < 3; i++) {
      final g = grow[i];
      if (g <= 0) continue;
      final x = towerLeft(size.width, i);
      final h = heights[i] * maxH * g;
      // Contact shadow on the floor.
      canvas.drawOval(Rect.fromLTWH(x - 4, base - 6, tw + dx + 8, 16), Paint()..color = Colors.black.withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
      final front = Rect.fromLTWH(x, base - h, tw, h);
      canvas.drawRect(front, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(colors.first, Colors.white, 0.1)!, colors.last]).createShader(front));
      final side = ui.Path()
        ..moveTo(x + tw, base - h)
        ..lineTo(x + tw + dx, base - h + dy)
        ..lineTo(x + tw + dx, base + dy)
        ..lineTo(x + tw, base)
        ..close();
      canvas.drawPath(side, Paint()..color = Color.lerp(colors.last, Colors.black, 0.5)!);
      final top = ui.Path()
        ..moveTo(x, base - h)
        ..lineTo(x + dx, base - h + dy)
        ..lineTo(x + tw + dx, base - h + dy)
        ..lineTo(x + tw, base - h)
        ..close();
      canvas.drawPath(top, Paint()..color = Color.lerp(colors.first, Colors.white, 0.45)!);
      final edge = Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white.withValues(alpha: 0.28);
      canvas.drawRect(front, edge);
      canvas.drawPath(side, edge);
      canvas.drawPath(top, edge);
      // Windows light up from the bottom, in turn.
      final rows = (h / 22).floor();
      for (var r = 0; r < rows; r++) {
        final on = lights * rows * 1.3 > (rows - r) - 1;
        final y = base - 14 - r * 22;
        for (var c = 0; c < 3; c++) {
          final wx = x + 8 + c * ((tw - 16) / 3);
          final rect = Rect.fromLTWH(wx, y - 12, (tw - 16) / 3 - 5, 10);
          if (y - 12 < base - h + 6) continue;
          canvas.drawRRect(
            RRect.fromRectAndRadius(rect, const Radius.circular(2)),
            Paint()..color = on ? Colors.white.withValues(alpha: 0.6 + 0.3 * pulse) : Colors.black.withValues(alpha: 0.22),
          );
        }
      }
      // A light that sweeps up the front once.
      if (scan > 0 && scan < 1) {
        final sy = base - h * scan;
        final band = Rect.fromLTWH(x, sy - 14, tw, 28);
        canvas.save();
        canvas.clipRect(front);
        canvas.drawRect(band, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.transparent, Colors.white.withValues(alpha: 0.4), Colors.transparent]).createShader(band));
        canvas.restore();
      }
    }
  }

  @override
  bool shouldRepaint(covariant _TowersPainter old) => true;
}
