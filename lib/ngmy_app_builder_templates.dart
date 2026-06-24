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
  // Side hustle / money-making (showcase: Marketplace earnings)
  NgmyAppTemplate(
    id: 'side_hustle',
    name: 'Side Hustle Marketplace',
    description: 'Sell, track sales & get paid.',
    icon: '💵',
    badge: 'New',
    themeColor: 0xFF16A34A,
    build: (o) => _base(o, 'EarnFlow', 'Sell, track sales, and get paid', 0xFF16A34A, [
      _custom('home', 'Dashboard', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your earnings', 'style': 'title'},
          {'type': 'stat', 'collection': 'sales', 'sumField': 'amount', 'prefix': '\$', 'label': 'Total earned'},
          {'type': 'menuGrid', 'items': [
            {'icon': 'add', 'label': 'Add listing', 'target': 'add_listing'},
            {'icon': 'list', 'label': 'My listings', 'target': 'listings'},
            {'icon': 'sales', 'label': 'Record a sale', 'target': 'add_sale'},
            {'icon': 'history', 'label': 'Sales history', 'target': 'sales'},
            {'icon': 'share', 'label': 'Referral link', 'target': 'referral'},
            {'icon': 'wallet', 'label': 'Withdraw', 'target': 'withdraw'},
          ]},
        ],
      }),
      _custom('add_listing', 'Add listing', {
        'type': 'form', 'collection': 'listings', 'submitLabel': 'Save listing', 'successMessage': 'Listing added!', 'navigateAfter': 'listings',
        'fields': [
          {'id': 'title', 'label': 'What are you selling?', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'description', 'label': 'Description', 'type': 'textarea'},
        ],
      }),
      _custom('listings', 'My listings', {
        'type': 'dataList', 'collection': 'listings', 'titleField': 'title', 'subtitleField': 'price',
        'emptyText': 'No listings yet — add your first item to sell.', 'addTarget': 'add_listing', 'addLabel': 'Add listing', 'allowDelete': true,
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
      }),
      _custom('add_sale', 'Record a sale', {
        'type': 'form', 'collection': 'sales', 'submitLabel': 'Record sale', 'successMessage': 'Sale recorded — nice work!', 'navigateAfter': 'sales',
        'fields': [
          {'id': 'item', 'label': 'Item sold', 'type': 'text'},
          {'id': 'amount', 'label': 'Sale amount (\$)', 'type': 'number'},
          {'id': 'buyer', 'label': 'Buyer (optional)', 'type': 'text'},
        ],
      }),
      _custom('sales', 'Sales history', {
        'type': 'column',
        'children': [
          {'type': 'stat', 'collection': 'sales', 'sumField': 'amount', 'prefix': '\$', 'label': 'Total earned'},
          {'type': 'dataList', 'collection': 'sales', 'titleField': 'item', 'subtitleField': 'amount', 'emptyText': 'No sales yet.', 'addTarget': 'add_sale', 'addLabel': 'Record a sale', 'allowDelete': true},
        ],
      }),
      _custom('referral', 'Referral link', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Earn by referring others', 'style': 'title'},
          {'type': 'text', 'text': 'Share your link or code — generate a QR so people can scan and join.', 'style': 'body'},
          {'type': 'qrGenerator', 'mode': 'text', 'title': 'Your referral code', 'placeholder': 'e.g. JOIN-WITH-ME10', 'accentColor': '#16A34A'},
        ],
      }),
      _custom('withdraw', 'Withdraw earnings', {
        'type': 'form', 'collection': 'payouts', 'submitLabel': 'Request payout', 'successMessage': 'Payout requested!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'amount', 'label': 'Amount to withdraw (\$)', 'type': 'number'},
          {'id': 'method', 'label': 'Payout method (PayPal, Cash App, Bank)', 'type': 'text'},
          {'id': 'note', 'label': 'Note (optional)', 'type': 'text'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '💵', shell: {
      'bottomNav': [
        {'icon': 'home', 'label': 'Home', 'target': 'home'},
        {'icon': 'list', 'label': 'Listings', 'target': 'listings'},
        {'icon': 'add', 'label': 'Sell', 'target': 'add_sale'},
        {'icon': 'profile', 'label': 'Refer', 'target': 'referral'},
        {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
      ],
    }),
  ),
  // Booking & services (showcase: freelancer/service business earnings)
  NgmyAppTemplate(
    id: 'booking_pro',
    name: 'Booking & Services',
    description: 'Services, bookings & client earnings.',
    icon: '📅',
    themeColor: 0xFF7C3AED,
    build: (o) => _base(o, 'BookFlow', 'Book services, track clients & earnings', 0xFF7C3AED, [
      _custom('home', 'Dashboard', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Business overview', 'style': 'title'},
          {'type': 'stat', 'collection': 'bookings', 'sumField': 'price', 'prefix': '\$', 'label': 'Total booked'},
          {'type': 'menuGrid', 'items': [
            {'icon': 'add', 'label': 'Add service', 'target': 'add_service'},
            {'icon': 'list', 'label': 'Services', 'target': 'services'},
            {'icon': 'calendar', 'label': 'New booking', 'target': 'add_booking'},
            {'icon': 'history', 'label': 'Bookings', 'target': 'bookings'},
            {'icon': 'person', 'label': 'Clients', 'target': 'add_client'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add_service', 'Add service', {
        'type': 'form', 'collection': 'services', 'submitLabel': 'Save service', 'successMessage': 'Service added!', 'navigateAfter': 'services',
        'fields': [
          {'id': 'name', 'label': 'Service name', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'duration', 'label': 'Duration (e.g. 30 min)', 'type': 'text'},
        ],
      }),
      _custom('services', 'Services', {
        'type': 'dataList', 'collection': 'services', 'titleField': 'name', 'subtitleField': 'price',
        'emptyText': 'No services yet — add what you offer.', 'addTarget': 'add_service', 'addLabel': 'Add service', 'allowDelete': true,
      }),
      _custom('add_booking', 'New booking', {
        'type': 'form', 'collection': 'bookings', 'submitLabel': 'Save booking', 'successMessage': 'Booking saved!', 'navigateAfter': 'bookings',
        'fields': [
          {'id': 'client', 'label': 'Client name', 'type': 'text'},
          {'id': 'service', 'label': 'Service', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'date', 'label': 'Date & time', 'type': 'text'},
        ],
      }),
      _custom('bookings', 'Bookings', {
        'type': 'column',
        'children': [
          {'type': 'stat', 'collection': 'bookings', 'sumField': 'price', 'prefix': '\$', 'label': 'Total booked'},
          {'type': 'dataList', 'collection': 'bookings', 'titleField': 'client', 'subtitleField': 'service', 'emptyText': 'No bookings yet.', 'addTarget': 'add_booking', 'addLabel': 'New booking', 'allowDelete': true},
        ],
      }),
      _custom('add_client', 'Add client', {
        'type': 'form', 'collection': 'clients', 'submitLabel': 'Save client', 'successMessage': 'Client saved!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Client name', 'type': 'text'},
          {'id': 'phone', 'label': 'Phone', 'type': 'text'},
          {'id': 'email', 'label': 'Email', 'type': 'text'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '📅'),
  ),
  // Habit Tracker — checklist-first home, not menu-first
  NgmyAppTemplate(
    id: 'habit_tracker',
    name: 'Habit Tracker',
    description: 'Daily checklist, streaks & progress.',
    icon: '🔥',
    themeColor: 0xFF14B8A6,
    build: (o) => _base(o, 'Habit Flow', 'Build habits that stick', 0xFF14B8A6, [
      _custom('home', 'Today', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🔥', 'title': 'Today\'s habits', 'subtitle': 'Check them off as you go'},
          {'type': 'checklist', 'id': 'daily_habits', 'items': [
            {'id': 'water', 'label': 'Drink water'},
            {'id': 'walk', 'label': 'Move for 20 minutes'},
            {'id': 'read', 'label': 'Read 10 pages'},
            {'id': 'sleep', 'label': 'Sleep by 11pm'},
          ]},
          {'type': 'progress', 'label': 'Weekly goal', 'value': 0.6},
          {'type': 'stat', 'collection': 'completions', 'label': 'Habits logged'},
          {'type': 'button', 'label': 'Log a habit', 'target': 'log_habit'},
        ],
      }),
      _custom('log_habit', 'Log a habit', {
        'type': 'form', 'collection': 'completions', 'submitLabel': 'Log it', 'successMessage': 'Nice work!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'habit', 'label': 'Habit name', 'type': 'text'},
          {'id': 'notes', 'label': 'Notes (optional)', 'type': 'textarea'},
        ],
      }),
      _custom('history', 'History', {
        'type': 'dataList', 'collection': 'completions', 'titleField': 'habit', 'subtitleField': 'notes',
        'emptyText': 'Nothing logged yet.', 'addTarget': 'log_habit', 'addLabel': 'Log a habit', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🔥', shell: {
      'bottomNav': [
        {'icon': 'home', 'label': 'Today', 'target': 'home'},
        {'icon': 'discover', 'label': 'History', 'target': 'history'},
        {'icon': 'profile', 'label': 'Settings', 'target': 'settings'},
      ],
    }),
  ),
  // Personal Finance Dashboard — stat/progress dominant
  NgmyAppTemplate(
    id: 'finance_dash',
    name: 'Money Tracker',
    description: 'Income, spending & budget at a glance.',
    icon: '💰',
    themeColor: 0xFF3B82F6,
    build: (o) => _base(o, 'Money Tracker', 'Know where every dollar goes', 0xFF3B82F6, [
      _custom('home', 'Overview', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'This month', 'style': 'title'},
          {'type': 'stat', 'collection': 'income', 'sumField': 'amount', 'prefix': '\$', 'label': 'Total income'},
          {'type': 'stat', 'collection': 'expenses', 'sumField': 'amount', 'prefix': '\$', 'label': 'Total spent'},
          {'type': 'progress', 'label': 'Budget used', 'value': 0.55},
          {'type': 'menuGrid', 'items': [
            {'icon': 'add', 'label': 'Add income', 'target': 'add_income'},
            {'icon': 'cart', 'label': 'Add expense', 'target': 'add_expense'},
            {'icon': 'list', 'label': 'Transactions', 'target': 'transactions'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add_income', 'Add income', {
        'type': 'form', 'collection': 'income', 'submitLabel': 'Save', 'successMessage': 'Income added!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'source', 'label': 'Source', 'type': 'text'},
          {'id': 'amount', 'label': 'Amount (\$)', 'type': 'number'},
        ],
      }),
      _custom('add_expense', 'Add expense', {
        'type': 'form', 'collection': 'expenses', 'submitLabel': 'Save', 'successMessage': 'Expense added!', 'navigateAfter': 'transactions',
        'fields': [
          {'id': 'category', 'label': 'Category', 'type': 'text'},
          {'id': 'amount', 'label': 'Amount (\$)', 'type': 'number'},
        ],
      }),
      _custom('transactions', 'Transactions', {
        'type': 'dataList', 'collection': 'expenses', 'titleField': 'category', 'subtitleField': 'amount',
        'emptyText': 'No expenses logged yet.', 'addTarget': 'add_expense', 'addLabel': 'Add expense', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '💰'),
  ),
  // Job Board — dataList + itemActions "Apply"
  NgmyAppTemplate(
    id: 'job_board',
    name: 'Job Board',
    description: 'Post roles, track applicants.',
    icon: '💼',
    themeColor: 0xFF334155,
    build: (o) => _base(o, 'WorkBoard', 'Post roles and track who applies', 0xFF334155, [
      _custom('home', 'Open roles', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '💼', 'title': 'Open roles', 'subtitle': 'Tap Apply — no retyping the role details'},
          {'type': 'stat', 'collection': 'jobs', 'label': 'Open roles'},
          {'type': 'dataList', 'collection': 'jobs', 'titleField': 'title', 'subtitleField': 'company',
            'emptyText': 'No roles posted yet.', 'addTarget': 'add_job', 'addLabel': 'Post a role', 'allowDelete': true,
            'itemActions': [
              {'label': 'Apply', 'targetCollection': 'applications', 'copyFields': {'title': 'jobTitle', 'company': 'company'}, 'extraFields': {}, 'removeSource': false, 'successMessage': 'Application sent!'},
            ],
          },
        ],
      }),
      _custom('add_job', 'Post a role', {
        'type': 'form', 'collection': 'jobs', 'submitLabel': 'Post role', 'successMessage': 'Role posted!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'title', 'label': 'Role title', 'type': 'text'},
          {'id': 'company', 'label': 'Company', 'type': 'text'},
          {'id': 'pay', 'label': 'Pay range', 'type': 'text'},
        ],
      }),
      _custom('applications', 'Applications', {
        'type': 'dataList', 'collection': 'applications', 'titleField': 'jobTitle', 'subtitleField': 'company',
        'emptyText': 'No applications yet.', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '💼', shell: {
      'bottomNav': [
        {'icon': 'home', 'label': 'Roles', 'target': 'home'},
        {'icon': 'inbox', 'label': 'Applications', 'target': 'applications'},
        {'icon': 'profile', 'label': 'Settings', 'target': 'settings'},
      ],
    }),
  ),
  // Community Forum — socialFeed-based, not menu hub
  NgmyAppTemplate(
    id: 'community_forum',
    name: 'Community Forum',
    description: 'Discussion feed, posts & replies.',
    icon: '🗣️',
    themeColor: 0xFFA21CAF,
    build: (o) => _base(o, 'TownHall', 'Where the community talks', 0xFFA21CAF, [
      _custom('feed', 'Discussions', {'type': 'socialFeed', 'collection': 'threads'}, fullBleed: true, hideAppBar: true),
      _custom('create', 'Start a thread', {
        'type': 'postComposer', 'mode': 'post', 'collection': 'threads', 'captionField': 'body', 'navigateAfter': 'feed',
      }),
      _custom('profile', 'Profile', {'type': 'profile'}),
      _custom('settings', 'Settings', _settingsLayout('feed')),
    ], appIcon: '🗣️', shell: {
      'bottomNav': [
        {'icon': 'feed', 'label': 'Feed', 'target': 'feed'},
        {'icon': 'create', 'label': 'Post', 'target': 'create'},
        {'icon': 'profile', 'label': 'Profile', 'target': 'profile'},
      ],
    }),
  ),
  // Podcast / Audio Hub — tabs of episodes, link-based playback
  NgmyAppTemplate(
    id: 'podcast_hub',
    name: 'Podcast Hub',
    description: 'Episodes, categories & playback links.',
    icon: '🎙️',
    themeColor: 0xFF1F2937,
    build: (o) => _base(o, 'AirWave', 'Your show, organized', 0xFF1F2937, [
      _custom('home', 'Episodes', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🎙️', 'title': 'AirWave', 'subtitle': 'New episodes & fan favorites'},
          {'type': 'tabs', 'tabs': [
            {'label': 'Latest', 'layout': {'type': 'dataList', 'collection': 'episodes', 'titleField': 'title', 'subtitleField': 'duration', 'urlField': 'audioUrl', 'emptyText': 'No episodes yet.', 'addTarget': 'add_episode', 'addLabel': 'Add episode', 'allowDelete': true}},
            {'label': 'About', 'layout': {'type': 'column', 'children': [
              {'type': 'text', 'text': 'About this show', 'style': 'title'},
              {'type': 'text', 'text': 'Add episodes with a link — listeners tap to play.', 'style': 'body'},
            ]}},
          ]},
        ],
      }),
      _custom('add_episode', 'Add episode', {
        'type': 'form', 'collection': 'episodes', 'submitLabel': 'Publish', 'successMessage': 'Episode published!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'title', 'label': 'Episode title', 'type': 'text'},
          {'id': 'duration', 'label': 'Duration', 'type': 'text'},
          {'id': 'audioUrl', 'label': 'Audio link', 'type': 'text'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🎙️'),
  ),
  // Event Ticketing — dataList of events + RSVP + QR ticket code
  NgmyAppTemplate(
    id: 'event_tickets',
    name: 'Event Ticketing',
    description: 'Events, RSVPs & shareable QR codes.',
    icon: '🎫',
    themeColor: 0xFFF59E0B,
    build: (o) => _base(o, 'TicketBox', 'Sell out your next event', 0xFFF59E0B, [
      _custom('home', 'Events', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🎫', 'title': 'Upcoming events', 'subtitle': 'RSVP and share a ticket code'},
          {'type': 'dataList', 'collection': 'events', 'titleField': 'name', 'subtitleField': 'date',
            'emptyText': 'No events yet.', 'addTarget': 'add_event', 'addLabel': 'Add event', 'allowDelete': true},
          {'type': 'menuGrid', 'items': [
            {'icon': 'add', 'label': 'RSVP', 'target': 'rsvp'},
            {'icon': 'star', 'label': 'My ticket', 'target': 'ticket'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add_event', 'Add event', {
        'type': 'form', 'collection': 'events', 'submitLabel': 'Save event', 'successMessage': 'Event added!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Event name', 'type': 'text'},
          {'id': 'date', 'label': 'Date & time', 'type': 'text'},
          {'id': 'venue', 'label': 'Venue', 'type': 'text'},
        ],
      }),
      _custom('rsvp', 'RSVP', {
        'type': 'form', 'collection': 'tickets', 'submitLabel': 'RSVP', 'successMessage': 'You\'re on the list!', 'navigateAfter': 'ticket',
        'fields': [
          {'id': 'event', 'label': 'Event name', 'type': 'text'},
          {'id': 'attendee', 'label': 'Your name', 'type': 'text'},
          {'id': 'email', 'label': 'Email', 'type': 'email'},
        ],
      }),
      _custom('ticket', 'My ticket', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Show this at the door', 'style': 'title'},
          {'type': 'qrGenerator', 'mode': 'text', 'title': 'Ticket code', 'placeholder': 'e.g. your confirmation code', 'accentColor': '#F59E0B'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🎫'),
  ),
  // Donation / Nonprofit — sumField stat + shareable QR
  NgmyAppTemplate(
    id: 'donate_nonprofit',
    name: 'Giving Campaign',
    description: 'Raise funds, track donors, share a link.',
    icon: '❤️',
    badge: 'New',
    themeColor: 0xFFE11D48,
    build: (o) => _base(o, 'GiveFlow', 'Every donation counts', 0xFFE11D48, [
      _custom('home', 'Campaign', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '❤️', 'title': 'Help us reach our goal', 'subtitle': 'Thank you for giving'},
          {'type': 'stat', 'collection': 'donations', 'sumField': 'amount', 'prefix': '\$', 'label': 'Raised so far'},
          {'type': 'progress', 'label': 'Goal progress', 'value': 0.7},
          {'type': 'menuGrid', 'style': 'neon', 'items': [
            {'icon': 'wallet', 'label': 'Donate', 'target': 'donate'},
            {'icon': 'list', 'label': 'Donors', 'target': 'donors'},
            {'icon': 'share', 'label': 'Share', 'target': 'share'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('donate', 'Donate', {
        'type': 'form', 'collection': 'donations', 'submitLabel': 'Give now', 'successMessage': 'Thank you for your gift!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Your name', 'type': 'text'},
          {'id': 'amount', 'label': 'Amount (\$)', 'type': 'number'},
          {'id': 'message', 'label': 'Message (optional)', 'type': 'textarea'},
        ],
      }),
      _custom('donors', 'Donors', {
        'type': 'dataList', 'collection': 'donations', 'titleField': 'name', 'subtitleField': 'amount',
        'emptyText': 'No donations yet — be the first!', 'allowDelete': false,
      }),
      _custom('share', 'Share the campaign', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Spread the word', 'style': 'title'},
          {'type': 'qrGenerator', 'mode': 'url', 'title': 'Campaign link', 'placeholder': 'https://yourcampaign.org', 'accentColor': '#E11D48'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '❤️'),
  ),
  // Class / Coaching Booking — session checklist, not menu-first
  NgmyAppTemplate(
    id: 'coaching_booking',
    name: 'Coaching Studio',
    description: 'Sessions, bookings & client roster.',
    icon: '🧘',
    themeColor: 0xFF7E22CE,
    build: (o) => _base(o, 'CoachFlow', 'Run your sessions like a pro', 0xFF7E22CE, [
      _custom('home', 'Today', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🧘', 'title': 'Today\'s sessions', 'subtitle': 'Check off as you complete them'},
          {'type': 'workoutPlan', 'planId': 'today_sessions', 'title': 'Schedule', 'exercises': [
            {'id': 's1', 'name': 'Morning session', 'sets': '9:00 AM'},
            {'id': 's2', 'name': 'Afternoon session', 'sets': '2:00 PM'},
            {'id': 's3', 'name': 'Evening session', 'sets': '6:00 PM'},
          ]},
          {'type': 'menuGrid', 'items': [
            {'icon': 'calendar', 'label': 'Book session', 'target': 'add_booking'},
            {'icon': 'list', 'label': 'Bookings', 'target': 'bookings'},
            {'icon': 'person', 'label': 'Clients', 'target': 'add_client'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add_booking', 'Book a session', {
        'type': 'form', 'collection': 'bookings', 'submitLabel': 'Book it', 'successMessage': 'Session booked!', 'navigateAfter': 'bookings',
        'fields': [
          {'id': 'client', 'label': 'Client name', 'type': 'text'},
          {'id': 'sessionType', 'label': 'Session type', 'type': 'text'},
          {'id': 'date', 'label': 'Date & time', 'type': 'text'},
        ],
      }),
      _custom('bookings', 'Bookings', {
        'type': 'dataList', 'collection': 'bookings', 'titleField': 'client', 'subtitleField': 'sessionType',
        'emptyText': 'No sessions booked yet.', 'addTarget': 'add_booking', 'addLabel': 'Book session', 'allowDelete': true,
      }),
      _custom('add_client', 'Add client', {
        'type': 'form', 'collection': 'clients', 'submitLabel': 'Save client', 'successMessage': 'Client added!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Client name', 'type': 'text'},
          {'id': 'phone', 'label': 'Phone', 'type': 'text'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🧘'),
  ),
  // Photography Portfolio — image-led, not menu hub
  NgmyAppTemplate(
    id: 'photo_portfolio',
    name: 'Photo Portfolio',
    description: 'Showcase galleries & booking requests.',
    icon: '📷',
    themeColor: 0xFF111827,
    build: (o) => _base(o, 'Frame & Light', 'Photography that speaks for itself', 0xFF111827, [
      _custom('home', 'Portfolio', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '📷', 'title': 'Frame & Light', 'subtitle': 'Recent work'},
          {'type': 'image', 'url': ''},
          {'type': 'dataList', 'collection': 'galleries', 'titleField': 'title', 'subtitleField': 'description',
            'emptyText': 'No galleries yet — add your first shoot.', 'addTarget': 'add_gallery', 'addLabel': 'Add gallery', 'allowDelete': true},
          {'type': 'button', 'label': 'Book a shoot', 'target': 'contact'},
        ],
      }),
      _custom('add_gallery', 'Add gallery', {
        'type': 'form', 'collection': 'galleries', 'submitLabel': 'Save gallery', 'successMessage': 'Gallery added!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'title', 'label': 'Gallery title', 'type': 'text'},
          {'id': 'coverUrl', 'label': 'Cover image URL', 'type': 'text'},
          {'id': 'description', 'label': 'Description', 'type': 'textarea'},
        ],
      }),
      _custom('contact', 'Book a shoot', {
        'type': 'column',
        'children': [
          {'type': 'contact', 'name': 'Booking', 'email': 'hello@example.com'},
          {'type': 'form', 'collection': 'inquiries', 'submitLabel': 'Send request', 'successMessage': 'Request sent!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Your name', 'type': 'text'},
              {'id': 'date', 'label': 'Preferred date', 'type': 'text'},
              {'id': 'details', 'label': 'What kind of shoot?', 'type': 'textarea'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '📷'),
  ),
  // Recipe Box — dataList + textarea-heavy form
  NgmyAppTemplate(
    id: 'recipe_box',
    name: 'Recipe Box',
    description: 'Save recipes, ingredients & steps.',
    icon: '🍳',
    themeColor: 0xFFEA580C,
    build: (o) => _base(o, 'Recipe Box', 'Your kitchen, organized', 0xFFEA580C, [
      _custom('home', 'Recipes', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🍳', 'title': 'Your recipes', 'subtitle': 'Save and find them anytime'},
          {'type': 'dataList', 'collection': 'recipes', 'titleField': 'name', 'subtitleField': 'cookTime',
            'emptyText': 'No recipes saved yet.', 'addTarget': 'add_recipe', 'addLabel': 'Add recipe', 'allowDelete': true},
        ],
      }),
      _custom('add_recipe', 'Add recipe', {
        'type': 'form', 'collection': 'recipes', 'submitLabel': 'Save recipe', 'successMessage': 'Recipe saved!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Recipe name', 'type': 'text'},
          {'id': 'cookTime', 'label': 'Cook time', 'type': 'text'},
          {'id': 'ingredients', 'label': 'Ingredients', 'type': 'textarea'},
          {'id': 'steps', 'label': 'Steps', 'type': 'textarea'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🍳'),
  ),
  // Pet Care Tracker — checklist + visit log
  NgmyAppTemplate(
    id: 'pet_care',
    name: 'Pet Care Tracker',
    description: 'Daily care, vet visits & reminders.',
    icon: '🐾',
    themeColor: 0xFF65A30D,
    build: (o) => _base(o, 'PawLog', 'Never miss a thing', 0xFF65A30D, [
      _custom('home', 'Daily care', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🐾', 'title': 'Daily care', 'subtitle': 'Check off today\'s routine'},
          {'type': 'checklist', 'id': 'pet_daily', 'items': [
            {'id': 'feed', 'label': 'Feed'},
            {'id': 'walk', 'label': 'Walk'},
            {'id': 'meds', 'label': 'Medicine'},
            {'id': 'water', 'label': 'Fresh water'},
          ]},
          {'type': 'stat', 'collection': 'vet_visits', 'label': 'Vet visits logged'},
          {'type': 'button', 'label': 'Log vet visit', 'target': 'log_visit'},
        ],
      }),
      _custom('log_visit', 'Log vet visit', {
        'type': 'form', 'collection': 'vet_visits', 'submitLabel': 'Save', 'successMessage': 'Visit logged!', 'navigateAfter': 'visits',
        'fields': [
          {'id': 'petName', 'label': 'Pet name', 'type': 'text'},
          {'id': 'reason', 'label': 'Reason for visit', 'type': 'text'},
          {'id': 'date', 'label': 'Date', 'type': 'text'},
        ],
      }),
      _custom('visits', 'Vet visits', {
        'type': 'dataList', 'collection': 'vet_visits', 'titleField': 'petName', 'subtitleField': 'reason',
        'emptyText': 'No visits logged yet.', 'addTarget': 'log_visit', 'addLabel': 'Log vet visit', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🐾'),
  ),
  // Freelancer Invoicing — invoiceBuilder-first, distinct from CRM tabs layout
  NgmyAppTemplate(
    id: 'freelance_invoicing',
    name: 'Freelancer Invoicing',
    description: 'Create invoices, track clients & income.',
    icon: '🧾',
    themeColor: 0xFF1E3A8A,
    build: (o) => _base(o, 'InvoiceFlow', 'Get paid, stay organized', 0xFF1E3A8A, [
      _custom('home', 'Dashboard', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your business', 'style': 'title'},
          {'type': 'stat', 'collection': 'invoices', 'sumField': 'amount', 'prefix': '\$', 'label': 'Invoiced'},
          {'type': 'menuGrid', 'items': [
            {'icon': 'add', 'label': 'New invoice', 'target': 'new_invoice'},
            {'icon': 'person', 'label': 'Clients', 'target': 'add_client'},
            {'icon': 'list', 'label': 'Client list', 'target': 'clients'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('new_invoice', 'New invoice', {'type': 'invoiceBuilder', 'collection': 'invoices', 'title': 'New Invoice'}),
      _custom('add_client', 'Add client', {
        'type': 'form', 'collection': 'clients', 'submitLabel': 'Save client', 'successMessage': 'Client added!', 'navigateAfter': 'clients',
        'fields': [
          {'id': 'name', 'label': 'Client name', 'type': 'text'},
          {'id': 'email', 'label': 'Email', 'type': 'email'},
        ],
      }),
      _custom('clients', 'Clients', {
        'type': 'dataList', 'collection': 'clients', 'titleField': 'name', 'subtitleField': 'email',
        'emptyText': 'No clients yet.', 'addTarget': 'add_client', 'addLabel': 'Add client', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🧾'),
  ),
  // Score Tracker — stat + leaderboard dataList
  NgmyAppTemplate(
    id: 'trivia_game',
    name: 'Trivia Night Scorekeeper',
    description: 'Log rounds, track scores & leaderboard.',
    icon: '🏆',
    themeColor: 0xFFDB2777,
    build: (o) => _base(o, 'Trivia Night', 'Keep score, settle the debate', 0xFFDB2777, [
      _custom('home', 'Leaderboard', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🏆', 'title': 'Trivia Night', 'subtitle': 'Log every round'},
          {'type': 'menuGrid', 'style': 'pulse', 'items': [
            {'icon': 'add', 'label': 'Log round', 'target': 'log_round'},
            {'icon': 'star', 'label': 'Leaderboard', 'target': 'leaderboard'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('log_round', 'Log a round', {
        'type': 'form', 'collection': 'scores', 'submitLabel': 'Save score', 'successMessage': 'Score logged!', 'navigateAfter': 'leaderboard',
        'fields': [
          {'id': 'playerName', 'label': 'Player / team name', 'type': 'text'},
          {'id': 'score', 'label': 'Round score', 'type': 'number'},
        ],
      }),
      _custom('leaderboard', 'Leaderboard', {
        'type': 'column',
        'children': [
          {'type': 'stat', 'collection': 'scores', 'sumField': 'score', 'label': 'Total points scored'},
          {'type': 'dataList', 'collection': 'scores', 'titleField': 'playerName', 'subtitleField': 'score',
            'emptyText': 'No rounds logged yet.', 'addTarget': 'log_round', 'addLabel': 'Log round', 'allowDelete': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🏆'),
  ),
  // Real Estate Listings — mapView-first
  NgmyAppTemplate(
    id: 'real_estate',
    name: 'Real Estate Listings',
    description: 'Map of properties, inquiries & saves.',
    icon: '🏠',
    badge: 'New',
    themeColor: 0xFF0C4A6E,
    build: (o) => _base(o, 'HomeFinder', 'Properties on the map', 0xFF0C4A6E, [
      _custom('home', 'Map', {
        'type': 'mapView', 'collection': 'properties', 'titleField': 'address', 'subtitleField': 'price',
        'latField': 'lat', 'lngField': 'lng', 'height': 440, 'centerLat': 39.8283, 'centerLng': -98.5795,
        'placeholder': 'Search properties…',
      }, fullBleed: true, hideAppBar: true),
      _custom('add_property', 'List a property', {
        'type': 'form', 'collection': 'properties', 'submitLabel': 'List it', 'successMessage': 'Property listed!', 'navigateAfter': 'listings',
        'fields': [
          {'id': 'address', 'label': 'Address', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'bedrooms', 'label': 'Bedrooms', 'type': 'number'},
          {'id': 'lat', 'label': 'Latitude', 'type': 'number'},
          {'id': 'lng', 'label': 'Longitude', 'type': 'number'},
        ],
      }),
      _custom('listings', 'Listings', {
        'type': 'dataList', 'collection': 'properties', 'titleField': 'address', 'subtitleField': 'price',
        'emptyText': 'No properties listed yet.', 'addTarget': 'add_property', 'addLabel': 'List a property', 'allowDelete': true,
      }),
      _custom('inquire', 'Inquire', {
        'type': 'form', 'collection': 'inquiries', 'submitLabel': 'Send inquiry', 'successMessage': 'Inquiry sent!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Your name', 'type': 'text'},
          {'id': 'phone', 'label': 'Phone', 'type': 'text'},
          {'id': 'message', 'label': 'Message', 'type': 'textarea'},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🏠', shell: {
      'bottomNav': [
        {'icon': 'home', 'label': 'Map', 'target': 'home'},
        {'icon': 'search', 'label': 'Listings', 'target': 'listings'},
        {'icon': 'add', 'label': 'List', 'target': 'add_property'},
        {'icon': 'inbox', 'label': 'Inquire', 'target': 'inquire'},
        {'icon': 'profile', 'label': 'Settings', 'target': 'settings'},
      ],
    }),
  ),
  // Restaurant Menu & Orders — tabs by category, itemActions "Add to order"
  NgmyAppTemplate(
    id: 'restaurant_menu',
    name: 'Restaurant Menu & Orders',
    description: 'Menu by category, tap to add to order.',
    icon: '🍽️',
    themeColor: 0xFFB91C1C,
    build: (o) => _base(o, 'TableFlow', 'Menu in, order out', 0xFFB91C1C, [
      _custom('home', 'Menu', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🍽️', 'title': 'Today\'s menu', 'subtitle': 'Tap "Add to order" — no retyping'},
          {'type': 'tabs', 'tabs': [
            {'label': 'Starters', 'layout': {'type': 'dataList', 'collection': 'starters', 'titleField': 'name', 'subtitleField': 'price', 'addTarget': 'add_starter', 'addLabel': 'Add starter', 'allowDelete': true, 'itemActions': [
              {'label': 'Add to order', 'targetCollection': 'orders', 'copyFields': {'name': 'item', 'price': 'amount'}, 'extraFields': {}, 'removeSource': false, 'successMessage': 'Added to order!'},
            ]}},
            {'label': 'Mains', 'layout': {'type': 'dataList', 'collection': 'mains', 'titleField': 'name', 'subtitleField': 'price', 'addTarget': 'add_main', 'addLabel': 'Add main', 'allowDelete': true, 'itemActions': [
              {'label': 'Add to order', 'targetCollection': 'orders', 'copyFields': {'name': 'item', 'price': 'amount'}, 'extraFields': {}, 'removeSource': false, 'successMessage': 'Added to order!'},
            ]}},
            {'label': 'Desserts', 'layout': {'type': 'dataList', 'collection': 'desserts', 'titleField': 'name', 'subtitleField': 'price', 'addTarget': 'add_dessert', 'addLabel': 'Add dessert', 'allowDelete': true, 'itemActions': [
              {'label': 'Add to order', 'targetCollection': 'orders', 'copyFields': {'name': 'item', 'price': 'amount'}, 'extraFields': {}, 'removeSource': false, 'successMessage': 'Added to order!'},
            ]}},
          ]},
        ],
      }),
      _custom('add_starter', 'Add starter', {
        'type': 'form', 'collection': 'starters', 'submitLabel': 'Save', 'successMessage': 'Added to menu!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Dish name', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'description', 'label': 'Description', 'type': 'textarea'},
        ],
      }),
      _custom('add_main', 'Add main', {
        'type': 'form', 'collection': 'mains', 'submitLabel': 'Save', 'successMessage': 'Added to menu!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Dish name', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'description', 'label': 'Description', 'type': 'textarea'},
        ],
      }),
      _custom('add_dessert', 'Add dessert', {
        'type': 'form', 'collection': 'desserts', 'submitLabel': 'Save', 'successMessage': 'Added to menu!', 'navigateAfter': 'home',
        'fields': [
          {'id': 'name', 'label': 'Dish name', 'type': 'text'},
          {'id': 'price', 'label': 'Price (\$)', 'type': 'number'},
          {'id': 'description', 'label': 'Description', 'type': 'textarea'},
        ],
      }),
      _custom('orders', 'Current order', {
        'type': 'column',
        'children': [
          {'type': 'stat', 'collection': 'orders', 'sumField': 'amount', 'prefix': '\$', 'label': 'Order total'},
          {'type': 'dataList', 'collection': 'orders', 'titleField': 'item', 'subtitleField': 'amount', 'emptyText': 'No items added yet.', 'allowDelete': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🍽️', shell: {
      'bottomNav': [
        {'icon': 'home', 'label': 'Menu', 'target': 'home'},
        {'icon': 'create', 'label': 'Order', 'target': 'orders'},
        {'icon': 'profile', 'label': 'Settings', 'target': 'settings'},
      ],
    }),
  ),
  // Membership Manager — itemActions "Renew", a third distinct use of linked records
  NgmyAppTemplate(
    id: 'membership_manager',
    name: 'Membership Manager',
    description: 'Members, renewals & revenue.',
    icon: '🪪',
    themeColor: 0xFF047857,
    build: (o) => _base(o, 'MemberFlow', 'Memberships, simplified', 0xFF047857, [
      _custom('home', 'Dashboard', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Membership overview', 'style': 'title'},
          {'type': 'stat', 'collection': 'members', 'label': 'Active members'},
          {'type': 'stat', 'collection': 'payments', 'sumField': 'amount', 'prefix': '\$', 'label': 'Revenue collected'},
          {'type': 'menuGrid', 'style': 'hologram', 'items': [
            {'icon': 'add', 'label': 'Add member', 'target': 'add_member'},
            {'icon': 'list', 'label': 'Members', 'target': 'members'},
            {'icon': 'history', 'label': 'Payments', 'target': 'payments'},
            {'icon': 'settings', 'label': 'Settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add_member', 'Add member', {
        'type': 'form', 'collection': 'members', 'submitLabel': 'Save member', 'successMessage': 'Member added!', 'navigateAfter': 'members',
        'fields': [
          {'id': 'name', 'label': 'Member name', 'type': 'text'},
          {'id': 'plan', 'label': 'Plan', 'type': 'text'},
          {'id': 'fee', 'label': 'Monthly fee (\$)', 'type': 'number'},
        ],
      }),
      _custom('members', 'Members', {
        'type': 'dataList', 'collection': 'members', 'titleField': 'name', 'subtitleField': 'plan',
        'emptyText': 'No members yet.', 'addTarget': 'add_member', 'addLabel': 'Add member', 'allowDelete': true,
        'itemActions': [
          {'label': 'Renew', 'targetCollection': 'payments', 'copyFields': {'name': 'member', 'fee': 'amount'}, 'extraFields': {}, 'removeSource': false, 'successMessage': 'Payment logged!'},
        ],
      }),
      _custom('payments', 'Payments', {
        'type': 'dataList', 'collection': 'payments', 'titleField': 'member', 'subtitleField': 'amount',
        'emptyText': 'No payments logged yet.', 'allowDelete': true,
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🪪'),
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
