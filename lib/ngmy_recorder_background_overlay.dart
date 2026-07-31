import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_creator_recorder_studio.dart';
import 'ngmy_live_capture.dart';
import 'ngmy_nav.dart';

/// Floating bar while Recorder Studio is capturing in the background.
Widget ngmyWrapRecorderBackgroundOverlay(BuildContext context, Widget child) {
  return Stack(
    fit: StackFit.expand,
    children: [
      child,
      const _RecorderBackgroundBar(),
    ],
  );
}

class _RecorderBackgroundBar extends StatefulWidget {
  const _RecorderBackgroundBar();

  @override
  State<_RecorderBackgroundBar> createState() => _RecorderBackgroundBarState();
}

class _RecorderBackgroundBarState extends State<_RecorderBackgroundBar> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;
  NgmyLiveCaptureSession get _session => ngmyLiveCaptureSession;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..repeat(reverse: true);
    _session.addListener(_onSession);
  }

  void _onSession() {
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    _session.removeListener(_onSession);
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _stopAndSave() async {
    if (!_session.recording) return;
    final item = await _session.stopAndSave();
    if (!mounted) return;
    final messenger = ScaffoldMessenger.maybeOf(context) ?? ScaffoldMessenger.of(ngmyRootNavigatorKey.currentContext!);
    if (item != null) {
      messenger.showSnackBar(
        SnackBar(
          content: Text('Saved ${item.title}'),
          backgroundColor: const Color(0xFF059669),
          behavior: SnackBarBehavior.floating,
        ),
      );
    } else if (_session.lastError != null) {
      messenger.showSnackBar(
        SnackBar(content: Text(_session.lastError!), backgroundColor: const Color(0xFFDC2626), behavior: SnackBarBehavior.floating),
      );
    }
  }

  void _openStudio() {
    final ctx = ngmyRootNavigatorKey.currentContext;
    if (ctx == null) return;
    final email = _session.activeUserEmail ?? '';
    unawaited(showNgmyCreatorRecorderStudio(ctx, userEmail: email));
  }

  @override
  Widget build(BuildContext context) {
    if (!_session.recording) return const SizedBox.shrink();

    final label = _session.videoMode ? 'Video recording' : 'Voice recording';
    return Positioned(
      left: 12,
      right: 12,
      bottom: MediaQuery.paddingOf(context).bottom + 12,
      child: Material(
        elevation: 12,
        borderRadius: BorderRadius.circular(18),
        color: const Color(0xFF064E3B),
        child: Container(
          padding: const EdgeInsets.fromLTRB(14, 10, 10, 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.45)),
            gradient: LinearGradient(
              colors: [
                const Color(0xFF065F46),
                Color.lerp(const Color(0xFF059669), const Color(0xFF064E3B), _pulse.value)!,
              ],
            ),
          ),
          child: Row(
            children: [
              FadeTransition(
                opacity: Tween<double>(begin: 0.55, end: 1).animate(_pulse),
                child: Container(
                  width: 10,
                  height: 10,
                  decoration: const BoxDecoration(color: Color(0xFFEF4444), shape: BoxShape.circle),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                    Text(
                      '${_session.clockLabel()} · Tap Stop when done — keeps going while you browse NGMY',
                      style: const TextStyle(color: Colors.white70, fontSize: 11, height: 1.25),
                    ),
                  ],
                ),
              ),
              TextButton(
                onPressed: _openStudio,
                style: TextButton.styleFrom(foregroundColor: const Color(0xFF86EFAC), padding: const EdgeInsets.symmetric(horizontal: 8)),
                child: const Text('Studio', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
              ),
              const SizedBox(width: 4),
              FilledButton(
                onPressed: _stopAndSave,
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFDC2626),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                child: const Text('Stop', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
