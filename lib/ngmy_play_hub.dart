import 'package:flutter/material.dart';

import 'ngmy_block_builder.dart';
import 'ngmy_body_explorer.dart';
import 'ngmy_ai_inventor.dart';
import 'ngmy_electronics_lab.dart';
import 'ngmy_play_studios_a.dart';
import 'ngmy_tech_labs.dart';
import 'ngmy_play_toolbox.dart';

class PlayTile {
  const PlayTile(this.title, this.blurb, this.icon, this.color, this.build);
  final String title;
  final String blurb;
  final IconData icon;
  final Color color;
  final Widget Function() build;
}

/// A page of tiles, three to a row, each opening a studio.
class NgmyTileHub extends StatelessWidget {
  const NgmyTileHub({super.key, required this.title, required this.intro, required this.tiles});

  final String title;
  final String intro;
  final List<PlayTile> tiles;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF05060B),
      appBar: AppBar(
        backgroundColor: const Color(0xFF05060B),
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 19), onPressed: () => Navigator.of(context).maybePop()),
        title: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 16)),
        centerTitle: true,
      ),
      body: ListView(padding: const EdgeInsets.fromLTRB(14, 4, 14, 24), children: [
        Padding(padding: const EdgeInsets.fromLTRB(4, 0, 4, 12), child: Text(intro, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white54, fontSize: 13, height: 1.4))),
        LayoutBuilder(builder: (context, box) {
          final w = (box.maxWidth - 20) / 3;
          return Wrap(spacing: 10, runSpacing: 10, alignment: WrapAlignment.center, children: [
            for (final t in tiles)
              GestureDetector(
                onTap: () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => t.build())),
                child: Container(
                  width: w,
                  height: w * 1.15,
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), border: Border.all(color: t.color.withValues(alpha: 0.5)), gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [t.color.withValues(alpha: 0.28), const Color(0xFF0B0D14)])),
                  child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Icon(t.icon, color: t.color, size: 30),
                    const SizedBox(height: 8),
                    Text(t.title, textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 0.5)),
                    const SizedBox(height: 3),
                    Text(t.blurb, textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(color: Colors.white54, fontSize: 10, height: 1.25)),
                  ]),
                ),
              ),
          ]);
        }),
      ]),
    );
  }
}

class NgmyDiscoveryHub extends StatelessWidget {
  const NgmyDiscoveryHub({super.key});

  @override
  Widget build(BuildContext context) => NgmyTileHub(
        title: 'DISCOVERY LAB',
        intro: 'Hands-on technology and science. Build, connect, spin and see how things really work.',
        tiles: [
          PlayTile('ELECTRONICS LAB', 'Batteries, wires, bulbs', Icons.electrical_services_rounded, const Color(0xFF38BDF8), () => const NgmyElectronicsLab()),
          PlayTile('AI INVENTOR', 'Say it, watch it built', Icons.auto_awesome_rounded, const Color(0xFFA78BFA), () => const NgmyInventorStudio()),
          PlayTile('POWER PLANT', 'How electricity is made', Icons.wind_power_rounded, const Color(0xFFFBBF24), () => const NgmyPowerPlantStudio()),
          PlayTile('MAGNET LAB', 'Fields and electromagnets', Icons.sync_alt_rounded, const Color(0xFFEF4444), () => const NgmyMagnetLab()),
          PlayTile('RADIO LAB', 'Tune in the invisible', Icons.radio_rounded, const Color(0xFFE879F9), () => const NgmyRadioLab()),
          PlayTile('PIXEL TV', 'How a screen makes colour', Icons.live_tv_rounded, const Color(0xFF22D3EE), () => const NgmyPixelTvStudio()),
          PlayTile('PERIODIC TABLE', 'All 118 elements. Mix two!', Icons.science_rounded, const Color(0xFF4ADE80), () => const NgmyPeriodicStudio()),
          PlayTile('BODY EXPLORER', '3D human, inside and out', Icons.accessibility_new_rounded, const Color(0xFFF472B6), () => const NgmyBodyExplorer()),
        ],
      );
}

class _ToolCard {
  const _ToolCard(this.title, this.blurb, this.emoji, this.a, this.b, this.build);
  final String title;
  final String blurb;
  final String emoji;
  final Color a;
  final Color b;
  final Widget Function() build;
}

final List<_ToolCard> _kToolCards = [
  _ToolCard('Spin the Wheel', 'Let luck decide', '🎡', const Color(0xFFFBBF24), const Color(0xFFF97316), () => const NgmyWheelStudio()),
  _ToolCard('Focus Timer', 'Work, then rest', '⏱️', const Color(0xFFF87171), const Color(0xFFDC2626), () => const NgmyFocusTimerStudio()),
  _ToolCard('Breathe', 'Calm down in a minute', '🫧', const Color(0xFF2DD4BF), const Color(0xFF0EA5E9), () => const NgmyBreatheStudio()),
  _ToolCard('Draw Pad', 'Sketch and share', '🎨', const Color(0xFFEC4899), const Color(0xFF8B5CF6), () => const NgmyDrawPadStudio()),
  _ToolCard('Memory Match', 'Find the pairs', '🃏', const Color(0xFF38BDF8), const Color(0xFF6366F1), () => const NgmyMemoryStudio()),
  _ToolCard('Simon Sounds', 'Copy the tune', '🎵', const Color(0xFFFACC15), const Color(0xFF22C55E), () => const NgmySimonStudio()),
  _ToolCard('Tip & Split', 'Share the bill', '🧾', const Color(0xFF4ADE80), const Color(0xFF059669), () => const NgmyTipStudio()),
  _ToolCard('Lucky Pocket', 'Dice, coin, number', '🎲', const Color(0xFFA78BFA), const Color(0xFF7C3AED), () => const NgmyLuckyStudio()),
];

class NgmyToolboxHub extends StatelessWidget {
  const NgmyToolboxHub({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0B0C10),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0B0C10),
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 19), onPressed: () => Navigator.of(context).maybePop()),
        title: const Text('TOOLBOX', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 16)),
        centerTitle: true,
      ),
      body: ListView(padding: const EdgeInsets.fromLTRB(16, 4, 16, 28), children: [
        const Padding(padding: EdgeInsets.fromLTRB(4, 0, 4, 14), child: Text('Games and little helpers for a spare minute.', style: TextStyle(color: Colors.white54, fontSize: 14))),
        LayoutBuilder(builder: (context, box) {
          final w = (box.maxWidth - 14) / 2;
          return Wrap(spacing: 14, runSpacing: 14, children: [
            for (final c in _kToolCards)
              GestureDetector(
                onTap: () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => c.build())),
                child: Container(
                  width: w,
                  height: w * 0.95,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(26), gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.a, c.b]), boxShadow: [BoxShadow(color: c.b.withValues(alpha: 0.4), blurRadius: 16, offset: const Offset(0, 8))]),
                  child: Stack(children: [
                    Positioned(right: -6, top: -6, child: Text(c.emoji, style: const TextStyle(fontSize: 64))),
                    Align(
                      alignment: Alignment.bottomLeft,
                      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(c.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17, height: 1.1)),
                        const SizedBox(height: 3),
                        Text(c.blurb, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12, fontWeight: FontWeight.w600)),
                      ]),
                    ),
                  ]),
                ),
              ),
          ]);
        }),
      ]),
    );
  }
}

Widget ngmyBlockBuilderScreen() => const NgmyBlockBuilder();
