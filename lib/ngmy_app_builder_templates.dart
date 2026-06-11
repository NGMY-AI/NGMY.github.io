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

final List<NgmyAppTemplate> kNgmyAppTemplates = [
  NgmyAppTemplate(
    id: 'qr_studio',
    name: 'QR Code Studio',
    description: 'Live QR for websites & text — scan, save, share.',
    icon: '📱',
    badge: 'Featured',
    themeColor: 0xFF06B6D4,
    build: (o) => _base(o, 'QR Code Studio', 'Generate QR codes for links and text', 0xFF06B6D4, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '📱', 'title': 'QR Code Studio', 'subtitle': 'Website links · plain text · saved codes'},
          {'type': 'menuGrid', 'columns': 2, 'style': 'classic', 'items': [
            {'label': 'Website QR', 'icon': 'shop', 'target': 'url_qr'},
            {'label': 'Text QR', 'icon': 'mail', 'target': 'text_qr'},
            {'label': 'Saved QRs', 'icon': 'venue', 'target': 'saved'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('url_qr', 'Website QR', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Website / link QR', 'style': 'title'},
          {'type': 'text', 'text': 'Type a URL — your QR updates live. Anyone can scan it.', 'style': 'subtitle'},
          {'type': 'qrGenerator', 'mode': 'url', 'placeholder': 'https://your-website.com', 'collection': 'qr_codes', 'allowSave': true, 'saveButtonLabel': 'Save this QR'},
          {'type': 'button', 'label': 'Back home', 'target': 'home'},
        ],
      }),
      _custom('text_qr', 'Text QR', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Text QR code', 'style': 'title'},
          {'type': 'text', 'text': 'Encode any message — Wi‑Fi notes, contact info, or quotes.', 'style': 'subtitle'},
          {'type': 'qrGenerator', 'mode': 'text', 'placeholder': 'Type your message here…', 'collection': 'qr_codes', 'allowSave': true},
          {'type': 'button', 'label': 'Back home', 'target': 'home'},
        ],
      }),
      _custom('saved', 'Saved QRs', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Saved QR codes', 'style': 'title'},
          {'type': 'dataList', 'collection': 'qr_codes', 'titleField': 'label', 'subtitleField': 'payload',
            'emptyText': 'No saved codes yet. Create one from Website or Text QR.', 'allowDelete': true},
          {'type': 'button', 'label': 'Create website QR', 'target': 'url_qr', 'large': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '📱'),
  ),
  NgmyAppTemplate(
    id: 'invoice_pro',
    name: 'Invoice Pro',
    description: 'Create invoices with totals & payment QR.',
    icon: '🧾',
    badge: 'Featured',
    themeColor: 0xFF6366F1,
    build: (o) => _base(o, 'Invoice Pro', 'Professional invoices in seconds', 0xFF6366F1, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🧾', 'title': 'Invoice Pro', 'subtitle': 'Bill clients · track payments · QR checkout'},
          {'type': 'stat', 'collection': 'invoices', 'label': 'Invoices created'},
          {'type': 'menuGrid', 'columns': 2, 'items': [
            {'label': 'New invoice', 'icon': 'add', 'target': 'create'},
            {'label': 'All invoices', 'icon': 'mail', 'target': 'list'},
            {'label': 'Sample QR', 'icon': 'shop', 'target': 'sample_qr'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('create', 'New Invoice', {
        'type': 'column',
        'children': [
          {'type': 'invoiceBuilder', 'collection': 'invoices', 'title': 'Create invoice'},
          {'type': 'button', 'label': 'View all invoices', 'target': 'list'},
        ],
      }),
      _custom('list', 'Invoices', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Your invoices', 'style': 'title'},
          {'type': 'dataList', 'collection': 'invoices', 'titleField': 'client', 'subtitleField': 'amount',
            'emptyText': 'No invoices yet.', 'addTarget': 'create', 'addLabel': 'New invoice', 'allowDelete': true},
        ],
      }),
      _custom('sample_qr', 'Payment QR', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Payment link QR', 'style': 'title'},
          {'type': 'text', 'text': 'Add a payment URL when creating an invoice, or preview below:', 'style': 'subtitle'},
          {'type': 'qrGenerator', 'mode': 'url', 'placeholder': 'https://pay.example.com/invoice', 'collection': 'qr_codes', 'allowSave': false},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🧾'),
  ),
  NgmyAppTemplate(
    id: 'video_hub',
    name: 'Video Link Hub',
    description: 'Save video URLs & open them instantly.',
    icon: '🎬',
    badge: 'New',
    themeColor: 0xFF8B5CF6,
    build: (o) => _base(o, 'Video Link Hub', 'Your personal video library', 0xFF8B5CF6, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🎬', 'title': 'Video Link Hub', 'subtitle': 'Save links · tap to open · organize favorites'},
          {'type': 'stat', 'collection': 'videos', 'label': 'Videos saved'},
          {'type': 'menuGrid', 'columns': 2, 'items': [
            {'label': 'Add video', 'icon': 'add', 'target': 'add'},
            {'label': 'My videos', 'icon': 'shop', 'target': 'library'},
            {'label': 'How it works', 'icon': 'info', 'target': 'help'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('add', 'Add Video', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Save a video link', 'style': 'title'},
          {'type': 'form', 'collection': 'videos', 'submitLabel': 'Save video', 'successMessage': 'Video saved!', 'navigateAfter': 'library',
            'fields': [
              {'id': 'title', 'label': 'Video title', 'type': 'text'},
              {'id': 'url', 'label': 'Video URL (YouTube, etc.)', 'type': 'text'},
              {'id': 'notes', 'label': 'Notes', 'type': 'text'},
            ]},
        ],
      }),
      _custom('library', 'My Videos', {
        'type': 'column',
        'children': [
          {'type': 'text', 'text': 'Tap any video to open', 'style': 'title'},
          {'type': 'dataList', 'collection': 'videos', 'titleField': 'title', 'subtitleField': 'notes',
            'urlField': 'url', 'emptyText': 'No videos yet — add your first link.', 'addTarget': 'add', 'addLabel': 'Add video', 'allowDelete': true},
        ],
      }),
      _custom('help', 'How it works', {
        'type': 'column',
        'children': [
          {'type': 'card', 'children': [
            {'type': 'text', 'text': '1. Add a video', 'style': 'title'},
            {'type': 'text', 'text': 'Paste any video URL from YouTube, TikTok, or the web.', 'style': 'subtitle'},
          ]},
          {'type': 'spacer', 'height': 10},
          {'type': 'card', 'children': [
            {'type': 'text', 'text': '2. Tap to open', 'style': 'title'},
            {'type': 'text', 'text': 'Your saved list opens links in your browser.', 'style': 'subtitle'},
          ]},
          {'type': 'button', 'label': 'Add your first video', 'target': 'add', 'large': true},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🎬'),
  ),
  NgmyAppTemplate(
    id: 'luxe_store',
    name: 'Luxe Store',
    description: 'Shop, cart, checkout — full e-commerce.',
    icon: '🛍️',
    themeColor: 0xFFEC4899,
    build: (o) => _base(o, 'Luxe Store', 'Sell products with style', 0xFFEC4899, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '🛍️', 'title': 'Luxe Store', 'subtitle': 'Curated products · secure checkout'},
          {'type': 'stat', 'collection': 'products', 'label': 'Products'},
          {'type': 'menuGrid', 'columns': 2, 'items': [
            {'label': 'Shop', 'icon': 'shop', 'target': 'catalog'},
            {'label': 'Sell', 'icon': 'add', 'target': 'add_product'},
            {'label': 'Cart', 'icon': 'cart', 'target': 'cart'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('catalog', 'Shop', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'products', 'titleField': 'name', 'subtitleField': 'price',
            'emptyText': 'No products yet.', 'addTarget': 'add_product', 'addLabel': 'Add product', 'allowDelete': true},
        ],
      }),
      _custom('add_product', 'Add Product', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'products', 'submitLabel': 'List product', 'successMessage': 'Listed!', 'navigateAfter': 'catalog',
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
          {'type': 'dataList', 'collection': 'cart', 'titleField': 'name', 'subtitleField': 'price', 'emptyText': 'Cart empty.'},
          {'type': 'button', 'label': 'Checkout', 'target': 'checkout', 'large': true},
        ],
      }),
      _custom('checkout', 'Checkout', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'orders', 'submitLabel': 'Place order', 'successMessage': 'Order placed!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'address', 'label': 'Address', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '🛍️'),
  ),
  NgmyAppTemplate(
    id: 'creator_hub',
    name: 'Creator Hub',
    description: 'Portfolio, bookings & client intake.',
    icon: '✨',
    themeColor: 0xFFF59E0B,
    build: (o) => _base(o, 'Creator Hub', 'Show your work · book clients', 0xFFF59E0B, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '✨', 'title': 'Creator Hub', 'subtitle': 'Portfolio · bookings · messages'},
          {'type': 'menuGrid', 'columns': 2, 'items': [
            {'label': 'Portfolio', 'icon': 'shop', 'target': 'portfolio'},
            {'label': 'Book me', 'icon': 'calendar', 'target': 'book'},
            {'label': 'Contact', 'icon': 'mail', 'target': 'contact'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('portfolio', 'Portfolio', {
        'type': 'column',
        'children': [
          {'type': 'dataList', 'collection': 'works', 'titleField': 'title', 'subtitleField': 'category',
            'emptyText': 'Add your first project.', 'addTarget': 'add_work', 'addLabel': 'Add project', 'allowDelete': true},
        ],
      }),
      _custom('add_work', 'Add Project', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'works', 'submitLabel': 'Save', 'successMessage': 'Saved!', 'navigateAfter': 'portfolio',
            'fields': [
              {'id': 'title', 'label': 'Project title', 'type': 'text'},
              {'id': 'category', 'label': 'Category', 'type': 'text'},
            ]},
        ],
      }),
      _custom('book', 'Book Session', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'bookings', 'submitLabel': 'Request booking', 'successMessage': 'Sent!', 'navigateAfter': 'home',
            'fields': [
              {'id': 'name', 'label': 'Your name', 'type': 'text'},
              {'id': 'date', 'label': 'Preferred date', 'type': 'text'},
            ]},
        ],
      }),
      _custom('contact', 'Contact', {
        'type': 'column',
        'children': [
          {'type': 'form', 'collection': 'messages', 'submitLabel': 'Send', 'successMessage': 'Message sent!',
            'fields': [
              {'id': 'name', 'label': 'Name', 'type': 'text'},
              {'id': 'message', 'label': 'Message', 'type': 'text'},
            ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '✨'),
  ),
  NgmyAppTemplate(
    id: 'pulse_fitness',
    name: 'Pulse Fitness',
    description: 'Workouts, check-ins & nutrition.',
    icon: '💪',
    themeColor: 0xFF10B981,
    build: (o) => _base(o, 'Pulse Fitness', 'Train smarter every day', 0xFF10B981, [
      _custom('home', 'Home', {
        'type': 'column',
        'children': [
          {'type': 'hero', 'emoji': '💪', 'title': 'Pulse Fitness', 'subtitle': 'Plans · progress · daily wins'},
          {'type': 'stat', 'collection': 'checkins', 'label': 'Check-ins'},
          {'type': 'menuGrid', 'columns': 2, 'items': [
            {'label': 'Workouts', 'icon': 'fitness', 'target': 'workouts'},
            {'label': 'Check-in', 'icon': 'add', 'target': 'checkin'},
            {'label': 'Nutrition', 'icon': 'food', 'target': 'nutrition'},
            {'label': 'Settings', 'icon': 'settings', 'target': 'settings'},
          ]},
        ],
      }),
      _custom('workouts', 'Workouts', {
        'type': 'column',
        'children': [
          {'type': 'workoutPlan', 'planId': 'main', 'title': 'Today\'s circuit', 'exercises': [
            {'id': 'sq', 'name': 'Squats', 'sets': '4×12'},
            {'id': 'pu', 'name': 'Push-ups', 'sets': '3×15'},
            {'id': 'pl', 'name': 'Plank', 'sets': '3×45s'},
          ]},
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
      _custom('nutrition', 'Nutrition', {
        'type': 'column',
        'children': [
          {'type': 'checklist', 'id': 'nutrition', 'items': [
            {'id': 'w', 'label': '8 glasses of water'},
            {'id': 'p', 'label': 'Protein each meal'},
          ]},
        ],
      }),
      _custom('settings', 'Settings', _settingsLayout('home')),
    ], appIcon: '💪'),
  ),
  NgmyAppTemplate(
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start fresh — ask Bolt AI to build anything.',
    icon: '🚀',
    themeColor: 0xFF6366F1,
    build: (o) => NgmyAppProject.blank(ownerEmail: o).copyWith(appIcon: '🚀'),
  ),
];
