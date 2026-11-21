import 'package:flutter/material.dart';

import 'ngmy_arcade_catalog.dart';
import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_games_c.dart';
import 'ngmy_arcade_games_d.dart';
import 'ngmy_arcade_games_e.dart';
import 'ngmy_arcade_games_f.dart';
import 'ngmy_arcade_games_g.dart';
import 'ngmy_arcade_games_h.dart';
import 'ngmy_arcade_host.dart';

/// The 50 newer arcade money games (21–70).


Widget ngmyBuildArcadeGameMore(String id, NgmyArcadeArgs a) =>
    ngmyBuildArcadeGameC(id, a) ??
    ngmyBuildArcadeGameD(id, a) ??
    ngmyBuildArcadeGameE(id, a) ??
    ngmyBuildArcadeGameF(id, a) ??
    ngmyBuildArcadeGameG(id, a) ??
    ngmyBuildArcadeGameH(id, a) ??
    const Center(child: Text('Game not found', style: TextStyle(color: Colors.white)));
