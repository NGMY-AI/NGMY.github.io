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

final List<NgmyAppTemplate> kNgmyAppTemplates = [
  NgmyAppTemplate(
    id: 'business',
    name: 'Business',
    description: 'Company site with services, about, and contact form.',
    icon: '🏢',
    themeColor: 0xFF2563EB,
    build: (o) => _base(o, 'My Business', 'Professional services you can trust', 0xFF2563EB, [
      NgmyAppScreen.welcome(id: 'home', title: 'Welcome', subtitle: 'Quality service for your needs', buttonTargetScreenId: 'menu', heroEmoji: '🏢'),
      NgmyAppScreen.menu(id: 'menu', title: 'Services', items: [
        {'label': 'Our Services', 'targetScreenId': 'services'},
        {'label': 'About Us', 'targetScreenId': 'about'},
        {'label': 'Contact', 'targetScreenId': 'contact'},
      ]),
      const NgmyAppScreen(id: 'services', title: 'Services', kind: NgmyAppScreenKind.content, data: {'body': 'List your services and pricing here.'}),
      const NgmyAppScreen(id: 'about', title: 'About', kind: NgmyAppScreenKind.content, data: {'body': 'Tell customers who you are and why they should choose you.'}),
      NgmyAppScreen(id: 'contact', title: 'Contact', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'email', 'label': 'Email', 'type': 'email'},
          {'id': 'message', 'label': 'Message', 'type': 'text'},
        ],
        'submitLabel': 'Send message',
        'successMessage': 'Thanks! We will reply soon.',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'restaurant',
    name: 'Restaurant',
    description: 'Menu, hours, reservations, and location.',
    icon: '🍽️',
    themeColor: 0xFFDC2626,
    build: (o) => _base(o, 'My Restaurant', 'Fresh food, great vibes', 0xFFDC2626, [
      NgmyAppScreen.welcome(id: 'home', title: 'Welcome', subtitle: 'Order, dine in, or reserve a table', buttonTargetScreenId: 'menu', heroEmoji: '🍽️'),
      NgmyAppScreen.menu(id: 'menu', title: 'Menu', items: [
        {'label': 'Food Menu', 'targetScreenId': 'food'},
        {'label': 'Reserve Table', 'targetScreenId': 'reserve'},
        {'label': 'Hours & Location', 'targetScreenId': 'hours'},
      ]),
      const NgmyAppScreen(id: 'food', title: 'Food Menu', kind: NgmyAppScreenKind.content, data: {'body': 'Starters\nMain dishes\nDrinks\nDesserts'}),
      NgmyAppScreen(id: 'reserve', title: 'Reserve', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'party', 'label': 'Party size', 'type': 'number'},
          {'id': 'time', 'label': 'Preferred time', 'type': 'text'},
        ],
        'submitLabel': 'Request table',
        'successMessage': 'Reservation request received!',
      }),
      const NgmyAppScreen(id: 'hours', title: 'Hours', kind: NgmyAppScreenKind.content, data: {'body': 'Mon–Fri 11am–10pm\nSat–Sun 10am–11pm\n123 Main Street'}),
    ]),
  ),
  NgmyAppTemplate(
    id: 'fitness',
    name: 'Fitness Coach',
    description: 'Workouts, tips, and client check-ins.',
    icon: '💪',
    themeColor: 0xFF059669,
    build: (o) => _base(o, 'Fit Coach', 'Train smarter, feel stronger', 0xFF059669, [
      NgmyAppScreen.welcome(id: 'home', title: 'Fit Coach', subtitle: 'Your personal training hub', buttonTargetScreenId: 'menu', heroEmoji: '💪'),
      NgmyAppScreen.menu(id: 'menu', title: 'Programs', items: [
        {'label': 'Workouts', 'targetScreenId': 'workouts'},
        {'label': 'Nutrition Tips', 'targetScreenId': 'nutrition'},
        {'label': 'Check-in', 'targetScreenId': 'checkin'},
        {'label': 'Ask AI Coach', 'targetScreenId': 'ai'},
      ]),
      const NgmyAppScreen(id: 'workouts', title: 'Workouts', kind: NgmyAppScreenKind.content, data: {'body': 'Monday: Leg day\nWednesday: Upper body\nFriday: Cardio + core'}),
      const NgmyAppScreen(id: 'nutrition', title: 'Nutrition', kind: NgmyAppScreenKind.content, data: {'body': 'Protein with every meal. Drink water. Sleep 7+ hours.'}),
      NgmyAppScreen(id: 'checkin', title: 'Check-in', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'weight', 'label': 'Weight (lbs)', 'type': 'number'},
          {'id': 'energy', 'label': 'Energy level 1-10', 'type': 'number'},
          {'id': 'notes', 'label': 'Notes', 'type': 'text'},
        ],
        'submitLabel': 'Submit check-in',
        'successMessage': 'Check-in saved!',
      }),
      const NgmyAppScreen(id: 'ai', title: 'AI Coach', kind: NgmyAppScreenKind.aiChat, data: {'actorId': 'architect', 'welcome': 'Ask me for workout or meal ideas.'}),
    ]),
  ),
  NgmyAppTemplate(
    id: 'church',
    name: 'Church / Community',
    description: 'Events, sermons, prayer requests, giving.',
    icon: '⛪',
    themeColor: 0xFF7C3AED,
    build: (o) => _base(o, 'Community Hub', 'Faith, fellowship, and service', 0xFF7C3AED, [
      NgmyAppScreen.welcome(id: 'home', title: 'Welcome', subtitle: 'Join us this Sunday', buttonTargetScreenId: 'menu', heroEmoji: '⛪'),
      NgmyAppScreen.menu(id: 'menu', title: 'Community', items: [
        {'label': 'Events', 'targetScreenId': 'events'},
        {'label': 'Prayer Request', 'targetScreenId': 'prayer'},
        {'label': 'Give', 'targetScreenId': 'give'},
      ]),
      const NgmyAppScreen(id: 'events', title: 'Events', kind: NgmyAppScreenKind.content, data: {'body': 'Sunday Service 10am\nBible Study Wednesday 7pm\nYouth Friday 6pm'}),
      NgmyAppScreen(id: 'prayer', title: 'Prayer', kind: NgmyAppScreenKind.form, data: {
        'fields': [{'id': 'request', 'label': 'Prayer request', 'type': 'text'}],
        'submitLabel': 'Submit',
        'successMessage': 'We are praying with you.',
      }),
      const NgmyAppScreen(id: 'give', title: 'Give', kind: NgmyAppScreenKind.content, data: {'body': 'Support our mission. Add your Cash App, Zelle, or link here.'}),
    ]),
  ),
  NgmyAppTemplate(
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Showcase work, skills, and hire-me form.',
    icon: '🎨',
    themeColor: 0xFFEC4899,
    build: (o) => _base(o, 'My Portfolio', 'Creative work & projects', 0xFFEC4899, [
      NgmyAppScreen.welcome(id: 'home', title: 'Hello!', subtitle: 'Designer · Developer · Creator', buttonTargetScreenId: 'menu', heroEmoji: '🎨'),
      NgmyAppScreen.menu(id: 'menu', title: 'Work', items: [
        {'label': 'Projects', 'targetScreenId': 'projects'},
        {'label': 'Skills', 'targetScreenId': 'skills'},
        {'label': 'Hire Me', 'targetScreenId': 'hire'},
      ]),
      const NgmyAppScreen(id: 'projects', title: 'Projects', kind: NgmyAppScreenKind.content, data: {'body': 'Project 1 — description\nProject 2 — description'}),
      const NgmyAppScreen(id: 'skills', title: 'Skills', kind: NgmyAppScreenKind.content, data: {'body': 'Design · Flutter · Video · Branding'}),
      NgmyAppScreen(id: 'hire', title: 'Hire Me', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Your name', 'type': 'text'},
          {'id': 'project', 'label': 'Project details', 'type': 'text'},
        ],
        'submitLabel': 'Send inquiry',
        'successMessage': 'Thanks! I will get back to you.',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'event',
    name: 'Event / RSVP',
    description: 'Event info, schedule, and RSVP form.',
    icon: '🎉',
    themeColor: 0xFFF59E0B,
    build: (o) => _base(o, 'My Event', 'You are invited!', 0xFFF59E0B, [
      NgmyAppScreen.welcome(id: 'home', title: 'You\'re Invited', subtitle: 'Join us for a special event', buttonTargetScreenId: 'rsvp', heroEmoji: '🎉'),
      const NgmyAppScreen(id: 'details', title: 'Details', kind: NgmyAppScreenKind.content, data: {'body': 'Date: TBD\nLocation: TBD\nDress code: Casual'}),
      NgmyAppScreen(id: 'rsvp', title: 'RSVP', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'guests', 'label': 'Guests', 'type': 'number'},
        ],
        'submitLabel': 'Confirm RSVP',
        'successMessage': 'RSVP received!',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'course',
    name: 'Online Course',
    description: 'Lessons, resources, and student Q&A.',
    icon: '📚',
    themeColor: 0xFF0EA5E9,
    build: (o) => _base(o, 'My Course', 'Learn at your own pace', 0xFF0EA5E9, [
      NgmyAppScreen.welcome(id: 'home', title: 'Start Learning', subtitle: 'Module 1 is ready', buttonTargetScreenId: 'menu', heroEmoji: '📚'),
      NgmyAppScreen.menu(id: 'menu', title: 'Course', items: [
        {'label': 'Lessons', 'targetScreenId': 'lessons'},
        {'label': 'Resources', 'targetScreenId': 'resources'},
        {'label': 'Ask Tutor AI', 'targetScreenId': 'tutor'},
      ]),
      const NgmyAppScreen(id: 'lessons', title: 'Lessons', kind: NgmyAppScreenKind.content, data: {'body': 'Lesson 1: Introduction\nLesson 2: Core concepts\nLesson 3: Practice'}),
      const NgmyAppScreen(id: 'resources', title: 'Resources', kind: NgmyAppScreenKind.content, data: {'body': 'PDFs, links, and downloads go here.'}),
      const NgmyAppScreen(id: 'tutor', title: 'AI Tutor', kind: NgmyAppScreenKind.aiChat, data: {'actorId': 'architect'}),
    ]),
  ),
  NgmyAppTemplate(
    id: 'realestate',
    name: 'Real Estate',
    description: 'Listings, agent bio, and inquiry form.',
    icon: '🏠',
    themeColor: 0xFF14B8A6,
    build: (o) => _base(o, 'Property Listings', 'Find your next home', 0xFF14B8A6, [
      NgmyAppScreen.welcome(id: 'home', title: 'Find Home', subtitle: 'Browse listings and book a tour', buttonTargetScreenId: 'menu', heroEmoji: '🏠'),
      NgmyAppScreen.menu(id: 'menu', title: 'Listings', items: [
        {'label': 'Available Homes', 'targetScreenId': 'listings'},
        {'label': 'About Agent', 'targetScreenId': 'agent'},
        {'label': 'Inquiry', 'targetScreenId': 'inquiry'},
      ]),
      const NgmyAppScreen(id: 'listings', title: 'Listings', kind: NgmyAppScreenKind.content, data: {'body': '3 bed · 2 bath — \$320,000\n2 bed · 1 bath — \$210,000'}),
      const NgmyAppScreen(id: 'agent', title: 'Agent', kind: NgmyAppScreenKind.content, data: {'body': 'Licensed agent. 10+ years experience.'}),
      NgmyAppScreen(id: 'inquiry', title: 'Inquiry', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'budget', 'label': 'Budget', 'type': 'text'},
        ],
        'submitLabel': 'Send inquiry',
        'successMessage': 'We will contact you shortly.',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'salon',
    name: 'Salon / Booking',
    description: 'Services, prices, and appointment booking.',
    icon: '💇',
    themeColor: 0xFFDB2777,
    build: (o) => _base(o, 'Beauty Salon', 'Book your appointment', 0xFFDB2777, [
      NgmyAppScreen.welcome(id: 'home', title: 'Beauty Salon', subtitle: 'Look your best', buttonTargetScreenId: 'menu', heroEmoji: '💇'),
      NgmyAppScreen.menu(id: 'menu', title: 'Book', items: [
        {'label': 'Services', 'targetScreenId': 'services'},
        {'label': 'Book Now', 'targetScreenId': 'book'},
      ]),
      const NgmyAppScreen(id: 'services', title: 'Services', kind: NgmyAppScreenKind.content, data: {'body': 'Haircut \$35\nColor \$80\nStyling \$45'}),
      NgmyAppScreen(id: 'book', title: 'Book', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'name', 'label': 'Name', 'type': 'text'},
          {'id': 'service', 'label': 'Service', 'type': 'text'},
          {'id': 'date', 'label': 'Preferred date', 'type': 'text'},
        ],
        'submitLabel': 'Request booking',
        'successMessage': 'Booking request sent!',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'nonprofit',
    name: 'Nonprofit',
    description: 'Mission, impact stories, and donations.',
    icon: '❤️',
    themeColor: 0xFFEF4444,
    build: (o) => _base(o, 'Our Mission', 'Making a difference together', 0xFFEF4444, [
      NgmyAppScreen.welcome(id: 'home', title: 'Our Mission', subtitle: 'Help us change lives', buttonTargetScreenId: 'menu', heroEmoji: '❤️'),
      NgmyAppScreen.menu(id: 'menu', title: 'Support', items: [
        {'label': 'Our Story', 'targetScreenId': 'story'},
        {'label': 'Impact', 'targetScreenId': 'impact'},
        {'label': 'Volunteer', 'targetScreenId': 'volunteer'},
      ]),
      const NgmyAppScreen(id: 'story', title: 'Story', kind: NgmyAppScreenKind.content, data: {'body': 'Why we exist and who we serve.'}),
      const NgmyAppScreen(id: 'impact', title: 'Impact', kind: NgmyAppScreenKind.content, data: {'body': 'Lives helped, meals served, communities supported.'}),
      NgmyAppScreen(id: 'volunteer', title: 'Volunteer', kind: NgmyAppScreenKind.form, data: {
        'fields': [{'id': 'name', 'label': 'Name', 'type': 'text'}, {'id': 'skills', 'label': 'How can you help?', 'type': 'text'}],
        'submitLabel': 'Sign up',
        'successMessage': 'Thank you for volunteering!',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'store',
    name: 'Online Store',
    description: 'Products, cart info, and order form.',
    icon: '🛍️',
    themeColor: 0xFF8B5CF6,
    build: (o) => _base(o, 'My Shop', 'Shop our collection', 0xFF8B5CF6, [
      NgmyAppScreen.welcome(id: 'home', title: 'My Shop', subtitle: 'New arrivals inside', buttonTargetScreenId: 'menu', heroEmoji: '🛍️'),
      NgmyAppScreen.menu(id: 'menu', title: 'Shop', items: [
        {'label': 'Products', 'targetScreenId': 'products'},
        {'label': 'Order', 'targetScreenId': 'order'},
      ]),
      const NgmyAppScreen(id: 'products', title: 'Products', kind: NgmyAppScreenKind.content, data: {'body': 'Product A — \$25\nProduct B — \$40\nProduct C — \$15'}),
      NgmyAppScreen(id: 'order', title: 'Order', kind: NgmyAppScreenKind.form, data: {
        'fields': [
          {'id': 'item', 'label': 'Item', 'type': 'text'},
          {'id': 'qty', 'label': 'Quantity', 'type': 'number'},
          {'id': 'address', 'label': 'Shipping address', 'type': 'text'},
        ],
        'submitLabel': 'Place order',
        'successMessage': 'Order received!',
      }),
    ]),
  ),
  NgmyAppTemplate(
    id: 'blank',
    name: 'Blank',
    description: 'Minimal starter — customize everything.',
    icon: '📱',
    themeColor: 0xFF6366F1,
    build: (o) => NgmyAppProject.blank(ownerEmail: o),
  ),
];
