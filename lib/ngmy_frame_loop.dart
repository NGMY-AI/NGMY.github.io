import 'dart:async';

import 'package:flutter/scheduler.dart';
import 'package:flutter/widgets.dart';

/// Calls [tick] once for every frame that is drawn, so a walking person, a drone or an elevator moves smoothly and in step with the
/// screen (a plain timer drifts against the frames and the picture judders). Under the test framework, where frames only come when a
/// test asks for them, it falls back to a timer of [testEvery].
class FrameLoop {
  FrameLoop(this.tick, {this.testEvery = const Duration(milliseconds: 33)});

  final void Function() tick;
  final Duration testEvery;
  bool _on = false;
  Timer? _timer;

  bool get running => _on;

  static bool get _inTest => WidgetsBinding.instance.runtimeType.toString().contains('Test');

  void start() {
    if (_on) return;
    _on = true;
    if (_inTest) {
      _timer = Timer.periodic(testEvery, (_) => tick());
    } else {
      _next();
    }
  }

  void _next() {
    SchedulerBinding.instance.scheduleFrameCallback((_) {
      if (!_on) return;
      tick();
      if (_on) _next();
    });
  }

  void cancel() => stop();

  void stop() {
    _on = false;
    _timer?.cancel();
    _timer = null;
  }
}
