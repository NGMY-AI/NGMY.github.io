import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_advisor_chat_extras.dart';
import 'ngmy_virtual_device_media_view.dart';

/// Muse-style in-chat browser preview + open button.
class NgmyAdvisorBrowserCard extends StatelessWidget {
  const NgmyAdvisorBrowserCard({
    super.key,
    required this.url,
    this.label,
    required this.isDark,
    this.viewKeySeed = 0,
  });

  final String url;
  final String? label;
  final bool isDark;
  final int viewKeySeed;

  Future<void> _openFull(BuildContext context) async {
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  Future<void> _openInAppSheet(BuildContext context) async {
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        final h = MediaQuery.sizeOf(ctx).height * 0.88;
        return Padding(
          padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
          child: Container(
            height: h,
            margin: const EdgeInsets.fromLTRB(8, 0, 8, 8),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1C2433) : Colors.white,
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 24, offset: const Offset(0, 8)),
              ],
            ),
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 10, 8, 8),
                  child: Row(
                    children: [
                      const Icon(Icons.language_rounded, color: Color(0xFF38BDF8), size: 22),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          label?.trim().isNotEmpty == true ? label!.trim() : ngmyAdvisorBrowserHostLabel(url),
                          style: TextStyle(
                            fontWeight: FontWeight.w800,
                            fontSize: 15,
                            color: isDark ? Colors.white : const Color(0xFF0F172A),
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      IconButton(
                        tooltip: 'Open in browser app',
                        onPressed: () => _openFull(ctx),
                        icon: Icon(Icons.open_in_new_rounded, color: isDark ? Colors.white70 : Colors.black54),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(ctx),
                        icon: Icon(Icons.close_rounded, color: isDark ? Colors.white70 : Colors.black54),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: ClipRRect(
                    borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)),
                    child: NgmyVirtualDeviceMediaView(
                      viewKey: 'advisor_browser_$viewKeySeed',
                      playUrl: url,
                      compact: false,
                      useEmbedHtml: true,
                      lockNavigation: false,
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final subtitle = label?.trim().isNotEmpty == true ? label!.trim() : ngmyAdvisorBrowserHostLabel(url);
    final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    return Container(
      margin: const EdgeInsets.only(top: 10),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1A1F2E) : Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: border),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.08), blurRadius: 16, offset: const Offset(0, 6)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 8),
            child: Row(
              children: [
                Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    color: const Color(0xFF0EA5E9).withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Icon(Icons.language_rounded, color: Color(0xFF38BDF8), size: 20),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Browser',
                        style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 14,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                      Text(
                        subtitle,
                        style: TextStyle(
                          fontSize: 12,
                          color: isDark ? Colors.white60 : const Color(0xFF64748B),
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: SizedBox(
                height: 132,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    NgmyVirtualDeviceMediaView(
                      viewKey: 'advisor_browser_preview_$viewKeySeed',
                      playUrl: url,
                      compact: true,
                      useEmbedHtml: true,
                      lockNavigation: true,
                    ),
                    Positioned(
                      bottom: 0,
                      left: 0,
                      right: 0,
                      child: Container(
                        height: 36,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [Colors.transparent, Colors.black.withValues(alpha: 0.45)],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 10, 12, 12),
            child: SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: () => _openInAppSheet(context),
                icon: const Icon(Icons.open_in_browser_rounded, size: 18),
                label: const Text('Open browser'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Small emoji badge on the corner of a chat bubble (Muse-style).
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
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 6, offset: const Offset(0, 2)),
        ],
      ),
      child: Text(emoji, style: const TextStyle(fontSize: 14, height: 1.1)),
    );
  }
}
