import 'dart:async';
import 'dart:html' as html;
import 'dart:math' as math;

import 'ngmy_paper_trace_orientation.dart';

Stream<PaperTiltSample> paperTraceWebOrientationStream() {
  final ctrl = StreamController<PaperTiltSample>.broadcast();
  void onOrient(html.Event raw) {
    final e = raw as html.DeviceOrientationEvent;
    final beta = e.beta;
    final gamma = e.gamma;
    if (beta == null || gamma == null) return;
    final pitch = beta * math.pi / 180;
    final roll = gamma * math.pi / 180;
    ctrl.add(PaperTiltSample(pitch: pitch, roll: roll, z: 9.8));
  }

  html.window.addEventListener('deviceorientation', onOrient);
  ctrl.onCancel = () => html.window.removeEventListener('deviceorientation', onOrient);
  return ctrl.stream;
}
