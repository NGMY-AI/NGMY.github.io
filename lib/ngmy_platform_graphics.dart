import 'dart:io';

import 'package:flutter/foundation.dart';

/// Windows desktop EGL/ANGLE can lose GL context under continuous GPU animations.
bool get ngmyPreferLightGraphics => !kIsWeb && Platform.isWindows;
