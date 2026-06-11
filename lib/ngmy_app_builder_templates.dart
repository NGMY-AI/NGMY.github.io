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

NgmyAppProject _base(String owner, String name, String tagline, int color, List<NgmyAppScreen> screens, {String appIcon = ''}) {
  final now = DateTime.now().toUtc().toIso8601String();
  return NgmyAppProject(
    id: 'app_${DateTime.now().millisecondsSinceEpoch}',
    name: name,
    tagline: tagline,
    ownerEmail: owner.toLowerCase().trim(),
    themeColor: color,
    screens: screens,
    appIcon: appIcon.isNotEmpty ? appIcon : '✨',
    createdAt: now,
    updatedAt: now,
  );
}

NgmyAppScreen _custom(String id, String title, Map<String, dynamic> layout) {
  return NgmyAppScreen(id: id, title: title, kind: NgmyAppScreenKind.custom, data: {'layout': layout});
}

Map<String, dynamic> _home({
  required String emoji,
  required String title,
  required String subtitle,
  required String statCollection,
  required String statLabel,
  required List<Map<String, dynamic>> menuItems,
  String? ctaLabel,
  String? ctaTarget,
}) {
  return {
    'type': 'column',
    'children': [
      {'type': 'hero', 'emoji': emoji, 'title': title, 'subtitle': subtitle},
      {'type': 'spacer', 'height': 10},
      {'type': 'stat', 'collection': statCollection, 'label': statLabel},
      {'type': 'spacer', 'height': 14},
      {'type': 'menuGrid', 'columns': 2, 'style': 'classic', 'items': menuItems},
      if (ctaLabel != null && ctaTarget != null) ...[
        {'type': 'spacer', 'height': 14},
        {'type': 'button', 'label': ctaLabel, 'target': ctaTarget, 'large': true, 'action': 'navigate'},
      ],
    ],
  };
}

Map<String, dynamic> _settingsLayout() {
  return {
    'type': 'column',
    'children': [
      {'type': 'text', 'text': 'Settings', 'style': 'title'},
      {'type': 'switch', 'setting': 'notifications', 'label': 'Notifications', 'subtitle': 'Order & message alerts', 'default': true},
      {'type': 'switch', 'setting': 'dark_mode', 'label': 'Dark mode', 'subtitle': 'Easier on the eyes at night', 'default': false},
      {'type': 'button', 'label': 'Back home', 'target': 'home'},
    ],
  };
}

final List<NgmyAppTemplate> kNgmyAppTemplates = [
  NgmyAppTemplate(
    id: 'luxe_store',
    name: 'Luxe Store',
    description: 'Modern shop — products, cart, checkout.',
    icon: '🛍️',
    badge: 'Popular',
    themeColor: 0xFF6366F1,
    build: (o) => _base(o, 'Luxe Store', 'Curated products · fast checkout', 0xFF6366F1, [
      _custom('home', 'Home', _home(
        emoji: '🛍️',
        title: 'Luxe Store',
        subtitle: 'Discover · shop · checkout in seconds',
        statCollection: 'products',
        statLabel: 'Products listed',
        menuItems: [
          {'label': 'Shop', 'icon': 'shop', 'target': 'catalog'},
          {'label': 'Sell', 'icon': 'add', 'target': 'add_product'},
          {'label': 'Cart', 'icon': 'cart', 'target': 'cart'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
        ctaLabel: 'Browse new arrivals',
        ctaTarget: 'catalog',
      )),
      _custom('catalog', 'Shop', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Shop catalog', 'style': 'title'},
          {'type': 'dataList', 'collection': 'products', 'titleField': 'name', 'subtitleField': 'price',
            'emptyText': 'No products yet — tap Sell to add your first item.', 'addTarget': 'add_product', 'addLabel': 'Add product', 'allowDelete': true},
        ],
      }),
      _custom('add_product', 'Add Product', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'List a product', 'style': 'title'},
          {'type': 'form', 'collection': 'products', 'submitLabel': 'Publish product', 'successMessage': 'Product live!', 'navigateAfter': 'catalog',
            'fields': [
              {'id': 'name', 'label': 'Product name', 'type': 'text'},
              {'id': 'price', 'label': 'Price', 'type': 'number'},
              {'id': 'desc', 'label': 'Description', 'type': 'text'},
            ]},
        ],
      }),
      _custom('cart', 'Cart', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your cart', 'style': 'title'},
          {'type': 'dataList', 'collection': 'cart', 'titleField': 'name', 'subtitleField': 'price',
            'emptyText': 'Cart is empty.', 'addTarget': 'catalog', 'addLabel': 'Go shopping'},
          {'type': 'button', 'label': 'Checkout', 'target': 'checkout', 'large': true},
        ],
      }),
      _custom('checkout', 'Checkout', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Checkout', 'style': 'title'},
          {'type': 'form', 'collection': 'orders', 'submitLabel': 'Place order', 'successMessage': 'Order confirmed!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Full name', 'type': 'text'},
              {'id': 'address', 'label': 'Delivery address', 'type': 'text'},
              {'id': 'phone', 'label': 'Phone', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '🛍️'),
  ),
  NgmyAppTemplate(
    id: 'creator_hub',
    name: 'Creator Hub',
    description: 'Portfolio, bookings & client intake.',
    icon: '✨',
    badge: 'New',
    themeColor: 0xFFEC4899,
    build: (o) => _base(o, 'Creator Hub', 'Show your work · book clients', 0xFFEC4899, [
      _custom('home', 'Home', _home(
        emoji: '✨',
        title: 'Creator Hub',
        subtitle: 'Portfolio · bookings · client messages',
        statCollection: 'bookings',
        statLabel: 'Bookings',
        menuItems: [
          {'label': 'Portfolio', 'icon': 'shop', 'target': 'portfolio'},
          {'label': 'Book me', 'icon': 'calendar', 'target': 'book'},
          {'label': 'Inbox', 'icon': 'mail', 'target': 'inbox'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
      )),
      _custom('portfolio', 'Portfolio', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🎨', 'title': 'My Work', 'subtitle': 'Projects & case studies'},
          {'type': 'dataList', 'collection': 'works', 'titleField': 'title', 'subtitleField': 'category',
            'emptyText': 'Add your first project.', 'addTarget': 'add_work', 'addLabel': 'Add project', 'allowDelete': true},
        ],
      }),
      _custom('add_work', 'Add Project', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'works', 'submitLabel': 'Save project', 'successMessage': 'Added to portfolio!', 'navigateAfter': 'portfolio',
            'fields': [
              {'id': 'title', 'label': 'Project title', 'type': 'text'},
              {'id': 'category', 'label': 'Category', 'type': 'text'},
              {'id': 'link', 'label': 'Link (optional)', 'type': 'text'},
            ]},
        ],
      }),
      _custom('book', 'Book Session', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Book a session', 'style': 'title'},
          {'type': 'form', 'collection': 'bookings', 'submitLabel': 'Request booking', 'successMessage': 'We will confirm soon!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Your name', 'type': 'text'},
              {'id': 'date', 'label': 'Preferred date', 'type': 'text'},
              {'id': 'notes', 'label': 'Project details', 'type': 'text'},
            ]},
        ],
      }),
      _custom('inbox', 'Inbox', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'messages', 'titleField': 'name', 'subtitleField': 'message',
            'emptyText': 'No messages yet.', 'addTarget': 'contact', 'addLabel': 'New message'},
        ],
      }),
      _custom('contact', 'Contact', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'messages', 'submitLabel': 'Send', 'successMessage': 'Sent!',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '✨'),
  ),
  NgmyAppTemplate(
    id: 'pulse_fitness',
    name: 'Pulse Fitness',
    description: 'Workouts, check-ins & nutrition goals.',
    icon: '💪',
    themeColor: 0xFF10B981,
    build: (o) => _base(o, 'Pulse Fitness', 'Train smarter every day', 0xFF10B981, [
      _custom('home', 'Home', _home(
        emoji: '💪',
        title: 'Pulse Fitness',
        subtitle: 'Plans · progress · daily wins',
        statCollection: 'checkins',
        statLabel: 'Check-ins',
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
          {'type': 'text', 'text': "Today's training", 'style': 'title'},
          {'type': 'workoutPlan', 'planId': 'strength', 'title': 'Strength Circuit', 'exercises': [
            {'id': 'sq', 'name': 'Goblet squats', 'sets': '4×12'},
            {'id': 'pu', 'name': 'Push-ups', 'sets': '3×15'},
            {'id': 'pl', 'name': 'Plank hold', 'sets': '3×45s'},
          ]},
        ],
      }),
      _custom('checkin', 'Check-in', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'checkins', 'submitLabel': 'Log today', 'successMessage': 'Logged!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'weight', 'label': 'Weight', 'type': 'number'},
              {'id': 'energy', 'label': 'Energy 1–10', 'type': 'number'},
              {'id': 'notes', 'label': 'Notes', 'type': 'text'},
            ]},
        ],
      }),
      _custom('nutrition', 'Nutrition', {
        'type': 'column',
        'children': [
          {'type': 'checklist', 'id': 'nutrition', 'items': [
            {'id': 'w', 'label': '8 glasses of water'},
            {'id': 'p', 'label': 'Protein every meal'},
            {'id': 'v', 'label': '3 servings of vegetables'},
          ]},
        ],
      }),
      const NgmyAppScreen(id: 'ai', title: 'AI Coach', kind: NgmyAppScreenKind.aiChat, data: {'actorId': 'builder', 'welcome': 'Ask for workouts, meals, or recovery tips.'}),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '💪'),
  ),
  NgmyAppTemplate(
    id: 'pro_services',
    name: 'Pro Services',
    description: 'Leads, services & client CRM.',
    icon: '💼',
    themeColor: 0xFF0EA5E9,
    build: (o) => _base(o, 'Pro Services', 'Professional services you can trust', 0xFF0EA5E9, [
      _custom('home', 'Home', _home(
        emoji: '💼',
        title: 'Pro Services',
        subtitle: 'Leads · quotes · follow-ups',
        statCollection: 'leads',
        statLabel: 'Active leads',
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
          {'type': 'card', 'children': [
            {'type': 'text', 'text': 'Consulting', 'style': 'title'},
            {'type': 'text', 'text': 'Strategy sessions from \$99/hr', 'style': 'subtitle'},
          ]},
          {'type': 'spacer', 'height': 10},
          {'type': 'card', 'children': [
            {'type': 'text', 'text': 'Design & Build', 'style': 'title'},
            {'type': 'text', 'text': 'Custom quotes for your project', 'style': 'subtitle'},
          ]},
          {'type': 'button', 'label': 'Request quote', 'target': 'contact', 'large': true},
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
          {'type': 'form', 'collection': 'leads', 'submitLabel': 'Send inquiry', 'successMessage': 'Thanks — we will reply soon!', 'navigateAfter': 'leads',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'email', 'label': 'Email', 'type': 'email'},
              {'id': 'message', 'label': 'How can we help?', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '💼'),
  ),
  NgmyAppTemplate(
    id: 'bistro',
    name: 'Bistro',
    description: 'Menu, reservations & orders.',
    icon: '🍽️',
    themeColor: 0xFFF43F5E,
    build: (o) => _base(o, 'Bistro', 'Fresh plates · warm atmosphere', 0xFFF43F5E, [
      _custom('home', 'Home', _home(
        emoji: '🍽️',
        title: 'Bistro',
        subtitle: 'Reserve · dine · takeout',
        statCollection: 'reservations',
        statLabel: 'Reservations',
        menuItems: [
          {'label': 'Menu', 'icon': 'food', 'target': 'menu'},
          {'label': 'Reserve', 'icon': 'calendar', 'target': 'reserve'},
          {'label': 'Orders', 'icon': 'cart', 'target': 'orders'},
          {'label': 'Hours', 'icon': 'info', 'target': 'hours'},
        ],
      )),
      _custom('menu', 'Menu', {
        'type': 'column',
        'children': [
          {'type': 'menuGrid', 'columns': 2, 'style': 'classic', 'items': [
            {'label': 'Starters', 'icon': 'food', 'target': 'reserve'},
            {'label': 'Mains', 'icon': 'food', 'target': 'reserve'},
            {'label': 'Drinks', 'icon': 'food', 'target': 'reserve'},
            {'label': 'Desserts', 'icon': 'food', 'target': 'reserve'},
          ]},
        ],
      }),
      _custom('reserve', 'Reserve', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'reservations', 'submitLabel': 'Book table', 'successMessage': 'Reservation received!', 'navigateAfter': 'orders',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'party', 'label': 'Party size', 'type': 'number'},
              {'id': 'time', 'label': 'Time', 'type': 'text'},
            ]},
        ],
      }),
      _custom('orders', 'Reservations', {
        'type': 'dataList', 'collection': 'reservations', 'titleField': 'name', 'subtitleField': 'time',
        'emptyText': 'No reservations yet.', 'addTarget': 'reserve', 'addLabel': 'New reservation',
      }),
      _custom('hours', 'Visit Us', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🕐', 'title': 'Hours & Location', 'subtitle': 'Tue–Sun 11am – 10pm'},
          {'type': 'text', 'text': '123 Main Street · Atlanta, GA', 'style': 'subtitle'},
        ],
      }),
    ], appIcon: '🍽️'),
  ),
  NgmyAppTemplate(
    id: 'gather_venue',
    name: 'Gather Venue',
    description: 'Event spaces & venue management.',
    icon: '🏛️',
    themeColor: 0xFF8B5CF6,
    build: (o) => _base(o, 'Gather Venue', 'Host unforgettable events', 0xFF8B5CF6, [
      _custom('home', 'Home', _home(
        emoji: '🏛️',
        title: 'Gather Venue',
        subtitle: 'Spaces · capacity · bookings',
        statCollection: 'venues',
        statLabel: 'Venues listed',
        menuItems: [
          {'label': 'Venues', 'icon': 'venue', 'target': 'venues'},
          {'label': 'Add space', 'icon': 'add', 'target': 'add_venue'},
          {'label': 'Inquiries', 'icon': 'mail', 'target': 'inquiries'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
      )),
      _custom('venues', 'Venues', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'venues', 'titleField': 'name', 'subtitleField': 'capacity',
            'emptyText': 'Add your first venue.', 'addTarget': 'add_venue', 'addLabel': 'Add venue', 'allowDelete': true},
        ],
      }),
      _custom('add_venue', 'Add Venue', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'venues', 'submitLabel': 'Save venue', 'successMessage': 'Venue saved!', 'navigateAfter': 'venues',
            'fields': [
              {'id': 'name', 'label': 'Venue name', 'type': 'text'},
              {'id': 'capacity', 'label': 'Capacity', 'type': 'number'},
              {'id': 'address', 'label': 'Address', 'type': 'text'},
            ]},
        ],
      }),
      _custom('inquiries', 'Inquiries', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'inquiries', 'submitLabel': 'Submit inquiry', 'successMessage': 'Sent!',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'event', 'label': 'Event type', 'type': 'text'},
              {'id': 'date', 'label': 'Date', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '🏛️'),
  ),
  NgmyAppTemplate(
    id: 'community',
    name: 'Community',
    description: 'Posts, members & group settings.',
    icon: '🌐',
    themeColor: 0xFFF59E0B,
    build: (o) => _base(o, 'Community', 'Connect · share · grow together', 0xFFF59E0B, [
      _custom('home', 'Home', _home(
        emoji: '🌐',
        title: 'Community',
        subtitle: 'Feed · members · events',
        statCollection: 'posts',
        statLabel: 'Posts shared',
        menuItems: [
          {'label': 'Feed', 'icon': 'mail', 'target': 'feed'},
          {'label': 'New post', 'icon': 'add', 'target': 'new_post'},
          {'label': 'Members', 'icon': 'home', 'target': 'members'},
          {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
        ],
      )),
      _custom('feed', 'Feed', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'posts', 'titleField': 'title', 'subtitleField': 'author',
            'emptyText': 'Be the first to post!', 'addTarget': 'new_post', 'addLabel': 'Create post', 'allowDelete': true},
        ],
      }),
      _custom('new_post', 'New Post', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'posts', 'submitLabel': 'Publish', 'successMessage': 'Posted!', 'navigateAfter': 'feed',
            'fields': [
              {'id': 'title', 'label': 'Title', 'type': 'text'},
              {'id': 'author', 'label': 'Your name', 'type': 'text'},
              {'id': 'body', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
      _custom('members', 'Members', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'members', 'titleField': 'name', 'subtitleField': 'role',
            'emptyText': 'No members yet.', 'addTarget': 'join', 'addLabel': 'Join community'},
        ],
      }),
      _custom('join', 'Join', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'members', 'submitLabel': 'Join', 'successMessage': 'Welcome!',
            'fields': [
              {'id': 'name', 'label': 'Display name', 'type': 'text'},
              {'id': 'role', 'label': 'Interest', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout()),
    ], appIcon: '🌐'),
  ),
  NgmyAppTemplate(
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start fresh — build anything with AI.',
    icon: '🚀',
    themeColor: 0xFF6366F1,
    build: (o) => NgmyAppProject.blank(ownerEmail: o).copyWith(appIcon: '🚀'),
  ),
];
