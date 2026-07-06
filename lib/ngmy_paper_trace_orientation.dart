import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

import 'ngmy_paper_trace_orientation_web.dart' if (dart.library.io) 'ngmy_paper_trace_orientation_stub.dart' as web_orient;

/// Device tilt sample used to keep a screen overlay aligned with real-world paper.
class PaperTiltSample {
  const PaperTiltSample({required this.pitch, required this.roll, this.z = 9.8});

  final double pitch;
  final double roll;
  final double z;
}

/// Tracks phone tilt and computes overlay compensation while anchored to paper.
class PaperTraceAnchor {
  PaperTraceAnchor({this.panGain = 920});

  double panGain;

  double _pitch = 0;
  double _roll = 0;
  double _z = 9.8;
  double _refPitch = 0;
  double _refRoll = 0;
  double _refZ = 9.8;
  Offset _baseOffset = Offset.zero;
  double _baseScale = 1;
  bool _active = false;

  bool get isActive => _active;

  void ingest(PaperTiltSample s) {
    const smooth = 0.22;
    _pitch = _pitch * (1 - smooth) + s.pitch * smooth;
    _roll = _roll * (1 - smooth) + s.roll * smooth;
    _z = _z * (1 - smooth) + s.z * smooth;
  }

  void lock({required Offset offset, required double scale, PaperTiltSample? at}) {
    _active = true;
    _baseOffset = offset;
    _baseScale = scale;
    final snap = at ?? PaperTiltSample(pitch: _pitch, roll: _roll, z: _z);
    _refPitch = snap.pitch;
    _refRoll = snap.roll;
    _refZ = snap.z.abs().clamp(3.5, 16.0);
  }

  void unlock() => _active = false;

  Offset displayOffset(double strength) {
    if (!_active) return _baseOffset;
    final dRoll = _roll - _refRoll;
    final dPitch = _pitch - _refPitch;
    final gain = panGain * strength;
    // Inverse move: when phone tilts, shift overlay so it stays on the paper in view.
    return _baseOffset + Offset(-dRoll * gain, -dPitch * gain);
  }

  double displayScale() {
    if (!_active) return _baseScale;
    final ratio = (_refZ / _z.abs().clamp(3.0, 18.0)).clamp(0.9, 1.1);
    return _baseScale * ratio;
  }
}

PaperTiltSample _fromAccel(AccelerometerEvent e) {
  return PaperTiltSample(
    pitch: math.atan2(e.y, e.z),
    roll: math.atan2(e.x, e.z),
    z: e.z,
  );
}

/// Merges native accelerometer + browser deviceorientation (web/iOS PWA).
class PaperTraceOrientationStream {
  PaperTraceOrientationStream();

  final _ctrl = StreamController<PaperTiltSample>.broadcast();
  StreamSubscription<AccelerometerEvent>? _accel;
  StreamSubscription<PaperTiltSample>? _web;

  Stream<PaperTiltSample> get stream => _ctrl.stream;

  void start() {
    if (_accel != null) return;
    _accel = accelerometerEventStream(samplingPeriod: SensorInterval.gameInterval).listen((e) {
      if (!_ctrl.isClosed) _ctrl.add(_fromAccel(e));
    });
    if (kIsWeb) {
      _web = web_orient.paperTraceWebOrientationStream().listen((s) {
        if (!_ctrl.isClosed) _ctrl.add(s);
      });
    }
  }

  void dispose() {
    _accel?.cancel();
    _web?.cancel();
    _accel = null;
    _web = null;
    _ctrl.close();
  }
}
