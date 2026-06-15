import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_runtime_extras.dart';

/// TikTok-style full-screen vertical reel feed.
class NgmyRuntimeReelFeed extends StatefulWidget {
  const NgmyRuntimeReelFeed({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    required this.onSnack,
    this.compact = false,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;
  final bool compact;

  @override
  State<NgmyRuntimeReelFeed> createState() => _NgmyRuntimeReelFeedState();
}

class _NgmyRuntimeReelFeedState extends State<NgmyRuntimeReelFeed> {
  final PageController _page = PageController();
  VideoPlayerController? _video;
  int _index = 0;

  String get _collection => (widget.node['collection'] ?? 'reels').toString();
  String get _videoField => (widget.node['videoField'] ?? 'videoUrl').toString();
  String get _captionField => (widget.node['captionField'] ?? 'caption').toString();
  String get _authorField => (widget.node['authorField'] ?? 'author').toString();
  String get _likesField => (widget.node['likesField'] ?? 'likes').toString();

  static const _demoReels = [
    {
      'id': 'demo_1',
      'videoUrl': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      'caption': 'Welcome to your reel feed — post your own videos!',
      'author': '@you',
      'likes': 128,
    },
    {
      'id': 'demo_2',
      'videoUrl': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'caption': 'Swipe up for the next reel',
      'author': '@ngmy',
      'likes': 89,
    },
  ];

  List<Map<String, dynamic>> get _items {
    final saved = widget.store.records(_collection);
    if (saved.isNotEmpty) return saved;
    return _demoReels.map((e) => Map<String, dynamic>.from(e)).toList();
  }

  @override
  void dispose() {
    _video?.dispose();
    _page.dispose();
    super.dispose();
  }

  Future<void> _playAt(int i) async {
    final items = _items;
    if (i < 0 || i >= items.length) return;
    final url = (items[i][_videoField] ?? items[i]['videoUrl'] ?? '').toString().trim();
    await _video?.dispose();
    _video = null;
    if (url.isEmpty) {
      if (mounted) setState(() {});
      return;
    }
    try {
      final c = VideoPlayerController.networkUrl(
        Uri.parse(url),
        videoPlayerOptions: VideoPlayerOptions(mixWithOthers: true),
      );
      await c.initialize();
      c.setLooping(true);
      await c.play();
      _video = c;
    } catch (_) {
      _video = null;
    }
    if (mounted) setState(() {});
  }

  Future<void> _toggleLike(Map<String, dynamic> item) async {
    final id = item['id']?.toString() ?? '';
    if (id.startsWith('demo_')) {
      widget.onSnack('Post a reel to save likes!');
      return;
    }
    final key = 'liked_$id';
    final liked = widget.store.getSetting(key);
    final current = (item[_likesField] as num?)?.toInt() ?? 0;
    final next = liked ? (current - 1).clamp(0, 999999) : current + 1;
    await widget.store.setSetting(key, !liked);
    await widget.store.updateRecord(_collection, id, {_likesField: next});
    widget.onSnack(liked ? 'Unliked' : 'Liked!');
  }

  @override
  Widget build(BuildContext context) {
    final items = _items;
    if (items.isEmpty) {
      final empty = Center(child: Text('No reels yet — tap + to post', style: TextStyle(color: widget.isDark ? Colors.white70 : Colors.black54)));
      if (!widget.compact) return empty;
      return SizedBox(height: 120, child: empty);
    }
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_video == null) _playAt(_index);
    });

    final feed = _reelBody(items);
    if (!widget.compact) return feed;
    final h = (widget.node['height'] as num?)?.toDouble() ?? 220;
    return SizedBox(
      height: h,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: feed,
      ),
    );
  }

  Widget _reelBody(List<Map<String, dynamic>> items) {
    return ColoredBox(
      color: Colors.black,
      child: PageView.builder(
        controller: _page,
        scrollDirection: Axis.vertical,
        itemCount: items.length,
        onPageChanged: (i) {
          setState(() => _index = i);
          _playAt(i);
        },
        itemBuilder: (context, i) {
          final item = items[i];
          final caption = (item[_captionField] ?? '').toString();
          final author = (item[_authorField] ?? '@user').toString();
          final likes = (item[_likesField] as num?)?.toInt() ?? 0;
          final id = item['id']?.toString() ?? '';
          final liked = id.isNotEmpty && widget.store.getSetting('liked_$id');

          return Stack(
            fit: StackFit.expand,
            children: [
              if (_index == i && _video != null && _video!.value.isInitialized)
                FittedBox(
                  fit: BoxFit.cover,
                  child: SizedBox(
                    width: _video!.value.size.width,
                    height: _video!.value.size.height,
                    child: VideoPlayer(_video!),
                  ),
                )
              else
                Container(
                  color: const Color(0xFF111827),
                  child: const Center(child: Icon(Icons.play_circle_fill_rounded, color: Colors.white38, size: 72)),
                ),
              Positioned(
                left: 14,
                right: 72,
                bottom: 28,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(author, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                    const SizedBox(height: 6),
                    Text(caption, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 14)),
                  ],
                ),
              ),
              Positioned(
                right: 10,
                bottom: 80,
                child: Column(
                  children: [
                    _SideAction(
                      icon: liked ? Icons.favorite_rounded : Icons.favorite_border_rounded,
                      label: '$likes',
                      color: liked ? const Color(0xFFFE2C55) : Colors.white,
                      onTap: () => _toggleLike(item),
                    ),
                    const SizedBox(height: 18),
                    _SideAction(icon: Icons.chat_bubble_outline_rounded, label: '24', onTap: () => widget.onSnack('Comments coming soon')),
                    const SizedBox(height: 18),
                    _SideAction(icon: Icons.share_rounded, label: 'Share', onTap: () => widget.onSnack('Link copied!')),
                  ],
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}

class _SideAction extends StatelessWidget {
  const _SideAction({required this.icon, required this.label, this.color = Colors.white, required this.onTap});
  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.all(6),
        child: Column(
          children: [
            Icon(icon, color: color, size: 30),
            const SizedBox(height: 4),
            Text(label, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
          ],
        ),
      ),
    );
  }
}

/// Facebook-style scrollable social feed.
class NgmyRuntimeSocialFeed extends StatelessWidget {
  const NgmyRuntimeSocialFeed({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    required this.onSnack,
    this.compact = false,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    final collection = (node['collection'] ?? 'posts').toString();
    final authorField = (node['authorField'] ?? 'author').toString();
    final bodyField = (node['bodyField'] ?? 'body').toString();
    final imageField = (node['imageField'] ?? 'imageUrl').toString();
    var posts = store.records(collection);
    if (posts.isEmpty) {
      posts = [
        {'id': 'demo_p1', authorField: 'NGMY Community', bodyField: 'Welcome to your feed! Tap Create to post.', imageField: ''},
        {'id': 'demo_p2', authorField: 'Friend', bodyField: 'This layout works like Facebook — posts, likes, comments.', imageField: ''},
      ];
    }

    return ListView.separated(
      shrinkWrap: compact,
      physics: compact ? const NeverScrollableScrollPhysics() : null,
      padding: const EdgeInsets.symmetric(vertical: 8),
      itemCount: posts.length,
      separatorBuilder: (_, __) => const SizedBox(height: 8),
      itemBuilder: (context, i) {
        final p = posts[i];
        final author = (p[authorField] ?? 'User').toString();
        final body = (p[bodyField] ?? '').toString();
        final img = (p[imageField] ?? '').toString();
        return Card(
          margin: const EdgeInsets.symmetric(horizontal: 12),
          color: isDark ? const Color(0xFF1E293B) : Colors.white,
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    CircleAvatar(backgroundColor: theme.withValues(alpha: 0.2), child: Text(author.isNotEmpty ? author[0].toUpperCase() : 'U')),
                    const SizedBox(width: 10),
                    Expanded(child: Text(author, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87))),
                  ],
                ),
                if (body.isNotEmpty) ...[const SizedBox(height: 10), Text(body, style: TextStyle(color: isDark ? Colors.white70 : Colors.black87))],
                if (img.isNotEmpty) ...[
                  const SizedBox(height: 10),
                  ClipRRect(borderRadius: BorderRadius.circular(12), child: Image.network(img, height: 180, width: double.infinity, fit: BoxFit.cover)),
                ],
                const SizedBox(height: 10),
                Row(
                  children: [
                    TextButton.icon(onPressed: () => onSnack('Liked'), icon: const Icon(Icons.thumb_up_alt_outlined, size: 18), label: const Text('Like')),
                    TextButton.icon(onPressed: () => onSnack('Comment'), icon: const Icon(Icons.chat_bubble_outline, size: 18), label: const Text('Comment')),
                    TextButton.icon(onPressed: () => onSnack('Shared'), icon: const Icon(Icons.share_outlined, size: 18), label: const Text('Share')),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

/// Post / reel composer — saves video URL + caption to collection.
class NgmyRuntimePostComposer extends StatefulWidget {
  const NgmyRuntimePostComposer({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    required this.onSnack,
    required this.onNavigate,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;
  final void Function(String? target) onNavigate;

  @override
  State<NgmyRuntimePostComposer> createState() => _NgmyRuntimePostComposerState();
}

class _NgmyRuntimePostComposerState extends State<NgmyRuntimePostComposer> {
  final _videoC = TextEditingController();
  final _captionC = TextEditingController();
  final _authorC = TextEditingController(text: '@me');
  bool _busy = false;

  @override
  void dispose() {
    _videoC.dispose();
    _captionC.dispose();
    _authorC.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    final collection = (widget.node['collection'] ?? 'reels').toString();
    final video = _videoC.text.trim();
    if (video.isEmpty) {
      widget.onSnack('Paste a video URL (MP4 link)');
      return;
    }
    setState(() => _busy = true);
    await widget.store.addRecord(collection, {
      (widget.node['videoField'] ?? 'videoUrl').toString(): video,
      (widget.node['captionField'] ?? 'caption').toString(): _captionC.text.trim(),
      (widget.node['authorField'] ?? 'author').toString(): _authorC.text.trim(),
      (widget.node['likesField'] ?? 'likes').toString(): 0,
    });
    if (!mounted) return;
    setState(() => _busy = false);
    _videoC.clear();
    _captionC.clear();
    widget.onSnack((widget.node['successMessage'] ?? 'Posted!').toString());
    final after = (widget.node['navigateAfter'] ?? 'feed').toString();
    if (after.isNotEmpty) widget.onNavigate(after);
  }

  @override
  Widget build(BuildContext context) {
    final isReel = (widget.node['mode'] ?? 'reel').toString() == 'reel';
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(isReel ? 'Create reel' : 'Create post', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: widget.isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 16),
          TextField(
            controller: _videoC,
            decoration: InputDecoration(
              labelText: isReel ? 'Video URL (MP4)' : 'Image / video URL',
              hintText: 'https://...',
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
            ),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _captionC,
            maxLines: 3,
            decoration: InputDecoration(
              labelText: isReel ? 'Caption' : 'What\'s on your mind?',
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
            ),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _authorC,
            decoration: InputDecoration(labelText: 'Username', border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
          ),
          const SizedBox(height: 20),
          FilledButton(
            onPressed: _busy ? null : _submit,
            style: FilledButton.styleFrom(backgroundColor: widget.theme, minimumSize: const Size(double.infinity, 50)),
            child: _busy ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white)) : Text((widget.node['submitLabel'] ?? 'Post').toString()),
          ),
        ],
      ),
    );
  }
}

/// Google-style search hub.
class NgmyRuntimeSearchHub extends StatefulWidget {
  const NgmyRuntimeSearchHub({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    required this.onSnack,
    this.compact = false,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;
  final bool compact;

  @override
  State<NgmyRuntimeSearchHub> createState() => _NgmyRuntimeSearchHubState();
}

class _NgmyRuntimeSearchHubState extends State<NgmyRuntimeSearchHub> {
  final _queryC = TextEditingController();
  String _q = '';

  @override
  void dispose() {
    _queryC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final collection = (widget.node['collection'] ?? 'bookmarks').toString();
    final titleField = (widget.node['titleField'] ?? 'title').toString();
    final urlField = (widget.node['urlField'] ?? 'url').toString();
    final items = widget.store.records(collection).where((r) {
      if (_q.isEmpty) return true;
      final hay = '${r[titleField]} ${r[urlField]}'.toLowerCase();
      return hay.contains(_q.toLowerCase());
    }).toList();

    final searchField = Padding(
      padding: const EdgeInsets.all(16),
      child: TextField(
        controller: _queryC,
        onChanged: (v) => setState(() => _q = v.trim()),
        decoration: InputDecoration(
          hintText: (widget.node['placeholder'] ?? 'Search the web').toString(),
          prefixIcon: const Icon(Icons.search_rounded),
          filled: true,
          fillColor: widget.isDark ? const Color(0xFF1E293B) : Colors.white,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(28), borderSide: BorderSide.none),
        ),
      ),
    );

    if (widget.compact) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          searchField,
          if (_q.isNotEmpty)
            ListTile(
              leading: Icon(Icons.language_rounded, color: widget.theme),
              title: Text('Search "$_q" on Google', style: const TextStyle(fontWeight: FontWeight.w700)),
              onTap: () => ngmyRuntimeOpenUrl('https://www.google.com/search?q=${Uri.encodeComponent(_q)}', widget.onSnack),
            ),
          if (items.isEmpty)
            Padding(
              padding: const EdgeInsets.all(16),
              child: Text(_q.isEmpty ? 'Search or save bookmarks below' : 'No saved results', style: TextStyle(color: widget.isDark ? Colors.white54 : Colors.black54)),
            )
          else
            ...items.take(4).map((r) {
              final title = (r[titleField] ?? 'Link').toString();
              final url = (r[urlField] ?? '').toString();
              return ListTile(
                dense: true,
                leading: Icon(Icons.bookmark_rounded, color: widget.theme),
                title: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis),
                subtitle: url.isNotEmpty ? Text(url, maxLines: 1, overflow: TextOverflow.ellipsis) : null,
                onTap: () => ngmyRuntimeOpenUrl(url, widget.onSnack),
              );
            }),
        ],
      );
    }

    return Column(
      children: [
        searchField,
        if (_q.isNotEmpty)
          ListTile(
            leading: Icon(Icons.language_rounded, color: widget.theme),
            title: Text('Search "$_q" on Google', style: const TextStyle(fontWeight: FontWeight.w700)),
            onTap: () => ngmyRuntimeOpenUrl('https://www.google.com/search?q=${Uri.encodeComponent(_q)}', widget.onSnack),
          ),
        Expanded(
          child: items.isEmpty
              ? Center(child: Text(_q.isEmpty ? 'Search or save bookmarks below' : 'No saved results', style: TextStyle(color: widget.isDark ? Colors.white54 : Colors.black54)))
              : ListView.builder(
                  itemCount: items.length,
                  itemBuilder: (_, i) {
                    final r = items[i];
                    final title = (r[titleField] ?? 'Link').toString();
                    final url = (r[urlField] ?? '').toString();
                    return ListTile(
                      leading: Icon(Icons.bookmark_rounded, color: widget.theme),
                      title: Text(title),
                      subtitle: url.isNotEmpty ? Text(url, maxLines: 1, overflow: TextOverflow.ellipsis) : null,
                      onTap: () => ngmyRuntimeOpenUrl(url, widget.onSnack),
                    );
                  },
                ),
        ),
      ],
    );
  }
}

/// Profile screen with stats + user's posts list.
class NgmyRuntimeProfile extends StatelessWidget {
  const NgmyRuntimeProfile({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    this.compact = false,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    final collection = (node['collection'] ?? 'reels').toString();
    final captionField = (node['captionField'] ?? 'caption').toString();
    final handle = (node['handle'] ?? '@you').toString();
    final items = store.records(collection);

    return ListView(
      shrinkWrap: compact,
      physics: compact ? const NeverScrollableScrollPhysics() : null,
      padding: const EdgeInsets.all(16),
      children: [
        Row(
          children: [
            CircleAvatar(radius: 36, backgroundColor: theme.withValues(alpha: 0.2), child: Icon(Icons.person_rounded, size: 40, color: theme)),
            const SizedBox(width: 16),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(handle, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: isDark ? Colors.white : Colors.black87)),
                Text('${items.length} posts', style: TextStyle(color: isDark ? Colors.white54 : Colors.black54)),
              ],
            ),
          ],
        ),
        const SizedBox(height: 20),
        Text('Your posts', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
        const SizedBox(height: 8),
        if (items.isEmpty)
          Text('No posts yet', style: TextStyle(color: isDark ? Colors.white54 : Colors.black54))
        else
          ...items.map((r) => ListTile(
                leading: const Icon(Icons.movie_creation_outlined),
                title: Text((r[captionField] ?? 'Post').toString(), maxLines: 2, overflow: TextOverflow.ellipsis),
              )),
      ],
    );
  }
}

List<Map<String, dynamic>>? ngmyParseBottomNavItems(dynamic raw) {
  if (raw is! List) return null;
  final out = <Map<String, dynamic>>[];
  for (final item in raw) {
    if (item is Map) out.add(Map<String, dynamic>.from(item));
  }
  return out.isEmpty ? null : out;
}

IconData ngmyShellNavIcon(String? name) {
  switch ((name ?? '').toLowerCase()) {
    case 'home':
      return Icons.home_rounded;
    case 'explore':
    case 'discover':
      return Icons.explore_rounded;
    case 'add':
    case 'create':
    case 'post':
      return Icons.add_box_rounded;
    case 'inbox':
    case 'messages':
      return Icons.inbox_rounded;
    case 'profile':
    case 'person':
      return Icons.person_rounded;
    case 'search':
      return Icons.search_rounded;
    case 'feed':
      return Icons.dynamic_feed_rounded;
    default:
      return Icons.circle_outlined;
  }
}
