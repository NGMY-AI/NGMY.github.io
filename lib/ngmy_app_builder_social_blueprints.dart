import 'ngmy_app_builder_models.dart';

/// Pre-built full apps when users ask for TikTok, Facebook, Google, etc.
/// Used as fallback when AI returns generic hero+menuGrid demos.
class NgmyAppSocialBlueprints {
  static String? detectKind(String userMessage) {
    final q = userMessage.toLowerCase();
    if (q.contains('tiktok') || q.contains('tik tok') || q.contains('reelverse') || q.contains('reels app') || q.contains('like tiktok') || q.contains('short video')) {
      return 'tiktok';
    }
    if (q.contains('facebook') || q.contains('face book') || q.contains('like facebook') || q.contains('social media feed')) {
      return 'facebook';
    }
    if (q.contains('google') && (q.contains('search') || q.contains('like google') || q.contains('browser'))) {
      return 'google';
    }
    if (q.contains('instagram') || q.contains('ig app')) {
      return 'instagram';
    }
    return null;
  }

  static bool looksLikeGenericDemo(NgmyAppProject? project) {
    if (project == null || project.screens.isEmpty) return true;
    final home = project.homeScreen;
    final layout = home.data['layout'];
    if (layout is! Map) return home.kind != NgmyAppScreenKind.custom;
    final json = layout.toString().toLowerCase();
    if (json.contains('reelfeed') || json.contains('socialfeed') || json.contains('searchhub')) return false;
    return json.contains('menugrid') && (json.contains('hero') || json.contains('stat'));
  }

  static NgmyAppProject? build(String kind, {required String ownerEmail, String? name}) {
    switch (kind) {
      case 'tiktok':
        return _tiktok(ownerEmail: ownerEmail, name: name);
      case 'facebook':
        return _facebook(ownerEmail: ownerEmail, name: name);
      case 'google':
        return _google(ownerEmail: ownerEmail, name: name);
      case 'instagram':
        return _instagram(ownerEmail: ownerEmail, name: name);
      default:
        return null;
    }
  }

  static NgmyAppProject _tiktok({required String ownerEmail, String? name}) {
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: 'app_tiktok_${DateTime.now().millisecondsSinceEpoch}',
      name: name ?? 'ReelFlow',
      tagline: 'Short videos — swipe, like, post',
      ownerEmail: ownerEmail,
      themeColor: 0xFFFE2C55,
      appIcon: '🎬',
      createdAt: now,
      updatedAt: now,
      shell: {
        'bottomNav': [
          {'icon': 'home', 'label': 'Home', 'target': 'feed'},
          {'icon': 'discover', 'label': 'Discover', 'target': 'discover'},
          {'icon': 'create', 'label': 'Post', 'target': 'create'},
          {'icon': 'inbox', 'label': 'Inbox', 'target': 'inbox'},
          {'icon': 'profile', 'label': 'Profile', 'target': 'profile'},
        ],
      },
      screens: [
        NgmyAppScreen(
          id: 'feed',
          title: 'For You',
          kind: NgmyAppScreenKind.custom,
          data: {
            'fullBleed': true,
            'hideAppBar': true,
            'layout': {'type': 'reelFeed', 'collection': 'reels'},
          },
        ),
        NgmyAppScreen(
          id: 'discover',
          title: 'Discover',
          kind: NgmyAppScreenKind.custom,
          data: {
            'hideAppBar': true,
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'text', 'text': 'Discover', 'style': 'title'},
                {
                  'type': 'dataList',
                  'collection': 'reels',
                  'titleField': 'caption',
                  'subtitleField': 'author',
                  'emptyText': 'Post reels to see them here',
                },
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'create',
          title: 'Post',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'postComposer',
              'mode': 'reel',
              'collection': 'reels',
              'navigateAfter': 'feed',
              'submitLabel': 'Post reel',
            },
          },
        ),
        NgmyAppScreen(
          id: 'inbox',
          title: 'Inbox',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'dataList',
              'collection': 'notifications',
              'titleField': 'title',
              'subtitleField': 'body',
              'emptyText': 'No messages yet',
            },
          },
        ),
        NgmyAppScreen(
          id: 'profile',
          title: 'Profile',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {'type': 'profile', 'collection': 'reels', 'handle': '@you'},
          },
        ),
      ],
    );
  }

  static NgmyAppProject _facebook({required String ownerEmail, String? name}) {
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: 'app_fb_${DateTime.now().millisecondsSinceEpoch}',
      name: name ?? 'ConnectHub',
      tagline: 'Friends, posts, and updates',
      ownerEmail: ownerEmail,
      themeColor: 0xFF1877F2,
      appIcon: '👥',
      createdAt: now,
      updatedAt: now,
      shell: {
        'bottomNav': [
          {'icon': 'feed', 'label': 'Feed', 'target': 'feed'},
          {'icon': 'create', 'label': 'Create', 'target': 'create'},
          {'icon': 'profile', 'label': 'Profile', 'target': 'profile'},
        ],
      },
      screens: [
        NgmyAppScreen(
          id: 'feed',
          title: 'News Feed',
          kind: NgmyAppScreenKind.custom,
          data: {
            'hideAppBar': true,
            'fullBleed': true,
            'layout': {'type': 'socialFeed', 'collection': 'posts'},
          },
        ),
        NgmyAppScreen(
          id: 'create',
          title: 'Create post',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'postComposer',
              'mode': 'post',
              'collection': 'posts',
              'captionField': 'body',
              'videoField': 'imageUrl',
              'navigateAfter': 'feed',
              'submitLabel': 'Share post',
            },
          },
        ),
        NgmyAppScreen(
          id: 'profile',
          title: 'Profile',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {'type': 'profile', 'collection': 'posts', 'handle': 'You'},
          },
        ),
      ],
    );
  }

  static NgmyAppProject _google({required String ownerEmail, String? name}) {
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: 'app_google_${DateTime.now().millisecondsSinceEpoch}',
      name: name ?? 'SearchGo',
      tagline: 'Search the web',
      ownerEmail: ownerEmail,
      themeColor: 0xFF4285F4,
      appIcon: '🔍',
      createdAt: now,
      updatedAt: now,
      screens: [
        NgmyAppScreen(
          id: 'home',
          title: 'Search',
          kind: NgmyAppScreenKind.custom,
          data: {
            'fullBleed': true,
            'hideAppBar': true,
            'layout': {'type': 'searchHub', 'collection': 'bookmarks', 'placeholder': 'Search Google or your bookmarks'},
          },
        ),
        NgmyAppScreen(
          id: 'save',
          title: 'Save bookmark',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'form',
              'collection': 'bookmarks',
              'submitLabel': 'Save',
              'successMessage': 'Bookmark saved!',
              'navigateAfter': 'home',
              'fields': [
                {'id': 'title', 'label': 'Title', 'type': 'text'},
                {'id': 'url', 'label': 'Website URL', 'type': 'text'},
              ],
            },
          },
        ),
      ],
    );
  }

  static NgmyAppProject _instagram({required String ownerEmail, String? name}) {
    final p = _tiktok(ownerEmail: ownerEmail, name: name ?? 'GramFlow');
    return p.copyWith(
      themeColor: 0xFFE1306C,
      appIcon: '📸',
      tagline: 'Photos and reels',
    );
  }
}
