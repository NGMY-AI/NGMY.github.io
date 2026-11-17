import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_text_cache.dart';

// ═════════════════════════════════════════════════════════════════════════════
// NGMY ads, made like real TV commercials: a studio with soft light and a floor, a real looking phone that turns in
// 3D and shows the feature working on its screen, a 3D hero object (a gold coin, a card that flips, a medal), and an
// end card with the NGMY name and an Open NGMY button. Everything is drawn live from the clock (no video files).
// Each ad is ten seconds: the hook, the feature, the hero, the end card.
// ═════════════════════════════════════════════════════════════════════════════

/// The 3D object of the third scene.
enum NgmyAdHero { coin, card, badge }

/// One line on the phone screen of an ad.
class NgmyAdRow {
  const NgmyAdRow(this.icon, this.label, this.value);
  final IconData icon;
  final String label, value;
}

/// Everything one ad says and shows.
class NgmyAdSpec {
  const NgmyAdSpec({
    required this.brand,
    required this.icon,
    required this.a,
    required this.b,
    required this.hook1,
    required this.hook2,
    required this.line,
    required this.bullets,
    required this.screenTitle,
    required this.stat,
    required this.statFmt,
    required this.statLabel,
    required this.rows,
    required this.hero,
    required this.heroText,
    required this.benefit,
    required this.find,
    this.statDecimals = 0,
    this.cta = 'Open NGMY',
    this.heroIcon,
  });

  /// The picture on the medal (the ad icon when not given).
  final IconData? heroIcon;

  final String brand;
  final IconData icon;

  /// The deep colour and the bright colour of the ad.
  final Color a, b;
  final String hook1, hook2, line;
  final List<String> bullets;
  final String screenTitle;

  /// The big number on the phone screen; it counts up. [statFmt] has a # where the number goes.
  final double stat;
  final String statFmt, statLabel;
  final int statDecimals;
  final List<NgmyAdRow> rows;
  final NgmyAdHero hero;
  final String heroText, benefit;

  /// Where to find it in NGMY (shown by Learn more).
  final String find;
  final String cta;
}

/// Seconds in one ad.
const double kNgmyAdLength = 10.0;

const List<NgmyAdSpec> kNgmyAds3D = [
  NgmyAdSpec(
    brand: 'NGMY Civic Registry',
    icon: Icons.badge_rounded,
    a: Color(0xFF1E3A8A),
    b: Color(0xFF38BDF8),
    hook1: 'Your family.',
    hook2: 'Counted. Helped.',
    line: 'Enroll your whole family in the community registry.',
    bullets: ['A Registry ID card for every member', 'Birthdays and children remembered', 'Votes and receipts everyone can see'],
    screenTitle: 'Civic Registry',
    stat: 6,
    statFmt: '#',
    statLabel: 'Family members enrolled',
    rows: [
      NgmyAdRow(Icons.person_rounded, 'Registry ID', 'Active'),
      NgmyAdRow(Icons.cake_rounded, 'Birthdays', 'On'),
      NgmyAdRow(Icons.how_to_vote_rounded, 'Community vote', 'Open'),
    ],
    hero: NgmyAdHero.card,
    heroText: 'REGISTRY ID',
    benefit: 'One card for your whole community life.',
    find: 'NGMY Hub tab, then Civic Registry',
  ),
  NgmyAdSpec(
    brand: 'NGMY Jobs and Help',
    icon: Icons.work_rounded,
    a: Color(0xFF9A3412),
    b: Color(0xFFFBBF24),
    hook1: 'Need work?',
    hook2: 'Get hired.',
    line: 'Jobs, house repairs and house workers, all in one Help Center.',
    bullets: ['Find jobs near you', 'Book house repairs and workers', 'Advisors help with applications'],
    screenTitle: 'Help Center',
    stat: 24,
    statFmt: '#',
    statLabel: 'Jobs near you',
    rows: [
      NgmyAdRow(Icons.work_outline_rounded, 'Warehouse helper', 'Apply'),
      NgmyAdRow(Icons.home_repair_service_rounded, 'House repair', 'Book'),
      NgmyAdRow(Icons.cleaning_services_rounded, 'House worker', 'Hire'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'HIRED',
    heroIcon: Icons.handshake_rounded,
    benefit: 'From the search to the first paycheck.',
    find: 'NGMY Hub tab, then Help Center',
  ),
  NgmyAdSpec(
    brand: 'NGMY Store',
    icon: Icons.storefront_rounded,
    a: Color(0xFF9A3412),
    b: Color(0xFFFB923C),
    hook1: 'Shop our community.',
    hook2: 'Sell yours too.',
    line: 'Buy and sell inside NGMY. Approved members can open a store.',
    bullets: ['African food and traditions', 'Open your own store', 'Support Congolese and African sellers'],
    screenTitle: 'NGMY Store',
    stat: 45,
    statFmt: '\$#.00',
    statLabel: 'Your cart',
    rows: [
      NgmyAdRow(Icons.rice_bowl_rounded, 'Fufu flour 2 kg', '\$12'),
      NgmyAdRow(Icons.local_cafe_rounded, 'Congolese coffee', '\$18'),
      NgmyAdRow(Icons.checkroom_rounded, 'Wax print fabric', '\$15'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'OPEN NOW',
    heroIcon: Icons.shopping_bag_rounded,
    benefit: 'Every order supports our community.',
    find: 'NGMY Hub tab, then NGMY Store',
  ),
  NgmyAdSpec(
    brand: 'Kiswahili School',
    icon: Icons.translate_rounded,
    a: Color(0xFF115E59),
    b: Color(0xFF5EEAD4),
    hook1: 'Habari!',
    hook2: 'Learn Swahili.',
    line: 'Learn Swahili and English, one short lesson at a time.',
    bullets: ['Short daily lessons', 'A picture for every word', 'Swahili and English both ways'],
    screenTitle: 'Kiswahili School',
    stat: 12,
    statFmt: '# days',
    statLabel: 'Your learning streak',
    rows: [
      NgmyAdRow(Icons.waving_hand_rounded, 'Jambo', 'Hello'),
      NgmyAdRow(Icons.favorite_rounded, 'Asante', 'Thank you'),
      NgmyAdRow(Icons.family_restroom_rounded, 'Familia', 'Family'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'KARIBU',
    heroIcon: Icons.waving_hand_rounded,
    benefit: 'Karibu means welcome.',
    find: 'Creator Hub tab, then Kiswahili School',
  ),
  NgmyAdSpec(
    brand: 'Document Scanner',
    icon: Icons.document_scanner_rounded,
    a: Color(0xFF3730A3),
    b: Color(0xFF818CF8),
    hook1: 'Paper in.',
    hook2: 'PDF out.',
    line: 'Scan, save and share your papers in seconds.',
    bullets: ['Sharp scans from your camera', 'Saved as a PDF', 'Share it anywhere'],
    screenTitle: 'Document Scanner',
    stat: 3,
    statFmt: '# pages',
    statLabel: 'Scanned today',
    rows: [
      NgmyAdRow(Icons.description_rounded, 'Lease.pdf', '2 pages'),
      NgmyAdRow(Icons.receipt_long_rounded, 'Receipt.pdf', '1 page'),
      NgmyAdRow(Icons.badge_rounded, 'ID copy.pdf', 'Shared'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'PDF',
    heroIcon: Icons.picture_as_pdf_rounded,
    benefit: 'Every paper, safe on your phone.',
    find: 'NGMY Hub tab, then Document Scanner',
  ),
  NgmyAdSpec(
    brand: 'NGMY Invoices',
    icon: Icons.receipt_long_rounded,
    a: Color(0xFF831843),
    b: Color(0xFFF472B6),
    hook1: 'Look professional.',
    hook2: 'Get paid faster.',
    line: 'Make clean invoices and receipts in minutes.',
    bullets: ['Your logo and business details', 'Totals worked out for you', 'Send it as a PDF'],
    screenTitle: 'Invoice 1042',
    stat: 1250,
    statFmt: '\$#.00',
    statLabel: 'Total due',
    rows: [
      NgmyAdRow(Icons.handyman_rounded, 'Kitchen repair', '\$850'),
      NgmyAdRow(Icons.inventory_2_rounded, 'Materials', '\$320'),
      NgmyAdRow(Icons.local_shipping_rounded, 'Delivery', '\$80'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'PAID',
    heroIcon: Icons.verified_rounded,
    benefit: 'Paid. Stamped. Done.',
    find: 'Tool Hub tab, then Business Essentials',
  ),
  NgmyAdSpec(
    brand: 'NGMY Family Tree',
    icon: Icons.account_tree_rounded,
    a: Color(0xFF5B21B6),
    b: Color(0xFFD8B4FE),
    hook1: 'Every branch.',
    hook2: 'Every story.',
    line: 'Grow your family tree and write your family book.',
    bullets: ['Grandparents to grandchildren', 'A photo on every branch', 'Share it with the family'],
    screenTitle: 'Family Tree',
    stat: 18,
    statFmt: '#',
    statLabel: 'Family members',
    rows: [
      NgmyAdRow(Icons.elderly_rounded, 'Grandparents', '4'),
      NgmyAdRow(Icons.people_rounded, 'Parents', '6'),
      NgmyAdRow(Icons.child_care_rounded, 'Children', '8'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'FAMILY',
    heroIcon: Icons.diversity_3_rounded,
    benefit: 'Family is everything.',
    find: 'Profile tab, then Worksheets, then Family Tree',
  ),
  NgmyAdSpec(
    brand: 'NGMY Wallet',
    icon: Icons.account_balance_wallet_rounded,
    a: Color(0xFF854D0E),
    b: Color(0xFFFDE047),
    hook1: 'One balance.',
    hook2: 'Everywhere.',
    line: 'Your NGMY balance is the same on every phone you use.',
    bullets: ['Kept safe on the server', 'A receipt for every payment', 'Rewards in one place'],
    screenTitle: 'NGMY Wallet',
    stat: 1250.75,
    statDecimals: 2,
    statFmt: '\$#',
    statLabel: 'Balance',
    rows: [
      NgmyAdRow(Icons.workspace_premium_rounded, 'Crown reward', '+\$1.00'),
      NgmyAdRow(Icons.home_rounded, 'House Care', '-\$25.00'),
      NgmyAdRow(Icons.redeem_rounded, 'Gift received', '+\$20.00'),
    ],
    hero: NgmyAdHero.coin,
    heroText: '\$',
    benefit: 'Your money, always in sync.',
    find: 'Your balance shows on Home and all across NGMY',
  ),
  NgmyAdSpec(
    brand: 'NGMY Game Center',
    icon: Icons.sports_esports_rounded,
    a: Color(0xFF1E40AF),
    b: Color(0xFF22D3EE),
    hook1: 'Play.',
    hook2: 'Win coins.',
    line: 'Arcade games in the Vault Channel, with your own game receipts.',
    bullets: ['Quick arcade games', 'Play offline, counted later', 'Every win has a receipt'],
    screenTitle: 'Vault Arcade',
    stat: 2400,
    statFmt: '#',
    statLabel: 'High score',
    rows: [
      NgmyAdRow(Icons.casino_rounded, 'Lucky Dice', 'Play'),
      NgmyAdRow(Icons.extension_rounded, 'Puzzle Rush', 'Play'),
      NgmyAdRow(Icons.emoji_events_rounded, 'Top score', '2,400'),
    ],
    hero: NgmyAdHero.coin,
    heroText: 'WIN',
    benefit: 'Game on, any time.',
    find: 'Home tab, then Vault Channel',
  ),
  NgmyAdSpec(
    brand: 'NGMY Electronics Lab',
    icon: Icons.electrical_services_rounded,
    a: Color(0xFF155E75),
    b: Color(0xFF67E8F9),
    hook1: 'Build it.',
    hook2: 'Watch it light up.',
    line: 'Wire real circuits: batteries, switches, bulbs, TVs and more.',
    bullets: ['Parts that really work', 'An AI Inventor to help you', 'See how electricity flows'],
    screenTitle: 'Electronics Lab',
    stat: 9,
    statFmt: '# V',
    statLabel: 'Battery',
    rows: [
      NgmyAdRow(Icons.battery_charging_full_rounded, 'Battery', '9 V'),
      NgmyAdRow(Icons.toggle_on_rounded, 'Switch', 'On'),
      NgmyAdRow(Icons.lightbulb_rounded, 'Bulb', 'Lit'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'IT WORKS',
    heroIcon: Icons.lightbulb_rounded,
    benefit: 'Learn by building.',
    find: 'Home tab, then Core Protocol, then Electronics Lab',
  ),
  NgmyAdSpec(
    brand: 'NGMY Advisors',
    icon: Icons.support_agent_rounded,
    a: Color(0xFF9D174D),
    b: Color(0xFFFB923C),
    hook1: 'Questions?',
    hook2: 'Ask an advisor.',
    line: 'Friendly AI advisors for jobs, applications and everyday life.',
    bullets: ['Chat like with a real person', 'Help with jobs and benefits', 'Answers in Swahili too'],
    screenTitle: 'NGMY Advisors',
    stat: 24,
    statFmt: '# / 7',
    statLabel: 'Always here',
    rows: [
      NgmyAdRow(Icons.chat_bubble_rounded, 'How do I apply?', 'Answered'),
      NgmyAdRow(Icons.description_rounded, 'Check my letter', 'Done'),
      NgmyAdRow(Icons.translate_rounded, 'Jibu kwa Kiswahili', 'Sawa'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'ASK ME',
    heroIcon: Icons.forum_rounded,
    benefit: 'Help is one message away.',
    find: 'Advisors tab',
  ),
  NgmyAdSpec(
    brand: 'NGMY Construction Lab',
    icon: Icons.construction_rounded,
    a: Color(0xFF92400E),
    b: Color(0xFFF59E0B),
    hook1: 'Frame. Wire.',
    hook2: 'Finish a house.',
    line: 'Real 3D wiring, plumbing and a whole house to build.',
    bullets: ['Walk through every room', 'Wire lights and outlets', 'Learn a trade step by step'],
    screenTitle: 'Construction Lab',
    stat: 86,
    statFmt: '#%',
    statLabel: 'House finished',
    rows: [
      NgmyAdRow(Icons.foundation_rounded, 'Frame', 'Done'),
      NgmyAdRow(Icons.electrical_services_rounded, 'Wiring', 'Done'),
      NgmyAdRow(Icons.plumbing_rounded, 'Plumbing', 'Now'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'BUILT',
    heroIcon: Icons.home_rounded,
    benefit: 'Learn the trade, room by room.',
    find: 'Home tab, then Core Protocol, then Construction Lab',
  ),
  NgmyAdSpec(
    brand: 'NGMY Creator Hub',
    icon: Icons.auto_awesome_rounded,
    a: Color(0xFF6D28D9),
    b: Color(0xFFF472B6),
    hook1: 'Record. Film.',
    hook2: 'Create.',
    line: 'Recorder, Video Studio, QR codes and more in one place.',
    bullets: ['Record and edit audio', 'Make videos with titles', 'QR codes and Doc Share'],
    screenTitle: 'Creator Hub',
    stat: 8,
    statFmt: '#',
    statLabel: 'Studios ready for you',
    rows: [
      NgmyAdRow(Icons.mic_rounded, 'Recorder Studio', 'Open'),
      NgmyAdRow(Icons.movie_creation_rounded, 'Video Studio', 'Open'),
      NgmyAdRow(Icons.qr_code_2_rounded, 'QR Generator', 'Open'),
    ],
    hero: NgmyAdHero.badge,
    heroText: 'ACTION',
    heroIcon: Icons.play_arrow_rounded,
    benefit: 'Your ideas, made real.',
    find: 'Creator Hub tab',
  ),
  NgmyAdSpec(
    brand: 'NGMY Business Cards',
    icon: Icons.contact_page_rounded,
    a: Color(0xFF0F766E),
    b: Color(0xFF2DD4BF),
    hook1: 'First impressions',
    hook2: 'that last.',
    line: 'Design a card people remember and share it with a QR code.',
    bullets: ['Many designs to choose from', 'Your logo and your colours', 'Share by QR or as a picture'],
    screenTitle: 'Business Card',
    stat: 250,
    statFmt: '#',
    statLabel: 'Card scans',
    rows: [
      NgmyAdRow(Icons.palette_rounded, 'Design', 'Midnight'),
      NgmyAdRow(Icons.qr_code_rounded, 'QR code', 'On'),
      NgmyAdRow(Icons.share_rounded, 'Shared', '12 times'),
    ],
    hero: NgmyAdHero.card,
    heroText: 'YOUR NAME',
    benefit: 'Hand it over. Be remembered.',
    find: 'Tool Hub tab, then Business Card Creator',
  ),
];

/// A tap on the ad: where (0..1 of the picture) and how many seconds ago. The phone or the hero spins and a ring spreads.
class NgmyAdTap {
  const NgmyAdTap(this.at, this.age);
  final Offset at;
  final double age;
}

/// Which ad plays at [t] when they play one after another.
int ngmyAdIndexAt(double t) => (t / kNgmyAdLength).floor() % kNgmyAds3D.length;

// ─── Small drawing helpers ───────────────────────────────────────────────────

/// The app font (the same on every phone).
const String _kFont = 'Roboto';

double _k(double t, double from, double len) => ((t - from) / len).clamp(0.0, 1.0);
double _ease(double x) => Curves.easeOutCubic.transform(x.clamp(0.0, 1.0));
Color _lift(Color c, double k) => Color.lerp(c, Colors.white, k)!;
Color _sink(Color c, double k) => Color.lerp(c, Colors.black, k)!;

TextPainter _tp(String s, double size, Color col, {FontWeight w = FontWeight.w900, double ls = 0, Shader? shader, int lines = 1, double? width}) {
  if (shader == null) {
    // Plain words are laid out once and reused (see ngmy_text_cache.dart).
    final style = TextStyle(fontFamily: _kFont, fontSize: ngmyTextSizeStep(size), fontWeight: w, letterSpacing: (ls * 4).roundToDouble() / 4, height: 1.12, color: ngmyTextColorStep(col));
    return ngmyCachedText(s, style, maxLines: lines, ellipsis: lines > 1 ? '…' : null, maxWidth: width ?? double.infinity);
  }
  final style = TextStyle(
    fontFamily: _kFont,
    fontSize: size,
    fontWeight: w,
    letterSpacing: ls,
    height: 1.12,
    foreground: Paint()..shader = shader,
  );
  return TextPainter(text: TextSpan(text: s, style: style), textDirection: TextDirection.ltr, maxLines: lines, ellipsis: lines > 1 ? '…' : null)..layout(maxWidth: width ?? double.infinity);
}

/// Text at [o] (its top), [align] 0 left, 0.5 centre, made smaller when wider than [maxW]. Returns its height.
double _text(Canvas c, String s, Offset o, double size, Color col, {double maxW = 1e9, double align = 0, FontWeight w = FontWeight.w900, double ls = 0, List<Color>? grad}) {
  if (s.isEmpty || size < 1) return 0;
  Shader? sh(double sz) => grad == null ? null : LinearGradient(colors: grad).createShader(Rect.fromLTWH(o.dx - (align * maxW.clamp(0, 4000)), o.dy, maxW.clamp(1, 4000).toDouble(), sz));
  var tp = _tp(s, size, col, w: w, ls: ls, shader: sh(size));
  if (tp.width > maxW && tp.width > 0) {
    final sz = size * maxW / tp.width;
    tp = _tp(s, sz, col, w: w, ls: ls * maxW / tp.width, shader: sh(sz));
  }
  tp.paint(c, Offset(o.dx - tp.width * align, o.dy));
  return tp.height;
}

/// Text that wraps on up to [lines] lines inside [width]. Returns its height.
double _para(Canvas c, String s, Offset o, double size, Color col, double width, {double align = 0, int lines = 2, FontWeight w = FontWeight.w600}) {
  final tp = ngmyCachedText(s, TextStyle(fontFamily: _kFont, fontSize: ngmyTextSizeStep(size), fontWeight: w, color: ngmyTextColorStep(col), height: 1.25), align: align == 0 ? TextAlign.left : TextAlign.center, maxLines: lines, ellipsis: '…', maxWidth: width);
  tp.paint(c, Offset(align == 0 ? o.dx : o.dx - width / 2, o.dy));
  return tp.height;
}

void _icon(Canvas c, IconData i, Offset center, double size, Color col) {
  if (size < 1) return;
  final tp = ngmyCachedText(String.fromCharCode(i.codePoint), TextStyle(fontSize: ngmyTextSizeStep(size), fontFamily: i.fontFamily, package: i.fontPackage, color: ngmyTextColorStep(col), height: 1));
  tp.paint(c, center - Offset(tp.width / 2, tp.height / 2));
}

String _num(double v, int dec) {
  final s = v.toStringAsFixed(dec);
  final parts = s.split('.');
  final whole = parts[0].replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (m) => ',');
  return parts.length > 1 ? '$whole.${parts[1]}' : whole;
}

/// Text that slides up out of a mask (like the titles of a real advert).
void _reveal(Canvas c, double k, Rect box, void Function() draw) {
  if (k <= 0) return;
  c.save();
  c.clipRect(box.inflate(box.height * 0.08));
  c.translate(0, (1 - _ease(k)) * box.height * 1.05);
  draw();
  c.restore();
}

// ─── The studio ──────────────────────────────────────────────────────────────

void _studio(Canvas c, Size s, NgmyAdSpec ad, double t, int seed, {bool rich = true}) {
  final w = s.width, h = s.height;
  final r = Offset.zero & s;
  c.drawRect(
    r,
    Paint()
      ..shader = RadialGradient(
        center: const Alignment(0.35, -0.25),
        radius: 1.25,
        colors: [_sink(ad.a, 0.05), _sink(ad.a, 0.55), const Color(0xFF04050A)],
        stops: const [0.0, 0.55, 1.0],
      ).createShader(r),
  );
  if (!rich) return;
  // A beam of light from the top.
  final sway = math.sin(t * 0.35) * w * 0.04;
  final beam = Path()
    ..moveTo(w * 0.52 + sway, 0)
    ..lineTo(w * 0.70 + sway, 0)
    ..lineTo(w * 0.98, h)
    ..lineTo(w * 0.34, h)
    ..close();
  c.drawPath(beam, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.10), Colors.white.withValues(alpha: 0.0)]).createShader(r));
  // The floor, and a line of light where it meets the wall.
  final fy = h * 0.80;
  c.drawRect(Rect.fromLTWH(0, fy, w, h - fy), Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [_sink(ad.a, 0.6).withValues(alpha: 0.85), Colors.black]).createShader(Rect.fromLTWH(0, fy, w, h - fy)));
  c.drawRect(Rect.fromLTWH(0, fy - 1, w, 2), Paint()..shader = LinearGradient(colors: [Colors.transparent, ad.b.withValues(alpha: 0.55), Colors.transparent]).createShader(Rect.fromLTWH(0, fy, w, 2)));
  // Soft out of focus lights drifting in the back.
  final big = s.shortestSide >= 300;
  final rnd = math.Random(seed * 7 + 3);
  for (var i = 0; i < 9; i++) {
    final bx = (rnd.nextDouble() * w + t * w * 0.012 * (0.5 + rnd.nextDouble())) % (w * 1.1) - w * 0.05;
    final by = rnd.nextDouble() * h * 0.72;
    final br = h * (0.025 + rnd.nextDouble() * 0.05);
    final col = (i.isEven ? ad.b : Colors.white).withValues(alpha: 0.06 + 0.08 * (0.5 + 0.5 * math.sin(t * 1.3 + i)));
    final p = Paint()..color = col;
    if (big) p.maskFilter = MaskFilter.blur(BlurStyle.normal, br * 0.5);
    c.drawCircle(Offset(bx, by), br, p);
  }
}

void _vignette(Canvas c, Size s) {
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = RadialGradient(radius: 0.95, colors: [Colors.transparent, Colors.black.withValues(alpha: 0.45)], stops: const [0.62, 1.0]).createShader(r));
}

void _floorShadow(Canvas c, Offset at, double wd, double ht, double alpha, bool blur) {
  final p = Paint()..color = Colors.black.withValues(alpha: alpha);
  if (blur) p.maskFilter = MaskFilter.blur(BlurStyle.normal, ht * 0.6);
  c.drawOval(Rect.fromCenter(center: at, width: wd, height: ht), p);
}

// ─── The 3D phone ────────────────────────────────────────────────────────────

Matrix4 _persp(double size, double ry, double rx, double z) => Matrix4.identity()
  ..setEntry(3, 2, 1 / (size * 2.6))
  ..rotateY(ry)
  ..rotateX(rx)
  ..translateByDouble(0.0, 0.0, z, 1.0);

void _phone(Canvas c, Offset ctr, double ph, double ry, double rx, NgmyAdSpec ad, double lt) {
  final pw = ph * 0.49;
  final body = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: pw, height: ph), Radius.circular(pw * 0.17));
  final depth = pw * 0.085;
  // The metal sides: layers from the back to the front.
  final side = Paint()..shader = const LinearGradient(colors: [Color(0xFF2B303B), Color(0xFFC9D1DC), Color(0xFF59606E), Color(0xFF2B303B)], stops: [0.0, 0.35, 0.7, 1.0]).createShader(body.outerRect);
  for (var k = 6; k >= 1; k--) {
    c.save();
    c.translate(ctr.dx, ctr.dy);
    c.transform(_persp(ph, ry, rx, depth * k / 6).storage);
    c.drawRRect(body, side);
    c.restore();
  }
  c.save();
  c.translate(ctr.dx, ctr.dy);
  c.transform(_persp(ph, ry, rx, 0).storage);
  c.drawRRect(body, Paint()..color = const Color(0xFF07080C));
  c.drawRRect(body.deflate(pw * 0.006), Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = pw * 0.012
    ..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFE5E7EB), Color(0xFF6B7280), Color(0xFFD1D5DB)]).createShader(body.outerRect));
  final scr = body.deflate(pw * 0.035);
  c.save();
  c.clipRRect(scr);
  _screen(c, scr.outerRect, ad, lt);
  // The glass: a soft reflection that moves as the phone turns.
  final gx = scr.left + scr.width * (0.2 - ry * 0.6);
  final glare = Path()
    ..moveTo(gx, scr.top)
    ..lineTo(gx + scr.width * 0.45, scr.top)
    ..lineTo(gx - scr.width * 0.15, scr.bottom)
    ..lineTo(gx - scr.width * 0.6, scr.bottom)
    ..close();
  c.drawPath(glare, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.16), Colors.white.withValues(alpha: 0.02)]).createShader(scr.outerRect));
  c.restore();
  // The camera island.
  c.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(0, scr.top + pw * 0.06), width: pw * 0.28, height: pw * 0.075), Radius.circular(pw * 0.04)), Paint()..color = Colors.black);
  c.restore();
}

/// The NGMY app screen on the phone: the feature, working.
void _screen(Canvas c, Rect r, NgmyAdSpec ad, double lt) {
  final u = r.width;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [const Color(0xFF0E1222), _sink(ad.a, 0.72)]).createShader(r));
  final head = Rect.fromLTWH(r.left, r.top, r.width, r.height * 0.30);
  c.drawRect(head, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [ad.a, ad.b]).createShader(head));
  c.drawCircle(Offset(head.right - u * 0.1, head.top + u * 0.12), u * 0.42, Paint()..color = Colors.white.withValues(alpha: 0.08));
  // Status bar.
  _text(c, '9:41', Offset(r.left + u * 0.09, r.top + u * 0.035), u * 0.045, Colors.white, w: FontWeight.w800);
  _icon(c, Icons.battery_full_rounded, Offset(r.right - u * 0.1, r.top + u * 0.06), u * 0.06, Colors.white);
  // App icon, title and NGMY.
  final ic = RRect.fromRectAndRadius(Rect.fromLTWH(r.left + u * 0.07, r.top + r.height * 0.085, u * 0.17, u * 0.17), Radius.circular(u * 0.05));
  c.drawRRect(ic, Paint()..color = Colors.white.withValues(alpha: 0.22));
  _icon(c, ad.icon, ic.center, u * 0.11, Colors.white);
  _text(c, ad.screenTitle, Offset(ic.right + u * 0.05, ic.top + u * 0.012), u * 0.07, Colors.white, maxW: u * 0.62);
  _text(c, 'NGMY', Offset(ic.right + u * 0.05, ic.top + u * 0.095), u * 0.045, Colors.white70, w: FontWeight.w800, ls: u * 0.006);
  // The big number card: it counts up.
  final card = RRect.fromRectAndRadius(Rect.fromLTWH(r.left + u * 0.06, r.top + r.height * 0.215, u * 0.88, r.height * 0.165), Radius.circular(u * 0.06));
  c.drawRRect(card.shift(Offset(0, u * 0.015)), Paint()..color = Colors.black.withValues(alpha: 0.25));
  c.drawRRect(card, Paint()..color = Colors.white);
  final cnt = Curves.easeOutCubic.transform(_k(lt, 1.0, 2.6));
  _text(c, ad.statLabel, Offset(card.left + u * 0.06, card.top + card.height * 0.16), u * 0.042, const Color(0xFF64748B), w: FontWeight.w700, maxW: u * 0.6);
  _text(c, ad.statFmt.replaceAll('#', _num(ad.stat * cnt, ad.statDecimals)), Offset(card.left + u * 0.06, card.top + card.height * 0.42), u * 0.1, const Color(0xFF0F172A), maxW: u * 0.58);
  final chip = RRect.fromRectAndRadius(Rect.fromLTWH(card.right - u * 0.25, card.top + card.height * 0.32, u * 0.2, card.height * 0.36), Radius.circular(u * 0.05));
  c.drawRRect(chip, Paint()..color = _lift(ad.b, 0.75));
  _icon(c, Icons.trending_up_rounded, chip.center, u * 0.065, _sink(ad.a, 0.1));
  // The rows slide in one by one.
  var y = card.bottom + r.height * 0.04;
  final rowH = r.height * 0.088;
  for (var i = 0; i < ad.rows.length; i++) {
    final row = ad.rows[i];
    final k = _ease(_k(lt, 1.3 + i * 0.35, 0.5));
    if (k > 0) {
      c.save();
      c.translate((1 - k) * u * 0.6, 0);
      final rr = RRect.fromRectAndRadius(Rect.fromLTWH(r.left + u * 0.06, y, u * 0.88, rowH), Radius.circular(u * 0.045));
      c.drawRRect(rr, Paint()..color = Colors.white.withValues(alpha: 0.075 * k));
      c.drawCircle(Offset(rr.left + rowH * 0.55, rr.center.dy), rowH * 0.33, Paint()..color = ad.b.withValues(alpha: 0.22));
      _icon(c, row.icon, Offset(rr.left + rowH * 0.55, rr.center.dy), rowH * 0.38, _lift(ad.b, 0.2));
      _text(c, row.label, Offset(rr.left + rowH * 1.05, rr.center.dy - u * 0.03), u * 0.05, Colors.white, w: FontWeight.w700, maxW: u * 0.46);
      _text(c, row.value, Offset(rr.right - u * 0.04, rr.center.dy - u * 0.028), u * 0.046, _lift(ad.b, 0.3), w: FontWeight.w800, maxW: u * 0.26, align: 1);
      c.restore();
    }
    y += rowH + r.height * 0.022;
  }
  // The button at the bottom, pressed once.
  final press = _k(lt, 5.2, 0.15) * (1 - _k(lt, 5.45, 0.2));
  final btn = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(r.center.dx, r.bottom - r.height * 0.085), width: u * 0.8 * (1 - press * 0.05), height: r.height * 0.075 * (1 - press * 0.08)), Radius.circular(u * 0.08));
  c.drawRRect(btn, Paint()..shader = LinearGradient(colors: [ad.a, ad.b]).createShader(btn.outerRect));
  _text(c, ad.cta, Offset(btn.center.dx, btn.center.dy - u * 0.033), u * 0.052, Colors.white, align: 0.5, maxW: btn.width * 0.85);
  if (press > 0) c.drawCircle(btn.center, u * 0.05 + press * u * 0.3, Paint()..color = Colors.white.withValues(alpha: 0.25 * (1 - press)));
}

// ─── The 3D hero objects ─────────────────────────────────────────────────────

void _heroFace(Canvas c, NgmyAdSpec ad, double r, bool back) {
  switch (ad.hero) {
    case NgmyAdHero.coin:
      final o = Rect.fromCircle(center: Offset.zero, radius: r);
      c.drawOval(o, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.35), colors: [Color(0xFFFFF3B0), Color(0xFFF5C542), Color(0xFFB7791F)], stops: [0.0, 0.5, 1.0]).createShader(o));
      c.drawCircle(Offset.zero, r * 0.82, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = r * 0.05
        ..color = const Color(0xFF9A6B12).withValues(alpha: 0.7));
      for (var i = 0; i < 40; i++) {
        final a = i / 40 * math.pi * 2;
        c.drawLine(Offset(math.cos(a), math.sin(a)) * r * 0.9, Offset(math.cos(a), math.sin(a)) * r * 0.97, Paint()
          ..strokeWidth = r * 0.02
          ..color = const Color(0xFF9A6B12).withValues(alpha: 0.5));
      }
      final label = back ? 'NGMY' : ad.heroText;
      final size = label.length <= 1 ? r * 0.95 : (label.length <= 3 ? r * 0.5 : r * 0.36);
      _text(c, label, Offset(0, -size * 0.56 + r * 0.03), size, const Color(0xFFFFF7D6).withValues(alpha: 0.7), align: 0.5, maxW: r * 1.4);
      _text(c, label, Offset(0, -size * 0.56), size, const Color(0xFF7A4E05), align: 0.5, maxW: r * 1.4);
    case NgmyAdHero.badge:
      final o = Rect.fromCircle(center: Offset.zero, radius: r);
      c.drawOval(o, Paint()..shader = const SweepGradient(colors: [Color(0xFFF8FAFC), Color(0xFF94A3B8), Color(0xFFE2E8F0), Color(0xFF64748B), Color(0xFFF8FAFC)]).createShader(o));
      final inner = Rect.fromCircle(center: Offset.zero, radius: r * 0.84);
      c.drawOval(inner, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [_lift(ad.b, 0.35), ad.b, _sink(ad.a, 0.25)], stops: const [0.0, 0.45, 1.0]).createShader(inner));
      c.drawCircle(Offset.zero, r * 0.72, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = r * 0.025
        ..color = Colors.white.withValues(alpha: 0.35));
      if (back) {
        _text(c, 'NGMY', Offset(0, -r * 0.2), r * 0.38, Colors.white, align: 0.5, maxW: r * 1.3, ls: r * 0.02);
      } else {
        _icon(c, ad.heroIcon ?? ad.icon, Offset(0, r * 0.03), r * 0.95, _sink(ad.a, 0.45).withValues(alpha: 0.35));
        _icon(c, ad.heroIcon ?? ad.icon, Offset.zero, r * 0.95, Colors.white);
      }
    case NgmyAdHero.card:
      final rect = Rect.fromCenter(center: Offset.zero, width: r * 3.0, height: r * 1.9);
      final rr = RRect.fromRectAndRadius(rect, Radius.circular(r * 0.16));
      if (back) {
        c.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [_sink(ad.a, 0.5), _sink(ad.a, 0.75)]).createShader(rect));
        c.drawRect(Rect.fromLTWH(rect.left, rect.top + rect.height * 0.16, rect.width, rect.height * 0.2), Paint()..color = Colors.black.withValues(alpha: 0.85));
        c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(rect.left + rect.width * 0.08, rect.top + rect.height * 0.5, rect.width * 0.55, rect.height * 0.16), Radius.circular(r * 0.03)), Paint()..color = Colors.white.withValues(alpha: 0.9));
        _text(c, 'ngmy.org', Offset(rect.right - rect.width * 0.08, rect.bottom - rect.height * 0.2), r * 0.16, Colors.white70, align: 1, w: FontWeight.w700);
        return;
      }
      c.drawRRect(rr, Paint()..shader = LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [_sink(ad.a, 0.15), ad.b]).createShader(rect));
      c.save();
      c.clipRRect(rr);
      c.drawCircle(Offset(rect.right - r * 0.3, rect.top + r * 0.2), r * 1.3, Paint()..color = Colors.white.withValues(alpha: 0.08));
      c.drawCircle(Offset(rect.left + r * 0.2, rect.bottom), r * 0.9, Paint()..color = Colors.black.withValues(alpha: 0.10));
      c.restore();
      _text(c, 'NGMY', Offset(rect.left + rect.width * 0.07, rect.top + rect.height * 0.1), r * 0.26, Colors.white, ls: r * 0.03);
      _icon(c, ad.icon, Offset(rect.right - rect.width * 0.12, rect.top + rect.height * 0.2), r * 0.32, Colors.white.withValues(alpha: 0.9));
      // The gold chip.
      final chip = RRect.fromRectAndRadius(Rect.fromLTWH(rect.left + rect.width * 0.08, rect.top + rect.height * 0.38, r * 0.48, r * 0.36), Radius.circular(r * 0.06));
      c.drawRRect(chip, Paint()..shader = const LinearGradient(colors: [Color(0xFFFDE68A), Color(0xFFD4A017), Color(0xFFFDE68A)]).createShader(chip.outerRect));
      c.drawLine(Offset(chip.left, chip.center.dy), Offset(chip.right, chip.center.dy), Paint()
        ..color = const Color(0xFF8A6D10)
        ..strokeWidth = r * 0.012);
      c.drawLine(Offset(chip.center.dx, chip.top), Offset(chip.center.dx, chip.bottom), Paint()
        ..color = const Color(0xFF8A6D10)
        ..strokeWidth = r * 0.012);
      _icon(c, Icons.contactless_rounded, Offset(chip.right + r * 0.25, chip.center.dy), r * 0.28, Colors.white70);
      _text(c, '••••  ••••  2026', Offset(rect.left + rect.width * 0.08, rect.top + rect.height * 0.64), r * 0.17, Colors.white.withValues(alpha: 0.9), w: FontWeight.w700, ls: r * 0.02);
      _text(c, ad.heroText, Offset(rect.left + rect.width * 0.08, rect.top + rect.height * 0.8), r * 0.15, Colors.white, ls: r * 0.03, maxW: rect.width * 0.6);
  }
}

Path _heroShape(NgmyAdSpec ad, double r) => ad.hero == NgmyAdHero.card
    ? (Path()..addRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: r * 3.0, height: r * 1.9), Radius.circular(r * 0.16))))
    : (Path()..addOval(Rect.fromCircle(center: Offset.zero, radius: r)));

/// The hero object turned by [ang] around its upright axis, with real thickness, and a shine passing over it.
void _hero(Canvas c, Offset ctr, double r, NgmyAdSpec ad, double ang, double shine) {
  final depth = ad.hero == NgmyAdHero.card ? r * 0.06 : r * 0.16;
  final facing = math.cos(ang) >= 0;
  final edge = Paint()
    ..color = switch (ad.hero) {
      NgmyAdHero.coin => const Color(0xFFA16207),
      NgmyAdHero.badge => const Color(0xFF64748B),
      NgmyAdHero.card => _lift(ad.a, 0.55),
    };
  final shape = _heroShape(ad, r);
  void at(double z, void Function() draw) {
    c.save();
    c.translate(ctr.dx, ctr.dy);
    c.transform(_persp(r * 3, ang, -0.12, z).storage);
    draw();
    c.restore();
  }

  // Back to front: the far face, the edge, the near face.
  final layers = <double>[for (var k = 1; k < 8; k++) depth * k / 8];
  if (facing) {
    at(depth, () {
      c.scale(-1, 1);
      _heroFace(c, ad, r, true);
    });
    for (final z in layers.reversed) {
      at(z, () => c.drawPath(shape, edge));
    }
    at(0, () {
      _heroFace(c, ad, r, false);
      if (shine > 0 && shine < 1) {
        c.clipPath(shape);
        final x = -r * 3 + shine * r * 6;
        c.drawRect(Rect.fromLTWH(x - r * 0.5, -r * 2, r, r * 4), Paint()..shader = LinearGradient(colors: [Colors.white.withValues(alpha: 0), Colors.white.withValues(alpha: 0.45), Colors.white.withValues(alpha: 0)]).createShader(Rect.fromLTWH(x - r * 0.5, 0, r, 1)));
      }
    });
  } else {
    at(0, () => _heroFace(c, ad, r, false));
    for (final z in layers) {
      at(z, () => c.drawPath(shape, edge));
    }
    at(depth, () {
      c.scale(-1, 1);
      _heroFace(c, ad, r, true);
    });
  }
}

/// Little glossy balls with the ad icons, going round the phone (the ones behind are drawn first).
void _orbiters(Canvas c, Offset ctr, double ph, NgmyAdSpec ad, double t, bool front) {
  for (var i = 0; i < ad.rows.length; i++) {
    final a = t * 0.7 + i * math.pi * 2 / ad.rows.length;
    final z = math.sin(a);
    if ((z < 0) != front) continue;
    final p = Offset(ctr.dx + math.cos(a) * ph * 0.4, ctr.dy - ph * 0.22 + i * ph * 0.2 + math.sin(t * 1.4 + i) * ph * 0.025);
    final rad = ph * 0.07 * (0.85 - z * 0.25);
    final o = Rect.fromCircle(center: p, radius: rad);
    c.drawCircle(p + Offset(0, rad * 0.25), rad, Paint()..color = Colors.black.withValues(alpha: 0.25));
    c.drawOval(o, Paint()..shader = RadialGradient(center: const Alignment(-0.35, -0.4), colors: [_lift(ad.b, 0.55), ad.b, _sink(ad.a, 0.35)], stops: const [0.0, 0.45, 1.0]).createShader(o));
    _icon(c, ad.rows[i].icon, p, rad * 1.0, Colors.white);
    c.drawOval(Rect.fromCenter(center: p + Offset(-rad * 0.32, -rad * 0.48), width: rad * 0.7, height: rad * 0.32), Paint()..color = Colors.white.withValues(alpha: 0.45));
  }
}

// ─── The advert ──────────────────────────────────────────────────────────────

/// One frame of ad [index] at [lt] seconds into it (0 to 10). [ofCount] shows "Ad 3 of 14" in the corner when the ads play one after another.
void paintNgmyAd3D(Canvas c, Size s, int index, double lt, {NgmyAdTap? tap, bool ofCount = false}) {
  final ad = kNgmyAds3D[index % kNgmyAds3D.length];
  final w = s.width, h = s.height;
  if (w <= 0 || h <= 0) return;
  lt = lt.clamp(0.0, kNgmyAdLength);
  c.save();
  c.clipRect(Offset.zero & s);

  // Very small screens (a watch, a tiny board part): the studio, the medal and the name.
  if (s.shortestSide < 60) {
    _studio(c, s, ad, lt, index, rich: false);
    final r = s.shortestSide * 0.3;
    final ctr = Offset(w / 2, h * (w >= h ? 0.42 : 0.4));
    final ic = Rect.fromCircle(center: ctr, radius: r);
    c.drawOval(ic, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [_lift(ad.b, 0.4), ad.b, _sink(ad.a, 0.3)]).createShader(ic));
    _icon(c, ad.icon, ctr, r * 1.1, Colors.white);
    _text(c, ad.brand.replaceFirst('NGMY ', ''), Offset(w / 2, h * 0.76), s.shortestSide * 0.13, Colors.white, align: 0.5, maxW: w * 0.92);
    c.restore();
    return;
  }

  final rich = s.shortestSide >= 300;
  _studio(c, s, ad, lt, index, rich: true);
  final land = w >= h * 1.15;
  // U is the size everything is measured with; the text sits on the left (wide screens) or under the picture (tall ones).
  final u = land ? h : math.min(h * 0.62, w * 1.05);
  final tx = land ? w * 0.07 : w / 2;
  final al = land ? 0.0 : 0.5;
  final tw = land ? w * 0.42 : w * 0.88;
  final ty = land ? h * 0.22 : h * 0.63;
  final stage = land ? Offset(w * 0.73, h * 0.47) : Offset(w / 2, h * 0.33);
  final ph = land ? h * 0.8 : math.min(h * 0.5, w * 0.6 / 0.49);

  final spin = tap == null ? 0.0 : Curves.easeOutBack.transform(_k(tap.age, 0, 1.1)) * math.pi * 2;
  final idle = math.sin(lt * 1.1) * 0.05;

  // ── Scenes 1 and 2: the phone.
  if (lt < 6.9) {
    final enter = _ease(_k(lt, 0, 1.1));
    final turn = Curves.easeInOut.transform(_k(lt, 3.2, 0.9));
    final leave = Curves.easeInCubic.transform(_k(lt, 6.3, 0.6));
    final ry = (-1.15 + enter * 0.73) + turn * 0.3 + leave * 0.9 + idle + spin;
    final x = stage.dx + (1 - enter) * w * 0.45 + leave * w * 0.7;
    final y = stage.dy + math.sin(lt * 1.6) * ph * 0.012;
    final size = ph * (1 + turn * 0.06);
    final ctr = Offset(x, y);
    _floorShadow(c, Offset(x, y + size * 0.55), size * 0.62, size * 0.07, 0.5, rich);
    _orbiters(c, ctr, size, ad, lt, false);
    _phone(c, ctr, size, ry, 0.07 - turn * 0.03, ad, lt);
    _orbiters(c, ctr, size, ad, lt, true);
  }

  // ── Scene 3: the hero object.
  if (lt >= 6.2 && lt < 8.9) {
    final k = Curves.easeOutBack.transform(_k(lt, 6.4, 0.7));
    final out = Curves.easeInCubic.transform(_k(lt, 8.4, 0.45));
    final r = (ad.hero == NgmyAdHero.card ? u * 0.15 : u * 0.2) * k * (1 - out * 0.4);
    if (r > 1) {
      final ang = (1 - k) * math.pi * 1.5 + math.sin(lt * 1.5) * 0.35 + spin + out * math.pi;
      final ctr = Offset(stage.dx, stage.dy - u * 0.02 + math.sin(lt * 2) * u * 0.012);
      c.drawCircle(ctr, r * 2.0, Paint()..shader = RadialGradient(colors: [ad.b.withValues(alpha: 0.35 * k), Colors.transparent]).createShader(Rect.fromCircle(center: ctr, radius: r * 2.0)));
      _floorShadow(c, Offset(ctr.dx, stage.dy + u * 0.33), r * 2.2, r * 0.25, 0.45 * k, rich);
      _hero(c, ctr, r, ad, ang, _k(lt, 7.2, 0.9));
      if (ad.hero != NgmyAdHero.card) {
        // A ribbon with the word under the medal or the coin.
        final rk = _ease(_k(lt, 7.0, 0.4)) * (1 - out);
        if (rk > 0) {
          final rb = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(ctr.dx, ctr.dy + r * 1.28), width: r * 1.9 * rk, height: u * 0.075), Radius.circular(u * 0.02));
          c.drawRRect(rb.shift(Offset(0, u * 0.008)), Paint()..color = Colors.black.withValues(alpha: 0.3));
          c.drawRRect(rb, Paint()..shader = LinearGradient(colors: [_sink(ad.a, 0.1), ad.a, _sink(ad.a, 0.1)]).createShader(rb.outerRect));
          if (rk > 0.6) _text(c, ad.hero == NgmyAdHero.coin ? ad.brand.replaceFirst('NGMY ', '').toUpperCase() : ad.heroText, Offset(rb.center.dx, rb.center.dy - u * 0.025), u * 0.042, Colors.white, align: 0.5, maxW: rb.width * 0.86, ls: u * 0.004);
        }
      }
    }
  }

  // ── The words of each scene.
  final eyebrowCol = _lift(ad.b, 0.25);
  final hs = u * (land ? 0.105 : 0.095);
  if (lt < 3.3) {
    final fade = 1 - _k(lt, 3.0, 0.3);
    final e = _k(lt, 0.2, 0.4) * fade;
    _reveal(c, e, Rect.fromLTWH(0, ty, w, u * 0.05), () => _text(c, ad.brand.toUpperCase(), Offset(tx, ty), u * 0.036, eyebrowCol, maxW: tw, align: al, ls: u * 0.006));
    final y1 = ty + u * 0.07;
    _reveal(c, _k(lt, 0.45, 0.5) * fade, Rect.fromLTWH(0, y1, w, hs * 1.15), () => _text(c, ad.hook1, Offset(tx, y1), hs, Colors.white, maxW: tw, align: al, ls: -hs * 0.02));
    final y2 = y1 + hs * 1.18;
    _reveal(c, _k(lt, 0.85, 0.5) * fade, Rect.fromLTWH(0, y2, w, hs * 1.15), () => _text(c, ad.hook2, Offset(tx, y2), hs, Colors.white, maxW: tw, align: al, ls: -hs * 0.02, grad: [Colors.white, _lift(ad.b, 0.35)]));
    // A thin line that draws itself under the hook.
    final lk = _ease(_k(lt, 1.3, 0.6)) * fade;
    final ly = y2 + hs * 1.35;
    final lw = u * 0.22 * lk;
    c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(land ? tx : tx - lw / 2, ly, lw, u * 0.008), Radius.circular(u * 0.004)), Paint()..color = ad.b);
  } else if (lt < 6.5) {
    final fade = 1 - _k(lt, 6.2, 0.3);
    _reveal(c, _k(lt, 3.3, 0.4) * fade, Rect.fromLTWH(0, ty, w, u * 0.05), () => _text(c, ad.brand.toUpperCase(), Offset(tx, ty), u * 0.036, eyebrowCol, maxW: tw, align: al, ls: u * 0.006));
    final ly = ty + u * 0.07;
    var lh = 0.0;
    final lk = _k(lt, 3.45, 0.5) * fade;
    if (lk > 0) {
      c.save();
      c.translate(0, (1 - _ease(lk)) * u * 0.04);
      lh = _para(c, ad.line, Offset(tx, ly), u * (land ? 0.05 : 0.046), Colors.white.withValues(alpha: lk), tw, align: al, lines: 2, w: FontWeight.w700);
      c.restore();
    } else {
      lh = u * 0.12;
    }
    var by = ly + math.max(lh, u * 0.06) + u * 0.04;
    for (var i = 0; i < ad.bullets.length; i++) {
      final bk = _ease(_k(lt, 3.9 + i * 0.3, 0.4)) * fade;
      if (bk > 0) {
        final bs = u * 0.04;
        final textW = tw - bs * 1.8;
        if (land) {
          c.drawCircle(Offset(tx + bs * 0.55, by + bs * 0.62), bs * 0.55 * bk, Paint()..color = ad.b);
          _icon(c, Icons.check_rounded, Offset(tx + bs * 0.55, by + bs * 0.62), bs * 0.8 * bk, _sink(ad.a, 0.4));
          c.save();
          c.translate((1 - bk) * u * 0.05, 0);
          _text(c, ad.bullets[i], Offset(tx + bs * 1.6, by), bs, Colors.white.withValues(alpha: 0.92 * bk), maxW: textW, w: FontWeight.w700);
          c.restore();
        } else {
          // Centred: the tick and the words together.
          final tp = _tp(ad.bullets[i], bs, Colors.white, w: FontWeight.w700);
          final tW = math.min(tp.width, tw - bs * 1.6);
          final x0 = tx - (tW + bs * 1.6) / 2;
          final yy = by + (1 - bk) * u * 0.03;
          c.drawCircle(Offset(x0 + bs * 0.55, yy + bs * 0.62), bs * 0.55, Paint()..color = ad.b.withValues(alpha: bk));
          _icon(c, Icons.check_rounded, Offset(x0 + bs * 0.55, yy + bs * 0.62), bs * 0.8, _sink(ad.a, 0.4).withValues(alpha: bk));
          _text(c, ad.bullets[i], Offset(x0 + bs * 1.6, yy), bs, Colors.white.withValues(alpha: 0.92 * bk), maxW: tw - bs * 1.6, w: FontWeight.w700);
        }
      }
      by += u * 0.075;
    }
  } else if (lt < 8.6) {
    final fade = 1 - _k(lt, 8.3, 0.3);
    _reveal(c, _k(lt, 6.6, 0.4) * fade, Rect.fromLTWH(0, ty, w, u * 0.05), () => _text(c, ad.brand.toUpperCase(), Offset(tx, ty), u * 0.036, eyebrowCol, maxW: tw, align: al, ls: u * 0.006));
    final bk = _k(lt, 6.8, 0.5) * fade;
    if (bk > 0) {
      c.save();
      c.translate(0, (1 - _ease(bk)) * u * 0.05);
      _para(c, ad.benefit, Offset(tx, ty + u * 0.07), u * (land ? 0.085 : 0.075), Colors.white.withValues(alpha: bk), tw, align: al, lines: land ? 3 : 2, w: FontWeight.w900);
      c.restore();
    }
  }

  // ── Scene 4: the end card.
  if (lt >= 8.5) {
    final k = _k(lt, 8.5, 0.35);
    c.drawRect(Offset.zero & s, Paint()..color = Colors.black.withValues(alpha: 0.45 * k));
    final cy = h * (land ? 0.36 : 0.38);
    final pop = Curves.easeOutBack.transform(_k(lt, 8.55, 0.5));
    c.save();
    c.translate(w / 2, cy);
    c.scale(0.7 + 0.3 * pop);
    c.translate(-w / 2, -cy);
    final ws = math.min(u * 0.17, w * 0.2);
    _text(c, 'NGMY', Offset(w / 2, cy - ws * 0.6), ws, Colors.white.withValues(alpha: k), align: 0.5, ls: ws * 0.12, grad: [Colors.white, _lift(ad.b, 0.3)]);
    c.restore();
    _text(c, ad.brand, Offset(w / 2, cy + ws * 0.62), u * 0.048, Colors.white.withValues(alpha: 0.85 * _k(lt, 8.7, 0.3)), align: 0.5, maxW: w * 0.86, w: FontWeight.w800);
    final bk = Curves.easeOutBack.transform(_k(lt, 8.8, 0.45));
    if (bk > 0) {
      final bw = math.min(w * 0.6, math.max(w * 0.3, u * 0.5)) * bk;
      final btn = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(w / 2, cy + ws * 0.62 + u * 0.16), width: bw, height: u * 0.1), Radius.circular(u * 0.05));
      final glow = Paint()..color = ad.b.withValues(alpha: 0.45);
      if (rich) glow.maskFilter = MaskFilter.blur(BlurStyle.normal, u * 0.03);
      c.drawRRect(btn, glow);
      c.drawRRect(btn, Paint()..shader = LinearGradient(colors: [ad.a, ad.b]).createShader(btn.outerRect));
      c.save();
      c.clipRRect(btn);
      final sx = btn.left - btn.width * 0.3 + ((lt - 9.0) / 0.9).clamp(0.0, 1.0) * btn.width * 1.6;
      c.drawRect(Rect.fromLTWH(sx, btn.top, btn.width * 0.25, btn.height), Paint()..shader = LinearGradient(colors: [Colors.white.withValues(alpha: 0), Colors.white.withValues(alpha: 0.5), Colors.white.withValues(alpha: 0)]).createShader(Rect.fromLTWH(sx, 0, btn.width * 0.25, 1)));
      c.restore();
      if (bk > 0.7) _text(c, ad.cta, Offset(w / 2, btn.center.dy - u * 0.03), u * 0.05, Colors.white, align: 0.5, maxW: btn.width * 0.8);
      _text(c, 'ngmy.org', Offset(w / 2, btn.bottom + u * 0.035), u * 0.036, Colors.white.withValues(alpha: 0.65 * bk.clamp(0.0, 1.0)), align: 0.5, w: FontWeight.w700, ls: u * 0.004);
    }
  }

  _vignette(c, s);

  // A ring where the picture was tapped.
  if (tap != null && tap.age < 0.7) {
    final rk = tap.age / 0.7;
    c.drawCircle(Offset(tap.at.dx * w, tap.at.dy * h), u * (0.05 + 0.3 * rk), Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = u * 0.012 * (1 - rk)
      ..color = Colors.white.withValues(alpha: 0.8 * (1 - rk)));
  }

  // The little marks a real advert has: the brand in a corner, "Ad", and how far the ad has played.
  final m = u * 0.035;
  final tag = ofCount ? 'Ad ${index % kNgmyAds3D.length + 1} of ${kNgmyAds3D.length}' : 'Ad';
  final tagTp = _tp(tag, m * 0.9, Colors.white, w: FontWeight.w800);
  final tagR = RRect.fromRectAndRadius(Rect.fromLTWH(m, m, tagTp.width + m * 1.2, tagTp.height + m * 0.5), Radius.circular(m * 0.4));
  c.drawRRect(tagR, Paint()..color = const Color(0xFFFACC15).withValues(alpha: 0.95));
  _text(c, tag, Offset(tagR.left + m * 0.6, tagR.top + m * 0.25), m * 0.9, const Color(0xFF111827), w: FontWeight.w800);
  c.drawRect(Rect.fromLTWH(0, h - u * 0.012, w, u * 0.012), Paint()..color = Colors.white.withValues(alpha: 0.2));
  c.drawRect(Rect.fromLTWH(0, h - u * 0.012, w * lt / kNgmyAdLength, u * 0.012), Paint()..color = const Color(0xFFFACC15));

  // A soft fade in and out so one ad flows into the next.
  final fade = lt < 0.25 ? 1 - lt / 0.25 : (lt > kNgmyAdLength - 0.2 ? (lt - (kNgmyAdLength - 0.2)) / 0.2 : 0.0);
  if (fade > 0) c.drawRect(Offset.zero & s, Paint()..color = Colors.black.withValues(alpha: fade.clamp(0.0, 1.0)));
  c.restore();
}

// ─── Learn more ──────────────────────────────────────────────────────────────

/// What an ad is about and where to find it in NGMY, from the Learn more button on the TV.
class NgmyAdInfoSheet extends StatelessWidget {
  const NgmyAdInfoSheet({super.key, required this.ad, required this.onReplay});

  final NgmyAdSpec ad;
  final VoidCallback onReplay;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: false,
      child: Center(
        heightFactor: 1,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: 520, maxHeight: MediaQuery.sizeOf(context).height * 0.9),
          child: Container(
            key: const Key('ad-info-sheet'),
            margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
            decoration: BoxDecoration(
              color: const Color(0xFF0B0F1A),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: ad.b.withValues(alpha: 0.45)),
              boxShadow: [BoxShadow(color: ad.b.withValues(alpha: 0.25), blurRadius: 30)],
            ),
            clipBehavior: Clip.antiAlias,
            child: SingleChildScrollView(
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Container(
                  padding: const EdgeInsets.fromLTRB(18, 18, 18, 16),
                  decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [ad.a, ad.b])),
                  child: Row(children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), borderRadius: BorderRadius.circular(14)),
                      child: Icon(ad.icon, color: Colors.white, size: 28),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text(ad.brand, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                        const SizedBox(height: 2),
                        Text('${ad.hook1} ${ad.hook2}', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 12.5)),
                      ]),
                    ),
                  ]),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 14, 18, 6),
                  child: Text(ad.line, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14.5, height: 1.3)),
                ),
                for (final b in ad.bullets)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(18, 6, 18, 0),
                    child: Row(children: [
                      Container(
                        width: 20,
                        height: 20,
                        decoration: BoxDecoration(color: ad.b, shape: BoxShape.circle),
                        child: Icon(Icons.check_rounded, size: 14, color: _sink(ad.a, 0.4)),
                      ),
                      const SizedBox(width: 10),
                      Expanded(child: Text(b, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w600, fontSize: 13))),
                    ]),
                  ),
                Container(
                  key: const Key('ad-info-find'),
                  margin: const EdgeInsets.fromLTRB(18, 14, 18, 0),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: ad.b.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: ad.b.withValues(alpha: 0.4))),
                  child: Row(children: [
                    Icon(Icons.place_rounded, color: _lift(ad.b, 0.2), size: 20),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('WHERE TO FIND IT', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.2)),
                        const SizedBox(height: 2),
                        Text(ad.find, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                      ]),
                    ),
                  ]),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
                  child: Row(children: [
                    Expanded(
                      child: OutlinedButton.icon(
                        key: const Key('ad-info-replay'),
                        onPressed: onReplay,
                        style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38), padding: const EdgeInsets.symmetric(vertical: 13), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                        icon: const Icon(Icons.replay_rounded, size: 18),
                        label: const Text('Watch again', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        key: const Key('ad-info-ok'),
                        onPressed: () => Navigator.of(context).pop(),
                        style: FilledButton.styleFrom(backgroundColor: ad.b, foregroundColor: _sink(ad.a, 0.5), padding: const EdgeInsets.symmetric(vertical: 13), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                        child: const Text('Got it', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ]),
                ),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}
