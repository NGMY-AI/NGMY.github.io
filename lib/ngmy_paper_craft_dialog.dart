import 'dart:math' as math;

import 'package:flutter/material.dart';

/// The centred pop-up used by the four Fold & Cut buttons in the slide strip (AI helper, watermark, stamp and
/// address frame): a rounded dark card with a soft shadow, an icon and title, a close X, a smooth scale and fade in,
/// and contents that scroll inside when tall. It always fits the screen with a margin, on small phones and wide
/// screens, and moves up above the keyboard. Tapping outside closes it.

const Color kNgmyCraftDialogInk = Color(0xFF111827);
const Color kNgmyCraftDialogGreen = Color(0xFF14B87A);

Future<T?> showNgmyCraftDialog<T>(BuildContext context, {required WidgetBuilder builder}) {
  return showGeneralDialog<T>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close',
    barrierColor: Colors.black.withValues(alpha: 0.45),
    transitionDuration: const Duration(milliseconds: 220),
    pageBuilder: (context, _, _) => builder(context),
    transitionBuilder: (context, animation, _, child) {
      final curved = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic, reverseCurve: Curves.easeInCubic);
      return FadeTransition(
        opacity: curved,
        child: ScaleTransition(scale: Tween<double>(begin: 0.92, end: 1).animate(curved), child: child),
      );
    },
  );
}

/// The card itself. With [scroll] the [child] scrolls inside the card; without it the child must size itself to
/// the room it is given (for example a chat with its own list).
class NgmyCraftDialogCard extends StatelessWidget {
  const NgmyCraftDialogCard({
    super.key,
    required this.title,
    required this.icon,
    required this.child,
    this.subtitle,
    this.scroll = true,
    this.maxWidth = 520,
    this.maxHeight,
    this.padding = const EdgeInsets.fromLTRB(18, 4, 18, 18),
  });

  final String title;
  final String? subtitle;
  final IconData icon;
  final Widget child;
  final bool scroll;
  final double maxWidth;
  final double? maxHeight;
  final EdgeInsets padding;

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);
    final margin = mq.size.width < 420 ? 12.0 : 24.0;
    final room = mq.size.height - mq.padding.vertical - mq.viewInsets.bottom - 2 * margin;
    final tall = math.max(160.0, maxHeight == null ? room : math.min(maxHeight!, room));
    return SafeArea(
      child: Padding(
        padding: EdgeInsets.fromLTRB(margin, margin, margin, margin + mq.viewInsets.bottom),
        child: Center(
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxWidth, maxHeight: tall),
            child: Material(
              type: MaterialType.transparency,
              child: Container(
                clipBehavior: Clip.antiAlias,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF162033), kNgmyCraftDialogInk]),
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 30, offset: const Offset(0, 12)),
                    BoxShadow(color: kNgmyCraftDialogGreen.withValues(alpha: 0.12), blurRadius: 24),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(18, 14, 8, 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            width: 36,
                            height: 36,
                            decoration: const BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(colors: [kNgmyCraftDialogGreen, Color(0xFF0E9F6A)]),
                            ),
                            child: Icon(icon, color: Colors.white, size: 19),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
                                if (subtitle != null)
                                  Padding(
                                    padding: const EdgeInsets.only(top: 2),
                                    child: Text(subtitle!, style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.3)),
                                  ),
                              ],
                            ),
                          ),
                          IconButton(
                            key: const ValueKey('craft_dialog_close'),
                            tooltip: 'Close',
                            onPressed: () => Navigator.of(context).pop(),
                            icon: const Icon(Icons.close_rounded, color: Colors.white70, size: 22),
                          ),
                        ],
                      ),
                    ),
                    Container(height: 1, color: Colors.white.withValues(alpha: 0.07)),
                    Flexible(
                      // Chips drawn dark to match the card, with white words.
                      child: Theme(
                        data: Theme.of(context).copyWith(
                          chipTheme: ChipThemeData(
                            backgroundColor: Colors.white.withValues(alpha: 0.07),
                            selectedColor: kNgmyCraftDialogGreen.withValues(alpha: 0.35),
                            disabledColor: Colors.white.withValues(alpha: 0.04),
                            side: BorderSide(color: Colors.white.withValues(alpha: 0.12)),
                            labelStyle: const TextStyle(color: Colors.white),
                            secondaryLabelStyle: const TextStyle(color: Colors.white),
                            checkmarkColor: Colors.white,
                            iconTheme: const IconThemeData(color: Colors.white70),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(99)),
                          ),
                        ),
                        child: scroll ? SingleChildScrollView(padding: padding.copyWith(top: padding.top + 10), child: child) : Padding(padding: padding, child: child),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Choices three to a row (every row full when the count is a multiple of three).
class NgmyCraftChoiceGrid extends StatelessWidget {
  const NgmyCraftChoiceGrid({super.key, required this.count, required this.builder, this.aspect = 1});
  final int count;
  final double aspect;
  final Widget Function(int i) builder;

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      padding: EdgeInsets.zero,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: aspect),
      itemCount: count,
      itemBuilder: (context, i) => builder(i),
    );
  }
}

/// One choice: a white card with a small picture and its name, outlined in green when chosen.
class NgmyCraftChoiceTile extends StatelessWidget {
  const NgmyCraftChoiceTile({super.key, required this.selected, required this.label, required this.onTap, required this.child});
  final bool selected;
  final String label;
  final VoidCallback onTap;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      borderRadius: BorderRadius.circular(14),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.fromLTRB(6, 6, 6, 5),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: selected ? kNgmyCraftDialogGreen : Colors.black12, width: selected ? 3 : 1),
          ),
          child: Column(
            children: [
              Expanded(child: child),
              const SizedBox(height: 4),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  if (selected) const Padding(padding: EdgeInsets.only(right: 3), child: Icon(Icons.check_circle_rounded, size: 13, color: kNgmyCraftDialogGreen)),
                  Flexible(
                    child: Text(label,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontSize: 11, color: Colors.black87, fontWeight: selected ? FontWeight.w800 : FontWeight.w600)),
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
