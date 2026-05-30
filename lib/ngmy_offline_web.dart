// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

Future<bool> ngmyPlatformIsOnline() async => html.window.navigator.onLine ?? true;
