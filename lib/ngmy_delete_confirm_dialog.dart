import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_offline_icons.dart';

/// Stylish delete confirmation — dark glass panel, offline-safe emoji, animated border.
Future<bool> showNgmyDeleteConfirm(
  BuildContext context, {
  required String title,
  String? message,
  String confirmLabel = 'Delete',
  String cancelLabel = 'Cancel',
}) async {
  final result = await showGeneralDialog<bool>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Dismiss',
    barrierColor: Colors.black.withValues(alpha: 0.62),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.84, end: 1).animate(curved),
          child: _NgmyDeleteConfirmCard(
            title: title,
            message: message,
            confirmLabel: confirmLabel,
            cancelLabel: cancelLabel,
          ),
        ),
      );
    },
  );
  return result == true;
}

/// Home deck card removal — same styled dialog with a preset message.
Future<bool> showNgmyRoboticDeleteConfirm(BuildContext context, {required String title}) {
  return showNgmyDeleteConfirm(
    context,
    title: title,
    message: 'This card will be removed from your home deck. Confirm to proceed.',
    confirmLabel: 'Remove',
  );
}

class _NgmyDeleteConfirmCard extends StatefulWidget {
  const _NgmyDeleteConfirmCard({
    required this.title,
    required this.message,
    required this.confirmLabel,
    required this.cancelLabel,
  });

  final String title;
  final String? message;
  final String confirmLabel;
  final String cancelLabel;

  @override
  State<_NgmyDeleteConfirmCard> createState() => _NgmyDeleteConfirmCardState();
}

class _NgmyDeleteConfirmCardState extends State<_NgmyDeleteConfirmCard> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;

  static const _danger = Color(0xFFEF4444);
  static const _cyan = Color(0xFF67E8F9);

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Material(
        color: Colors.transparent,
        child: AnimatedBuilder(
          animation: _pulse,
          builder: (context, child) {
            final t = Curves.easeInOut.transform(_pulse.value);
            return Container(
              width: math.min(MediaQuery.sizeOf(context).width - 40, 360),
              margin: const EdgeInsets.symmetric(horizontal: 20),
              padding: const EdgeInsets.fromLTRB(22, 24, 22, 20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF0B1220), Color(0xFF111827), Color(0xFF1E1B4B)],
                ),
                border: Border.all(color: Color.lerp(_cyan, _danger, t)!, width: 1.6),
                boxShadow: [
                  BoxShadow(color: _cyan.withValues(alpha: 0.18 + t * 0.14), blurRadius: 28, spreadRadius: 1),
                  BoxShadow(color: _danger.withValues(alpha: 0.16), blurRadius: 24, offset: const Offset(0, 10)),
                ],
              ),
              child: child,
            );
          },
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              AnimatedBuilder(
                animation: _pulse,
                builder: (context, _) {
                  final t = Curves.easeInOut.transform(_pulse.value);
                  return Transform.scale(
                    scale: 1.0 + t * 0.05,
                    child: Container(
                      width: 68,
                      height: 68,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: RadialGradient(
                          colors: [
                            _danger.withValues(alpha: 0.28),
                            _danger.withValues(alpha: 0.08),
                          ],
                        ),
                        border: Border.all(color: _danger.withValues(alpha: 0.45 + t * 0.2)),
                        boxShadow: [BoxShadow(color: _danger.withValues(alpha: 0.22 + t * 0.12), blurRadius: 18)],
                      ),
                      child: const Center(child: NgmyOfflineEmoji('🗑️', fontSize: 32)),
                    ),
                  );
                },
              ),
              const SizedBox(height: 16),
              Text(
                'CONFIRM DELETE',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  letterSpacing: 2.1,
                  color: Color.lerp(_cyan, const Color(0xFFF87171), Curves.easeInOut.transform(_pulse.value)),
                ),
              ),
              const SizedBox(height: 10),
              Text(
                widget.title,
                textAlign: TextAlign.center,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, height: 1.25),
              ),
              if (widget.message != null && widget.message!.trim().isNotEmpty) ...[
                const SizedBox(height: 10),
                Text(
                  widget.message!,
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.68), fontWeight: FontWeight.w600, fontSize: 13, height: 1.4),
                ),
              ],
              const SizedBox(height: 22),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context, false),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white,
                        side: BorderSide(color: Colors.white.withValues(alpha: 0.28)),
                        minimumSize: const Size(0, 48),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: Text(widget.cancelLabel, style: const TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: () => Navigator.pop(context, true),
                      style: FilledButton.styleFrom(
                        backgroundColor: _danger,
                        foregroundColor: Colors.white,
                        minimumSize: const Size(0, 48),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        elevation: 0,
                      ),
                      child: Text(widget.confirmLabel, style: const TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
