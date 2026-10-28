import 'dart:math' as math;

import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_core_reaction_lab.dart';
import 'ngmy_core_studios_a.dart';
import 'ngmy_core_circuit_lab.dart';
import 'ngmy_core_studios_b.dart';
import 'ngmy_core_studios_e.dart';
import 'ngmy_studio_kit.dart';
import 'ngmy_electronics_lab.dart';
import 'ngmy_body_explorer.dart';
import 'ngmy_play_hub.dart';
import 'ngmy_arcade_a.dart';
import 'ngmy_edu_a.dart';
import 'ngmy_edu_b.dart';
import 'ngmy_fun_a.dart';
import 'ngmy_universe_hub.dart';

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

enum _UnfoldStyle { accordion, flip, towers, assemble, carousel, burst }

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
    style: _UnfoldStyle.carousel,
    title: 'SPIN CAROUSEL',
    blurb: 'Cards swing around a glowing ring, front card shines',
    colors: [Color(0xFF22D3EE), Color(0xFF0E7490)],
    icons: [Icons.public_rounded, Icons.explore_rounded, Icons.travel_explore_rounded],
    labels: ['Explore', 'Discover', 'Learn'],
    subs: ['Go anywhere', 'Find something new', 'Know more each day'],
  ),
  _UnfoldMeta(
    style: _UnfoldStyle.burst,
    title: 'POP BURST',
    blurb: 'Cards pop in with a shockwave and a burst of sparks',
    colors: [Color(0xFFFB7185), Color(0xFFBE123C)],
    icons: [Icons.celebration_rounded, Icons.emoji_events_rounded, Icons.favorite_rounded],
    labels: ['Cheer', 'Win', 'Love'],
    subs: ['Make some noise', 'First place', 'Share the joy'],
  ),
];


class _NgmyCoreProtocolSimsScreenState extends State<NgmyCoreProtocolSimsScreen> {
  _UnfoldMeta? _active;
  ScrollController _sc = ScrollController();
  double _savedOffset = 0;

  void _open(_UnfoldMeta m) {
    if (_sc.hasClients) _savedOffset = _sc.offset;
    setState(() => _active = m);
  }

  void _leave() {
    _sc.dispose();
    _sc = ScrollController(initialScrollOffset: _savedOffset);
    setState(() => _active = null);
  }

  @override
  void dispose() {
    _sc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final active = _active;

    return PopScope(
      canPop: active == null,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop && active != null) _leave();
      },
      child: Scaffold(
        backgroundColor: _kBg,
        resizeToAvoidBottomInset: false,
        body: active == null
            ? _SequencePicker(
                controller: _sc,
                onPick: _open,
                onClose: () => Navigator.of(context).maybePop(),
              )
            : _SequenceCanvas(key: ValueKey(active.title), meta: active, onExit: _leave),
      ),
    );
  }
}

// ── Picker: three boxes in every row ────────────────────────────────────────

class _StudioDef {
  const _StudioDef(this.title, this.blurb, this.icon, this.color, this.build);
  final String title;
  final String blurb;
  final IconData icon;
  final Color color;
  final Widget Function() build;
}

final List<_StudioDef> _kStudios = [
  _StudioDef('UNIVERSE', 'Earth, space and gravity', Icons.travel_explore_rounded, const Color(0xFF38BDF8), () => const NgmyUniverseHub()),
  _StudioDef('ELECTRONICS LAB', 'Batteries, wires, real circuits', Icons.electrical_services_rounded, const Color(0xFF38BDF8), () => const NgmyElectronicsLab()),
  _StudioDef('DISCOVERY LAB', 'Body Explorer: a real 3D human', Icons.biotech_rounded, const Color(0xFF4ADE80), () => const NgmyBodyExplorer()),
  _StudioDef('TOOLBOX', 'Converter, clock, games', Icons.build_circle_rounded, const Color(0xFFFB923C), () => const NgmyToolboxHub()),
  _StudioDef('MOLECULE MAKER', 'Join atoms into real molecules', Icons.bubble_chart_rounded, const Color(0xFF2DD4BF), () => const NgmyMoleculeStudio()),
  _StudioDef('DNA LAB', 'Copy DNA, build a protein', Icons.biotech_rounded, const Color(0xFFF472B6), () => const NgmyDnaStudio()),
  _StudioDef('ECOSYSTEM LAB', 'Grass, rabbits and foxes', Icons.pets_rounded, const Color(0xFF4ADE80), () => const NgmyEcosystemStudio()),
  _StudioDef('BALANCE LAB', 'Levers, weight and torque', Icons.balance_rounded, const Color(0xFFFBBF24), () => const NgmyBalanceStudio()),
  _StudioDef('GEAR LAB', 'Teeth, speed and force', Icons.settings_rounded, const Color(0xFFFB923C), () => const NgmyGearStudio()),
  _StudioDef('LASER MAZE', 'Bend the beam with mirrors', Icons.flare_rounded, const Color(0xFFEF4444), () => const NgmyLaserMazeStudio()),
  _StudioDef('LIGHT MIXER', 'Match colours with light', Icons.color_lens_rounded, const Color(0xFF22D3EE), () => const NgmyLightMixerStudio()),
  _StudioDef('CIPHER LAB', 'Make and crack secret codes', Icons.vpn_key_rounded, const Color(0xFF38BDF8), () => const NgmyCipherStudio()),
  _StudioDef('REACTION LAB', 'Wire parts together', Icons.hub_rounded, const Color(0xFF34D399), () => const NgmyReactionLabScreen()),
  _StudioDef('SPARK PAINTER', 'Paint with light', Icons.brush_rounded, const Color(0xFFF472B6), () => const NgmySparkPainterStudio()),
  _StudioDef('ROCKET LANDER', 'Land softly on the pad', Icons.rocket_launch_rounded, const Color(0xFF38BDF8), () => const NgmyRocketLanderStudio()),
  _StudioDef('ORBIT STUDIO', 'Slingshot planets', Icons.public_rounded, const Color(0xFFFB923C), () => const NgmyOrbitStudio()),
  _StudioDef('SWARM STUDIO', 'A living school of fish', Icons.bubble_chart_rounded, const Color(0xFF4ADE80), () => const NgmySwarmStudio()),
  _StudioDef('CHAIN BURST', 'One tap, a whole chain', Icons.bolt_rounded, const Color(0xFFF472B6), () => const NgmyChainBurstStudio()),
  _StudioDef('TITLE ANIMATOR', 'Make a moving title', Icons.title_rounded, const Color(0xFFFACC15), () => const NgmyTitleStudio()),
  _StudioDef('CIRCUIT LAB', 'Connect logic, learn it', Icons.memory_rounded, const Color(0xFF60A5FA), () => const NgmyCircuitStudio()),
  _StudioDef('MARBLE MUSIC', 'Marbles ring the notes', Icons.blur_circular_rounded, const Color(0xFF22D3EE), () => const NgmyMarbleStudio()),
  _StudioDef('ORBIT SEQUENCER', 'Planets play the tune', Icons.track_changes_rounded, const Color(0xFFA78BFA), () => const NgmyOrbitSequencerStudio()),
];

class _SequencePicker extends StatelessWidget {
  const _SequencePicker({required this.onPick, required this.onClose, required this.controller});
  final ScrollController controller;
  final ValueChanged<_UnfoldMeta> onPick;
  final VoidCallback onClose;

  static const _grid = SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 12, crossAxisSpacing: 12, childAspectRatio: 0.82);

  Widget _heading(String t, String sub) => Padding(
        padding: const EdgeInsets.fromLTRB(20, 14, 20, 10),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(t, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.6, fontSize: 12.5)),
          const SizedBox(height: 2),
          Text(sub, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12)),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 6, 16, 0),
          child: Row(children: [
            IconButton(onPressed: onClose, icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
            const SizedBox(width: 2),
            const Expanded(child: Text('CORE PROTOCOL', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 2, fontSize: 17))),
          ]),
        ),
        Expanded(
          child: CustomScrollView(controller: controller, slivers: [
            SliverToBoxAdapter(child: _heading('STUDIOS', 'Play, make things, and keep what you make')),
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              sliver: SliverGrid(
                gridDelegate: _grid,
                delegate: SliverChildBuilderDelegate(
                  (_, i) => _StudioTile(def: _kStudios[i], onTap: () {
                    NgmyTone.theme = kStudioSoundThemes[_kStudios[i].title] ?? 'music';
                    Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => _kStudios[i].build()));
                  }),
                  childCount: _kStudios.length,
                ),
              ),
            ),
            SliverToBoxAdapter(child: _heading('SCENES', 'Each one is a studio too: change the style, colours and words')),
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(14, 0, 14, 30),
              sliver: SliverGrid(
                gridDelegate: _grid,
                delegate: SliverChildBuilderDelegate((_, i) => _PickTile(meta: _kSequences[i], onTap: () => onPick(_kSequences[i])), childCount: _kSequences.length),
              ),
            ),
          ]),
        ),
      ]),
    );
  }
}

class _StudioTile extends StatelessWidget {
  const _StudioTile({required this.def, required this.onTap});
  final _StudioDef def;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final c = def.color;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.fromLTRB(8, 10, 8, 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(const Color(0xFF1B1B1F), c, 0.3)!, const Color(0xFF151518)]),
            border: Border.all(color: c.withValues(alpha: 0.6), width: 1.2),
            boxShadow: [BoxShadow(color: c.withValues(alpha: 0.22), blurRadius: 14, spreadRadius: -4)],
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c, Color.lerp(c, Colors.black, 0.45)!]), boxShadow: [BoxShadow(color: c.withValues(alpha: 0.5), blurRadius: 12)]),
              child: Icon(def.icon, color: Colors.white, size: 24),
            ),
            const SizedBox(height: 8),
            Text(def.title, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: c, fontWeight: FontWeight.w900, letterSpacing: 0.5, fontSize: 10.5, height: 1.15)),
            const SizedBox(height: 3),
            Text(def.blurb, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 9.5, height: 1.2)),
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
            Icon(Icons.tune_rounded, color: c.first, size: 18),
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

/// Colour themes you can switch a scene to.
const List<List<Color>> _kThemes = [
  [Color(0xFF818CF8), Color(0xFF4338CA)],
  [Color(0xFF2DD4BF), Color(0xFF0F766E)],
  [Color(0xFF34D399), Color(0xFF047857)],
  [Color(0xFFA78BFA), Color(0xFFDB2777)],
  [Color(0xFFFBBF24), Color(0xFFB45309)],
  [Color(0xFFF87171), Color(0xFFB91C1C)],
  [Color(0xFF60A5FA), Color(0xFF1D4ED8)],
  [Color(0xFFF472B6), Color(0xFFBE185D)],
  [Color(0xFFFB923C), Color(0xFF9A3412)],
  [Color(0xFF94A3B8), Color(0xFF334155)],
];

/// Icons you can put on a slab.
const List<IconData> _kIconChoices = [
  Icons.mail_rounded, Icons.sms_rounded, Icons.campaign_rounded, Icons.lock_open_rounded, Icons.key_rounded, Icons.shield_rounded,
  Icons.savings_rounded, Icons.trending_up_rounded, Icons.payments_rounded, Icons.rocket_launch_rounded, Icons.bolt_rounded, Icons.auto_awesome_rounded,
  Icons.favorite_rounded, Icons.star_rounded, Icons.emoji_events_rounded, Icons.home_rounded, Icons.school_rounded, Icons.work_rounded,
  Icons.music_note_rounded, Icons.camera_alt_rounded, Icons.restaurant_rounded, Icons.flight_rounded, Icons.directions_car_rounded, Icons.shopping_bag_rounded,
  Icons.cake_rounded, Icons.pets_rounded, Icons.fitness_center_rounded, Icons.local_hospital_rounded, Icons.church_rounded, Icons.celebration_rounded,
];

class _SequenceCanvasState extends State<_SequenceCanvas> with TickerProviderStateMixin {
  late final AnimationController _seq = AnimationController(vsync: this, duration: const Duration(milliseconds: 11000))..repeat();
  late final AnimationController _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2000))..repeat(reverse: true);
  final GlobalKey _shot = GlobalKey();
  late _UnfoldStyle _style = widget.meta.style;
  late List<Color> _colors = List.of(widget.meta.colors);
  late List<IconData> _icons = List.of(widget.meta.icons);
  late List<String> _labels = List.of(widget.meta.labels);
  late List<String> _subs = List.of(widget.meta.subs);
  double _speed = 1.0;
  bool _playing = true;
  bool _sound = true;
  double _prevT = 0;
  bool _chimed = false;

  @override
  void initState() {
    super.initState();
    _seq.addListener(_soundTick);
  }

  /// A note as each slab arrives, and a chord when the whole scene has settled.
  void _soundTick() {
    final t = _seq.value;
    if (t < _prevT) {
      _prevT = 0;
      _chimed = false;
    }
    if (_sound && _playing) {
      final starts = switch (_style) {
        _UnfoldStyle.accordion => const [0.04, 0.2, 0.36],
        _UnfoldStyle.flip => const [0.05, 0.2, 0.35],
        _UnfoldStyle.towers => const [0.04, 0.17, 0.3],
        _UnfoldStyle.assemble => const [0.04, 0.2, 0.36],
        _UnfoldStyle.carousel => const [0.05, 0.15, 0.25],
        _UnfoldStyle.burst => const [0.05, 0.2, 0.35],
      };
      const notes = [0, 4, 7];
      for (var i = 0; i < 3; i++) {
        final at = starts[i] + (_style == _UnfoldStyle.flip ? 0.09 : (_style == _UnfoldStyle.assemble ? 0.18 : 0.06));
        if (_prevT < at && t >= at) {
          NgmyTone.play(260 + 90.0 * i, ms: 260, sweep: 1.6, volume: 0.18, wave: 'tri');
          NgmyTone.playNote('bell', notes[i] + 12 + (i == 2 ? 0 : 0), ms: 1000, volume: 0.55);
        }
      }
      if (!_chimed && t >= 0.55) {
        _chimed = true;
        NgmyTone.chord('bell', const [12, 16, 19, 24], ms: 1400, volume: 0.35);
      }
    }
    _prevT = t;
  }

  @override
  void dispose() {
    _seq.dispose();
    _pulse.dispose();
    super.dispose();
  }

  static double seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  _UnfoldMeta get _meta => _UnfoldMeta(style: _style, title: widget.meta.title, blurb: widget.meta.blurb, colors: _colors, icons: _icons, labels: _labels, subs: _subs);

  void _play() {
    _seq.repeat(period: Duration(milliseconds: (11000 / _speed).round()));
    setState(() => _playing = true);
  }

  void _pause() {
    _seq.stop();
    setState(() => _playing = false);
  }

  Future<void> _edit() async {
    final labelC = [for (final l in _labels) TextEditingController(text: l)];
    final subC = [for (final s in _subs) TextEditingController(text: s)];
    final icons = List.of(_icons);
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF1B1B1F),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setSheet) => Padding(
          padding: EdgeInsets.only(bottom: MediaQuery.of(ctx).viewInsets.bottom),
          child: SafeArea(
            child: ConstrainedBox(
              constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.86),
              child: ListView(padding: const EdgeInsets.fromLTRB(16, 14, 16, 16), shrinkWrap: true, children: [
                const Text('Make it yours', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                const SizedBox(height: 4),
                const Text('Change the words and pictures on the three slabs.', style: TextStyle(color: Colors.white54, fontSize: 12.5)),
                const SizedBox(height: 12),
                for (var i = 0; i < 3; i++) ...[
                  Text('SLAB ${i + 1}', style: const TextStyle(color: Colors.white38, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1.3)),
                  const SizedBox(height: 6),
                  Row(children: [
                    Expanded(child: _field(labelC[i], 'Title')),
                    const SizedBox(width: 8),
                    Expanded(flex: 2, child: _field(subC[i], 'Small line')),
                  ]),
                  const SizedBox(height: 8),
                  SizedBox(
                    height: 44,
                    child: ListView(scrollDirection: Axis.horizontal, children: [
                      for (final ic in _kIconChoices)
                        GestureDetector(
                          onTap: () => setSheet(() => icons[i] = ic),
                          child: Container(
                            width: 42,
                            margin: const EdgeInsets.only(right: 6),
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), color: icons[i] == ic ? _colors.first.withValues(alpha: 0.3) : Colors.white.withValues(alpha: 0.06), border: Border.all(color: icons[i] == ic ? _colors.first : Colors.white12, width: icons[i] == ic ? 1.8 : 1)),
                            child: Icon(ic, color: icons[i] == ic ? Colors.white : Colors.white60, size: 22),
                          ),
                        ),
                    ]),
                  ),
                  const SizedBox(height: 14),
                ],
                FilledButton(
                  onPressed: () {
                    setState(() {
                      for (var i = 0; i < 3; i++) {
                        _labels[i] = labelC[i].text.trim().isEmpty ? _labels[i] : labelC[i].text.trim();
                        _subs[i] = subC[i].text.trim();
                        _icons[i] = icons[i];
                      }
                    });
                    Navigator.pop(ctx);
                  },
                  child: const Text('Done'),
                ),
              ]),
            ),
          ),
        ),
      ),
    );
    for (final c in [...labelC, ...subC]) {
      c.dispose();
    }
  }

  Widget _field(TextEditingController c, String hint) => TextField(
        controller: c,
        maxLength: 28,
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
        decoration: InputDecoration(
          counterText: '',
          hintText: hint,
          hintStyle: const TextStyle(color: Colors.white30),
          filled: true,
          fillColor: Colors.white.withValues(alpha: 0.06),
          isDense: true,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final meta = _meta;
    return StudioPage(
      title: meta.title,
      accent: meta.glow,
      help: 'A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.',
      actions: [
        IconButton(onPressed: () => setState(() => _sound = !_sound), icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70, size: 21), tooltip: 'Sound'),
        IconButton(onPressed: _edit, icon: const Icon(Icons.edit_rounded, color: Colors.white70, size: 21), tooltip: 'Edit words and pictures'),
        IconButton(onPressed: () => studioShare(context, _shot, name: 'scene'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: RepaintBoundary(
        key: _shot,
        child: Stack(fit: StackFit.expand, children: [
          AnimatedBuilder(
            animation: _pulse,
            builder: (_, __) => DecoratedBox(
              decoration: BoxDecoration(gradient: RadialGradient(center: const Alignment(0, 0.1), radius: 0.9, colors: [meta.glow.withValues(alpha: 0.06 + 0.03 * _pulse.value), _kBg])),
            ),
          ),
          LayoutBuilder(builder: (context, box) {
            final w = math.min(box.maxWidth - 36, 350.0);
            return Center(
              child: FittedBox(
                fit: BoxFit.scaleDown,
                child: AnimatedBuilder(
                  animation: Listenable.merge([_seq, _pulse]),
                  builder: (context, _) {
                    final t = _seq.value;
                    final fade = t < 0.9 ? 1.0 : (1 - seg(t, 0.9, 0.98));
                    final pulse = Curves.easeInOut.transform(_pulse.value);
                    return Opacity(
                      opacity: fade,
                      child: switch (_style) {
                        _UnfoldStyle.accordion => _accordion(meta, t, pulse, w),
                        _UnfoldStyle.flip => _flip(meta, t, pulse, w),
                        _UnfoldStyle.towers => _towers(meta, t, pulse, w),
                        _UnfoldStyle.assemble => _assemble(meta, t, pulse, w),
                        _UnfoldStyle.carousel => _carousel(meta, t, pulse, w),
                        _UnfoldStyle.burst => _burst(meta, t, pulse, w),
                      },
                    );
                  },
                ),
              ),
            );
          }),
        ]),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        // The timeline: drag to look at any moment.
        Row(children: [
          IconButton(
            visualDensity: VisualDensity.compact,
            onPressed: _playing ? _pause : _play,
            icon: Icon(_playing ? Icons.pause_circle_filled_rounded : Icons.play_circle_fill_rounded, color: meta.glow, size: 34),
          ),
          Expanded(
            child: AnimatedBuilder(
              animation: _seq,
              builder: (_, __) => SliderTheme(
                data: SliderTheme.of(context).copyWith(activeTrackColor: meta.glow, thumbColor: meta.glow, inactiveTrackColor: Colors.white12, trackHeight: 3.5),
                child: Slider(
                  value: _seq.value.clamp(0.0, 1.0),
                  onChanged: (v) {
                    _seq.value = v;
                    if (_playing) setState(() => _playing = false);
                  },
                ),
              ),
            ),
          ),
          IconButton(
            visualDensity: VisualDensity.compact,
            tooltip: 'Replay',
            onPressed: () {
              _seq.value = 0;
              _play();
            },
            icon: const Icon(Icons.replay_rounded, color: Colors.white70),
          ),
        ]),
        StudioSlider(label: 'Speed', value: _speed, min: 0.4, max: 2.5, display: '${_speed.toStringAsFixed(1)}x', color: meta.glow, onChanged: (v) {
          setState(() => _speed = v);
          if (_playing) _play();
        }),
        StudioRow(label: 'STYLE', children: [
          for (final s in const [(_UnfoldStyle.accordion, 'Fold', Icons.unfold_more_rounded), (_UnfoldStyle.flip, 'Flip', Icons.flip_rounded), (_UnfoldStyle.towers, 'Rise', Icons.bar_chart_rounded), (_UnfoldStyle.assemble, 'Assemble', Icons.join_inner_rounded), (_UnfoldStyle.carousel, 'Spin', Icons.threed_rotation_rounded), (_UnfoldStyle.burst, 'Pop', Icons.celebration_rounded)])
            StudioChip(label: s.$2, icon: s.$3, selected: _style == s.$1, color: meta.glow, onTap: () {
              setState(() => _style = s.$1);
              _seq.value = 0;
              if (_playing) _play();
            }),
        ]),
        StudioRow(label: 'THEME', children: [
          for (final th in _kThemes)
            GestureDetector(
              onTap: () => setState(() => _colors = List.of(th)),
              child: Container(
                margin: const EdgeInsets.only(right: 9),
                width: _colors.first == th.first ? 34 : 28,
                height: _colors.first == th.first ? 34 : 28,
                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: th), border: Border.all(color: _colors.first == th.first ? Colors.white : Colors.white24, width: _colors.first == th.first ? 2.5 : 1)),
              ),
            ),
        ]),
      ]),
    );
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
  // 5. Carousel: the cards swing in around a glowing ring, and whichever is in front shines.
  Widget _carousel(_UnfoldMeta m, double t, double pulse, double w) {
    const h = 100.0;
    final cw = w * 0.62;
    final spinIn = Curves.easeOutCubic.transform(seg(t, 0.02, 0.5));
    final rot = (1 - spinIn) * math.pi * 3 + t * 1.6;
    final children = <Widget>[];
    // The ring on the floor.
    children.add(Positioned.fill(child: Center(child: Transform.translate(offset: const Offset(0, 118), child: CustomPaint(size: Size(w * 0.95, 70), painter: _RingPainter(m.colors.first, seg(t, 0.0, 0.2), pulse))))));
    final items = <(double, Widget)>[];
    for (var i = 0; i < 3; i++) {
      final theta = i * 2 * math.pi / 3 + rot;
      final depth = (math.cos(theta) + 1) / 2; // 1 = in front
      final x = math.sin(theta) * w * 0.34;
      final appear = seg(t, 0.02 + i * 0.06, 0.12 + i * 0.06);
      final front = Curves.easeInOut.transform(((depth - 0.7) / 0.3).clamp(0.0, 1.0));
      items.add((
        depth,
        Positioned.fill(
          child: Center(
            child: Opacity(
              opacity: appear * (0.45 + 0.55 * depth),
              child: Transform.translate(
                offset: Offset(x, -depth * 18),
                child: Transform(
                  alignment: Alignment.center,
                  transform: Matrix4.identity()
                    ..setEntry(3, 2, 0.001)
                    ..rotateY(-math.sin(theta) * 0.7)
                    ..scale(0.68 + 0.32 * depth),
                  child: _Slab(width: cw, height: h, colors: m.colors, icon: m.icons[i], label: m.labels[i], sub: m.subs[i], shade: 1 - depth, glow: front * (0.5 + 0.5 * pulse), spec: front > 0.5 ? (t * 3) % 1 : -1),
                ),
              ),
            ),
          ),
        ),
      ));
    }
    items.sort((a, b) => a.$1.compareTo(b.$1));
    children.addAll(items.map((e) => e.$2));
    return SizedBox(width: w, height: 330, child: Stack(clipBehavior: Clip.none, children: children));
  }

  // 6. Burst: each card pops in with a springy bounce, a shockwave ring and flying sparks.
  Widget _burst(_UnfoldMeta m, double t, double pulse, double w) {
    const h = 92.0;
    final cw = w * 0.86;
    const ys = [-104.0, 0.0, 104.0];
    const starts = [0.05, 0.2, 0.35];
    final children = <Widget>[];
    for (var i = 0; i < 3; i++) {
      final raw = seg(t, starts[i], starts[i] + 0.22);
      final p = Curves.elasticOut.transform(raw);
      final wobble = math.sin(raw * math.pi * 6) * (1 - raw) * 0.06;
      children.add(Positioned.fill(
        child: Center(
          child: Opacity(
            opacity: seg(t, starts[i], starts[i] + 0.02),
            child: Transform.translate(
              offset: Offset(0, ys[i]),
              child: Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()
                  ..rotateZ(wobble)
                  ..scale(math.max(0.01, p)),
                child: _Slab(width: cw, height: h, colors: m.colors, icon: m.icons[i], label: m.labels[i], sub: m.subs[i], glow: seg(t, starts[i] + 0.1, starts[i] + 0.25) * (0.4 + 0.6 * pulse), spec: raw > 0.6 ? (raw - 0.6) / 0.4 : -1),
              ),
            ),
          ),
        ),
      ));
      final burstT = seg(t, starts[i] + 0.02, starts[i] + 0.3);
      if (burstT > 0 && burstT < 1) {
        children.add(Positioned.fill(child: Center(child: Transform.translate(offset: Offset(0, ys[i]), child: CustomPaint(size: Size(cw + 120, h + 120), painter: _BurstPainter(m.colors, burstT, i))))));
      }
    }
    return SizedBox(width: w, height: 330, child: Stack(clipBehavior: Clip.none, children: children));
  }

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

class _RingPainter extends CustomPainter {
  _RingPainter(this.color, this.appear, this.pulse);
  final Color color;
  final double appear;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final r = Rect.fromCenter(center: size.center(Offset.zero), width: size.width * appear, height: size.height * appear);
    canvas.drawOval(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 10..color = color.withValues(alpha: 0.12 + 0.1 * pulse)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12));
    canvas.drawOval(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.5..color = color.withValues(alpha: 0.7));
    canvas.drawOval(r.deflate(14), Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = color.withValues(alpha: 0.3));
  }

  @override
  bool shouldRepaint(covariant _RingPainter old) => true;
}

class _BurstPainter extends CustomPainter {
  _BurstPainter(this.colors, this.t, this.seed);
  final List<Color> colors;
  final double t;
  final int seed;

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final e = Curves.easeOutCubic.transform(t);
    canvas.drawCircle(c, 40 + e * size.width * 0.42, Paint()..style = PaintingStyle.stroke..strokeWidth = 5 * (1 - t)..color = colors.first.withValues(alpha: 0.6 * (1 - t)));
    final r = math.Random(seed * 17 + 3);
    for (var i = 0; i < 26; i++) {
      final a = r.nextDouble() * math.pi * 2;
      final dist = (40 + r.nextDouble() * 110) * e;
      final p = c + Offset(math.cos(a) * dist * 1.6, math.sin(a) * dist + 40 * t * t * 3);
      canvas.drawCircle(p, (2 + r.nextDouble() * 3) * (1 - t * 0.6), Paint()..color = (i.isEven ? colors.first : Colors.white).withValues(alpha: (1 - t).clamp(0.0, 1.0)));
    }
  }

  @override
  bool shouldRepaint(covariant _BurstPainter old) => true;
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
