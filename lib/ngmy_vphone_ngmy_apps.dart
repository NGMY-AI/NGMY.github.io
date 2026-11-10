import 'package:flutter/material.dart';

import 'ngmy_core_studios_a.dart';
import 'ngmy_core_studios_b.dart';
import 'ngmy_core_studios_c.dart';
import 'ngmy_universe_hub.dart';

// The NGMY apps that can be installed on the virtual phone. This file is loaded only when one of them is opened,
// so the studios do not make the rest of the app heavier.

/// The page of the NGMY app [id], or null when there is no such app.
Widget? buildNgmyAppBody(String id) => switch (id) {
      'title' => const NgmyTitleStudio(),
      'beat' => const NgmyBeatStudio(),
      'piano' => const NgmyPianoStudio(),
      'drums' => const NgmyDrumStudio(),
      'palette' => const NgmyPaletteStudio(),
      'mandala' => const NgmyMandalaStudio(),
      'fireworks' => const NgmyFireworkStudio(),
      'gravity' => const NgmyGravityStudio(),
      'sparks' => const NgmySparkPainterStudio(),
      'universe' => const NgmyUniverseHub(),
      _ => null,
    };
