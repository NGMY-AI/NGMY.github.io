import 'package:flutter/widgets.dart';

/// Only the web build has the 3D engine page; other builds keep the built-in software drawing.
const bool kNgmyBodyViewerSupported = false;

class NgmyBodyViewerLink {
  NgmyBodyViewerLink({required this.onEvent});
  final void Function(Map<dynamic, dynamic> event) onEvent;
  bool get started => false;
  void start(String threeJs) {}
  void send(Map<String, dynamic> message) {}
  Widget build() => const SizedBox.shrink();
  void dispose() {}
}
