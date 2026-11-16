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

class _NgmyDeferredState extends State<NgmyDeferred> {
  late final Future<void> _loading = widget.load();
  Widget? _built;

  @override
  Widget build(BuildContext context) {
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
