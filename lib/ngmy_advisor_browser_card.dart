import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_advisor_browser_session.dart';
import 'ngmy_advisor_chat_extras.dart';
import 'ngmy_advisor_embedded_browser.dart';
import 'ngmy_edge_invoke.dart';

/// Draggable in-chat browser port — clipped preview; never full-app takeover.
class NgmyAdvisorBrowserPanel extends StatefulWidget {
  const NgmyAdvisorBrowserPanel({
    super.key,
    required this.session,
    required this.isDark,
    required this.advisorName,
    required this.lift,
    required this.onLiftDelta,
  });

  final NgmyAdvisorBrowserSession session;
  final bool isDark;
  final String advisorName;
  final double lift;
  final ValueChanged<double> onLiftDelta;

  @override
  State<NgmyAdvisorBrowserPanel> createState() => _NgmyAdvisorBrowserPanelState();
}

class _NgmyAdvisorBrowserPanelState extends State<NgmyAdvisorBrowserPanel> {
  @override
  void initState() {
    super.initState();
    widget.session.addListener(_onSession);
  }

  @override
  void dispose() {
    widget.session.removeListener(_onSession);
    super.dispose();
  }

  void _onSession() {
    if (mounted) setState(() {});
  }

  Widget _header() {
    final subtitle = widget.session.label.isNotEmpty
        ? widget.session.label
        : ngmyAdvisorBrowserHostLabel(widget.session.url);
    final fg = widget.isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = widget.isDark ? Colors.white60 : const Color(0xFF64748B);
    return GestureDetector(
      onVerticalDragUpdate: (d) => widget.onLiftDelta(d.delta.dy),
      behavior: HitTestBehavior.opaque,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 10, 4, 6),
        child: Row(
          children: [
            Icon(Icons.drag_handle_rounded, color: muted, size: 20),
            const SizedBox(width: 6),
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                color: const Color(0xFF0EA5E9).withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(9),
              ),
              child: const Icon(Icons.language_rounded, color: Color(0xFF38BDF8), size: 18),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Browser', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: fg)),
                  Text(subtitle, style: TextStyle(fontSize: 11, color: muted), maxLines: 1, overflow: TextOverflow.ellipsis),
                ],
              ),
            ),
            IconButton(
              tooltip: 'Open in your browser (for logging in)',
              iconSize: 20,
              onPressed: widget.session.url.isEmpty ? null : () => ngmyOpenInRealBrowser(widget.session.url),
              icon: Icon(Icons.open_in_new_rounded, color: muted),
            ),
            IconButton(
              tooltip: 'Bigger preview',
              iconSize: 20,
              onPressed: widget.session.cycleSize,
              icon: Icon(Icons.open_in_full_rounded, color: muted),
            ),
            IconButton(
              tooltip: 'Hide browser',
              iconSize: 20,
              onPressed: () => widget.session.close(),
              icon: Icon(Icons.close_rounded, color: muted),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (!widget.session.visible || widget.session.url.isEmpty) {
      return const SizedBox.shrink();
    }
    final border = widget.isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    final idle = widget.session.loadState == NgmyAdvisorBrowserLoadState.idle;

    return Material(
      elevation: 8,
      shadowColor: Colors.black45,
      borderRadius: BorderRadius.circular(16),
      color: widget.isDark ? const Color(0xFF1A1F2E) : Colors.white,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: border),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _header(),
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
              child: idle
                  ? SizedBox(
                      height: 120,
                      width: double.infinity,
                      child: ColoredBox(
                        color: const Color(0xFF0F172A),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              ngmyAdvisorBrowserHostLabel(widget.session.url),
                              style: const TextStyle(color: Colors.white70, fontSize: 12),
                            ),
                            const SizedBox(height: 10),
                            FilledButton(
                              onPressed: () => widget.session.startLoad(),
                              child: const Text('Load in mini browser'),
                            ),
                          ],
                        ),
                      ),
                    )
                  : (kIsWeb && defaultTargetPlatform == TargetPlatform.iOS)
                  // iPhone web app: a whole website inside the page runs Safari out of memory
                  // (the app crashed) — show a picture of the page; tap opens the real page.
                  ? _NgmyPagePicture(url: widget.session.url, height: widget.session.previewHeight)
                  : NgmyAdvisorEmbeddedBrowser(
                      key: const ValueKey('ngmy_advisor_embedded_browser'),
                      session: widget.session,
                      height: widget.session.previewHeight,
                      interactive: true,
                    ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
              child: Text(
                'To log in or pay, tap ↗ to open this page in your phone\'s browser. Drag the handle to move this window.',
                style: TextStyle(fontSize: 10, height: 1.3, color: widget.isDark ? Colors.white54 : Colors.black45),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class NgmyAdvisorMessageReactionBadge extends StatelessWidget {
  const NgmyAdvisorMessageReactionBadge({super.key, required this.emoji});

  final String emoji;

  @override
  Widget build(BuildContext context) {
    if (emoji.trim().isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
      decoration: BoxDecoration(
        color: const Color(0xFF1E293B),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white24),
      ),
      child: Text(emoji, style: const TextStyle(fontSize: 14, height: 1.1)),
    );
  }
}

/// A picture of the page (rendered by the server) — light for iPhone. Tap to open the page.
class _NgmyPagePicture extends StatefulWidget {
  const _NgmyPagePicture({required this.url, required this.height});
  final String url;
  final double height;
  @override
  State<_NgmyPagePicture> createState() => _NgmyPagePictureState();
}

class _NgmyPagePictureState extends State<_NgmyPagePicture> {
  Uint8List? _bytes;
  bool _failed = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void didUpdateWidget(covariant _NgmyPagePicture old) {
    super.didUpdateWidget(old);
    if (old.url != widget.url) {
      _bytes = null;
      _failed = false;
      _load();
    }
  }

  Future<void> _load() async {
    final url = widget.url;
    try {
      final res = await ngmyEdgeInvoke({'action': 'advisorBrowserShot', 'url': url}, timeout: const Duration(seconds: 25));
      final b64 = (res?['screenshotBase64'] ?? '').toString();
      if (!mounted || url != widget.url) return;
      setState(() {
        if (b64.isNotEmpty) {
          _bytes = base64Decode(b64);
        } else {
          _failed = true;
        }
      });
    } catch (_) {
      if (mounted) setState(() => _failed = true);
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: () => ngmyOpenInRealBrowser(widget.url),
        child: SizedBox(
          height: widget.height,
          width: double.infinity,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: ColoredBox(
              color: const Color(0xFF0F172A),
              child: _bytes != null
                  ? Image.memory(_bytes!, fit: BoxFit.cover, alignment: Alignment.topCenter, cacheWidth: 900, gaplessPlayback: true)
                  : Center(
                      child: _failed
                          ? const Text('Tap to open the page', style: TextStyle(color: Colors.white70))
                          : const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2)),
                    ),
            ),
          ),
        ),
      );
}
