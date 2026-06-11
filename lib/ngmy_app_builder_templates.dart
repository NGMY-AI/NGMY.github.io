import 'ngmy_app_builder_models.dart';

class NgmyAppTemplate {
  final String id;
  final String name;
  final String description;
  final String icon;
  final int themeColor;
  final NgmyAppProject Function(String ownerEmail) build;

  const NgmyAppTemplate({
    required this.id,
    required this.name,
    required this.description,
    required this.icon,
    required this.themeColor,
    required this.build,
  });
}

NgmyAppProject _base(String owner, String name, String tagline, int color, List<NgmyAppScreen> screens) {
  final now = DateTime.now().toUtc().toIso8601String();
  return NgmyAppProject(
    id: 'app_${DateTime.now().millisecondsSinceEpoch}',
    name: name,
    tagline: tagline,
    ownerEmail: owner.toLowerCase().trim(),
    themeColor: color,
    screens: screens,
    createdAt: now,
    updatedAt: now,
  );
}

NgmyAppScreen _custom(String id, String title, Map<String, dynamic> layout) {
  return NgmyAppScreen(id: id, title: title, kind: NgmyAppScreenKind.custom, data: {'layout': layout});
}

Map<String, dynamic> _homeLayout({
  required String emoji,
  required String title,
  required String subtitle,
  required String statCollection,
  required String statLabel,
  required List<Map<String, dynamic>> menuItems,
}) {
  return {
    'type': 'column',
    'children': [
      {'type': 'hero', 'emoji': emoji, 'title': title, 'subtitle': subtitle},
      {'type': 'spacer', 'height': 8},
      {'type': 'stat', 'collection': statCollection, 'label': statLabel},
      {'type': 'spacer', 'height': 12},
      {'type': 'menuGrid', 'columns': 2, 'items': menuItems},
    ],
  };
}

final List<NgmyAppTemplate> kNgmyAppTemplates = [
  NgmyAppTemplate(
    id: 'venue',
    name: 'Venue Manager',
    description: 'Create venues, manage list, working settings.',
    icon: '🏟️',
    themeColor: 0xFF7C3AED,
    build: (o) => _base(o, 'Venue Manager', 'Create and manage event venues', 0xFF7C3AED, [
      _custom('home', 'Home', _homeLayout(
        emoji: '🏟️',
        title: 'Venue Manager',
        subtitle: 'Create venues, track capacity, manage settings',
        statCollection: 'venues',
        statLabel: 'Venues created',
        menuItems: [
          {'label': 'My Venues', 'icon': 'venue', 'target': 'venues_list'},
          {'label': 'Add Venue', 'icon': 'add', 'target': 'create_venue'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          {'label': 'Contact', 'icon': 'mail', 'target': 'contact'},
        ],
      )),
      _custom('venues_list', 'My Venues', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your venues', 'style': 'title'},
          {'type': 'dataList', 'collection': 'venues', 'titleField': 'name', 'subtitleField': 'address',
            'emptyText': 'No venues yet. Tap Add Venue to create your first one.', 'addTarget': 'create_venue', 'addLabel': 'Add Venue'},
        ],
      }),
      _custom('create_venue', 'Add Venue', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'New venue', 'style': 'title'},
          {'type': 'form', 'collection': 'venues', 'navigateAfter': 'venues_list', 'submitLabel': 'Create Venue', 'successMessage': 'Venue created!',
            'fields': [
              {'id': 'name', 'label': 'Venue name', 'type': 'text'},
              {'id': 'address', 'label': 'Address', 'type': 'text'},
              {'id': 'capacity', 'label': 'Capacity', 'type': 'number'},
              {'id': 'notes', 'label': 'Notes', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'App settings', 'style': 'title'},
          {'type': 'switch', 'setting': 'notifications', 'label': 'Push notifications', 'subtitle': 'Alerts for new bookings', 'default': true},
          {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'subtitle': 'Easier on the eyes at night', 'default': false},
          {'type': 'switch', 'setting': 'auto_sync', 'label': 'Auto-sync', 'subtitle': 'Sync venue data when online', 'default': true},
        ],
      }),
      _custom('contact', 'Contact', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Send us a message', 'style': 'title'},
          {'type': 'form', 'collection': 'messages', 'submitLabel': 'Send message', 'successMessage': 'Message sent!',
            'fields': [
              {'id': 'name', 'label': 'Your name', 'type': 'text'},
              {'id': 'email', 'label': 'Email', 'type': 'email'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'fitness',
    name: 'Fitness Coach',
    description: 'Interactive workouts, check-ins, AI coach.',
    icon: '💪',
    themeColor: 0xFF059669,
    build: (o) => _base(o, 'Fit Coach', 'Train smarter, feel stronger', 0xFF059669, [
      _custom('home', 'Home', _homeLayout(
        emoji: '💪',
        title: 'Fit Coach',
        subtitle: 'Your personal training hub',
        statCollection: 'checkins',
        statLabel: 'Check-ins logged',
        menuItems: [
          {'label': 'Workouts', 'icon': 'fitness', 'target': 'workouts'},
          {'label': 'Check-in', 'icon': 'add', 'target': 'checkin'},
          {'label': 'Nutrition', 'icon': 'food', 'target': 'nutrition'},
          {'label': 'AI Coach', 'icon': 'chat', 'target': 'ai'},
        ],
      )),
      _custom('workouts', 'Workouts', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Choose your plan', 'style': 'title'},
          {'type': 'workoutPlan', 'planId': 'strength', 'title': 'Strength Training', 'exercises': [
            {'id': 'sq', 'name': 'Squats', 'sets': '3x12'},
            {'id': 'bp', 'name': 'Bench Press', 'sets': '3x10'},
            {'id': 'dl', 'name': 'Deadlifts', 'sets': '3x8'},
            {'id': 'row', 'name': 'Barbell Rows', 'sets': '3x10'},
          ]},
          {'type': 'spacer', 'height': 16},
          {'type': 'workoutPlan', 'planId': 'cardio', 'title': 'Cardio Blast', 'exercises': [
            {'id': 'run', 'name': 'Treadmill Run', 'sets': '20 min'},
            {'id': 'bike', 'name': 'Cycling', 'sets': '15 min'},
            {'id': 'jump', 'name': 'Jump Rope', 'sets': '5 min'},
          ]},
        ],
      }),
      _custom('nutrition', 'Nutrition', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Daily nutrition goals', 'style': 'title'},
          {'type': 'checklist', 'id': 'nutrition_daily', 'items': [
            {'id': 'water', 'label': 'Drink 8 glasses of water'},
            {'id': 'protein', 'label': 'Protein with every meal'},
            {'id': 'veggies', 'label': 'Eat 3 servings of vegetables'},
            {'id': 'sleep', 'label': 'Sleep 7+ hours'},
          ]},
        ],
      }),
      _custom('checkin', 'Check-in', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Daily check-in', 'style': 'title'},
          {'type': 'form', 'collection': 'checkins', 'submitLabel': 'Save check-in', 'successMessage': 'Check-in saved!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'weight', 'label': 'Weight (lbs)', 'type': 'number'},
              {'id': 'energy', 'label': 'Energy 1-10', 'type': 'number'},
              {'id': 'notes', 'label': 'How are you feeling?', 'type': 'text'},
            ]},
        ],
      }),
      const NgmyAppScreen(id: 'ai', title: 'AI Coach', kind: NgmyAppScreenKind.aiChat, data: {'actorId': 'architect', 'welcome': 'Ask me for workout or meal ideas.'}),
    ]),
  ),
  NgmyAppTemplate(
    id: 'business',
    name: 'Business',
    description: 'Services, leads, contact — all working.',
    icon: '🏢',
    themeColor: 0xFF2563EB,
    build: (o) => _base(o, 'My Business', 'Professional services you can trust', 0xFF2563EB, [
      _custom('home', 'Home', _homeLayout(
        emoji: '🏢',
        title: 'My Business',
        subtitle: 'Quality service for your needs',
        statCollection: 'leads',
        statLabel: 'Leads received',
        menuItems: [
          {'label': 'Services', 'icon': 'info', 'target': 'services'},
          {'label': 'Leads', 'icon': 'mail', 'target': 'leads'},
          {'label': 'Contact', 'icon': 'phone', 'target': 'contact'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
      )),
      _custom('services', 'Services', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '⭐', 'title': 'Our Services', 'subtitle': 'What we offer'},
          {'type': 'list', 'items': [
            {'label': 'Consulting', 'subtitle': 'From \$99/hr', 'icon': 'star'},
            {'label': 'Design', 'subtitle': 'From \$500', 'icon': 'star'},
            {'label': 'Development', 'subtitle': 'Custom quotes', 'icon': 'star'},
          ]},
        ],
      }),
      _custom('leads', 'Leads', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'leads', 'titleField': 'name', 'subtitleField': 'email',
            'emptyText': 'No leads yet.', 'addTarget': 'contact', 'addLabel': 'Add lead', 'allowDelete': true},
        ],
      }),
      _custom('contact', 'Contact', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'leads', 'submitLabel': 'Send message', 'successMessage': 'Thanks! We will reply soon.', 'navigateAfter': 'leads',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'email', 'label': 'Email', 'type': 'email'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', {
        'type': 'column',
        'children': [
          {'type': 'switch', 'setting': 'email_alerts', 'label': 'Email alerts', 'default': true},
          {'type': 'switch', 'setting': 'auto_reply', 'label': 'Auto-reply to leads', 'default': false},
        ],
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Menu, reservations, hours — interactive.',
    icon: '🍽️',
    themeColor: 0xFFDC2626,
    build: (o) => _base(o, 'My Restaurant', 'Fresh food, great vibes', 0xFFDC2626, [
      _custom('home', 'Home', _homeLayout(
        emoji: '🍽️',
        title: 'My Restaurant',
        subtitle: 'Order, dine in, or reserve',
        statCollection: 'reservations',
        statLabel: 'Reservations',
        menuItems: [
          {'label': 'Menu', 'icon': 'food', 'target': 'food'},
          {'label': 'Reserve', 'icon': 'calendar', 'target': 'reserve'},
          {'label': 'Orders', 'icon': 'cart', 'target': 'orders'},
          {'label': 'Hours', 'icon': 'info', 'target': 'hours'},
        ],
      )),
      _custom('food', 'Menu', {
        'type': 'column',
        'children': [
          {'type': 'list', 'items': [
            {'label': 'Starters', 'subtitle': 'Soup, salad, bruschetta', 'icon': 'food'},
            {'label': 'Mains', 'subtitle': 'Pasta, steak, seafood', 'icon': 'food'},
            {'label': 'Drinks', 'subtitle': 'Wine, cocktails, coffee', 'icon': 'food'},
            {'label': 'Desserts', 'subtitle': 'Cake, ice cream, tiramisu', 'icon': 'food'},
          ]},
        ],
      }),
      _custom('reserve', 'Reserve', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'reservations', 'submitLabel': 'Request table', 'successMessage': 'Reservation received!', 'navigateAfter': 'orders',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'party', 'label': 'Party size', 'type': 'number'},
              {'id': 'time', 'label': 'Preferred time', 'type': 'text'},
            ]},
        ],
      }),
      _custom('orders', 'Reservations', {
        'type': 'dataList', 'collection': 'reservations', 'titleField': 'name', 'subtitleField': 'time',
        'emptyText': 'No reservations yet.', 'addTarget': 'reserve', 'addLabel': 'New reservation',
      }),
      _custom('hours', 'Hours', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🕐', 'title': 'Hours & Location', 'subtitle': 'Mon–Fri 11am–10pm · Sat–Sun 10am–11pm'},
          {'type': 'text', 'text': '123 Main Street, Atlanta GA', 'style': 'subtitle'},
        ],
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'store',
    name: 'Online Store',
    description: 'Products, orders, settings.',
    icon: '🛒',
    themeColor: 0xFFEA580C,
    build: (o) => _base(o, 'My Store', 'Shop our best products', 0xFFEA580C, [
      _custom('home', 'Home', _homeLayout(
        emoji: '🛒',
        title: 'My Store',
        subtitle: 'Browse and order',
        statCollection: 'orders',
        statLabel: 'Orders placed',
        menuItems: [
          {'label': 'Products', 'icon': 'shop', 'target': 'products'},
          {'label': 'Order', 'icon': 'cart', 'target': 'order'},
          {'label': 'My Orders', 'icon': 'mail', 'target': 'orders'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
      )),
      _custom('products', 'Products', {
        'type': 'menuGrid', 'columns': 2, 'items': [
          {'label': 'Product A \$25', 'icon': 'shop', 'target': 'order'},
          {'label': 'Product B \$40', 'icon': 'shop', 'target': 'order'},
          {'label': 'Product C \$15', 'icon': 'shop', 'target': 'order'},
          {'label': 'Product D \$30', 'icon': 'shop', 'target': 'order'},
        ],
      }),
      _custom('order', 'Place Order', {
        'type': 'form', 'collection': 'orders', 'submitLabel': 'Place order', 'successMessage': 'Order placed!', 'navigateAfter': 'orders',
          'fields': [
            {'id': 'product', 'label': 'Product', 'type': 'text'},
            {'id': 'qty', 'label': 'Quantity', 'type': 'number'},
            {'id': 'address', 'label': 'Delivery address', 'type': 'text'},
          ],
      }),
      _custom('orders', 'My Orders', {
        'type': 'dataList', 'collection': 'orders', 'titleField': 'product', 'subtitleField': 'address',
        'emptyText': 'No orders yet.', 'addTarget': 'order', 'addLabel': 'New order',
      }),
      _custom('settings', 'Settings', {
        'type': 'column',
        'children': [
          {'type': 'switch', 'setting': 'order_updates', 'label': 'Order updates', 'default': true},
        ],
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start fresh — ask AI to build anything.',
    icon: '✨',
    themeColor: 0xFF6366F1,
    build: (o) => NgmyAppProject.blank(ownerEmail: o),
  ),
  NgmyAppTemplate(
    id: 'neon_robot',
    name: 'Neon Robot Hub',
    description: 'Glowing reactive neon menu — futuristic control panel.',
    icon: '🤖',
    themeColor: 0xFF38BDF8,
    build: (o) {
      final p = _base(o, 'Neon Robot Hub', 'Reactive AI control center', 0xFF38BDF8, [
        _custom('home', 'Home', {
          'type': 'column',
          'children': [
            {'type': 'hero', 'emoji': '🤖', 'title': 'Neon Robot Hub', 'subtitle': 'Reactive menus · AI powered'},
            {'type': 'spacer', 'height': 12},
            {
              'type': 'menuGrid',
              'style': 'neon',
              'columns': 2,
              'items': [
                {'label': 'Command', 'emoji': '⚡', 'target': 'command'},
                {'label': 'Systems', 'emoji': '🔧', 'target': 'systems'},
                {'label': 'Logs', 'emoji': '📡', 'target': 'logs'},
                {'label': 'Settings', 'emoji': '⚙️', 'target': 'settings'},
              ],
            },
          ],
        }),
        _custom('command', 'Command', {'type': 'text', 'text': 'Send commands to your AI modules.', 'align': 'center'}),
        _custom('systems', 'Systems', {'type': 'dataList', 'collection': 'systems', 'titleField': 'name', 'emptyText': 'No systems yet.', 'addTarget': 'command', 'addLabel': 'Add'}),
        _custom('logs', 'Logs', {'type': 'dataList', 'collection': 'logs', 'titleField': 'event', 'emptyText': 'No logs yet.'}),
        _custom('settings', 'Settings', {'type': 'column', 'children': [{'type': 'switch', 'setting': 'neon_fx', 'label': 'Neon effects', 'default': true}]}),
      ]);
      return p.copyWith(appIcon: '🤖');
    },
  ),
  NgmyAppTemplate(
    id: 'holo_gallery',
    name: 'Hologram Gallery',
    description: 'Holographic menu tiles with depth shimmer.',
    icon: '💎',
    themeColor: 0xFF7C3AED,
    build: (o) {
      final p = _base(o, 'Hologram Gallery', 'Showcase with holographic menus', 0xFF7C3AED, [
        _custom('home', 'Gallery', {
          'type': 'column',
          'children': [
            {'type': 'hero', 'emoji': '💎', 'title': 'Hologram Gallery', 'subtitle': 'Showcase your world'},
            {'type': 'spacer', 'height': 10},
            {
              'type': 'menuGrid',
              'style': 'hologram',
              'columns': 2,
              'items': [
                {'label': 'Portfolio', 'emoji': '🖼️', 'target': 'portfolio'},
                {'label': 'Contact', 'emoji': '📨', 'target': 'contact'},
                {'label': 'Bookings', 'emoji': '📅', 'target': 'bookings'},
                {'label': 'About', 'emoji': '✨', 'target': 'about'},
              ],
            },
          ],
        }),
        _custom('portfolio', 'Portfolio', {'type': 'dataList', 'collection': 'works', 'titleField': 'title', 'emptyText': 'Add your first work.'}),
        _custom('contact', 'Contact', {'type': 'form', 'collection': 'leads', 'submitLabel': 'Send', 'fields': [{'id': 'name', 'label': 'Name', 'type': 'text'}, {'id': 'email', 'label': 'Email', 'type': 'text'}]}),
        _custom('bookings', 'Bookings', {'type': 'form', 'collection': 'bookings', 'submitLabel': 'Book', 'fields': [{'id': 'date', 'label': 'Date', 'type': 'text'}]}),
        _custom('about', 'About', {'type': 'text', 'text': 'Your holographic story starts here.', 'align': 'center'}),
      ]);
      return p.copyWith(appIcon: '💎');
    },
  ),
  NgmyAppTemplate(
    id: 'pulse_ops',
    name: 'Pulse Ops',
    description: 'Pulsing robotic menu — live reactive tiles.',
    icon: '⚡',
    themeColor: 0xFF10B981,
    build: (o) {
      final p = _base(o, 'Pulse Ops', 'Live operations dashboard', 0xFF10B981, [
        _custom('home', 'Ops', {
          'type': 'column',
          'children': [
            {'type': 'hero', 'emoji': '⚡', 'title': 'Pulse Ops', 'subtitle': 'Live reactive command deck'},
            {'type': 'spacer', 'height': 10},
            {
              'type': 'menuGrid',
              'style': 'pulse',
              'columns': 2,
              'items': [
                {'label': 'Tasks', 'emoji': '🎯', 'target': 'tasks'},
                {'label': 'Team', 'emoji': '👥', 'target': 'team'},
                {'label': 'Alerts', 'emoji': '🔔', 'target': 'alerts'},
                {'label': 'Config', 'emoji': '🛠️', 'target': 'config'},
              ],
            },
          ],
        }),
        _custom('tasks', 'Tasks', {'type': 'dataList', 'collection': 'tasks', 'titleField': 'title', 'emptyText': 'No tasks yet.', 'addTarget': 'tasks', 'addLabel': 'Add'}),
        _custom('team', 'Team', {'type': 'text', 'text': 'Your team roster lives here.', 'align': 'center'}),
        _custom('alerts', 'Alerts', {'type': 'dataList', 'collection': 'alerts', 'titleField': 'message', 'emptyText': 'All clear.'}),
        _custom('config', 'Config', {'type': 'column', 'children': [{'type': 'switch', 'setting': 'pulse_fx', 'label': 'Pulse effects', 'default': true}]}),
      ]);
      return p.copyWith(appIcon: '⚡');
    },
  ),
];
