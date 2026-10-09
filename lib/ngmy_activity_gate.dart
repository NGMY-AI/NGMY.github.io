import 'package:flutter/gestures.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

/// Knows whether someone is actually using the app right now.
/// Background timers use it to stop hitting the server when the app is hidden or nobody has
/// touched it for a while (a tab left open was making thousands of calls a day).
class NgmyActivityGate with WidgetsBindingObserver {
  NgmyActivityGate._();
  static final NgmyActivityGate _i = NgmyActivityGate._();

  /// No touches / keys for this long = idle.
  static const Duration idleAfter = Duration(minutes: 5);

  static bool _installed = false;
  static DateTime _lastInput = DateTime.now();
  static bool _hidden = false;

  static void ensureInstalled() {
    if (_installed) return;
    try {
      final binding = WidgetsBinding.instance;
      GestureBinding.instance.pointerRouter.addGlobalRoute((PointerEvent _) => _lastInput = DateTime.now());
      HardwareKeyboard.instance.addHandler((KeyEvent _) {
        _lastInput = DateTime.now();
        return false;
      });
      binding.addObserver(_i);
      _installed = true;
    } catch (_) {
      // Binding not ready yet — try again on the next call.
    }
  }

  /// True when the app is hidden or nobody has interacted for [idleAfter].
  static bool get isIdle {
    ensureInstalled();
    if (!_installed) return false;
    return _hidden || DateTime.now().difference(_lastInput) > idleAfter;
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    _hidden = state != AppLifecycleState.resumed && state != AppLifecycleState.inactive;
    if (state == AppLifecycleState.resumed) _lastInput = DateTime.now();
  }
}
