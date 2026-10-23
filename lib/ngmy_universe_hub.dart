import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_universe_data.dart';
import 'ngmy_universe_globe.dart';
import 'ngmy_universe_space_a.dart';
import 'ngmy_universe_space_b.dart';

class _Tile {
  const _Tile(this.title, this.blurb, this.icon, this.color, this.build);
  final String title;
  final String blurb;
  final IconData icon;
  final Color color;
  final Widget Function() build;
}

final List<_Tile> _kTiles = [
  _Tile('EARTH GLOBE', 'Turn it, tap a country', Icons.public_rounded, const Color(0xFF38BDF8), () => const NgmyGlobeStudio()),
  _Tile('SOLAR SYSTEM', 'The Sun and its worlds', Icons.brightness_7_rounded, const Color(0xFFFBBF24), () => const NgmySolarStudio()),
  _Tile('GRAVITY LAB', 'Drop, weigh, orbit', Icons.south_rounded, const Color(0xFFFB923C), () => const NgmyGravityLabStudio()),
  _Tile('BLACK HOLE', 'Throw in a star', Icons.circle, const Color(0xFFA78BFA), () => const NgmyBlackHoleStudio()),
  _Tile('GALAXY', 'Build, tilt, collide', Icons.blur_on_rounded, const Color(0xFF818CF8), () => const NgmyGalaxyStudio()),
  _Tile('SIZE COMPARE', 'Earth next to a star', Icons.compare_rounded, const Color(0xFFF472B6), () => const NgmySizeStudio()),
  _Tile('SEASONS & MOON', 'Why it is summer', Icons.nightlight_round, const Color(0xFF34D399), () => const NgmySeasonsMoonStudio()),
];

/// The front door of the Universe Explorer: Earth, the Solar System, gravity,
/// black holes, galaxies and more, three tiles to a row.
class NgmyUniverseHub extends StatefulWidget {
  const NgmyUniverseHub({super.key});

  @override
  State<NgmyUniverseHub> createState() => _NgmyUniverseHubState();
}

class _NgmyUniverseHubState extends State<NgmyUniverseHub> {
  late int _fact = math.Random().nextInt(kUniverseFacts.length);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF05060B),
      appBar: AppBar(
        backgroundColor: const Color(0xFF05060B),
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 19), onPressed: () => Navigator.of(context).maybePop()),
        title: const Text('UNIVERSE EXPLORER', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 16)),
        centerTitle: true,
      ),
      body: ListView(padding: const EdgeInsets.fromLTRB(14, 6, 14, 24), children: [
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: const Color(0xFF38BDF8).withValues(alpha: 0.1), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.35))),
          child: Row(children: [
            const Icon(Icons.lightbulb_rounded, color: Color(0xFFFBBF24), size: 24),
            const SizedBox(width: 10),
            Expanded(child: Text(kUniverseFacts[_fact], style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4, fontWeight: FontWeight.w600))),
            IconButton(onPressed: () => setState(() => _fact = (_fact + 1) % kUniverseFacts.length), icon: const Icon(Icons.refresh_rounded, color: Colors.white54), tooltip: 'Another fact'),
          ]),
        ),
        const SizedBox(height: 14),
        LayoutBuilder(builder: (context, box) {
          final w = (box.maxWidth - 20) / 3;
          return Wrap(spacing: 10, runSpacing: 10, alignment: WrapAlignment.center, children: [
            for (final t in _kTiles)
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
