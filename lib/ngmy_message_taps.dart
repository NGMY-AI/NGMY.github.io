import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// The app-wide rule for chat messages:
/// - **double-tap** likes the message (❤️ — double-tap again to remove it)
/// - **triple-tap** copies the message text
///
/// Flutter's double-tap recognizer can't see a third tap, so taps are counted
/// here: a second tap waits a moment for a possible third before it likes.
///
/// When [onLike] is null the widget keeps its own like and shows the heart
/// itself (for chats that don't save reactions).
class NgmyMessageTaps extends StatefulWidget {
  const NgmyMessageTaps({
    super.key,
    required this.child,
    required this.copyText,
    this.onLike,
    this.onCopied,
    this.onLongPress,
    this.alignHeartEnd = false,
  });

  final Widget child;
  final String copyText;

  /// Saved like toggle (the chat stores the reaction). Null = local heart.
  final VoidCallback? onLike;

  /// Custom copy (e.g. a chat's own "Copied" toast). Null = copy + toast here.
  final Future<void> Function(String text)? onCopied;
  final VoidCallback? onLongPress;

  /// Local heart sits on the right edge (your own messages) instead of the left.
  final bool alignHeartEnd;

  @override
  State<NgmyMessageTaps> createState() => _NgmyMessageTapsState();
}

class _NgmyMessageTapsState extends State<NgmyMessageTaps> {
  static const _tapGap = Duration(milliseconds: 340);
  static const _maxPress = Duration(milliseconds: 320);

  int _count = 0;
  DateTime? _lastTap;
  Offset? _downAt;
  DateTime? _downTime;
  Timer? _pending;
  bool _localLiked = false;

  @override
  void dispose() {
    _pending?.cancel();
    super.dispose();
  }

  void _onDown(PointerDownEvent e) {
    _downAt = e.position;
    _downTime = DateTime.now();
  }

  void _onUp(PointerUpEvent e) {
    final at = _downAt;
    final time = _downTime;
    _downAt = null;
    if (at == null || time == null) return;
    if ((e.position - at).distance > 14) return;
    if (DateTime.now().difference(time) > _maxPress) return;
    _tap();
  }

  void _tap() {
    final now = DateTime.now();
    if (_lastTap == null || now.difference(_lastTap!) > _tapGap) _count = 0;
    _lastTap = now;
    _count++;
    _pending?.cancel();
    if (_count >= 3) {
      _reset();
      unawaited(_copy());
    } else if (_count == 2) {
      _pending = Timer(_tapGap, () {
        _reset();
        _like();
      });
    }
  }

  void _reset() {
    _pending?.cancel();
    _count = 0;
    _lastTap = null;
  }

  void _like() {
    if (!mounted) return;
    HapticFeedback.lightImpact();
    if (widget.onLike != null) {
      widget.onLike!();
    } else {
      setState(() => _localLiked = !_localLiked);
    }
  }

  Future<void> _copy() async {
    final text = widget.copyText.trim();
    if (text.isEmpty || !mounted) return;
    if (widget.onCopied != null) {
      await widget.onCopied!(text);
      return;
    }
    await Clipboard.setData(ClipboardData(text: text));
    if (!mounted) return;
    HapticFeedback.mediumImpact();
    ScaffoldMessenger.maybeOf(context)?.showSnackBar(
      const SnackBar(content: Text('Copied'), backgroundColor: Color(0xFF16A34A), duration: Duration(seconds: 1)),
    );
  }

  @override
  Widget build(BuildContext context) {
    Widget body = widget.child;
    if (widget.onLike == null && _localLiked) {
      body = Stack(
        clipBehavior: Clip.none,
        children: [
          body,
          Positioned(
            bottom: -8,
            left: widget.alignHeartEnd ? null : 8,
            right: widget.alignHeartEnd ? 8 : null,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
              decoration: BoxDecoration(
                color: const Color(0xFF1F2937),
                borderRadius: BorderRadius.circular(99),
                border: Border.all(color: Colors.white24),
              ),
              child: const Text('❤️', style: TextStyle(fontSize: 12)),
            ),
          ),
        ],
      );
    }
    return GestureDetector(
      behavior: HitTestBehavior.translucent,
      onLongPress: widget.onLongPress,
      child: Listener(
        behavior: HitTestBehavior.translucent,
        onPointerDown: _onDown,
        onPointerUp: _onUp,
        onPointerCancel: (_) => _downAt = null,
        child: body,
      ),
    );
  }
}
