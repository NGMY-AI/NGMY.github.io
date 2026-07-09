import 'package:flutter/material.dart';

import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_nav.dart';
import 'ngmy_studio_colors.dart';
import 'ngmy_virtual_device_media_view.dart';

OverlayEntry? _ngmyBgPlayerEntry;

/// Starts (or replaces) the persistent background YouTube player. It lives on
/// the app's root [Overlay] — above the Navigator — so it stays mounted and
/// keeps playing across tab switches and screen navigation. Only the user's
/// close button or [stopBackgroundPlayer] removes it.
void showBackgroundPlayer(BuildContext context, {required String url, String? title}) {
  final overlay = NgmyNavigator.root?.overlay ?? Overlay.maybeOf(context, rootOverlay: true);
  if (overlay == null) {
    ScaffoldMessenger.maybeOf(context)?.showSnackBar(
      const SnackBar(content: Text('Could not start background music — try again.')),
    );
    return;
  }
  stopBackgroundPlayer();
  _ngmyBgPlayerEntry = OverlayEntry(
    builder: (ctx) => _NgmyBgPlayerBar(url: url, title: title, onClose: stopBackgroundPlayer),
  );
  overlay.insert(_ngmyBgPlayerEntry!);
}

void stopBackgroundPlayer() {
  _ngmyBgPlayerEntry?.remove();
  _ngmyBgPlayerEntry = null;
}

class _NgmyBgPlayerBar extends StatefulWidget {
  const _NgmyBgPlayerBar({required this.url, this.title, required this.onClose});

  final String url;
  final String? title;
  final VoidCallback onClose;

  @override
  State<_NgmyBgPlayerBar> createState() => _NgmyBgPlayerBarState();
}

class _NgmyBgPlayerBarState extends State<_NgmyBgPlayerBar> {
  // Stable GlobalKey so the underlying iframe/WebView element is *relocated*,
  // never disposed, when the card resizes between expanded and collapsed —
  // that's what keeps the video/audio playing without interruption.
  final GlobalKey _mediaKey = GlobalKey();
  bool _expanded = true;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bottomInset = MediaQuery.of(context).padding.bottom;
    final screenWidth = MediaQuery.of(context).size.width;
    final label = widget.title?.trim().isNotEmpty == true ? widget.title!.trim() : 'Now playing';

    final media = NgmyVirtualDeviceMediaView(
      key: _mediaKey,
      viewKey: 'ngmy-bg-player',
      playUrl: widget.url,
      compact: !_expanded,
      useEmbedHtml: true,
      notifyOnEnd: false,
      // Start muted so autoplay works everywhere; user taps once for sound.
      startMuted: true,
    );

    final bottom = NgmyBottomNavMetrics.barHeight + bottomInset + 16;

    if (_expanded) {
      final cardWidth = (screenWidth - 28).clamp(240.0, 420.0);
      return Positioned(
        right: 14,
        bottom: bottom,
        child: Material(
          color: Colors.transparent,
          child: Container(
            width: cardWidth,
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF0B1020) : Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.35)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10)),
              ],
            ),
            clipBehavior: Clip.antiAlias,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Padding(
                  padding: const EdgeInsets.only(left: 12),
                  child: Row(
                    children: [
                      Icon(Icons.smart_display_rounded, size: 16, color: kNgmyStudioHubAccent),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text(
                          label,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w800,
                            color: isDark ? Colors.white : const Color(0xFF0F172A),
                          ),
                        ),
                      ),
                      IconButton(
                        visualDensity: VisualDensity.compact,
                        onPressed: () => setState(() => _expanded = false),
                        icon: Icon(Icons.remove_rounded, size: 18, color: isDark ? Colors.white54 : Colors.black45),
                        tooltip: 'Minimize — keeps playing',
                      ),
                      IconButton(
                        visualDensity: VisualDensity.compact,
                        onPressed: widget.onClose,
                        icon: Icon(Icons.close_rounded, size: 18, color: isDark ? Colors.white54 : Colors.black45),
                        tooltip: 'Stop',
                      ),
                      const SizedBox(width: 4),
                    ],
                  ),
                ),
                AspectRatio(aspectRatio: 16 / 9, child: media),
              ],
            ),
          ),
        ),
      );
    }

    // Collapsed mini bar — video keeps playing at a small size while the
    // user browses the rest of the app; tap it to bring the player back up.
    return Positioned(
      right: 14,
      bottom: bottom,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: () => setState(() => _expanded = true),
          child: Container(
            width: 220,
            height: 60,
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF0B1020) : Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.35)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6)),
              ],
            ),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: SizedBox(width: 44, height: 44, child: media),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        label,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w800,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                      Text(
                        'Playing · tap to open',
                        style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black45),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  visualDensity: VisualDensity.compact,
                  onPressed: widget.onClose,
                  icon: Icon(Icons.close_rounded, size: 16, color: isDark ? Colors.white54 : Colors.black45),
                  tooltip: 'Stop',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
