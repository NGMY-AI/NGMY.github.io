import 'package:flutter/material.dart';

import 'ngmy_block_builder.dart';
import 'ngmy_play_studios_a.dart';
import 'ngmy_play_studios_b.dart';
import 'ngmy_play_tools.dart';

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
        intro: 'Real science data to explore, hear and play with. Works offline.',
        tiles: [
          PlayTile('PERIODIC TABLE', 'All 118 elements. Mix two!', Icons.science_rounded, const Color(0xFF38BDF8), () => const NgmyPeriodicStudio()),
          PlayTile('SKY MAP', 'Stars and 88 constellations', Icons.auto_awesome_rounded, const Color(0xFF818CF8), () => const NgmySkyStudio()),
          PlayTile('PLATES & QUAKES', 'The moving Earth', Icons.public_rounded, const Color(0xFFF87171), () => const NgmyQuakeStudio()),
          PlayTile('DINOSAURS', 'Timeline, size and quiz', Icons.pets_rounded, const Color(0xFF4ADE80), () => const NgmyDinoStudio()),
          PlayTile('ANIMAL ARENA', 'Race and compare', Icons.emoji_nature_rounded, const Color(0xFFFB923C), () => const NgmyAnimalStudio()),
          PlayTile('BODY EXPLORER', 'Meet your organs', Icons.favorite_rounded, const Color(0xFFF472B6), () => const NgmyBodyStudio()),
        ],
      );
}

class NgmyToolboxHub extends StatelessWidget {
  const NgmyToolboxHub({super.key});

  @override
  Widget build(BuildContext context) => NgmyTileHub(
        title: 'TOOLBOX',
        intro: 'Handy tools and brain games for everyone.',
        tiles: [
          PlayTile('UNIT CONVERTER', 'Length, weight, heat...', Icons.straighten_rounded, const Color(0xFF38BDF8), () => const NgmyConverterStudio()),
          PlayTile('WORLD CLOCK', 'Time around the world', Icons.schedule_rounded, const Color(0xFFFBBF24), () => const NgmyWorldClockStudio()),
          PlayTile('MATHS TRAINER', 'Ten quick sums', Icons.calculate_rounded, const Color(0xFF4ADE80), () => const NgmyMathStudio()),
          PlayTile('TYPING TUTOR', 'Type faster', Icons.keyboard_rounded, const Color(0xFFF472B6), () => const NgmyTypingStudio()),
        ],
      );
}

Widget ngmyBlockBuilderScreen() => const NgmyBlockBuilder();
