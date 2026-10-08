import 'package:flutter/material.dart';

import 'ngmy_advisor_browser_session.dart';
import 'ngmy_advisor_chat_extras.dart';
import 'ngmy_advisor_embedded_browser.dart';

/// In-chat browser port — clipped preview above composer; never full-app takeover.
class NgmyAdvisorBrowserPanel extends StatefulWidget {
  const NgmyAdvisorBrowserPanel({
    super.key,
    required this.session,
    required this.isDark,
    required this.advisorName,
  });

  final NgmyAdvisorBrowserSession session;
  final bool isDark;
  final String advisorName;

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
    return Padding(
      padding: const EdgeInsets.fromLTRB(12, 10, 4, 6),
      child: Row(
        children: [
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
            tooltip: 'Bigger preview',
            iconSize: 20,
            onPressed: widget.session.cycleSize,
            icon: Icon(Icons.open_in_full_rounded, color: muted),
          ),
          IconButton(
            tooltip: 'Hide browser',
            iconSize: 20,
            onPressed: () => widget.session.hide(),
            icon: Icon(Icons.close_rounded, color: muted),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (!widget.session.visible || widget.session.url.isEmpty) {
      return const SizedBox.shrink();
    }
    final border = widget.isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 8),
      decoration: BoxDecoration(
        color: widget.isDark ? const Color(0xFF1A1F2E) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: border),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          _header(),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: NgmyAdvisorEmbeddedBrowser(
              session: widget.session,
              height: widget.session.previewHeight,
              interactive: true,
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: Text(
              '${widget.advisorName} uses this window while you keep chatting — tap enlarge to grow the preview.',
              style: TextStyle(fontSize: 10, height: 1.3, color: widget.isDark ? Colors.white54 : Colors.black45),
            ),
          ),
        ],
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
