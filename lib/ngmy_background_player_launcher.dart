import 'package:flutter/material.dart';

import 'ngmy_studio_colors.dart';
import 'ngmy_virtual_device_embed.dart';
import 'ngmy_youtube_search.dart';
import 'ngmy_background_player.dart';

/// Opens the search/paste-link sheet, then starts the persistent background player.
Future<void> openNgmyBackgroundPlayerInput(BuildContext context, {dynamic config}) async {
  final picked = await _askForYouTubeVideo(context, config: config);
  if (picked == null) return;
  if (!context.mounted) return;
  showBackgroundPlayer(context, url: picked.url, title: picked.title);
}

Future<({String url, String? title})?> _askForYouTubeVideo(BuildContext context, {dynamic config}) {
  return showModalBottomSheet<({String url, String? title})>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyYouTubeSearchSheet(config: config),
  );
}

class _NgmyYouTubeSearchSheet extends StatefulWidget {
  const _NgmyYouTubeSearchSheet({this.config});

  final dynamic config;

  @override
  State<_NgmyYouTubeSearchSheet> createState() => _NgmyYouTubeSearchSheetState();
}

class _NgmyYouTubeSearchSheetState extends State<_NgmyYouTubeSearchSheet> {
  final _controller = TextEditingController();
  bool _searching = false;
  String? _error;
  List<NgmyYouTubeSearchResult> _results = const [];

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    final text = _controller.text.trim();
    if (text.isEmpty) return;

    // A pasted YouTube link/ID plays directly — no search needed.
    final directId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(text);
    if (directId != null) {
      Navigator.pop(context, (url: NgmyVirtualDeviceEmbed.youtubeWatchUrl(directId), title: null));
      return;
    }

    setState(() {
      _searching = true;
      _error = null;
      _results = const [];
    });
    try {
      final key = await ngmyResolveYouTubeApiKey(config: widget.config);
      if (key.isEmpty) {
        if (!mounted) return;
        setState(() {
          _searching = false;
          _error = "Search isn't set up yet — paste a YouTube link instead, or ask the admin to add a YouTube API key.";
        });
        return;
      }
      final results = await ngmySearchYouTube(text, apiKey: key);
      if (!mounted) return;
      setState(() {
        _searching = false;
        _results = results;
        if (results.isEmpty) _error = 'No results for "$text".';
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _searching = false;
        _error = 'Search failed — ${e.toString().replaceFirst('Exception: ', '')}';
      });
    }
  }

  void _pick(NgmyYouTubeSearchResult r) {
    Navigator.pop(context, (url: r.watchUrl, title: r.title));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        height: MediaQuery.of(context).size.height * 0.78,
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
        ),
        child: SafeArea(
          top: false,
          child: Column(
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
                            'Search a song, or paste a YouTube link — keeps playing as you browse',
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
                      onPressed: () => Navigator.pop(context),
                      icon: Icon(Icons.close_rounded, color: isDark ? Colors.white54 : Colors.black45),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 14, 20, 8),
                child: TextField(
                  controller: _controller,
                  autofocus: true,
                  textInputAction: TextInputAction.search,
                  style: TextStyle(fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                  decoration: InputDecoration(
                    hintText: 'Search songs or paste a link…',
                    hintStyle: TextStyle(color: isDark ? Colors.white38 : Colors.black38),
                    filled: true,
                    fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                    prefixIcon: Icon(Icons.search_rounded, color: kNgmyStudioHubAccent.withValues(alpha: 0.85)),
                    suffixIcon: _searching
                        ? const Padding(
                            padding: EdgeInsets.all(14),
                            child: SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2)),
                          )
                        : IconButton(
                            icon: Icon(Icons.arrow_forward_rounded, color: kNgmyStudioHubAccent),
                            onPressed: _submit,
                          ),
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
                  onSubmitted: (_) => _submit(),
                ),
              ),
              if (_error != null)
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 4, 20, 4),
                  child: Text(
                    _error!,
                    style: TextStyle(fontSize: 12, height: 1.35, color: Colors.redAccent.withValues(alpha: 0.9)),
                  ),
                ),
              Expanded(
                child: _results.isEmpty
                    ? Center(
                        child: Padding(
                          padding: const EdgeInsets.all(24),
                          child: Text(
                            _searching ? 'Searching…' : 'Search for a song or paste a YouTube link above.',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 13, color: isDark ? Colors.white38 : Colors.black38),
                          ),
                        ),
                      )
                    : ListView.separated(
                        padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
                        itemCount: _results.length,
                        separatorBuilder: (_, _) => const SizedBox(height: 8),
                        itemBuilder: (_, i) {
                          final r = _results[i];
                          return Material(
                            color: isDark ? const Color(0xFF1E293B) : const Color(0xFFF8FAFC),
                            borderRadius: BorderRadius.circular(14),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(14),
                              onTap: () => _pick(r),
                              child: Padding(
                                padding: const EdgeInsets.all(8),
                                child: Row(
                                  children: [
                                    ClipRRect(
                                      borderRadius: BorderRadius.circular(10),
                                      child: r.thumbnailUrl.isEmpty
                                          ? Container(
                                              width: 88,
                                              height: 66,
                                              color: Colors.black12,
                                              child: const Icon(Icons.music_note_rounded),
                                            )
                                          : Image.network(r.thumbnailUrl, width: 88, height: 66, fit: BoxFit.cover),
                                    ),
                                    const SizedBox(width: 10),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          Text(
                                            r.title,
                                            maxLines: 2,
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(
                                              fontSize: 13,
                                              fontWeight: FontWeight.w700,
                                              height: 1.3,
                                              color: isDark ? Colors.white : const Color(0xFF0F172A),
                                            ),
                                          ),
                                          const SizedBox(height: 4),
                                          Text(
                                            r.channelTitle,
                                            maxLines: 1,
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black45),
                                          ),
                                        ],
                                      ),
                                    ),
                                    Icon(Icons.play_circle_fill_rounded, color: kNgmyStudioHubAccent, size: 28),
                                    const SizedBox(width: 4),
                                  ],
                                ),
                              ),
                            ),
                          );
                        },
                      ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
