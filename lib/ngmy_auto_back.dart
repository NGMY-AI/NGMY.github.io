import 'dart:async';

import 'package:flutter/material.dart';

/// The back button of a construction page: it fades away [seconds] seconds after the page opens, so it never covers the work. Two quick taps
/// where it was bring it back, and it goes away again after the same time.
class AutoHideBack extends StatefulWidget {
  const AutoHideBack({super.key, required this.child, this.width = 48, this.height = 48, this.seconds = 3});
  final Widget child;
  final double width, height;
  final int seconds;

  @override
  State<AutoHideBack> createState() => _AutoHideBackState();
}

class _AutoHideBackState extends State<AutoHideBack> {
  bool _shown = true;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    _arm();
  }

  void _arm() {
    _t?.cancel();
    _t = Timer(Duration(seconds: widget.seconds), () {
      if (mounted) setState(() => _shown = false);
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.width,
      height: widget.height,
      child: Stack(children: [
        AnimatedOpacity(
          opacity: _shown ? 1 : 0,
          duration: const Duration(milliseconds: 300),
          child: IgnorePointer(ignoring: !_shown, child: widget.child),
        ),
        // Where the button was, while it is hidden: a double tap brings it back.
        if (!_shown)
          Positioned.fill(
            child: GestureDetector(
              key: const Key('auto-back-zone'),
              behavior: HitTestBehavior.opaque,
              onDoubleTap: () {
                setState(() => _shown = true);
                _arm();
              },
            ),
          ),
      ]),
    );
  }
}
