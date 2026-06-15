import 'ngmy_app_builder_models.dart';

class NgmyAppTemplate {
  final String id;
  final String name;
  final String description;
  final String icon;
  final int themeColor;
  final String badge;
  final NgmyAppProject Function(String ownerEmail) build;

  const NgmyAppTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.icon,
    required this.themeColor,
    this.badge = '',
    required this.build,
  });
}

NgmyAppProject _base(String owner, String name, String tagline, int color, List<NgmyAppScreen> screens, {String appIcon = '', Map<String, dynamic> shell = const {}}) {
  final now = DateTime.now().toUtc().toIso8601String();
  return NgmyAppProject(
    id: 'app_${DateTime.now().millisecondsSinceEpoch}',
    name: name,
    tagline: tagline,
    ownerEmail: owner.toLowerCase().trim(),
    themeColor: color,
    screens: screens,
    appIcon: appIcon.isNotEmpty ? appIcon : '✨',
    shell: shell,
    createdAt: now,
    updatedAt: now,
  );
}

NgmyAppScreen _custom(String id, String title, Map<String, dynamic> layout, {bool fullBleed = false, bool hideAppBar = false}) {
  return NgmyAppScreen(
    id: id,
    title: title,
    kind: NgmyAppScreenKind.custom,
    data: {
      if (fullBleed) 'fullBleed': true,
      if (hideAppBar) 'hideAppBar': true,
      'layout': layout,
    },
  );
}

Map<String, dynamic> _settingsLayout(String homeId) {
  return {
    'type': 'column',
    'children': [
      {'type': 'text', 'text': 'Settings', 'style': 'title'},
      {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'subtitle': 'Light when off', 'default': false},
      {'type': 'button', 'label': 'Back home', 'target': homeId},
    ],
  };
}

const _storeNav = [
  {'icon': 'shop', 'label': 'Shop', 'target': 'home'},
  {'icon': 'cart', 'label': 'Cart', 'target': 'cart'},
  {'icon': 'add', 'label': 'Sell', 'target': 'add_product'},
  {'icon': 'profile', 'label': 'Profile', 'target': 'profile'},
];

const _socialNav = [
  {'icon': 'feed', 'label': 'Feed', 'target': 'feed'},
  {'icon': 'create', 'label': 'Post', 'target': 'create'},
  {'icon': 'profile', 'label': 'Profile', 'target': 'profile'},
];

const _travelNav = [
  {'icon': 'map', 'label': 'Map', 'target': 'home'},
  {'icon': 'list', 'label': 'Trips', 'target': 'trips'},
  {'icon': 'add', 'label': 'Add', 'target': 'add_place'},
  {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
];

final List<NgmyAppTemplate> kNgmyAppTemplates = [
  // Travel — map-first (showcase: Travel Booking)
  NgmyAppTemplate(
    id: 'qr_studio',
    name: 'Travel Explorer',
    description: 'Map, saved trips & destinations.',
    icon: '✈️',
    badge: 'Featured',
    themeColor: 0xFF0EA5E9,
    build: (o) => _base(o, 'Travel Explorer', 'Maps, trips & reservations', 0xFF0EA5E9, [
      _custom('home', 'Map', {'type': 'mapView', 'collection': 'places', 'titleField': 'name', 'subtitleField': 'address', 'latField': 'lat', 'lngField': 'lng', 'height': 440, 'placeholder': 'Search cities, hotels, airports…', 'centerLat': 48.8566, 'centerLng': 2.3522}, fullBleed: true, hideAppBar: true),
      _custom('add_place', 'Add destination', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Save a place', 'style': 'title'},
          {'type': 'form', 'collection': 'places', 'submitLabel': 'Save on map', 'successMessage': 'Place saved!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Place name', 'type': 'text'},
              {'id': 'address', 'label': 'Address', 'type': 'text'},
              {'id': 'lat', 'label': 'Latitude', 'type': 'text'},
              {'id': 'lng', 'label': 'Longitude', 'type': 'text'},
            ]},
        ],
      }),
      _custom('trips', 'My trips', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Saved trips', 'style': 'title'},
          {'type': 'dataList', 'collection': 'places', 'titleField': 'name', 'subtitleField': 'address', 'emptyText': 'No trips yet — add a destination on the map.', 'addTarget': 'add_place', 'addLabel': 'Add trip', 'allowDelete': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '✈️', shell: {'bottomNav': _travelNav}),
  ),
  // E-Commerce — product feed (showcase: E-Commerce)
  NgmyAppTemplate(
    id: 'luxe_store',
    name: 'Luxe Store',
    description: 'Product feed, cart & checkout.',
    icon: '🛍️',
    themeColor: 0xFFEC4899,
    build: (o) => _base(o, 'Luxe Store', 'Curated shop with cart & checkout', 0xFFEC4899, [
      _custom('home', 'Shop', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Discover', 'style': 'title'},
          {'type': 'wrap', 'children': [
            {'type': 'chip', 'label': 'New arrivals'},
            {'type': 'chip', 'label': 'Best sellers'},
            {'type': 'chip', 'label': 'Sale'},
          ]},
          {'type': 'stat', 'collection': 'products', 'label': 'Products live'},
          {'type': 'dataList', 'collection': 'products', 'titleField': 'name', 'subtitleField': 'price', 'emptyText': 'Your catalog is empty.', 'addTarget': 'add_product', 'addLabel': 'Add product', 'allowDelete': true},
        ],
      }),
      _custom('add_product', 'Add Product', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'products', 'submitLabel': 'List product', 'successMessage': 'Listed!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Product name', 'type': 'text'},
              {'id': 'price', 'label': 'Price', 'type': 'text'},
              {'id': 'desc', 'label': 'Description', 'type': 'text'},
            ]},
        ],
      }),
      _custom('cart', 'Cart', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your cart', 'style': 'title'},
          {'type': 'dataList', 'collection': 'cart', 'titleField': 'name', 'subtitleField': 'price', 'emptyText': 'Cart is empty.'},
          {'type': 'button', 'label': 'Checkout', 'target': 'checkout', 'large': true},
        ],
      }),
      _custom('checkout', 'Checkout', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'orders', 'submitLabel': 'Place order', 'successMessage': 'Order placed!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'address', 'label': 'Shipping address', 'type': 'text'},
            ]},
        ],
      }),
      _custom('profile', 'Profile', {
        'type': 'column',
        'children': [
          {'type': 'profile', 'collection': 'orders', 'handle': 'Shopper'},
          {'type': 'button', 'label': 'Settings', 'target': 'settings'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🛍️', shell: {'bottomNav': _storeNav}),
  ),
  // Social — live feed (showcase: Social Media)
  NgmyAppTemplate(
    id: 'creator_hub',
    name: 'Social Pulse',
    description: 'Posts, profiles & engagement.',
    icon: '💬',
    themeColor: 0xFF8B5CF6,
    build: (o) => _base(o, 'Social Pulse', 'Share posts and connect', 0xFF8B5CF6, [
      _custom('feed', 'Feed', {'type': 'socialFeed', 'collection': 'posts'}, fullBleed: true, hideAppBar: true),
      _custom('create', 'Create', {
        'type': 'postComposer',
        'mode': 'post',
        'collection': 'posts',
        'captionField': 'body',
        'videoField': 'imageUrl',
        'navigateAfter': 'feed',
        'submitLabel': 'Share post',
      }),
      _custom('profile', 'Profile', {'type': 'profile', 'collection': 'posts', 'handle': '@you'}),
      _custom('settings', 'Settings', _settingsLayout('feed')),
    ], appIcon: '💬', shell: {'bottomNav': _socialNav}),
  ),
  // Fitness — workout dashboard (showcase: Health & Fitness)
  NgmyAppTemplate(
    id: 'pulse_fitness',
    name: 'Pulse Fitness',
    description: 'Workouts, check-ins & nutrition.',
    icon: '💪',
    themeColor: 0xFF10B981,
    build: (o) => _base(o, 'Pulse Fitness', 'Train smarter every day', 0xFF10B981, [
      _custom('home', 'Today', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Today\'s plan', 'style': 'title'},
          {'type': 'row', 'children': [
            {'type': 'stat', 'collection': 'checkins', 'label': 'Check-ins'},
            {'type': 'stat', 'collection': 'workouts', 'label': 'Workouts'},
          ]},
          {'type': 'workoutPlan', 'planId': 'today', 'title': 'Strength circuit', 'exercises': [
            {'id': 'sq', 'name': 'Squats', 'sets': '4×12'},
            {'id': 'pu', 'name': 'Push-ups', 'sets': '3×15'},
            {'id': 'run', 'name': 'Run', 'sets': '20 min'},
          ]},
          {'type': 'checklist', 'id': 'nutrition', 'items': [
            {'id': 'w', 'label': '8 glasses of water'},
            {'id': 'p', 'label': 'Protein each meal'},
          ]},
          {'type': 'button', 'label': 'Log check-in', 'target': 'checkin'},
        ],
      }),
      _custom('checkin', 'Check-in', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'checkins', 'submitLabel': 'Log today', 'successMessage': 'Logged!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'weight', 'label': 'Weight', 'type': 'number'},
              {'id': 'energy', 'label': 'Energy 1-10', 'type': 'number'},
            ]},
        ],
      }),
      _custom('history', 'History', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'checkins', 'titleField': 'weight', 'subtitleField': 'energy', 'emptyText': 'No check-ins yet.', 'allowDelete': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '💪'),
  ),
  // CRM — tabbed dashboard (showcase: CRM)
  NgmyAppTemplate(
    id: 'invoice_pro',
    name: 'CRM Dashboard',
    description: 'Clients, invoices & pipeline.',
    icon: '📊',
    themeColor: 0xFF6366F1,
    build: (o) => _base(o, 'CRM Dashboard', 'Clients, charts & pipeline', 0xFF6366F1, [
      _custom('home', 'Dashboard', {
        'type': 'tabs',
        'tabs': [
          {
            'label': 'Overview',
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'row', 'children': [
                  {'type': 'stat', 'collection': 'clients', 'label': 'Clients'},
                  {'type': 'stat', 'collection': 'invoices', 'label': 'Invoices'},
                ]},
                {'type': 'text', 'text': 'Recent invoices', 'style': 'subtitle'},
                {'type': 'dataList', 'collection': 'invoices', 'titleField': 'client', 'subtitleField': 'amount', 'emptyText': 'No invoices yet.', 'addTarget': 'create', 'addLabel': 'New invoice'},
              ],
            },
          },
          {
            'label': 'Clients',
            'layout': {
              'type': 'column',
              'children': [
                {'type': 'dataList', 'collection': 'clients', 'titleField': 'name', 'subtitleField': 'email', 'emptyText': 'Add your first client.', 'addTarget': 'add_client', 'addLabel': 'Add client', 'allowDelete': true},
              ],
            },
          },
        ],
      }),
      _custom('create', 'New Invoice', {
        'type': 'column',
        'children': [
          {'type': 'invoiceBuilder', 'collection': 'invoices', 'title': 'Create invoice'},
        ],
      }),
      _custom('add_client', 'Add Client', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'clients', 'submitLabel': 'Save client', 'successMessage': 'Client saved!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Client name', 'type': 'text'},
              {'id': 'email', 'label': 'Email', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '📊'),
  ),
  // Portfolio — search hub (showcase: Portfolio Web)
  NgmyAppTemplate(
    id: 'video_hub',
    name: 'Portfolio Hub',
    description: 'Showcase work & contact.',
    icon: '🌐',
    themeColor: 0xFF0EA5E9,
    build: (o) => _base(o, 'Portfolio Hub', 'Showcase projects & contact', 0xFF0EA5E9, [
      _custom('home', 'Portfolio', {'type': 'searchHub', 'collection': 'projects', 'placeholder': 'Search projects or add new work…'}, fullBleed: true, hideAppBar: true),
      _custom('add', 'Add Project', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'projects', 'submitLabel': 'Publish project', 'successMessage': 'Added to portfolio!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'title', 'label': 'Project title', 'type': 'text'},
              {'id': 'url', 'label': 'Project URL', 'type': 'text'},
              {'id': 'tags', 'label': 'Tags', 'type': 'text'},
            ]},
        ],
      }),
      _custom('contact', 'Contact', {
        'type': 'column',
        'children': [
          {'type': 'card', 'children': [
            {'type': 'text', 'text': 'Let\'s work together', 'style': 'title'},
            {'type': 'text', 'text': 'Send a message — forms save to your app data.', 'style': 'subtitle'},
          ]},
          {'type': 'form', 'collection': 'messages', 'submitLabel': 'Send message', 'successMessage': 'Sent!',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🌐'),
  ),
  // Keep QR studio as separate template id alias for older saves
  NgmyAppTemplate(
    id: 'qr_code_studio',
    name: 'QR Code Studio',
    description: 'Live QR for websites & text.',
    icon: '📱',
    themeColor: 0xFF06B6D4,
    build: (o) => _base(o, 'QR Code Studio', 'Generate QR codes for links and text', 0xFF06B6D4, [
      _custom('home', 'QR Tools', {
        'type': 'tabs',
        'tabs': [
          {'label': 'Website', 'layout': {'type': 'column', 'children': [
            {'type': 'qrGenerator', 'mode': 'url', 'placeholder': 'https://your-website.com', 'collection': 'qr_codes', 'allowSave': true},
          ]}},
          {'label': 'Text', 'layout': {'type': 'column', 'children': [
            {'type': 'qrGenerator', 'mode': 'text', 'placeholder': 'Your message…', 'collection': 'qr_codes', 'allowSave': true},
          ]}},
          {'label': 'Saved', 'layout': {'type': 'column', 'children': [
            {'type': 'dataList', 'collection': 'qr_codes', 'titleField': 'label', 'subtitleField': 'payload', 'emptyText': 'No saved codes yet.', 'allowDelete': true},
          ]}},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '📱'),
  ),
  NgmyAppTemplate(
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start fresh — describe any app to NGMY AI.',
    icon: '🚀',
    themeColor: 0xFF6366F1,
    build: (o) => NgmyAppProject.blank(ownerEmail: o).copyWith(appIcon: '🚀'),
  ),
];
