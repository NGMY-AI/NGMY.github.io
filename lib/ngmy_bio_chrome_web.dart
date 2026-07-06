// ignore: avoid_web_libraries_in_flutter

import 'dart:html' as html;

import 'package:flutter/painting.dart';

String? _lastBioChromeHex;

String _colorToHex(Color color) {
  final r = (color.r * 255.0).round().clamp(0, 255);
  final g = (color.g * 255.0).round().clamp(0, 255);
  final b = (color.b * 255.0).round().clamp(0, 255);
  return '#${r.toRadixString(16).padLeft(2, '0')}'
      '${g.toRadixString(16).padLeft(2, '0')}'
      '${b.toRadixString(16).padLeft(2, '0')}';
}

/// Match browser chrome (status bar, bottom bar, page bg) to a bio template.
void ngmyApplyBioPageChrome(Color color) {
  final hex = _colorToHex(color);
  if (_lastBioChromeHex == hex) return;
  _lastBioChromeHex = hex;

  final light = color.computeLuminance() > 0.45;
  final scheme = light ? 'light' : 'dark';
  final root = html.document.documentElement;

  root?.style.setProperty('background-color', hex, 'important');
  root?.style.setProperty('color-scheme', scheme);
  html.document.body?.style.setProperty('background-color', hex, 'important');

  if (light) {
    root?.classes.add('ngmy-bio-light');
    root?.classes.remove('ngmy-bio-dark');
  } else {
    root?.classes.remove('ngmy-bio-light');
    root?.classes.add('ngmy-bio-dark');
  }

  final statusMeta = html.document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  statusMeta?.setAttribute('content', light ? 'default' : 'black-translucent');

  for (final meta in html.document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute('content', hex);
  }

  final bioMeta = html.document.getElementById('ngmy-bio-theme-color') as html.MetaElement?;
  if (bioMeta != null) {
    bioMeta.content = hex;
  } else {
    final head = html.document.head;
    if (head != null) {
      head.append(html.MetaElement()
        ..id = 'ngmy-bio-theme-color'
        ..name = 'theme-color'
        ..content = hex);
    }
  }

  for (final view in html.document.querySelectorAll('flutter-view, flt-glass-pane')) {
    view.style.setProperty('background-color', hex, 'important');
  }
}
