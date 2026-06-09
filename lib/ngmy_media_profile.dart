import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_media_delivery.dart';

/// Instagram-style media profile, stories, highlights, follow system.
class NgmyMediaProfile {
  static dynamic userByEmail(List<dynamic> allUsers, String email) {
    final key = email.toLowerCase().trim();
    for (final u in allUsers) {
      if (u.email.toLowerCase().trim() == key) return u;
    }
    return null;
  }

  static bool hasActiveStory(dynamic user) => activeStories(user).isNotEmpty;

  static bool postHasSource(dynamic post, {String? resolvedUrl}) {
    if (resolvedUrl != null && resolvedUrl.trim().isEmpty) return false;
    final raw = ((post as dynamic).videoUrl ?? (post as dynamic).url ?? '').toString().trim();
    final u = (resolvedUrl ?? raw).trim();
    if (u.isEmpty) return false;
    if (u.startsWith('data:image')) return true;
    if (u.startsWith('supabase://')) return true;
    if (u.startsWith('http://') || u.startsWith('https://')) return true;
    if (!kIsWeb && u.isNotEmpty) return true;
    return false;
  }

  static List<Map<String, dynamic>> asMapList(dynamic raw) {
    if (raw == null) return <Map<String, dynamic>>[];
    if (raw is String && raw.trim().isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is List) raw = decoded;
      } catch (_) {}
    }
    if (raw is! List) return <Map<String, dynamic>>[];
    final out = <Map<String, dynamic>>[];
    for (final e in raw) {
      if (e is Map<String, dynamic>) {
        out.add(e);
      } else if (e is Map) {
        out.add(Map<String, dynamic>.from(e));
      }
    }
    return out;
  }

  static List<String> asStringList(dynamic raw) {
    if (raw == null) return <String>[];
    if (raw is String && raw.trim().isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is List) raw = decoded;
      } catch (_) {}
    }
    if (raw is! List) return <String>[];
    return raw.map((e) => e.toString()).toList();
  }

  /// Instagram-style counts: 9999, 10K, 10.5K, 1M, etc.
  static String formatInstagramCount(int count) {
    if (count < 10000) return count.toString();
    if (count < 1000000) {
      if (count % 1000 == 0) return '${count ~/ 1000}K';
      final value = (count / 1000.0 * 10).round() / 10;
      final text = value.toStringAsFixed(1);
      return '${text.endsWith('.0') ? text.substring(0, text.length - 2) : text}K';
    }
    if (count % 1000000 == 0) return '${count ~/ 1000000}M';
    final value = (count / 1000000.0 * 10).round() / 10;
    final text = value.toStringAsFixed(1);
    return '${text.endsWith('.0') ? text.substring(0, text.length - 2) : text}M';
  }

  static List<Map<String, dynamic>> activeStories(dynamic user) {
    final now = DateTime.now();
    return asMapList((user as dynamic).mediaStories).where((s) {
      final created = DateTime.tryParse((s['createdAt'] ?? '').toString());
      if (created == null) return false;
      return now.difference(created.toLocal()).inHours < 24;
    }).toList();
  }

  static bool isFollowing(dynamic viewer, dynamic target) {
    final followers = asStringList((target as dynamic).mediaFollowers);
    return followers.map((e) => e.toLowerCase()).contains(viewer.email.toLowerCase().trim());
  }

  static void toggleFollow(dynamic viewer, dynamic target) {
    final u = target as dynamic;
    final v = viewer as dynamic;
    final me = viewer.email.toLowerCase().trim();
    final followers = asStringList(u.mediaFollowers);
    if (followers.map((e) => e.toLowerCase()).contains(me)) {
      u.mediaFollowers = followers.where((e) => e.toLowerCase() != me).toList();
      v.mediaFollowing = asStringList(v.mediaFollowing).where((e) => e.toLowerCase() != target.email.toLowerCase().trim()).toList();
    } else {
      final nextFollowers = List<String>.from(followers);
      if (!nextFollowers.any((e) => e.toLowerCase() == me)) nextFollowers.add(viewer.email);
      u.mediaFollowers = nextFollowers;
      final nextFollowing = List<String>.from(asStringList(v.mediaFollowing));
      if (!nextFollowing.any((e) => e.toLowerCase() == target.email.toLowerCase().trim())) {
        nextFollowing.add(target.email);
      }
      v.mediaFollowing = nextFollowing;
    }
  }

  static List<String> adminBuildFollowerIds(dynamic target, int count) {
    final u = target as dynamic;
    final followers = List<String>.from(asStringList(u.mediaFollowers));
    final out = <String>[];
    for (var i = 0; i < count; i++) {
      final fake = 'ngmy_follower_${target.email.hashCode}_${followers.length + out.length}';
      if (!followers.contains(fake) && !out.contains(fake)) out.add(fake);
    }
    return out;
  }

  static void adminApplyFollowerIds(dynamic target, List<String> ids) {
    final u = target as dynamic;
    final followers = List<String>.from(asStringList(u.mediaFollowers));
    for (final id in ids) {
      if (!followers.contains(id)) followers.add(id);
    }
    u.mediaFollowers = followers;
  }

  static void adminAddFollowers(dynamic target, int count) {
    adminApplyFollowerIds(target, adminBuildFollowerIds(target, count));
  }

  static void normalizeUserMediaFields(dynamic user) {
    final u = user as dynamic;
    u.mediaFollowers = asStringList(u.mediaFollowers);
    u.mediaFollowing = asStringList(u.mediaFollowing);
    u.mediaHighlights = asMapList(u.mediaHighlights);
    u.mediaStories = asMapList(u.mediaStories);
  }

  static bool pruneExpiredStories(dynamic user) {
    final u = user as dynamic;
    final now = DateTime.now();
    final stories = asMapList(u.mediaStories);
    final kept = stories.where((s) {
      final created = DateTime.tryParse((s['createdAt'] ?? '').toString());
      if (created == null) return false;
      return now.difference(created.toLocal()).inHours < 24;
    }).toList();
    if (kept.length == stories.length) return false;
    u.mediaStories = kept;
    return true;
  }

  static int pruneExpiredStoriesAllUsers(List<dynamic> users) {
    var n = 0;
    for (final u in users) {
      if (pruneExpiredStories(u)) n++;
    }
    return n;
  }

  static List<Map<String, dynamic>> highlightPhotos(Map<String, dynamic> highlight) {
    final photos = asMapList(highlight['photos']);
    if (photos.isNotEmpty) return photos;
    final cover = (highlight['coverUrl'] ?? '').toString();
    if (cover.isNotEmpty) return [{'url': cover}];
    return [];
  }
}

class NgmyVirtualMediaProfiles {
  static const int count = 175;

  static List<Map<String, dynamic>> defaults() {
    return List.generate(count, (i) => {
          'id': 'vp_$i',
          'displayName': 'Virtual User ${i + 1}',
          'username': 'virtual_${i + 1}',
          'profilePictureUrl': '',
          'defaultComment': '',
        });
  }

  static List<Map<String, dynamic>> ensure(dynamic existing) {
    final existingList = NgmyMediaProfile.asMapList(existing);
    final base = defaults();
    if (existingList.isEmpty) return base;
    final byId = <String, Map<String, dynamic>>{};
    for (final e in existingList) {
      byId[(e['id'] ?? '').toString()] = Map<String, dynamic>.from(e);
    }
    return List.generate(count, (i) {
      final id = 'vp_$i';
      final saved = byId[id];
      if (saved != null) {
        return {
          'id': id,
          'displayName': (saved['displayName'] ?? base[i]['displayName']).toString(),
          'username': (saved['username'] ?? base[i]['username']).toString(),
          'profilePictureUrl': (saved['profilePictureUrl'] ?? '').toString(),
          'defaultComment': (saved['defaultComment'] ?? '').toString(),
        };
      }
      return Map<String, dynamic>.from(base[i]);
    });
  }

  static ImageProvider? avatarFor(Map<String, dynamic> profile) {
    final url = (profile['profilePictureUrl'] ?? '').toString().trim();
    if (url.isEmpty) return null;
    if (url.startsWith('data:image')) {
      try {
        return MemoryImage(base64Decode(url.split(',').last));
      } catch (_) {
        return null;
      }
    }
    if (url.startsWith('blob:') || url.startsWith('http')) {
      if (kIsWeb) return NetworkImage(url);
      return null;
    }
    if (url.startsWith('supabase://')) return null;
    if (!kIsWeb) return FileImage(File(url));
    return null;
  }
}

class NgmyMediaProfileScreen extends StatefulWidget {
  final dynamic targetUser;
  final dynamic currentUser;
  final List<dynamic> allUsers;
  final List<dynamic> allMedia;
  final ImageProvider? Function(dynamic user) avatarForUser;
  final Future<String> Function(String url) resolveMediaUrl;
  final Future<bool> Function(dynamic post) persistPost;
  final Future<bool> Function(dynamic user)? persistUser;
  final VoidCallback onDataChanged;
  final bool Function(dynamic post) isPostExpired;
  final Future<String> Function(String localRef)? uploadMediaRef;
  final VoidCallback? onCreatePost;
  final bool isPosting;

  const NgmyMediaProfileScreen({
    super.key,
    required this.targetUser,
    required this.currentUser,
    required this.allUsers,
    required this.allMedia,
    required this.avatarForUser,
    required this.resolveMediaUrl,
    required this.persistPost,
    this.persistUser,
    required this.onDataChanged,
    required this.isPostExpired,
    this.uploadMediaRef,
    this.onCreatePost,
    this.isPosting = false,
  });

  @override
  State<NgmyMediaProfileScreen> createState() => _NgmyMediaProfileScreenState();
}

class _NgmyMediaProfileScreenState extends State<NgmyMediaProfileScreen> {
  int _tab = 0;
  final _bioCtrl = TextEditingController();
  final _picker = ImagePicker();
  bool _editingBio = false;

  dynamic get _target =>
      NgmyMediaProfile.userByEmail(widget.allUsers, widget.targetUser.email.toString()) ?? widget.targetUser;
  dynamic get _me =>
      NgmyMediaProfile.userByEmail(widget.allUsers, widget.currentUser.email.toString()) ?? widget.currentUser;
  bool get _isOwn => _target.email.toLowerCase().trim() == _me.email.toLowerCase().trim();
  bool get _following => NgmyMediaProfile.isFollowing(_me, _target);

  List<Map<String, dynamic>> get _highlights => NgmyMediaProfile.asMapList((_target as dynamic).mediaHighlights);
  int get _followerCount => NgmyMediaProfile.asStringList((_target as dynamic).mediaFollowers).length;
  int get _followingCount => NgmyMediaProfile.asStringList((_target as dynamic).mediaFollowing).length;

  List<dynamic> get _userPosts => widget.allMedia
      .where((m) => m.userEmail.toLowerCase().trim() == _target.email.toLowerCase().trim() && !widget.isPostExpired(m))
      .toList()
    ..sort((a, b) => b.timestamp.compareTo(a.timestamp));

  List<dynamic> get _videoPosts => _userPosts.where((m) => (m.contentType ?? '').toString() == 'video').toList();

  List<dynamic> get _taggedPosts => widget.allMedia
      .where((m) {
        if (widget.isPostExpired(m)) return false;
        final tags = NgmyMediaProfile.asStringList((m as dynamic).taggedUsers);
        return tags.map((e) => e.toLowerCase().trim()).contains(_target.email.toLowerCase().trim());
      })
      .toList()
    ..sort((a, b) => b.timestamp.compareTo(a.timestamp));

  List<dynamic> get _activeTabPosts {
    if (_tab == 1) return _videoPosts;
    if (_tab == 2) return _taggedPosts;
    return _userPosts;
  }

  @override
  void initState() {
    super.initState();
    NgmyMediaProfile.normalizeUserMediaFields(_target);
    NgmyMediaProfile.normalizeUserMediaFields(_me);
    if (NgmyMediaProfile.pruneExpiredStories(_target)) widget.onDataChanged();
    _bioCtrl.text = ((_target as dynamic).mediaBio ?? '').toString();
  }

  @override
  void didUpdateWidget(covariant NgmyMediaProfileScreen oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.allUsers != widget.allUsers || oldWidget.allMedia != widget.allMedia) {
      setState(() {});
    }
  }

  @override
  void dispose() {
    _bioCtrl.dispose();
    super.dispose();
  }

  Future<void> _saveBio() async {
    (_target as dynamic).mediaBio = _bioCtrl.text.trim();
    setState(() => _editingBio = false);
    final ok = await widget.persistUser?.call(_target) ?? false;
    if (!ok) widget.onDataChanged();
  }

  Future<void> _toggleFollow() async {
    NgmyMediaProfile.toggleFollow(_me, _target);
    if (widget.persistUser != null) {
      await widget.persistUser!.call(_target);
      await widget.persistUser!.call(_me);
    } else {
      widget.onDataChanged();
    }
    if (mounted) setState(() {});
  }

  Future<void> _openStoryViewer() async {
    final stories = NgmyMediaProfile.activeStories(_target);
    if (stories.isEmpty) return;
    await showDialog<void>(
      context: context,
      barrierColor: Colors.black,
      builder: (ctx) {
        var idx = 0;
        return StatefulBuilder(
          builder: (context, setLocal) {
            final story = stories[idx];
            final url = (story['url'] ?? '').toString();
            final isVideo = (story['type'] ?? '').toString() == 'video';
            return Scaffold(
              backgroundColor: Colors.black,
              appBar: AppBar(
                backgroundColor: Colors.black,
                foregroundColor: Colors.white,
                title: Text(_target.username),
                actions: [IconButton(icon: const Icon(Icons.close), onPressed: () => Navigator.pop(ctx))],
              ),
              body: GestureDetector(
                onTapUp: (d) {
                  final w = MediaQuery.sizeOf(context).width;
                  if (d.localPosition.dx > w * 0.55 && idx < stories.length - 1) {
                    setLocal(() => idx++);
                  } else if (d.localPosition.dx < w * 0.45 && idx > 0) {
                    setLocal(() => idx--);
                  } else {
                    Navigator.pop(ctx);
                  }
                },
                child: Center(child: isVideo ? _storyVideo(url) : _storyImage(url)),
              ),
            );
          },
        );
      },
    );
  }

  Widget _storyVideo(String url) => FutureBuilder<String>(
        future: widget.resolveMediaUrl(url),
        builder: (_, s) {
          final resolved = s.data ?? url;
          if (resolved.startsWith('http')) {
            return Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.play_circle_fill, color: Colors.white, size: 72),
                const SizedBox(height: 12),
                Text('Video story', style: TextStyle(color: Colors.white.withOpacity(0.7))),
              ],
            );
          }
          return const CircularProgressIndicator(color: Colors.white);
        },
      );

  Widget _storyImage(String url) {
    if (url.startsWith('data:image')) {
      try {
        return Image.memory(base64Decode(url.split(',').last), fit: BoxFit.contain);
      } catch (_) {}
    }
    if (url.startsWith('http') || url.startsWith('supabase://')) {
      return FutureBuilder<String>(
        future: widget.resolveMediaUrl(url),
        builder: (_, s) {
          if (s.hasData && s.data!.startsWith('http')) return Image.network(s.data!, fit: BoxFit.contain);
          return const CircularProgressIndicator(color: Colors.white);
        },
      );
    }
    if (!kIsWeb && url.isNotEmpty) return Image.file(File(url), fit: BoxFit.contain);
    return const Icon(Icons.broken_image_outlined, color: Colors.white38, size: 48);
  }

  Future<void> _addStory() async {
    final kind = await showDialog<String>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('New 24-hour story'),
        content: const Text('Stories disappear after 24 hours. Post unlimited stories anytime.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.pop(c, 'image'), child: const Text('Photo')),
          FilledButton(onPressed: () => Navigator.pop(c, 'video'), child: const Text('Video')),
        ],
      ),
    );
    if (kind == null) return;

    String url;
    String type;
    if (kind == 'video') {
      final picked = await _picker.pickVideo(source: ImageSource.gallery);
      if (picked == null) return;
      if (widget.uploadMediaRef != null) {
        final ref = kIsWeb ? picked.path : picked.path;
        url = await widget.uploadMediaRef!(ref);
      } else {
        url = picked.path;
      }
      type = 'video';
    } else {
      final picked = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
      if (picked == null) return;
      if (widget.uploadMediaRef != null) {
        final ref = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
        url = await widget.uploadMediaRef!(ref);
      } else {
        url = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
      }
      type = 'image';
    }

    final kept = NgmyMediaProfile.asMapList((_target as dynamic).mediaStories);
    kept.add({
      'id': DateTime.now().microsecondsSinceEpoch.toString(),
      'url': url,
      'type': type,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    });
    (_target as dynamic).mediaStories = kept;
    widget.onDataChanged();
    setState(() {});
  }

  Future<void> _addHighlight() async {
    final titleCtrl = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('New Highlight'),
        content: TextField(controller: titleCtrl, decoration: const InputDecoration(labelText: 'Highlight name')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(c, true), child: const Text('Next')),
        ],
      ),
    );
    if (ok != true) return;
    final picked = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (picked == null) return;
    String cover;
    if (widget.uploadMediaRef != null) {
      final ref = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
      cover = await widget.uploadMediaRef!(ref);
    } else {
      cover = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
    }
    final next = List<Map<String, dynamic>>.from(_highlights)
      ..add({
        'id': DateTime.now().microsecondsSinceEpoch.toString(),
        'title': titleCtrl.text.trim().isEmpty ? 'Highlight' : titleCtrl.text.trim(),
        'coverUrl': cover,
        'photos': [{'url': cover, 'type': 'image'}],
      });
    (_target as dynamic).mediaHighlights = next;
    widget.onDataChanged();
    setState(() {});
  }

  Future<void> _openHighlightViewer(Map<String, dynamic> highlight) async {
    final idx = _highlights.indexWhere((h) => (h['id'] ?? '') == (highlight['id'] ?? ''));
    if (idx < 0) return;
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.black,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (context, setLocal) {
            final h = Map<String, dynamic>.from(_highlights[idx]);
            final photos = NgmyMediaProfile.highlightPhotos(h);
            return SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text((h['title'] ?? 'Highlight').toString(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 18)),
                    const SizedBox(height: 12),
                    SizedBox(
                      height: 120,
                      child: ListView.separated(
                        scrollDirection: Axis.horizontal,
                        itemCount: photos.length,
                        separatorBuilder: (_, __) => const SizedBox(width: 8),
                        itemBuilder: (_, i) => ClipRRect(
                          borderRadius: BorderRadius.circular(12),
                          child: SizedBox(width: 100, height: 120, child: _coverThumb((photos[i]['url'] ?? '').toString())),
                        ),
                      ),
                    ),
                    if (_isOwn) ...[
                      const SizedBox(height: 14),
                      OutlinedButton.icon(
                        onPressed: () async {
                          final picked = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
                          if (picked == null) return;
                          String url;
                          if (widget.uploadMediaRef != null) {
                            final ref = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
                            url = await widget.uploadMediaRef!(ref);
                          } else {
                            url = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
                          }
                          final nextPhotos = List<Map<String, dynamic>>.from(photos)..add({'url': url, 'type': 'image'});
                          h['photos'] = nextPhotos;
                          if ((h['coverUrl'] ?? '').toString().isEmpty) h['coverUrl'] = url;
                          final nextHighlights = List<Map<String, dynamic>>.from(_highlights);
                          nextHighlights[idx] = h;
                          (_target as dynamic).mediaHighlights = nextHighlights;
                          widget.onDataChanged();
                          setLocal(() {});
                          setState(() {});
                        },
                        icon: const Icon(Icons.add_photo_alternate_outlined, color: Colors.white),
                        label: const Text('Add photo', style: TextStyle(color: Colors.white)),
                      ),
                    ],
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  Widget _storyRingAvatar({required double radius}) {
    final hasStory = NgmyMediaProfile.hasActiveStory(_target);
    final avatar = widget.avatarForUser(_target);
    final inner = CircleAvatar(
      radius: radius - (hasStory ? 3 : 0),
      backgroundColor: const Color(0xFF262626),
      backgroundImage: avatar,
      child: avatar == null ? Icon(Icons.person, size: radius, color: Colors.white54) : null,
    );
    if (!hasStory) return inner;
    return Container(
      padding: const EdgeInsets.all(2.5),
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        gradient: SweepGradient(colors: [Color(0xFFFD1D1D), Color(0xFFFCAF45), Color(0xFF833AB4), Color(0xFFFD1D1D)]),
      ),
      child: inner,
    );
  }

  @override
  Widget build(BuildContext context) {
    final posts = _userPosts.length;
    final displayName = (_target.fullName ?? '').trim().isNotEmpty ? _target.fullName!.trim() : _target.username;

    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        elevation: 0,
        title: Text(_target.username, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 18)),
        actions: [
          IconButton(icon: const Icon(Icons.more_horiz), onPressed: () {}),
        ],
      ),
      body: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  GestureDetector(
                    onTap: NgmyMediaProfile.hasActiveStory(_target) ? _openStoryViewer : null,
                    child: _storyRingAvatar(radius: 42),
                  ),
                  const SizedBox(width: 22),
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        _statCol(NgmyMediaProfile.formatInstagramCount(posts), 'posts'),
                        _statCol(NgmyMediaProfile.formatInstagramCount(_followerCount), 'followers'),
                        _statCol(NgmyMediaProfile.formatInstagramCount(_followingCount), 'following'),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(displayName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14)),
                  if ((_target.crownBadge ?? '').toString().isNotEmpty)
                    Padding(
                      padding: const EdgeInsets.only(top: 2),
                      child: Text('👑 ${_target.crownBadge.toUpperCase()}', style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 11)),
                    ),
                  const SizedBox(height: 4),
                  if (_isOwn && _editingBio)
                    Row(
                      children: [
                        Expanded(
                          child: TextField(
                            controller: _bioCtrl,
                            maxLines: 3,
                            style: const TextStyle(color: Colors.white, fontSize: 13),
                            decoration: const InputDecoration(hintText: 'Write a bio...', hintStyle: TextStyle(color: Colors.white38), border: OutlineInputBorder(), isDense: true),
                          ),
                        ),
                        IconButton(onPressed: _saveBio, icon: const Icon(Icons.check, color: Colors.white)),
                      ],
                    )
                  else
                    GestureDetector(
                      onTap: _isOwn ? () => setState(() => _editingBio = true) : null,
                      child: Text(
                        ((_target as dynamic).mediaBio ?? '').toString().trim().isEmpty
                            ? (_isOwn ? 'Tap to add bio' : '')
                            : ((_target as dynamic).mediaBio ?? '').toString(),
                        style: TextStyle(color: ((_target as dynamic).mediaBio ?? '').toString().trim().isEmpty ? Colors.white38 : Colors.white, fontSize: 13, height: 1.35),
                      ),
                    ),
                ],
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 0),
              child: Row(
                children: [
                  if (_isOwn) ...[
                    Expanded(child: _actionBtn('Edit profile', Icons.edit_outlined, () => setState(() => _editingBio = true))),
                    const SizedBox(width: 8),
                    Expanded(child: _actionBtn('Share profile', Icons.share_outlined, () {})),
                  ] else ...[
                    Expanded(child: _actionBtn(_following ? 'Following' : 'Follow', _following ? Icons.person_remove_outlined : Icons.person_add_alt_1_outlined, _toggleFollow, filled: !_following)),
                    const SizedBox(width: 8),
                    Expanded(child: _actionBtn('Message', Icons.send_outlined, () {})),
                  ],
                ],
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: SizedBox(
              height: 108,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.fromLTRB(12, 16, 12, 0),
                children: [
                  if (_isOwn && widget.onCreatePost != null)
                    Padding(
                      padding: const EdgeInsets.only(right: 14),
                      child: GestureDetector(
                        onTap: widget.isPosting ? null : widget.onCreatePost,
                        child: Column(
                          children: [
                            Container(
                              width: 64,
                              height: 64,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: const Color(0xFF7C3AED),
                                boxShadow: [
                                  BoxShadow(
                                    color: const Color(0xFF7C3AED).withOpacity(0.45),
                                    blurRadius: 12,
                                    offset: const Offset(0, 4),
                                  ),
                                ],
                              ),
                              child: widget.isPosting
                                  ? const Padding(
                                      padding: EdgeInsets.all(18),
                                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                                    )
                                  : const Icon(Icons.add_rounded, color: Colors.white, size: 30),
                            ),
                            const SizedBox(height: 6),
                            const Text('Post', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 11)),
                          ],
                        ),
                      ),
                    ),
                  ..._highlights.map((h) {
                    final title = (h['title'] ?? 'Highlight').toString();
                    return Padding(
                      padding: const EdgeInsets.only(right: 14),
                      child: GestureDetector(
                        onTap: () => _openHighlightViewer(h),
                        child: Column(
                          children: [
                            Container(
                              width: 64,
                              height: 64,
                              decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white38)),
                              child: ClipOval(child: _coverThumb((h['coverUrl'] ?? '').toString())),
                            ),
                            const SizedBox(height: 6),
                            SizedBox(
                              width: 68,
                              child: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 11)),
                            ),
                          ],
                        ),
                      ),
                    );
                  }),
                ],
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Row(
              children: [
                _tabIcon(Icons.grid_on_rounded, 0),
                _tabIcon(Icons.movie_outlined, 1),
                _tabIcon(Icons.person_pin_outlined, 2),
              ],
            ),
          ),
          _postsGrid(_activeTabPosts),
        ],
      ),
    );
  }

  Widget _statCol(String n, String label) => Column(
        children: [
          Text(n, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 18)),
          Text(label, style: const TextStyle(color: Colors.white, fontSize: 13)),
        ],
      );

  Widget _actionBtn(String label, IconData icon, VoidCallback onTap, {bool filled = false}) => Material(
        color: filled ? const Color(0xFF0095F6) : const Color(0xFF262626),
        borderRadius: BorderRadius.circular(8),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(8),
          child: Container(
            height: 34,
            alignment: Alignment.center,
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), border: filled ? null : Border.all(color: Colors.white24)),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, color: Colors.white, size: 16),
                const SizedBox(width: 6),
                Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 12)),
              ],
            ),
          ),
        ),
      );

  Widget _tabIcon(IconData icon, int idx) {
    final selected = _tab == idx;
    return Expanded(
      child: InkWell(
        onTap: () => setState(() => _tab = idx),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(border: Border(bottom: BorderSide(color: selected ? Colors.white : Colors.transparent, width: 1.2))),
          child: Icon(icon, color: selected ? Colors.white : Colors.white38, size: 22),
        ),
      ),
    );
  }

  Widget _coverThumb(String url) {
    if (url.startsWith('data:image')) {
      try {
        return Image.memory(base64Decode(url.split(',').last), fit: BoxFit.cover, width: 64, height: 64);
      } catch (_) {}
    }
    if (url.startsWith('http') || url.startsWith('supabase://')) {
      return FutureBuilder<String>(
        future: widget.resolveMediaUrl(url),
        builder: (_, s) {
          if (s.hasData && s.data!.startsWith('http')) return Image.network(s.data!, fit: BoxFit.cover, width: 64, height: 64);
          return const ColoredBox(color: Color(0xFF262626));
        },
      );
    }
    if (!kIsWeb && url.isNotEmpty) return Image.file(File(url), fit: BoxFit.cover, width: 64, height: 64);
    return const ColoredBox(color: Color(0xFF262626));
  }

  Widget _postsGrid(List<dynamic> posts) {
    if (posts.isEmpty) {
      return SliverFillRemaining(
        hasScrollBody: false,
        child: Center(child: Text(_tab == 1 ? 'No videos yet' : (_tab == 2 ? 'No tagged posts yet' : 'No posts yet'), style: const TextStyle(color: Colors.white54))),
      );
    }
    return SliverGrid(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 2, crossAxisSpacing: 2),
      delegate: SliverChildBuilderDelegate(
        (context, i) {
          final post = posts[i];
          final isVideo = (post.contentType ?? '').toString() == 'video';
          return FutureBuilder<String>(
            future: widget.resolveMediaUrl(post.videoUrl),
            builder: (_, snap) {
              final url = snap.data ?? '';
              if (!isVideo && (post.contentType == 'image' || url.startsWith('data:image'))) {
                if (url.startsWith('data:image')) {
                  try {
                    return Image.memory(base64Decode(url.split(',').last), fit: BoxFit.cover);
                  } catch (_) {}
                }
                if (url.startsWith('http')) return Image.network(url, fit: BoxFit.cover);
              }
              return Container(color: const Color(0xFF111111), child: const Center(child: Icon(Icons.play_circle_fill, color: Colors.white70, size: 28)));
            },
          );
        },
        childCount: posts.length,
      ),
    );
  }
}

class NgmyMediaAdminPanel extends StatefulWidget {
  final List<dynamic> allMedia;
  final List<dynamic> allUsers;
  final dynamic adminUser;
  final VoidCallback onDataChanged;
  final Future<bool> Function(dynamic post) persistPost;
  final Future<bool> Function(dynamic user)? persistUser;
  final Future<void> Function(List<Map<String, dynamic>> items)? onEnqueueDelivery;
  final bool Function(dynamic post) isPostExpired;
  final bool isDark;
  final dynamic virtualProfilesRaw;
  final void Function(List<Map<String, dynamic>> profiles) onVirtualProfilesChanged;
  final Future<String> Function(String rawUrl) resolveMediaUrl;
  final Future<String> Function(String localRef)? uploadMediaRef;
  final Future<void> Function(dynamic post)? onDeleteMedia;
  final Future<void> Function()? onRefreshMedia;
  final Future<int> Function({bool verifyUrls})? onPurgeBrokenMedia;

  const NgmyMediaAdminPanel({
    super.key,
    required this.allMedia,
    required this.allUsers,
    required this.adminUser,
    required this.onDataChanged,
    required this.persistPost,
    this.persistUser,
    this.onEnqueueDelivery,
    required this.isPostExpired,
    required this.isDark,
    required this.virtualProfilesRaw,
    required this.onVirtualProfilesChanged,
    required this.resolveMediaUrl,
    this.uploadMediaRef,
    this.onDeleteMedia,
    this.onRefreshMedia,
    this.onPurgeBrokenMedia,
  });

  @override
  State<NgmyMediaAdminPanel> createState() => _NgmyMediaAdminPanelState();
}

class _NgmyMediaAdminPanelState extends State<NgmyMediaAdminPanel> {
  final _postSearch = TextEditingController();
  final _picker = ImagePicker();
  final _rng = Random();
  bool _postSearchOpen = false;
  bool _purging = false;
  bool _refreshing = false;

  Future<void> _refreshMedia() async {
    if (_refreshing || widget.onRefreshMedia == null) return;
    setState(() => _refreshing = true);
    try {
      await widget.onRefreshMedia!();
      if (widget.onPurgeBrokenMedia != null) {
        await widget.onPurgeBrokenMedia!(verifyUrls: true);
      }
      widget.onDataChanged();
    } finally {
      if (mounted) setState(() => _refreshing = false);
    }
  }

  Future<void> _purgeBroken() async {
    if (_purging || widget.onPurgeBrokenMedia == null) return;
    setState(() => _purging = true);
    try {
      final removed = await widget.onPurgeBrokenMedia!(verifyUrls: true);
      widget.onDataChanged();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(removed > 0 ? 'Removed $removed broken or deleted post(s) for all users.' : 'No broken posts found.'),
          backgroundColor: removed > 0 ? const Color(0xFF00B25A) : null,
        ),
      );
      setState(() {});
    } finally {
      if (mounted) setState(() => _purging = false);
    }
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => unawaited(_refreshMedia()));
  }
  @override
  void dispose() {
    _postSearch.dispose();
    super.dispose();
  }

  List<dynamic> _filteredPosts(List<dynamic> posts) {
    final q = _postSearch.text.trim().toLowerCase();
    if (q.isEmpty) return posts;
    return posts.where((post) {
      final username = post.username.toString().toLowerCase();
      final email = post.userEmail.toString().toLowerCase();
      final postId = post.id.toString().toLowerCase();
      return username.contains(q) || email.contains(q) || postId.contains(q);
    }).toList();
  }

  void _openPostModerationSheet(dynamic post) {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: widget.isDark ? const Color(0xFF111731) : Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.92,
        minChildSize: 0.55,
        maxChildSize: 0.96,
        builder: (_, scrollCtrl) => SingleChildScrollView(
          controller: scrollCtrl,
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  margin: const EdgeInsets.only(bottom: 12),
                  decoration: BoxDecoration(color: widget.isDark ? Colors.white24 : Colors.black12, borderRadius: BorderRadius.circular(4)),
                ),
              ),
              Row(
                children: [
                  Expanded(
                    child: Text('Post Settings', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: widget.isDark ? Colors.white : Colors.black87)),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close_rounded),
                    color: widget.isDark ? Colors.white70 : Colors.black54,
                    onPressed: () => Navigator.pop(ctx),
                  ),
                ],
              ),
              _AdminPostCard(
                post: post,
                isDark: widget.isDark,
                onDataChanged: widget.onDataChanged,
                persistPost: widget.persistPost,
                onEnqueueDelivery: widget.onEnqueueDelivery,
                onDeleteMedia: widget.onDeleteMedia,
                virtualProfiles: _profiles,
                pickVirtualProfile: _pickVirtualProfile,
                resolveMediaUrl: widget.resolveMediaUrl,
                onVirtualProfilesChanged: widget.onVirtualProfilesChanged,
              ),
            ],
          ),
        ),
      ),
    );
  }

  List<Map<String, dynamic>> get _profiles {
    try {
      return NgmyVirtualMediaProfiles.ensure(widget.virtualProfilesRaw);
    } catch (_) {
      return NgmyVirtualMediaProfiles.defaults();
    }
  }

  void _openFollowerDemosSheet() {
    final queryCtrl = TextEditingController();
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: widget.isDark ? const Color(0xFF111731) : Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
      builder: (ctx) => StatefulBuilder(
        builder: (context, setSheet) {
          final q = queryCtrl.text.trim().toLowerCase();
          final users = widget.allUsers.where((u) {
            if (q.isEmpty) return true;
            return u.username.toString().toLowerCase().contains(q) || u.email.toString().toLowerCase().contains(q);
          }).toList();
          return DraggableScrollableSheet(
            expand: false,
            initialChildSize: 0.88,
            minChildSize: 0.5,
            maxChildSize: 0.95,
            builder: (_, scrollCtrl) => Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Grant Followers', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: widget.isDark ? Colors.white : Colors.black)),
                  const SizedBox(height: 8),
                  TextField(
                    controller: queryCtrl,
                    onChanged: (_) => setSheet(() {}),
                    decoration: const InputDecoration(hintText: 'Search users...', prefixIcon: Icon(Icons.search), border: OutlineInputBorder()),
                  ),
                  const SizedBox(height: 12),
                  Expanded(
                    child: GridView.builder(
                      controller: scrollCtrl,
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 10, crossAxisSpacing: 8, childAspectRatio: 0.78),
                      itemCount: users.length,
                      itemBuilder: (_, i) {
                        final u = users[i];
                        final count = NgmyMediaProfile.asStringList((u as dynamic).mediaFollowers).length;
                        return GestureDetector(
                          onTap: () async {
                            final amtCtrl = TextEditingController(text: '10');
                            final ok = await showDialog<bool>(
                              context: context,
                              builder: (d) => AlertDialog(
                                title: Text('Followers for ${u.username}'),
                                content: TextField(controller: amtCtrl, keyboardType: TextInputType.number, decoration: const InputDecoration(labelText: 'How many followers to add?')),
                                actions: [
                                  TextButton(onPressed: () => Navigator.pop(d, false), child: const Text('Cancel')),
                                  FilledButton(onPressed: () => Navigator.pop(d, true), child: const Text('Grant')),
                                ],
                              ),
                            );
                            if (ok != true) return;
                            final n = int.tryParse(amtCtrl.text.trim()) ?? 0;
                            if (n <= 0) return;
                            final spread = await NgmyMediaDelivery.pickSchedule(context, count: n, label: 'followers');
                            if (spread == null) return;
                            if (spread.inMilliseconds <= 0) {
                              NgmyMediaProfile.adminAddFollowers(u, n);
                              final userOk = await widget.persistUser?.call(u) ?? false;
                              setSheet(() {});
                              if (context.mounted) {
                                final shown = NgmyMediaProfile.formatInstagramCount(
                                  NgmyMediaProfile.asStringList((u as dynamic).mediaFollowers).length,
                                );
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text(userOk
                                        ? 'Added $n followers to ${u.username}. Total: $shown. Saved for all users.'
                                        : 'Could not save followers. Run supabase/users_media_profile_columns.sql in Supabase.'),
                                  ),
                                );
                              }
                              return;
                            }
                            if (widget.onEnqueueDelivery == null) {
                              if (context.mounted) {
                                ScaffoldMessenger.of(context).showSnackBar(
                                  const SnackBar(content: Text('Scheduling is not available on this screen.')),
                                );
                              }
                              return;
                            }
                            final ids = NgmyMediaProfile.adminBuildFollowerIds(u, n);
                            final items = NgmyMediaDelivery.queueFollowers(
                              userEmail: u.email.toString(),
                              followerIds: ids,
                              spread: spread,
                            );
                            await widget.onEnqueueDelivery!(items);
                            setSheet(() {});
                            if (context.mounted) {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                  content: Text(
                                    'Scheduled $n followers for ${u.username}. ${NgmyMediaDelivery.describeSpread(spread, n)}',
                                  ),
                                ),
                              );
                            }
                          },
                          child: Column(
                            children: [
                              CircleAvatar(radius: 26, child: Text(u.username.toString().substring(0, 1).toUpperCase(), style: const TextStyle(fontWeight: FontWeight.w800))),
                              const SizedBox(height: 4),
                              Text(u.username.toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: widget.isDark ? Colors.white : Colors.black87)),
                              Text(
                                NgmyMediaProfile.formatInstagramCount(count),
                                style: TextStyle(fontSize: 9, color: widget.isDark ? Colors.white54 : Colors.black54),
                              ),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    ).whenComplete(queryCtrl.dispose);
  }

  void _openCommentDemosSheet() {
    final profiles = _profiles;
    final queryCtrl = TextEditingController();
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: widget.isDark ? const Color(0xFF111731) : Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
      builder: (ctx) => StatefulBuilder(
        builder: (context, setSheet) {
          final q = queryCtrl.text.trim().toLowerCase();
          final list = q.isEmpty
              ? profiles
              : profiles.where((p) {
                  final name = (p['displayName'] ?? '').toString().toLowerCase();
                  final user = (p['username'] ?? '').toString().toLowerCase();
                  return name.contains(q) || user.contains(q);
                }).toList();
          return DraggableScrollableSheet(
            expand: false,
            initialChildSize: 0.88,
            minChildSize: 0.5,
            maxChildSize: 0.95,
            builder: (_, scrollCtrl) => Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Comment Demos', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: widget.isDark ? Colors.white : Colors.black)),
                  const SizedBox(height: 4),
                  Text('${profiles.length} profiles • tap to edit • 4 per row', style: TextStyle(fontSize: 12, color: widget.isDark ? Colors.white54 : Colors.black54)),
                  const SizedBox(height: 12),
                  TextField(
                    controller: queryCtrl,
                    onChanged: (_) => setSheet(() {}),
                    decoration: const InputDecoration(hintText: 'Search profiles...', prefixIcon: Icon(Icons.search), border: OutlineInputBorder()),
                  ),
                  const SizedBox(height: 12),
                  Expanded(
                    child: GridView.builder(
                      controller: scrollCtrl,
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 10, crossAxisSpacing: 8, childAspectRatio: 0.72),
                      itemCount: list.length,
                      itemBuilder: (_, i) {
                        final p = list[i];
                        final idx = profiles.indexWhere((e) => e['id'] == p['id']);
                        return GestureDetector(
                          onTap: idx >= 0
                              ? () async {
                                  Navigator.pop(ctx);
                                  await _editVirtualProfile(idx);
                                }
                              : null,
                          child: Column(
                            children: [
                              _VirtualAvatar(profile: p, resolveMediaUrl: widget.resolveMediaUrl, radius: 28),
                              const SizedBox(height: 4),
                              Text((p['username'] ?? '').toString(), maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: TextStyle(fontSize: 10, color: widget.isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.w600)),
                            ],
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    ).whenComplete(queryCtrl.dispose);
  }

  Map<String, dynamic> _pickVirtualProfile() => _profiles.isEmpty
      ? {'id': 'vp_0', 'displayName': 'Virtual User', 'username': 'virtual_user', 'profilePictureUrl': ''}
      : _profiles[_rng.nextInt(_profiles.length)];

  void _updateProfile(int index, Map<String, dynamic> updated) {
    final next = List<Map<String, dynamic>>.from(_profiles.map((e) => Map<String, dynamic>.from(e)));
    next[index] = updated;
    widget.onVirtualProfilesChanged(NgmyVirtualMediaProfiles.ensure(next));
    setState(() {});
  }

  Future<void> _editVirtualProfile(int index) async {
    final profiles = _profiles;
    if (index < 0 || index >= profiles.length) return;
    final p = Map<String, dynamic>.from(profiles[index]);
    final nameCtrl = TextEditingController(text: (p['displayName'] ?? '').toString());
    final userCtrl = TextEditingController(text: (p['username'] ?? '').toString());
    final commentCtrl = TextEditingController(text: (p['defaultComment'] ?? '').toString());
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: Text('Edit Profile #${index + 1}'),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _VirtualAvatar(profile: p, resolveMediaUrl: widget.resolveMediaUrl, radius: 36),
              const SizedBox(height: 12),
              TextField(controller: nameCtrl, decoration: const InputDecoration(labelText: 'Display name')),
              const SizedBox(height: 8),
              TextField(controller: userCtrl, decoration: const InputDecoration(labelText: 'Username')),
              const SizedBox(height: 8),
              TextField(
                controller: commentCtrl,
                maxLines: 2,
                decoration: const InputDecoration(
                  labelText: 'Default comment',
                  hintText: 'What this demo account says in comments',
                ),
              ),
              OutlinedButton.icon(
                onPressed: () async {
                  final picked = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
                  if (picked == null) return;
                  String url;
                  if (widget.uploadMediaRef != null) {
                    final ref = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
                    url = await widget.uploadMediaRef!(ref);
                  } else {
                    url = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(await picked.readAsBytes())}' : picked.path;
                  }
                  p['profilePictureUrl'] = url;
                  if (c.mounted) Navigator.pop(c);
                  _updateProfile(index, p);
                },
                icon: const Icon(Icons.photo_camera_outlined),
                label: const Text('Change profile picture'),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(
            onPressed: () {
              p['displayName'] = nameCtrl.text.trim();
              p['username'] = userCtrl.text.trim();
              p['defaultComment'] = commentCtrl.text.trim();
              Navigator.pop(c, true);
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
    if (ok == true) {
      p['displayName'] = nameCtrl.text.trim();
      p['username'] = userCtrl.text.trim();
      p['defaultComment'] = commentCtrl.text.trim();
      _updateProfile(index, p);
      widget.onDataChanged();
    }
    nameCtrl.dispose();
    userCtrl.dispose();
    commentCtrl.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final allPosts = widget.allMedia
        .where((m) => !widget.isPostExpired(m))
        .where((m) => NgmyMediaProfile.postHasSource(m))
        .toList()
      ..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    final posts = _filteredPosts(allPosts);
    final profiles = _profiles;
    final accent = const Color(0xFF7C3AED);
    final sub = widget.isDark ? Colors.white54 : Colors.black54;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: widget.isDark
                  ? [const Color(0xFF1A1033), const Color(0xFF121726)]
                  : [const Color(0xFFF5F0FF), const Color(0xFFFFFFFF)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: accent.withOpacity(0.35)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: accent.withOpacity(0.18), borderRadius: BorderRadius.circular(12)),
                    child: Icon(Icons.shield_outlined, color: accent, size: 22),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Media Moderation', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 17, color: widget.isDark ? Colors.white : Colors.black87)),
                        Text('${allPosts.length} posts • tap a post to manage', style: TextStyle(fontSize: 12, color: sub)),
                      ],
                    ),
                  ),
                  Material(
                    color: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                    borderRadius: BorderRadius.circular(10),
                    child: InkWell(
                      onTap: _refreshing ? null : () => unawaited(_refreshMedia()),
                      borderRadius: BorderRadius.circular(10),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: _refreshing
                            ? SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: accent))
                            : Icon(Icons.cloud_sync_rounded, size: 20, color: accent),
                      ),
                    ),
                  ),
                  const SizedBox(width: 6),
                  Material(
                    color: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                    borderRadius: BorderRadius.circular(10),
                    child: InkWell(
                      onTap: () => setState(() => _postSearchOpen = !_postSearchOpen),
                      borderRadius: BorderRadius.circular(10),
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: Icon(
                          _postSearchOpen ? Icons.close_rounded : Icons.search_rounded,
                          size: 20,
                          color: accent,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              if (widget.onPurgeBrokenMedia != null) ...[
                const SizedBox(height: 10),
                SizedBox(
                  width: double.infinity,
                  child: OutlinedButton.icon(
                    onPressed: _purging ? null : () => unawaited(_purgeBroken()),
                    icon: _purging
                        ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                        : const Icon(Icons.cleaning_services_outlined, size: 18),
                    label: Text(_purging ? 'Cleaning…' : 'Remove broken & deleted posts'),
                  ),
                ),
              ],
              if (_postSearchOpen) ...[
                const SizedBox(height: 12),
                TextField(
                  controller: _postSearch,
                  onChanged: (_) => setState(() {}),
                  style: TextStyle(color: widget.isDark ? Colors.white : Colors.black87, fontSize: 13),
                  decoration: InputDecoration(
                    hintText: 'Search by username, email, or post ID...',
                    hintStyle: TextStyle(fontSize: 12, color: sub),
                    prefixIcon: Icon(Icons.search, size: 20, color: sub),
                    filled: true,
                    fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                    contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                  ),
                ),
              ],
              const SizedBox(height: 14),
              Row(
                children: [
                  Expanded(
                    child: _AdminToolButton(
                      icon: Icons.groups_rounded,
                      label: 'Comment Demos',
                      sub: '${profiles.length} profiles',
                      isDark: widget.isDark,
                      onTap: _openCommentDemosSheet,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: _AdminToolButton(
                      icon: Icons.person_add_alt_1_rounded,
                      label: 'Grant Followers',
                      sub: 'Pick user & amount',
                      isDark: widget.isDark,
                      onTap: _openFollowerDemosSheet,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),
        if (posts.isEmpty)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 28),
            child: Center(
              child: Text(
                _postSearch.text.trim().isEmpty ? 'No active media posts.' : 'No posts match your search.',
                style: TextStyle(color: sub),
              ),
            ),
          )
        else
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
              childAspectRatio: 0.72,
            ),
            itemCount: posts.length,
            itemBuilder: (_, i) => _AdminPostGridTile(
              post: posts[i],
              isDark: widget.isDark,
              resolveMediaUrl: widget.resolveMediaUrl,
              onTap: () => _openPostModerationSheet(posts[i]),
            ),
          ),
      ],
    );
  }
}

class _AdminPostGridTile extends StatelessWidget {
  final dynamic post;
  final bool isDark;
  final Future<String> Function(String rawUrl) resolveMediaUrl;
  final VoidCallback onTap;

  const _AdminPostGridTile({
    required this.post,
    required this.isDark,
    required this.resolveMediaUrl,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final likes = NgmyMediaProfile.asStringList((post as dynamic).likedBy).length;
    final comments = NgmyMediaProfile.asMapList((post as dynamic).comments).length;
    final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);

    return Material(
      color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
      borderRadius: BorderRadius.circular(10),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onTap,
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(color: border),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: _PostPreviewThumb(post: post, resolveMediaUrl: resolveMediaUrl),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(6, 5, 6, 6),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      post.username.toString(),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: isDark ? Colors.white : Colors.black87),
                    ),
                    const SizedBox(height: 3),
                    Row(
                      children: [
                        Icon(Icons.favorite_rounded, size: 10, color: const Color(0xFFEF4444).withOpacity(0.9)),
                        const SizedBox(width: 2),
                        Text('$likes', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w600, color: isDark ? Colors.white70 : Colors.black54)),
                        const SizedBox(width: 6),
                        Icon(Icons.chat_bubble_rounded, size: 10, color: const Color(0xFF3B82F6).withOpacity(0.9)),
                        const SizedBox(width: 2),
                        Text('$comments', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w600, color: isDark ? Colors.white70 : Colors.black54)),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _AdminToolButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final String sub;
  final bool isDark;
  final VoidCallback onTap;

  const _AdminToolButton({
    required this.icon,
    required this.label,
    required this.sub,
    required this.isDark,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(icon, color: const Color(0xFF7C3AED), size: 20),
              const SizedBox(height: 6),
              Text(label, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: isDark ? Colors.white : Colors.black87)),
              Text(sub, style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black45)),
            ],
          ),
        ),
      ),
    );
  }
}

class _VirtualAvatar extends StatelessWidget {
  final Map<String, dynamic> profile;
  final Future<String> Function(String rawUrl) resolveMediaUrl;
  final double radius;

  const _VirtualAvatar({required this.profile, required this.resolveMediaUrl, required this.radius});

  @override
  Widget build(BuildContext context) {
    final url = (profile['profilePictureUrl'] ?? '').toString().trim();
    final mem = NgmyVirtualMediaProfiles.avatarFor(profile);
    if (mem != null) return CircleAvatar(radius: radius, backgroundImage: mem);
    if (url.startsWith('http') || url.startsWith('supabase://')) {
      return FutureBuilder<String>(
        future: resolveMediaUrl(url),
        builder: (_, s) {
          final resolved = s.data ?? '';
          if (resolved.startsWith('http')) return CircleAvatar(radius: radius, backgroundImage: NetworkImage(resolved));
          return CircleAvatar(radius: radius, child: Icon(Icons.person, size: radius));
        },
      );
    }
    return CircleAvatar(radius: radius, child: Icon(Icons.person, size: radius));
  }
}

class _AdminPostCard extends StatefulWidget {
  final dynamic post;
  final bool isDark;
  final VoidCallback onDataChanged;
  final Future<bool> Function(dynamic post) persistPost;
  final Future<void> Function(List<Map<String, dynamic>> items)? onEnqueueDelivery;
  final Future<void> Function(dynamic post)? onDeleteMedia;
  final List<Map<String, dynamic>> virtualProfiles;
  final Map<String, dynamic> Function() pickVirtualProfile;
  final Future<String> Function(String rawUrl) resolveMediaUrl;
  final void Function(List<Map<String, dynamic>> profiles)? onVirtualProfilesChanged;

  const _AdminPostCard({
    required this.post,
    required this.isDark,
    required this.onDataChanged,
    required this.persistPost,
    this.onEnqueueDelivery,
    this.onDeleteMedia,
    required this.virtualProfiles,
    required this.pickVirtualProfile,
    required this.resolveMediaUrl,
    this.onVirtualProfilesChanged,
  });

  @override
  State<_AdminPostCard> createState() => _AdminPostCardState();
}

class _AdminPostCardState extends State<_AdminPostCard> {
  final _likesCtrl = TextEditingController(text: '10');
  final _commentsCtrl = TextEditingController(text: '5');
  final _commentTextCtrl = TextEditingController();
  int? _selectedProfileIdx;

  @override
  void dispose() {
    _likesCtrl.dispose();
    _commentsCtrl.dispose();
    _commentTextCtrl.dispose();
    super.dispose();
  }

  Map<String, dynamic>? get _selectedProfile {
    if (_selectedProfileIdx == null || widget.virtualProfiles.isEmpty) return null;
    final i = _selectedProfileIdx!.clamp(0, widget.virtualProfiles.length - 1);
    return widget.virtualProfiles[i];
  }

  void _snack(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<bool> _ensureProfileSelected() async {
    if (_selectedProfile != null) return true;
    _snack('Choose a demo comment profile first.');
    return false;
  }

  String get _postId => (widget.post as dynamic).id.toString();

  List<String> _buildLikeIds(int count) {
    final liked = NgmyMediaProfile.asStringList((widget.post as dynamic).likedBy);
    final out = <String>[];
    for (var i = 0; i < count; i++) {
      final profile = widget.virtualProfiles.isNotEmpty ? widget.virtualProfiles[i % widget.virtualProfiles.length] : widget.pickVirtualProfile();
      final id = (profile['id'] ?? 'vp_$i').toString();
      if (!liked.contains(id) && !out.contains(id)) out.add(id);
    }
    return out;
  }

  List<Map<String, dynamic>> _buildCommentBatch(int count) {
    if (count <= 0 || widget.virtualProfiles.isEmpty || _selectedProfileIdx == null) return [];
    final fallback = _commentTextCtrl.text.trim();
    final start = _selectedProfileIdx!.clamp(0, widget.virtualProfiles.length - 1);
    final out = <Map<String, dynamic>>[];
    for (var i = 0; i < count; i++) {
      final profile = widget.virtualProfiles[(start + i) % widget.virtualProfiles.length];
      final text = (profile['defaultComment'] ?? '').toString().trim().isNotEmpty
          ? (profile['defaultComment'] ?? '').toString().trim()
          : fallback;
      if (text.isEmpty) continue;
      out.add(_commentFromProfile(profile, text, suffix: '_$i'));
    }
    return out;
  }

  Future<void> _applyLikesToPost(List<String> likeIds) async {
    if (likeIds.isEmpty) return;
    final liked = NgmyMediaProfile.asStringList((widget.post as dynamic).likedBy);
    for (final id in likeIds) {
      if (!liked.contains(id)) liked.add(id);
    }
    (widget.post as dynamic).likedBy = liked;
    widget.post.likes = liked.length;
  }

  Future<void> _applyCommentsToPost(List<Map<String, dynamic>> batch) async {
    if (batch.isEmpty) return;
    final comments = NgmyMediaProfile.asMapList((widget.post as dynamic).comments);
    comments.addAll(batch);
    (widget.post as dynamic).comments = comments;
  }

  Future<void> _addLikes(int count) async {
    if (count <= 0) return;
    final likeIds = _buildLikeIds(count);
    if (likeIds.isEmpty) {
      _snack('No new likes to add.');
      return;
    }
    final spread = await NgmyMediaDelivery.pickSchedule(context, count: likeIds.length, label: 'likes');
    if (spread == null) return;
    if (spread.inMilliseconds <= 0) {
      await _applyLikesToPost(likeIds);
      final ok = await widget.persistPost(widget.post);
      if (!ok) {
        _snack('Could not save likes to the database. Check Supabase media table.');
        return;
      }
      if (mounted) setState(() {});
      _snack('Added ${likeIds.length} like(s). Visible to all users.');
      return;
    }
    if (widget.onEnqueueDelivery == null) {
      _snack('Scheduling unavailable.');
      return;
    }
    await widget.onEnqueueDelivery!(
      NgmyMediaDelivery.queueLikes(postId: _postId, likerIds: likeIds, spread: spread),
    );
    _snack('Scheduled ${likeIds.length} likes. ${NgmyMediaDelivery.describeSpread(spread, likeIds.length)}');
  }

  Future<void> _addBulkComments(int count) async {
    if (count <= 0 || widget.virtualProfiles.isEmpty) return;
    if (!await _ensureProfileSelected()) return;
    final batch = _buildCommentBatch(count);
    if (batch.isEmpty) {
      _snack('Set a comment for the demo profile or type one below.');
      return;
    }
    final spread = await NgmyMediaDelivery.pickSchedule(context, count: batch.length, label: 'comments');
    if (spread == null) return;
    if (spread.inMilliseconds <= 0) {
      await _applyCommentsToPost(batch);
      final ok = await widget.persistPost(widget.post);
      if (!ok) {
        _snack('Could not save comments. Run supabase/media_tables.sql in Supabase.');
        return;
      }
      if (mounted) setState(() {});
      _snack('Added ${batch.length} comment(s). Visible to all users.');
      return;
    }
    if (widget.onEnqueueDelivery == null) {
      _snack('Scheduling unavailable.');
      return;
    }
    await widget.onEnqueueDelivery!(
      NgmyMediaDelivery.queueComments(postId: _postId, comments: batch, spread: spread),
    );
    _snack('Scheduled ${batch.length} comments. ${NgmyMediaDelivery.describeSpread(spread, batch.length)}');
  }

  Map<String, dynamic> _commentFromProfile(Map<String, dynamic> profile, String text, {String suffix = ''}) => {
        'id': '${DateTime.now().microsecondsSinceEpoch}${suffix}_${Random().nextInt(999999)}',
        'userEmail': (profile['id'] ?? 'virtual').toString(),
        'username': (profile['username'] ?? 'user').toString(),
        'displayName': (profile['displayName'] ?? '').toString(),
        'profilePictureUrl': (profile['profilePictureUrl'] ?? '').toString(),
        'text': text,
        'timestamp': DateTime.now().toUtc().toIso8601String(),
        'replies': <Map<String, dynamic>>[],
        'isVirtual': true,
      };

  Future<void> _postCustomComment() async {
    if (widget.virtualProfiles.isEmpty) return;
    if (!await _ensureProfileSelected()) return;
    final text = _commentTextCtrl.text.trim();
    if (text.isEmpty) {
      _snack('Write the comment this demo account will say.');
      return;
    }
    final profile = Map<String, dynamic>.from(_selectedProfile!);
    profile['defaultComment'] = text;
    _saveProfileDefaultComment(_selectedProfileIdx!, profile);
    final batch = [_commentFromProfile(profile, text, suffix: '_c${DateTime.now().microsecondsSinceEpoch}')];
    final spread = await NgmyMediaDelivery.pickSchedule(context, count: 1, label: 'comment');
    if (spread == null) return;
    if (spread.inMilliseconds <= 0) {
      await _applyCommentsToPost(batch);
      final ok = await widget.persistPost(widget.post);
      if (!ok) {
        _snack('Could not save comment. Run supabase/media_tables.sql in Supabase.');
        return;
      }
      if (mounted) setState(() {});
      _commentTextCtrl.clear();
      _snack('Comment posted as @${profile['username']}. Visible to all users.');
      return;
    }
    if (widget.onEnqueueDelivery == null) {
      _snack('Scheduling unavailable.');
      return;
    }
    await widget.onEnqueueDelivery!(
      NgmyMediaDelivery.queueComments(postId: _postId, comments: batch, spread: spread),
    );
    _commentTextCtrl.clear();
    _snack('Comment scheduled as @${profile['username']}.');
  }

  void _saveProfileDefaultComment(int index, Map<String, dynamic> profile) {
    if (widget.onVirtualProfilesChanged == null) return;
    final next = widget.virtualProfiles.map((e) => Map<String, dynamic>.from(e)).toList();
    if (index < 0 || index >= next.length) return;
    next[index] = profile;
    widget.onVirtualProfilesChanged!(NgmyVirtualMediaProfiles.ensure(next));
  }

  void _onProfileSelected(int i) {
    setState(() {
      _selectedProfileIdx = i;
      final p = widget.virtualProfiles[i];
      _commentTextCtrl.text = (p['defaultComment'] ?? '').toString();
    });
  }

  Widget _profilePickerStrip() {
    if (widget.virtualProfiles.isEmpty) {
      return Text('No demo profiles loaded.', style: TextStyle(fontSize: 11, color: widget.isDark ? Colors.white54 : Colors.black54));
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Icon(Icons.record_voice_over_outlined, size: 16, color: widget.isDark ? Colors.white70 : Colors.black54),
            const SizedBox(width: 6),
            Text('Comment as (required)', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: widget.isDark ? Colors.white : Colors.black87)),
          ],
        ),
        const SizedBox(height: 8),
        if (_selectedProfile != null)
          Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: const Color(0xFF7C3AED).withOpacity(0.15),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFF7C3AED).withOpacity(0.5)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                _VirtualAvatar(profile: _selectedProfile!, resolveMediaUrl: widget.resolveMediaUrl, radius: 12),
                const SizedBox(width: 8),
                Text('@${_selectedProfile!['username']}', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: widget.isDark ? Colors.white : Colors.black87)),
              ],
            ),
          ),
        SizedBox(
          height: 78,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: widget.virtualProfiles.length.clamp(0, 40),
            separatorBuilder: (_, __) => const SizedBox(width: 8),
            itemBuilder: (_, i) {
              final p = widget.virtualProfiles[i];
              final selected = _selectedProfileIdx == i;
              return GestureDetector(
                onTap: () => _onProfileSelected(i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  width: 64,
                  padding: const EdgeInsets.symmetric(vertical: 6),
                  decoration: BoxDecoration(
                    color: widget.isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: selected ? const Color(0xFF7C3AED) : (widget.isDark ? Colors.white12 : const Color(0xFFE2E8F0)), width: selected ? 2 : 1),
                    boxShadow: selected ? [BoxShadow(color: const Color(0xFF7C3AED).withOpacity(0.25), blurRadius: 8)] : null,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _VirtualAvatar(profile: p, resolveMediaUrl: widget.resolveMediaUrl, radius: 16),
                      const SizedBox(height: 4),
                      Text((p['username'] ?? '').toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 9, fontWeight: selected ? FontWeight.w800 : FontWeight.w500, color: widget.isDark ? Colors.white : Colors.black87)),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _metricCard({
    required IconData icon,
    required Color iconColor,
    required String title,
    required TextEditingController controller,
    required String hint,
    required VoidCallback onApply,
    required List<Widget> quickActions,
  }) {
    final bg = widget.isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC);
    final border = widget.isDark ? Colors.white10 : const Color(0xFFE2E8F0);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: iconColor.withOpacity(0.15), borderRadius: BorderRadius.circular(10)),
                child: Icon(icon, color: iconColor, size: 18),
              ),
              const SizedBox(width: 10),
              Text(title, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: widget.isDark ? Colors.white : Colors.black87)),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: TextField(
                  controller: controller,
                  keyboardType: TextInputType.number,
                  style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16, color: widget.isDark ? Colors.white : Colors.black87),
                  decoration: InputDecoration(
                    hintText: hint,
                    filled: true,
                    fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Material(
                color: iconColor,
                borderRadius: BorderRadius.circular(12),
                child: InkWell(
                  onTap: onApply,
                  borderRadius: BorderRadius.circular(12),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                    child: Text('Apply', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Wrap(spacing: 6, runSpacing: 6, children: quickActions),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final likes = NgmyMediaProfile.asStringList((widget.post as dynamic).likedBy).length;
    final comments = NgmyMediaProfile.asMapList((widget.post as dynamic).comments).length;
    final panel = widget.isDark ? const Color(0xFF1C1F2E) : Colors.white;
    final border = widget.isDark ? Colors.white12 : const Color(0xFFE2E8F0);

    return Container(
      decoration: BoxDecoration(
        color: panel,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 14, 14, 0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: SizedBox(width: 80, height: 80, child: _PostPreviewThumb(post: widget.post, resolveMediaUrl: widget.resolveMediaUrl)),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Post by ${widget.post.username}', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: widget.isDark ? Colors.white : Colors.black87)),
                      const SizedBox(height: 2),
                      Text(widget.post.userEmail.toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, color: widget.isDark ? Colors.white54 : Colors.black54)),
                      if (widget.post.caption.toString().trim().isNotEmpty) ...[
                        const SizedBox(height: 6),
                        Text(widget.post.caption, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 12, color: widget.isDark ? Colors.white70 : Colors.black87)),
                      ],
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          _statChip(Icons.favorite_rounded, '$likes likes', const Color(0xFFEF4444)),
                          const SizedBox(width: 8),
                          _statChip(Icons.chat_bubble_rounded, '$comments comments', const Color(0xFF3B82F6)),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 14),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14),
            child: _metricCard(
              icon: Icons.favorite_rounded,
              iconColor: const Color(0xFFEF4444),
              title: 'Add Likes',
              controller: _likesCtrl,
              hint: 'Amount',
              onApply: () => _addLikes(int.tryParse(_likesCtrl.text.trim()) ?? 0),
              quickActions: [
                _quickChip('+1', () => _addLikes(1)),
                _quickChip('+10', () => _addLikes(10)),
                _quickChip('+50', () => _addLikes(50)),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14),
            child: Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: widget.isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: widget.isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(color: const Color(0xFF3B82F6).withOpacity(0.15), borderRadius: BorderRadius.circular(10)),
                        child: const Icon(Icons.chat_bubble_rounded, color: Color(0xFF3B82F6), size: 18),
                      ),
                      const SizedBox(width: 10),
                      Text('Add Comments', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: widget.isDark ? Colors.white : Colors.black87)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  _profilePickerStrip(),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _commentTextCtrl,
                    maxLines: 2,
                    style: TextStyle(color: widget.isDark ? Colors.white : Colors.black87),
                    decoration: InputDecoration(
                      hintText: 'Comment this demo account will say...',
                      filled: true,
                      fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                    ),
                  ),
                  const SizedBox(height: 10),
                  Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _commentsCtrl,
                          keyboardType: TextInputType.number,
                          style: TextStyle(fontWeight: FontWeight.w700, color: widget.isDark ? Colors.white : Colors.black87),
                          decoration: InputDecoration(
                            hintText: 'Bulk count',
                            filled: true,
                            fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
                            contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Material(
                        color: const Color(0xFF3B82F6),
                        borderRadius: BorderRadius.circular(12),
                        child: InkWell(
                          onTap: () => _addBulkComments(int.tryParse(_commentsCtrl.text.trim()) ?? 0),
                          borderRadius: BorderRadius.circular(12),
                          child: const Padding(
                            padding: EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                            child: Text('Bulk', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Material(
                        color: const Color(0xFF7C3AED),
                        borderRadius: BorderRadius.circular(12),
                        child: InkWell(
                          onTap: _postCustomComment,
                          borderRadius: BorderRadius.circular(12),
                          child: const Padding(
                            padding: EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                            child: Text('Post', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 14),
          if (widget.onDeleteMedia != null)
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
              child: SizedBox(
                width: double.infinity,
                child: OutlinedButton.icon(
                  onPressed: () async {
                    final ok = await showDialog<bool>(
                      context: context,
                      builder: (c) => AlertDialog(
                        title: const Text('Delete post globally?'),
                        content: const Text('This removes the post from Supabase and all users will stop seeing it.'),
                        actions: [
                          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
                          TextButton(
                            onPressed: () => Navigator.pop(c, true),
                            child: const Text('Delete', style: TextStyle(color: Colors.red)),
                          ),
                        ],
                      ),
                    );
                    if (ok != true) return;
                    await widget.onDeleteMedia!(widget.post);
                    widget.onDataChanged();
                    if (!context.mounted) return;
                    Navigator.of(context).pop();
                    _snack('Post deleted from all devices.');
                  },
                  icon: const Icon(Icons.delete_forever_rounded, color: Colors.red),
                  label: const Text('Delete post globally', style: TextStyle(color: Colors.red, fontWeight: FontWeight.w700)),
                  style: OutlinedButton.styleFrom(side: const BorderSide(color: Colors.red)),
                ),
              ),
            ),
        ],
      ),
    );
  }

  Widget _statChip(IconData icon, String label, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.12),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 12, color: color),
          const SizedBox(width: 4),
          Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: color)),
        ],
      ),
    );
  }

  Widget _quickChip(String label, VoidCallback onTap) {
    return ActionChip(
      label: Text(label, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
      onPressed: onTap,
      backgroundColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
      side: BorderSide(color: widget.isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
    );
  }
}

class _PostPreviewThumb extends StatefulWidget {
  final dynamic post;
  final Future<String> Function(String rawUrl) resolveMediaUrl;

  const _PostPreviewThumb({required this.post, required this.resolveMediaUrl});

  @override
  State<_PostPreviewThumb> createState() => _PostPreviewThumbState();
}

class _PostPreviewThumbState extends State<_PostPreviewThumb> {
  bool _broken = false;

  Widget _brokenTile() {
    return Container(
      color: const Color(0xFF1A1A1A),
      child: const Center(
        child: Icon(Icons.broken_image_outlined, color: Color(0xFFEF4444), size: 28),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_broken || !NgmyMediaProfile.postHasSource(widget.post)) {
      return _brokenTile();
    }
    return FutureBuilder<String>(
      future: widget.resolveMediaUrl(widget.post.videoUrl.toString()),
      builder: (_, snap) {
        final url = snap.data ?? widget.post.videoUrl.toString();
        if (!NgmyMediaProfile.postHasSource(widget.post, resolvedUrl: url)) {
          return _brokenTile();
        }
        if (url.startsWith('data:image')) {
          try {
            return Image.memory(base64Decode(url.split(',').last), fit: BoxFit.cover);
          } catch (_) {
            return _brokenTile();
          }
        }
        if (widget.post.contentType == 'image' && url.startsWith('http')) {
          return Image.network(
            url,
            fit: BoxFit.cover,
            errorBuilder: (_, __, ___) {
              if (!_broken) {
                WidgetsBinding.instance.addPostFrameCallback((_) {
                  if (mounted) setState(() => _broken = true);
                });
              }
              return _brokenTile();
            },
          );
        }
        return Container(
          color: const Color(0xFF262626),
          child: const Center(child: Icon(Icons.play_circle_fill, color: Colors.white70)),
        );
      },
    );
  }
}

({List<dynamic> users, List<dynamic> posts}) ngmyMediaSearchMatches({
  required String query,
  required List<dynamic> allUsers,
  required List<dynamic> allMedia,
  required bool Function(dynamic post) isPostExpired,
  int userLimit = 20,
  int postLimit = 30,
}) {
  final q = query.trim().toLowerCase();
  if (q.isEmpty) return (users: <dynamic>[], posts: <dynamic>[]);
  final tag = q.startsWith('#') ? q.substring(1) : q;

  final matchedUsers = allUsers.where((u) {
    final username = (u.username ?? '').toString().toLowerCase();
    final email = (u.email ?? '').toString().toLowerCase();
    final name = (u.fullName ?? '').toString().toLowerCase();
    return username.contains(q) || email.contains(q) || name.contains(q);
  }).take(userLimit).toList();

  final matchedPosts = allMedia.where((m) {
    if (isPostExpired(m)) return false;
    final caption = (m.caption ?? '').toString().toLowerCase();
    final tags = NgmyMediaProfile.asStringList((m as dynamic).taggedUsers);
    final tagHit = tag.isNotEmpty &&
        (caption.contains('#$tag') ||
            caption.split(RegExp(r'\s+')).any((w) => w.startsWith('#') && w.substring(1).contains(tag)) ||
            tags.any((t) => t.toLowerCase().contains(q.replaceAll('@', ''))));
    final userHit = (m.username ?? '').toString().toLowerCase().contains(q);
    return tagHit || caption.contains(q) || userHit;
  }).take(postLimit).toList();

  return (users: matchedUsers, posts: matchedPosts);
}

Future<void> showNgmyMediaSearch({
  required BuildContext context,
  required List<dynamic> allUsers,
  required List<dynamic> allMedia,
  required void Function(String email) onOpenProfile,
  required bool Function(dynamic post) isPostExpired,
}) {
  final queryCtrl = TextEditingController();
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setSheet) {
          final q = queryCtrl.text.trim().toLowerCase();
          final results = ngmyMediaSearchMatches(
            query: q,
            allUsers: allUsers,
            allMedia: allMedia,
            isPostExpired: isPostExpired,
          );
          final matchedUsers = results.users;
          final matchedPosts = results.posts;

          final bottom = MediaQuery.viewInsetsOf(ctx).bottom;
          return Padding(
            padding: EdgeInsets.only(bottom: bottom),
            child: DraggableScrollableSheet(
              initialChildSize: 0.88,
              minChildSize: 0.45,
              maxChildSize: 0.95,
              builder: (_, scrollCtrl) => Container(
                decoration: const BoxDecoration(
                  color: Color(0xFF0A0A0A),
                  borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
                ),
                child: Column(
                  children: [
                    const SizedBox(height: 10),
                    Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99))),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 14, 16, 10),
                      child: Row(
                        children: [
                          Expanded(
                            child: TextField(
                              controller: queryCtrl,
                              autofocus: true,
                              style: const TextStyle(color: Colors.white),
                              decoration: InputDecoration(
                                hintText: 'Search users or #tags',
                                hintStyle: const TextStyle(color: Colors.white38),
                                prefixIcon: const Icon(Icons.search_rounded, color: Colors.white54),
                                filled: true,
                                fillColor: const Color(0xFF1A1A1A),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                              ),
                              onChanged: (_) => setSheet(() {}),
                            ),
                          ),
                          IconButton(
                            onPressed: () => Navigator.pop(ctx),
                            icon: const Icon(Icons.close_rounded, color: Colors.white70),
                          ),
                        ],
                      ),
                    ),
                    Expanded(
                      child: q.isEmpty
                          ? const Center(
                              child: Text(
                                'Find people by username or posts by hashtag',
                                style: TextStyle(color: Colors.white38, fontSize: 13),
                                textAlign: TextAlign.center,
                              ),
                            )
                          : ListView(
                              controller: scrollCtrl,
                              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                              children: [
                                if (matchedUsers.isNotEmpty) ...[
                                  const Text('People', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                                  const SizedBox(height: 8),
                                  ...matchedUsers.map((u) {
                                    return ListTile(
                                      contentPadding: EdgeInsets.zero,
                                      leading: const CircleAvatar(
                                        backgroundColor: Color(0xFF262626),
                                        child: Icon(Icons.person, color: Colors.white54),
                                      ),
                                      title: Text((u.username ?? 'User').toString(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                                      subtitle: Text((u.email ?? '').toString(), style: const TextStyle(color: Colors.white38, fontSize: 11)),
                                      onTap: () {
                                        Navigator.pop(ctx);
                                        onOpenProfile(u.email.toString());
                                      },
                                    );
                                  }),
                                  const SizedBox(height: 16),
                                ],
                                if (matchedPosts.isNotEmpty) ...[
                                  const Text('Posts', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                                  const SizedBox(height: 8),
                                  ...matchedPosts.map((m) {
                                    final caption = (m.caption ?? '').toString();
                                    return ListTile(
                                      contentPadding: EdgeInsets.zero,
                                      leading: const Icon(Icons.tag_rounded, color: Color(0xFF7C3AED)),
                                      title: Text(
                                        caption.isEmpty ? 'Media post' : caption,
                                        maxLines: 2,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(color: Colors.white, fontSize: 13),
                                      ),
                                      subtitle: Text('@${(m.username ?? '').toString()}', style: const TextStyle(color: Colors.white38, fontSize: 11)),
                                      onTap: () {
                                        Navigator.pop(ctx);
                                        onOpenProfile(m.userEmail.toString());
                                      },
                                    );
                                  }),
                                ],
                                if (matchedUsers.isEmpty && matchedPosts.isEmpty)
                                  const Padding(
                                    padding: EdgeInsets.only(top: 40),
                                    child: Center(child: Text('No results', style: TextStyle(color: Colors.white38))),
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
    },
  ).whenComplete(queryCtrl.dispose);
}
