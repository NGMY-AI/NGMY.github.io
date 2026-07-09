import 'package:flutter/material.dart';

import 'ngmy_studio_colors.dart';
import 'ngmy_virtual_device_embed.dart';
import 'ngmy_background_player.dart' deferred as bgplayer;

/// Asks for a YouTube link, then opens the persistent background player —
/// loaded on demand so the heavy iframe/WebView code never loads at app
/// startup.
Future<void> openNgmyBackgroundPlayerInput(BuildContext context) async {
  final url = await _askForYouTubeLink(context);
  if (url == null || url.isEmpty) return;
  if (!context.mounted) return;
  await bgplayer.loadLibrary();
  if (!context.mounted) return;
  bgplayer.showBackgroundPlayer(context, url: url);
}

Future<String?> _askForYouTubeLink(BuildContext context) async {
  final controller = TextEditingController();
  final isDark = Theme.of(context).brightness == Brightness.dark;

  final result = await showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.of(ctx).viewInsets.bottom),
        child: Container(
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF0F172A) : Colors.white,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
          ),
          child: SafeArea(
            top: false,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 18, 12, 0),
                  child: Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Background Music',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.w900,
                                color: isDark ? Colors.white : const Color(0xFF0F172A),
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              'Paste a YouTube link — it keeps playing while you use other tools',
                              style: TextStyle(
                                fontSize: 12,
                                height: 1.35,
                                color: isDark ? Colors.white70 : const Color(0xFF64748B),
                              ),
                            ),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(ctx),
                        icon: Icon(Icons.close_rounded, color: isDark ? Colors.white54 : Colors.black45),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 18, 20, 8),
                  child: TextField(
                    controller: controller,
                    autofocus: true,
                    style: TextStyle(fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                    decoration: InputDecoration(
                      hintText: 'https://youtube.com/watch?v=…',
                      hintStyle: TextStyle(color: isDark ? Colors.white38 : Colors.black38),
                      filled: true,
                      fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                      prefixIcon: Icon(Icons.link_rounded, color: kNgmyStudioHubAccent.withValues(alpha: 0.85)),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(16),
                        borderSide: BorderSide(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(16),
                        borderSide: const BorderSide(color: kNgmyStudioHubAccent, width: 1.6),
                      ),
                    ),
                    onSubmitted: (v) => Navigator.pop(ctx, v.trim()),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 8, 20, 20),
                  child: Row(
                    children: [
                      const Spacer(),
                      TextButton(
                        onPressed: () => Navigator.pop(ctx),
                        child: Text('Cancel', style: TextStyle(color: isDark ? Colors.white70 : Colors.black54)),
                      ),
                      const SizedBox(width: 8),
                      FilledButton.icon(
                        onPressed: () => Navigator.pop(ctx, controller.text.trim()),
                        icon: const Icon(Icons.play_arrow_rounded, size: 20),
                        label: const Text('Play'),
                        style: FilledButton.styleFrom(
                          backgroundColor: kNgmyStudioHubAccent,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      );
    },
  );
  controller.dispose();

  final trimmed = result?.trim() ?? '';
  if (trimmed.isEmpty) return null;
  if (NgmyVirtualDeviceEmbed.extractYouTubeVideoId(trimmed) == null) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not read that link. Paste a public YouTube video URL.')),
      );
    }
    return null;
  }
  return trimmed;
}
