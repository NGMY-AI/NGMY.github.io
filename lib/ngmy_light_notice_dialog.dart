import 'package:flutter/material.dart';

import 'ngmy_delete_confirm_dialog.dart';

/// Centered light notice popup (validation / info) — replaces bottom snackbars.
Future<void> showNgmyLightNotice(
  BuildContext context, {
  required String message,
  String title = 'Please check',
  String okLabel = 'OK',
  IconData icon = Icons.info_outline_rounded,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Dismiss',
    barrierColor: Colors.black.withValues(alpha: 0.38),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.88, end: 1).animate(curved),
          child: _NgmyLightNoticeCard(
            title: title,
            message: message,
            okLabel: okLabel,
            icon: icon,
            confirm: false,
          ),
        ),
      );
    },
  );
}

/// Centered light confirm popup (e.g. delete member).
Future<bool> showNgmyLightConfirm(
  BuildContext context, {
  required String title,
  required String message,
  String cancelLabel = 'Cancel',
  String confirmLabel = 'Delete',
  IconData icon = Icons.delete_outline_rounded,
  bool destructive = true,
}) {
  return showNgmyDeleteConfirm(
    context,
    title: title,
    message: message,
    cancelLabel: cancelLabel,
    confirmLabel: confirmLabel,
  );
}

class _NgmyLightNoticeCard extends StatefulWidget {
  const _NgmyLightNoticeCard({
    required this.title,
    required this.message,
    required this.okLabel,
    required this.icon,
    required this.confirm,
    this.cancelLabel = 'Cancel',
    this.destructive = false,
  });

  final String title;
  final String message;
  final String okLabel;
  final String cancelLabel;
  final IconData icon;
  final bool confirm;
  final bool destructive;

  @override
  State<_NgmyLightNoticeCard> createState() => _NgmyLightNoticeCardState();
}

class _NgmyLightNoticeCardState extends State<_NgmyLightNoticeCard> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;

  static const _bg = Color(0xFFFFFBF5);
  static const _ink = Color(0xFF1C1917);
  static const _muted = Color(0xFF78716C);
  static const _accent = Color(0xFF0D9488);
  static const _danger = Color(0xFFDC2626);

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final actionColor = widget.destructive ? _danger : _accent;

    return Center(
      child: Material(
        color: Colors.transparent,
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 340),
          child: AnimatedBuilder(
            animation: _pulse,
            builder: (context, child) {
              final t = Curves.easeInOut.transform(_pulse.value);
              return Container(
                margin: const EdgeInsets.symmetric(horizontal: 28),
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
                decoration: BoxDecoration(
                  color: _bg,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(
                    color: Color.lerp(
                      const Color(0xFFE7E5E4),
                      actionColor.withValues(alpha: 0.45),
                      0.35 + t * 0.25,
                    )!,
                    width: 1.4,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: actionColor.withValues(alpha: 0.10 + t * 0.08),
                      blurRadius: 28 + t * 10,
                      offset: const Offset(0, 14),
                    ),
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.08),
                      blurRadius: 18,
                      offset: const Offset(0, 8),
                    ),
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
                      scale: 1.0 + t * 0.04,
                      child: Container(
                        width: 58,
                        height: 58,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [
                              actionColor.withValues(alpha: 0.14),
                              actionColor.withValues(alpha: 0.06),
                            ],
                          ),
                          border: Border.all(color: actionColor.withValues(alpha: 0.28)),
                        ),
                        child: Icon(widget.icon, color: actionColor, size: 28),
                      ),
                    );
                  },
                ),
                const SizedBox(height: 16),
                Text(
                  widget.title,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w900,
                    color: _ink,
                    letterSpacing: 0.2,
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  widget.message,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 14.5,
                    height: 1.45,
                    fontWeight: FontWeight.w500,
                    color: _muted,
                  ),
                ),
                const SizedBox(height: 22),
                if (widget.confirm)
                  Row(
                    children: [
                      Expanded(
                        child: TextButton(
                          onPressed: () => Navigator.pop(context, false),
                          style: TextButton.styleFrom(
                            foregroundColor: _muted,
                            minimumSize: const Size(0, 46),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(widget.cancelLabel, style: const TextStyle(fontWeight: FontWeight.w700)),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () => Navigator.pop(context, true),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: actionColor,
                            foregroundColor: Colors.white,
                            elevation: 0,
                            minimumSize: const Size(0, 46),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: Text(widget.okLabel, style: const TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                    ],
                  )
                else
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () => Navigator.pop(context),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _accent,
                        foregroundColor: Colors.white,
                        elevation: 0,
                        minimumSize: const Size(0, 48),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: Text(widget.okLabel, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
