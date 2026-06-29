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
    if (q.contains('map') || q.contains('google map') || q.contains('navigation') || q.contains('gps') || q.contains('directions') || q.contains('uber') || q.contains('delivery route') || q.contains('realistic map')) {
      return 'maps';
    }
    if (q.contains('instagram') || q.contains('ig app')) {
      return 'instagram';
    }
    if (q.contains('money making') ||
        q.contains('money-making') ||
        q.contains('make money') ||
        q.contains('making money') ||
        q.contains('money machine') ||
        q.contains('money maker') ||
        q.contains('side hustle') ||
        q.contains('passive income') ||
        q.contains('earn money') ||
        q.contains('earn cash') ||
        q.contains('earn extra') ||
        q.contains('income app') ||
        q.contains('hustle app') ||
        (q.contains('affiliate') && !q.contains('map'))) {
      return 'moneyMaker';
    }
    return null;
  }

  /// Friendly label for the copilot's confirmation message.
  static String label(String kind) {
    switch (kind) {
      case 'tiktok':
        return 'TikTok-style video';
      case 'facebook':
        return 'Facebook-style social';
      case 'google':
        return 'Google-style search';
      case 'instagram':
        return 'Instagram-style photo & reels';
      case 'maps':
        return 'maps & navigation';
      case 'moneyMaker':
        return 'money-making';
      default:
        return kind;
    }
  }

  static bool looksLikeGenericDemo(NgmyAppProject? project) {
    if (project == null || project.screens.isEmpty) return true;
    final home = project.homeScreen;
    final layout = home.data['layout'];
    if (layout is! Map) return home.kind != NgmyAppScreenKind.custom;
    final json = layout.toString().toLowerCase();
    if (json.contains('reelfeed') || json.contains('socialfeed') || json.contains('searchhub') || json.contains('mapview')) return false;
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
      case 'maps':
        return _maps(ownerEmail: ownerEmail, name: name);
      case 'moneyMaker':
        return _moneyMaker(ownerEmail: ownerEmail, name: name);
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

  static NgmyAppProject _maps({required String ownerEmail, String? name}) {
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: 'app_maps_${DateTime.now().millisecondsSinceEpoch}',
      name: name ?? 'MapGo',
      tagline: 'Search places, pins & directions',
      ownerEmail: ownerEmail,
      themeColor: 0xFF34A853,
      appIcon: '🗺️',
      createdAt: now,
      updatedAt: now,
      shell: {
        'bottomNav': [
          {'icon': 'map', 'label': 'Map', 'target': 'home'},
          {'icon': 'list', 'label': 'Saved', 'target': 'places'},
          {'icon': 'add', 'label': 'Add', 'target': 'add'},
          {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
        ],
      },
      screens: [
        NgmyAppScreen(
          id: 'home',
          title: 'Map',
          kind: NgmyAppScreenKind.custom,
          data: {
            'fullBleed': true,
            'hideAppBar': true,
            'layout': {
              'type': 'mapView',
              'collection': 'places',
              'titleField': 'name',
              'subtitleField': 'address',
              'latField': 'lat',
              'lngField': 'lng',
              'height': 460,
              'placeholder': 'Search anywhere…',
              'centerLat': 40.7128,
              'centerLng': -74.006,
            },
          },
        ),
        NgmyAppScreen(
          id: 'add',
          title: 'Add place',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'form',
              'collection': 'places',
              'submitLabel': 'Save place',
              'successMessage': 'Pinned on map!',
              'navigateAfter': 'home',
              'fields': [
                {'id': 'name', 'label': 'Place name', 'type': 'text'},
                {'id': 'address', 'label': 'Address', 'type': 'text'},
                {'id': 'lat', 'label': 'Latitude', 'type': 'text'},
                {'id': 'lng', 'label': 'Longitude', 'type': 'text'},
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'places',
          title: 'Saved places',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'dataList',
              'collection': 'places',
              'titleField': 'name',
              'subtitleField': 'address',
              'emptyText': 'No saved places — add one from the map.',
              'addTarget': 'add',
              'addLabel': 'Add place',
              'allowDelete': true,
            },
          },
        ),
        NgmyAppScreen(
          id: 'settings',
          title: 'Settings',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'default': false},
                {'type': 'button', 'label': 'Back to map', 'target': 'home'},
              ],
            },
          },
        ),
      ],
    );
  }

  static NgmyAppProject _moneyMaker({required String ownerEmail, String? name}) {
    final now = DateTime.now().toUtc().toIso8601String();
    return NgmyAppProject(
      id: 'app_money_${DateTime.now().millisecondsSinceEpoch}',
      name: name ?? 'EarnFlow',
      tagline: 'Sell, track sales, and get paid',
      ownerEmail: ownerEmail,
      themeColor: 0xFF16A34A,
      appIcon: '💵',
      createdAt: now,
      updatedAt: now,
      shell: {
        'bottomNav': [
          {'icon': 'home', 'label': 'Home', 'target': 'home'},
          {'icon': 'list', 'label': 'Listings', 'target': 'listings'},
          {'icon': 'add', 'label': 'List', 'target': 'add_listing'},
          {'icon': 'profile', 'label': 'Refer', 'target': 'referral'},
          {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
        ],
      },
      screens: [
        NgmyAppScreen(
          id: 'home',
          title: 'Dashboard',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'text', 'text': 'Your earnings', 'style': 'title'},
                {
                  'type': 'stat',
                  'collection': 'sales',
                  'sumField': 'amount',
                  'prefix': '\$',
                  'label': 'Total earned',
                },
                {
                  'type': 'menuGrid',
                  'style': 'pulse',
                  'items': [
                    {'icon': 'add', 'label': 'Add listing', 'target': 'add_listing'},
                    {'icon': 'list', 'label': 'My listings', 'target': 'listings'},
                    {'icon': 'history', 'label': 'Sales history', 'target': 'sales'},
                    {'icon': 'share', 'label': 'Referral link', 'target': 'referral'},
                    {'icon': 'wallet', 'label': 'Withdraw', 'target': 'withdraw'},
                  ],
                },
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'add_listing',
          title: 'Add listing',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'form',
              'collection': 'listings',
              'submitLabel': 'Save listing',
              'successMessage': 'Listing added!',
              'navigateAfter': 'listings',
              'fields': [
                {'id': 'title', 'label': 'What are you selling?', 'type': 'text'},
                {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
                {'id': 'description', 'label': 'Description', 'type': 'textarea'},
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'listings',
          title: 'My listings',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'dataList',
              'collection': 'listings',
              'titleField': 'title',
              'subtitleField': 'price',
              'emptyText': 'No listings yet — add your first item to sell.',
              'addTarget': 'add_listing',
              'addLabel': 'Add listing',
              'allowDelete': true,
              'itemActions': [
                {
                  'label': 'Mark sold',
                  'targetCollection': 'sales',
                  'copyFields': {'title': 'item', 'price': 'amount'},
                  'extraFields': {},
                  'removeSource': true,
                  'successMessage': 'Sale recorded — nice work!',
                },
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'sales',
          title: 'Sales history',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'column',
              'children': [
                {
                  'type': 'stat',
                  'collection': 'sales',
                  'sumField': 'amount',
                  'prefix': '\$',
                  'label': 'Total earned',
                },
                {
                  'type': 'dataList',
                  'collection': 'sales',
                  'titleField': 'item',
                  'subtitleField': 'amount',
                  'emptyText': 'No sales yet — mark a listing as sold to record earnings.',
                  'allowDelete': true,
                },
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'referral',
          title: 'Referral link',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'text', 'text': 'Earn by referring others', 'style': 'title'},
                {
                  'type': 'text',
                  'text': 'Share your link or code below — generate a QR code so people can scan and join.',
                  'style': 'body',
                },
                {
                  'type': 'qrGenerator',
                  'mode': 'text',
                  'title': 'Your referral code',
                  'placeholder': 'e.g. JOIN-WITH-ME10',
                  'accentColor': '#16A34A',
                },
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'withdraw',
          title: 'Withdraw earnings',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'form',
              'collection': 'payouts',
              'submitLabel': 'Request payout',
              'successMessage': 'Payout requested!',
              'navigateAfter': 'home',
              'fields': [
                {'id': 'amount', 'label': 'Amount to withdraw (\$)', 'type': 'number'},
                {'id': 'method', 'label': 'Payout method (PayPal, Cash App, Bank)', 'type': 'text'},
                {'id': 'note', 'label': 'Note (optional)', 'type': 'text'},
              ],
            },
          },
        ),
        NgmyAppScreen(
          id: 'settings',
          title: 'Settings',
          kind: NgmyAppScreenKind.custom,
          data: {
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'default': false},
                {'type': 'button', 'label': 'Back to dashboard', 'target': 'home'},
              ],
            },
          },
        ),
      ],
    );
  }
}
