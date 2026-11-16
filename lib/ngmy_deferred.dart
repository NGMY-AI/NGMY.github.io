import 'dart:async';

import 'package:flutter/material.dart';

/// Shows a screen whose code is downloaded the first time it is opened (a Dart "deferred" library),
/// so the app starts with less loaded and every big feature costs nothing until someone uses it.
/// Usage: `NgmyDeferred(load: feature.loadLibrary, build: () => feature.FeatureScreen())`.
class NgmyDeferred extends StatefulWidget {
  const NgmyDeferred({super.key, required this.load, required this.build, this.background});

  final Future<void> Function() load;
  final Widget Function() build;
  /// The loading page colour. When not given it follows the app look: white in light mode, dark in dark mode.
  final Color? background;

  @override
  State<NgmyDeferred> createState() => _NgmyDeferredState();
}

/// Parts of the app already downloaded in this visit. Opening one again shows it at once (no loading frame).
final Set<Object> _ngmyDeferredLoaded = {};

class _NgmyDeferredState extends State<NgmyDeferred> {
  late final Future<void> _loading = widget.load().then((_) => _ngmyDeferredLoaded.add(widget.load));
  Widget? _built;

  @override
  Widget build(BuildContext context) {
    if (_ngmyDeferredLoaded.contains(widget.load)) return _built ??= widget.build();
    return FutureBuilder<void>(
      future: _loading,
      builder: (context, snap) {
        if (snap.connectionState == ConnectionState.done && !snap.hasError) {
          // Built once, so a rebuild of the parent does not rebuild the whole screen from scratch.
          return _built ??= widget.build();
        }
        final light = Theme.of(context).brightness == Brightness.light;
        return Scaffold(
          backgroundColor: widget.background ?? (light ? Colors.white : const Color(0xFF0B0F18)),
          body: Center(
            child: snap.hasError
                ? Padding(
                    padding: const EdgeInsets.all(28),
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Icon(Icons.wifi_off_rounded, color: light ? const Color(0xFF6B7280) : Colors.white54, size: 40),
                      const SizedBox(height: 12),
                      Text('This part of the app could not load. Check your connection and try again.', textAlign: TextAlign.center, style: TextStyle(color: light ? const Color(0xFF374151) : Colors.white70, height: 1.4)),
                      const SizedBox(height: 14),
                      FilledButton(onPressed: () => Navigator.of(context).maybePop(), child: const Text('Back')),
                    ]),
                  )
                : const CircularProgressIndicator(strokeWidth: 3),
          ),
        );
      },
    );
  }
}

/// Loads a deferred library, then runs [run] and returns what it returns. For calls like
/// `ngmyRunDeferred(video.loadLibrary, () => video.showNgmyVideoStudio(context))`.
Future<T> ngmyRunDeferred<T>(Future<void> Function() load, FutureOr<T> Function() run) async {
  await load();
  return run();
}

/// Loads every given part of the app one after another in the background, with a short pause between each so the
/// screen never stutters. Called once after the home screen opens: by the time a menu is tapped its code is already
/// in memory, so it opens at once instead of showing a loading circle the first time after every start of the app.
/// Each part comes from the copy stored on the phone (the service worker keeps them), so this costs no data.
Future<void> ngmyWarmDeferred(List<Future<void> Function()> loads, {Duration gap = const Duration(milliseconds: 200)}) async {
  for (final load in loads) {
    try {
      await load();
      _ngmyDeferredLoaded.add(load);
    } catch (_) {
      // Offline or not stored yet: that menu simply loads when it is opened, as before.
    }
    await Future<void>.delayed(gap);
  }
}
