// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

String ngmyWebHostname() => html.window.location.hostname ?? '';

String ngmyWebOrigin() => html.window.location.origin ?? '';
