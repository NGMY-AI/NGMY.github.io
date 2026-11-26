import 'dart:async';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_help_center.dart';
import 'ngmy_house_workers.dart' show showNgmyCareCashAppSheet;
import 'ngmy_nav.dart';
import 'ngmy_stripe_payments.dart' show showNgmyPlanPaymentDialog;
import 'ngmy_stripe_checkout_launch_stub.dart' if (dart.library.html) 'ngmy_stripe_checkout_launch_web.dart';
import 'ngmy_help_services_nav_stub.dart' if (dart.library.html) 'ngmy_help_services_nav_web.dart';
import 'ngmy_ui_lang.dart';

/// Help & Services: paid help plans from the NGMY team (Real Estate Flipper course, help buying a house,
/// advice). The plans and their prices come from the server (service_categories). A purchase is paid only
/// after an admin approves the Cash App screenshot, or after Stripe confirms the card payment on the server.
class NgmyHelpServicesLang {
  static final NgmyLangStore store = NgmyLangStore('ngmy_help_services_lang_v1');
}

String _t(String en, String sw) => NgmyHelpServicesLang.store.t(en, sw);

class NgmyHelpServicesApi {
  static Future<Map<String, dynamic>> _call(String action, [Map<String, dynamic> extra = const {}]) async {
    try {
      final res = await ngmyEdgeInvoke({'action': action, ...extra}, timeout: const Duration(seconds: 30));
      if (res == null) return {'ok': false, 'error': 'No connection. Try again.'};
      return res;
    } catch (_) {
      return {'ok': false, 'error': 'No connection. Try again.'};
    }
  }

  static Future<Map<String, dynamic>> list() => _call('svcList');
  static Future<Map<String, dynamic>> cashApp(String categoryId, String code, String proofBase64, String proofMime) =>
      _call('svcCashApp', {'categoryId': categoryId, 'code': code, 'proofBase64': proofBase64, 'proofMime': proofMime});
  static Future<Map<String, dynamic>> stripeStart(String categoryId) =>
      _call('svcStripeStart', {'categoryId': categoryId, 'origin': Uri.base.origin});
  static Future<Map<String, dynamic>> stripeVerify(String purchaseId) => _call('svcStripeVerify', {'purchaseId': purchaseId});
  static Future<Map<String, dynamic>> stripeCancel(String purchaseId) => _call('svcStripeCancel', {'purchaseId': purchaseId});
  static Future<Map<String, dynamic>> adminList() => _call('svcAdminList');
  static Future<Map<String, dynamic>> adminDecide(String id, bool approve) =>
      _call('svcAdminDecide', {'purchaseId': id, 'decision': approve ? 'approve' : 'reject'});
  static Future<Map<String, dynamic>> adminSetWhatsapp(String number) => _call('svcAdminSetWhatsapp', {'number': number});
}

class NgmyServiceCategory {
  NgmyServiceCategory(this.raw);
  final Map<String, dynamic> raw;

  String get id => (raw['id'] ?? '').toString();
  double get price => ((raw['price'] as num?) ?? 0).toDouble();
  String get icon => (raw['icon'] ?? '').toString();
  bool get grantsCourse => raw['grantsCourse'] == true;
  String title({bool? sw}) => _pick('titleEn', 'titleSw', sw);
  String description({bool? sw}) => _pick('descriptionEn', 'descriptionSw', sw);
  String whatsappMessage({bool? sw}) => _pick('whatsappMessageEn', 'whatsappMessageSw', sw);
  List<String> includes({bool? sw}) {
    final useSw = sw ?? NgmyHelpServicesLang.store.isSw;
    final list = raw[useSw ? 'includesSw' : 'includesEn'];
    final fallback = raw['includesEn'];
    final pick = (list is List && list.isNotEmpty) ? list : (fallback is List ? fallback : const []);
    return pick.map((e) => e.toString()).toList();
  }

  String _pick(String en, String sw, bool? useSw) {
    final s = useSw ?? NgmyHelpServicesLang.store.isSw;
    final v = (raw[s ? sw : en] ?? '').toString();
    return v.isNotEmpty ? v : (raw[en] ?? '').toString();
  }
}

/// Plan order on the page: Advice, then Buy a House, then the Flipper course. Plans the admin adds later
/// follow, in the order the server sends them (sort_order).
const _kPlanOrder = ['advice', 'buy_house', 'flipper_course'];
int _planRank(NgmyServiceCategory c) {
  final i = _kPlanOrder.indexOf(c.id);
  return i >= 0 ? i : _kPlanOrder.length;
}

String _money(num v) => v == v.roundToDouble() ? '\$${v.toStringAsFixed(0)}' : '\$${v.toStringAsFixed(2)}';

String _date(dynamic raw) {
  final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
  if (d == null) return '—';
  final months = NgmyHelpServicesLang.store.isSw
      ? const ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des']
      : const ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  final h = d.hour == 0 ? 12 : (d.hour > 12 ? d.hour - 12 : d.hour);
  return '${months[d.month - 1]} ${d.day}, ${d.year} · $h:${d.minute.toString().padLeft(2, '0')} ${d.hour >= 12 ? 'PM' : 'AM'}';
}

({IconData icon, List<Color> colors}) _look(String icon) {
  switch (icon) {
    case 'flipper':
      return (icon: Icons.home_repair_service_rounded, colors: const [Color(0xFFFFB547), Color(0xFFF97316)]);
    case 'house':
      return (icon: Icons.house_rounded, colors: const [Color(0xFF2DD4BF), Color(0xFF0E7490)]);
    case 'advice':
      return (icon: Icons.forum_rounded, colors: const [Color(0xFFA78BFA), Color(0xFF6D28D9)]);
    default:
      return (icon: Icons.volunteer_activism_rounded, colors: const [Color(0xFF60A5FA), Color(0xFF1D4ED8)]);
  }
}

/// A bright, light colour for each plan card (lavender, mint, peach). Dark text stays easy to read on it.
Color _soft(String icon) {
  switch (icon) {
    case 'flipper':
      return const Color(0xFFFFD2A6);
    case 'house':
      return const Color(0xFFADF0DA);
    case 'advice':
      return const Color(0xFFD8C8FF);
    default:
      return const Color(0xFFC4DCFF);
  }
}

/// A dark shade of each plan colour, for the price and the checkmarks, readable on white.
Color _deepInk(String icon) {
  switch (icon) {
    case 'flipper':
      return const Color(0xFFC2410C);
    case 'house':
      return const Color(0xFF0F766E);
    case 'advice':
      return const Color(0xFF6D28D9);
    default:
      return const Color(0xFF1D4ED8);
  }
}

class _Palette {
  _Palette(BuildContext context) : dark = Theme.of(context).brightness == Brightness.dark;
  final bool dark;
  Color get page => dark ? const Color(0xFF0A0E16) : const Color(0xFFF4F6FB);
  Color get card => dark ? const Color(0xFF141A26) : Colors.white;
  Color get tile => dark ? const Color(0xFF1B2232) : const Color(0xFFF6F8FC);
  Color get line => dark ? const Color(0xFF263044) : const Color(0xFFE3E8F1);
  Color get ink => dark ? Colors.white : const Color(0xFF0F172A);
  Color get muted => dark ? Colors.white.withValues(alpha: 0.62) : const Color(0xFF5B6478);
}

const _kGreen = Color(0xFF16A34A);
const _kAmber = Color(0xFFF59E0B);
const _kRed = Color(0xFFDC2626);

/// Opens the Help & Services page (the same page for members and for the admin).
Future<void> showNgmyHelpServicesPage(
  BuildContext context, {
  required String userName,
  required dynamic config,
  String? returnSession,
}) {
  return NgmyNavigator.push(
    context,
    NgmyHelpServicesPage(userName: userName, config: config, returnSession: returnSession),
    routeName: 'NgmyHelpServicesPage',
  );
}

/// When the app opens after Stripe (?svc_paid=<session> or ?svc_cancel=1): the session id, 'cancel', or null.
/// It is read once and removed from the address.
String? ngmyHelpServicesTakeReturn() {
  try {
    return ngmyHelpServicesReadReturnParam();
  } catch (_) {
    return null;
  }
}

NgmyHelpCenterConfig _helpConfig(dynamic config) {
  try {
    return NgmyHelpCenterConfig.fromMap((config as dynamic).helpCenterHub as Map<String, dynamic>);
  } catch (_) {
    return NgmyHelpCenterConfig.defaults();
  }
}

/// The WhatsApp number for this page: the admin setting, or else the number the Help Center already uses.
String _fallbackWhatsapp(dynamic config) {
  final cfg = _helpConfig(config);
  final link = Uri.tryParse(cfg.whatsappLink.trim());
  if (link != null && link.host.contains('wa.me') && link.pathSegments.isNotEmpty) return link.pathSegments.first;
  return cfg.digitsPhone();
}

class NgmyHelpServicesPage extends StatefulWidget {
  const NgmyHelpServicesPage({super.key, required this.userName, required this.config, this.returnSession});
  final String userName;
  final dynamic config;

  /// Set when the app was opened by Stripe after a card payment (the checkout session id), or 'cancel'.
  final String? returnSession;

  @override
  State<NgmyHelpServicesPage> createState() => _NgmyHelpServicesPageState();
}

class _NgmyHelpServicesPageState extends State<NgmyHelpServicesPage> with WidgetsBindingObserver {
  bool _loading = true;
  String? _error;
  List<NgmyServiceCategory> _cats = [];
  List<Map<String, dynamic>> _purchases = [];
  String _whatsapp = '';
  Timer? _poll;

  /// The card purchase whose Stripe page was just opened. When it becomes paid, its receipt opens by itself.
  String? _awaitingId;

  /// The Stripe session the app came back from (after paying in the same window or a new one).
  String? _returnSession;
  int _returnTries = 0;
  bool _receiptOpen = false;

  NgmyLangStore get _lang => NgmyHelpServicesLang.store;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _lang.code.addListener(_langChanged);
    unawaited(_lang.load());
    final back = widget.returnSession;
    if (back != null && back != 'cancel' && back.isNotEmpty) _returnSession = back;
    _load();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _lang.code.removeListener(_langChanged);
    _poll?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    // Back from the Stripe tab or from Cash App: look again.
    if (state == AppLifecycleState.resumed) _load(quiet: true);
  }

  void _langChanged() {
    if (mounted) setState(() {});
  }

  Future<void> _load({bool quiet = false}) async {
    if (!quiet && mounted) setState(() => _loading = true);
    final res = await NgmyHelpServicesApi.list();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res['ok'] == true) {
        _error = null;
        final fromServer = ((res['categories'] as List?) ?? const []).whereType<Map>().map((e) => NgmyServiceCategory(Map<String, dynamic>.from(e))).toList();
        _cats = [...fromServer]..sort((a, b) {
            final r = _planRank(a).compareTo(_planRank(b));
            return r != 0 ? r : fromServer.indexOf(a).compareTo(fromServer.indexOf(b));
          });
        _purchases = ((res['purchases'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
        final n = (res['whatsappNumber'] ?? '').toString().trim();
        _whatsapp = n.isNotEmpty ? n : _fallbackWhatsapp(widget.config);
      } else if (!quiet || _cats.isEmpty) {
        _error = (res['error'] ?? 'Could not load. Try again.').toString();
      }
    });
    await _openReceiptIfPaid();
    _schedulePoll();
  }

  /// After a card payment (Stripe confirmed it on the server), open the receipt by itself.
  Future<void> _openReceiptIfPaid() async {
    if (!mounted || _receiptOpen) return;
    Map<String, dynamic>? match;
    for (final p in _purchases) {
      final mine = (_awaitingId != null && p['id'] == _awaitingId) || (_returnSession != null && p['transactionId'] == _returnSession);
      if (mine) match = p;
    }
    if (_returnSession != null) {
      _returnTries++;
      // Stripe can take a moment to confirm; stop waiting after about a minute.
      if (_returnTries > 12 && (match == null || match['status'] != 'paid')) _returnSession = null;
    }
    if (match == null || match['status'] != 'paid') return;
    _awaitingId = null;
    _returnSession = null;
    _receiptOpen = true;
    await _openPurchase(match);
    _receiptOpen = false;
  }

  /// While a card payment just opened on Stripe is not confirmed yet, ask the server every few seconds (it asks Stripe).
  void _schedulePoll() {
    _poll?.cancel();
    if (_awaitingId != null || _returnSession != null) _poll = Timer(const Duration(seconds: 5), () => _load(quiet: true));
  }

  NgmyServiceCategory? _cat(String id) {
    for (final c in _cats) {
      if (c.id == id) return c;
    }
    return null;
  }

  Map<String, dynamic>? _latestFor(String categoryId) {
    for (final p in _purchases) {
      // A card checkout that was opened but not paid is not shown (it closes by itself at Stripe).
      final openCard = p['method'] == 'stripe' && p['status'] == 'pending';
      if (p['categoryId'] == categoryId && !openCard && (p['status'] == 'paid' || p['status'] == 'pending')) return p;
    }
    return null;
  }

  void _snack(String text, {bool error = false}) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text), backgroundColor: error ? _kRed : null));
  }

  Future<void> _openPurchase(Map<String, dynamic> p) async {
    final cat = _cat((p['categoryId'] ?? '').toString());
    if (cat == null) return;
    await NgmyNavigator.push(
      context,
      NgmyServicePurchasePage(purchase: p, category: cat, userName: widget.userName, whatsapp: _whatsapp),
      routeName: 'NgmyServicePurchasePage',
    );
    if (mounted) _load(quiet: true);
  }

  Future<void> _pay(NgmyServiceCategory cat) async {
    // The same payment pop-up as Help Center, House + Insurance.
    final look = _look(cat.icon);
    // The card checkout is made on the server while the pop-up is showing, so that Pay with card opens the
    // Stripe page inside the tap itself (like Phone Unlock). A phone blocks a window opened later than the tap.
    Map<String, dynamic>? ready;
    final preparing = NgmyHelpServicesApi.stripeStart(cat.id).then((r) => ready = r);
    var opened = false;
    final method = await showNgmyPlanPaymentDialog(
      onCard: () {
        final r = ready;
        final url = (r?['url'] ?? '').toString();
        if (r?['ok'] == true && url.isNotEmpty) {
          ngmyLaunchPaymentCheckout(url);
          opened = true;
          _awaitingId = (r?['purchaseId'] ?? '').toString();
        }
      },
      context: context,
      title: cat.title(),
      message: cat.description(),
      priceLabel: _money(cat.price),
      icon: look.icon,
      colors: look.colors,
      perks: cat.includes(),
      badge: _t('ONE-TIME PAYMENT', 'MALIPO YA MARA MOJA'),
      chip: _t('Pay once · no monthly fee', 'Lipa mara moja · hakuna ada ya mwezi'),
      cardLabel: '${_t('Pay with card', 'Lipa kwa kadi')} ${_money(cat.price)}',
      cashAppLabel: _t('Pay with Cash App', 'Lipa kwa Cash App'),
      laterLabel: _t('Maybe later', 'Baadaye'),
    );
    if (method != 'stripe') {
      // The prepared card checkout is not used: close it at Stripe so it never lingers.
      unawaited(preparing.then((r) {
        final id = (r['purchaseId'] ?? '').toString();
        if (id.isNotEmpty) unawaited(NgmyHelpServicesApi.stripeCancel(id));
      }));
    }
    if (!mounted || method == null) return;
    if (method == 'stripe') {
      if (opened) {
        _schedulePoll();
        return;
      }
      // The link was not ready at the moment of the tap: go to Stripe in this same window as soon as it is.
      final r = await preparing;
      if (!mounted) return;
      final url = (r['url'] ?? '').toString();
      if (r['ok'] != true || url.isEmpty) {
        _snack((r['error'] ?? _t('Card checkout could not start.', 'Malipo ya kadi hayakuweza kuanza.')).toString(), error: true);
        return;
      }
      _awaitingId = (r['purchaseId'] ?? '').toString();
      ngmyHelpServicesGoTo(url);
    } else {
      await _payCashApp(cat);
    }
  }

  Future<void> _payCashApp(NgmyServiceCategory cat) async {
    final cfg = _helpConfig(widget.config);
    final url = cfg.resolvedCashAppUrl();
    if (url.isEmpty) {
      _snack(_t('Cash App is not set up yet.', 'Cash App bado haijawekwa.'), error: true);
      return;
    }
    final res = await showNgmyCareCashAppSheet(
      context,
      amount: cat.price,
      label: cat.title(),
      cashAppUrl: url,
      cashAppTag: cfg.cashAppDisplayTag(),
      fullTerm: false,
      onSubmit: (code, proof, mime) => NgmyHelpServicesApi.cashApp(cat.id, code, proof, mime),
    );
    if (res == null || !mounted) return;
    _snack(_t(
      'Payment sent. An admin will check your screenshot and approve it.',
      'Malipo yametumwa. Msimamizi ataangalia picha yako na kuidhinisha.',
    ));
    await _load(quiet: true);
  }

  @override
  Widget build(BuildContext context) {
    final c = _Palette(context);
    // Card checkouts that were opened but not paid are not listed.
    final paidOrPending = _purchases.where((p) => p['status'] != 'cancelled' && !(p['method'] == 'stripe' && p['status'] == 'pending')).toList();
    return Scaffold(
      backgroundColor: c.page,
      body: RefreshIndicator(
        onRefresh: () => _load(quiet: true),
        child: CustomScrollView(
          physics: const AlwaysScrollableScrollPhysics(parent: BouncingScrollPhysics()),
          slivers: [
            SliverToBoxAdapter(child: _hero(context)),
            if (_loading)
              const SliverToBoxAdapter(child: Padding(padding: EdgeInsets.all(48), child: Center(child: CircularProgressIndicator())))
            else if (_error != null)
              SliverToBoxAdapter(child: _errorBox(c))
            else ...[
              SliverPadding(
                padding: const EdgeInsets.fromLTRB(16, 18, 16, 0),
                sliver: SliverToBoxAdapter(
                  child: Center(
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxWidth: 560),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                        _sectionLabel(c, _t('CHOOSE YOUR HELP', 'CHAGUA MSAADA WAKO')),
                        const SizedBox(height: 10),
                        for (var i = 0; i < _cats.length; i++)
                          _Rise(
                            index: i,
                            child: _CategoryCard(
                              category: _cats[i],
                              latest: _latestFor(_cats[i].id),
                              onPay: () => _pay(_cats[i]),
                              onOpen: (p) => _openPurchase(p),
                            ),
                          ),
                        const SizedBox(height: 10),
                        _sectionLabel(c, _t('MY PURCHASES', 'MANUNUZI YANGU')),
                        const SizedBox(height: 10),
                        if (paidOrPending.isEmpty)
                          Container(
                            padding: const EdgeInsets.all(18),
                            decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(20), border: Border.all(color: c.line)),
                            child: Text(
                              _t('Nothing bought yet. When you pay for a plan it shows here.', 'Bado hujanunua kitu. Ukilipia mpango utaonekana hapa.'),
                              textAlign: TextAlign.center,
                              style: TextStyle(color: c.muted, fontWeight: FontWeight.w600, fontSize: 13),
                            ),
                          )
                        else
                          for (final p in paidOrPending) _purchaseTile(c, p),
                        const SizedBox(height: 40),
                      ]),
                    ),
                  ),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _sectionLabel(_Palette c, String text) => Padding(
        padding: const EdgeInsets.only(left: 4),
        child: Text(text, style: TextStyle(fontSize: 11, letterSpacing: 1.8, fontWeight: FontWeight.w900, color: c.muted)),
      );

  Widget _errorBox(_Palette c) => Padding(
        padding: const EdgeInsets.all(28),
        child: Column(children: [
          Icon(Icons.cloud_off_rounded, size: 40, color: c.muted),
          const SizedBox(height: 10),
          Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted, fontWeight: FontWeight.w600)),
          const SizedBox(height: 12),
          OutlinedButton(onPressed: _load, child: Text(_t('Try again', 'Jaribu tena'))),
        ]),
      );

  /// The header: a contained, rounded frame (curved at the top and the bottom), not a band up to the screen edge.
  Widget _hero(BuildContext context) {
    final top = MediaQuery.of(context).padding.top;
    return Padding(
      padding: EdgeInsets.fromLTRB(14, top + 10, 14, 0),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 560),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(28),
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(0xFF0B1B3A), Color(0xFF13306B), Color(0xFF0E7490)],
              ),
              border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
              boxShadow: [
                BoxShadow(color: const Color(0xFF0E7490).withValues(alpha: 0.28), blurRadius: 26, offset: const Offset(0, 12)),
              ],
            ),
            clipBehavior: Clip.antiAlias,
            child: Stack(children: [
              Positioned(
                right: -40,
                top: -40,
                child: IgnorePointer(
                  child: Container(
                    width: 160,
                    height: 160,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [const Color(0xFF5EEAD4).withValues(alpha: 0.26), Colors.transparent]),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 12, 14, 16),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Row(children: [
                    Material(
                      color: Colors.white.withValues(alpha: 0.12),
                      shape: const CircleBorder(),
                      child: IconButton(
                        onPressed: () => NgmyNavigator.pop(context),
                        icon: const Icon(Icons.arrow_back_rounded, color: Colors.white),
                        tooltip: _t('Back', 'Rudi'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        _t('Help & Services', 'Msaada na Huduma'),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(color: Colors.white, fontSize: 22, height: 1.1, fontWeight: FontWeight.w900),
                      ),
                    ),
                    const SizedBox(width: 8),
                    // Bigger EN / SW flag.
                    Transform.scale(scale: 1.35, alignment: Alignment.centerRight, child: NgmyLangFlag(store: _lang)),
                  ]),
                  const SizedBox(height: 10),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: Text(
                      _t(
                        'Pick the help you need, pay once, and our team walks with you step by step.',
                        'Chagua msaada unaohitaji, lipa mara moja, na timu yetu inatembea na wewe hatua kwa hatua.',
                      ),
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.80), fontSize: 13, height: 1.35, fontWeight: FontWeight.w600),
                    ),
                  ),
                  const SizedBox(height: 12),
                  // The three features in one aligned row.
                  Row(children: [
                    Expanded(child: _heroChip(Icons.lock_rounded, _t('Secure card payment', 'Malipo salama ya kadi'))),
                    const SizedBox(width: 6),
                    Expanded(child: _heroChip(Icons.attach_money_rounded, 'Cash App')),
                    const SizedBox(width: 6),
                    Expanded(child: _heroChip(Icons.chat_rounded, _t('WhatsApp support', 'Msaada kwa WhatsApp'))),
                  ]),
                ]),
              ),
            ]),
          ),
        ),
      ),
    );
  }

  Widget _heroChip(IconData icon, String text) => Container(
        height: 34,
        padding: const EdgeInsets.symmetric(horizontal: 6),
        decoration: BoxDecoration(
          color: Colors.white.withValues(alpha: 0.08),
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
        ),
        child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          Icon(icon, size: 13, color: const Color(0xFF99F6E4)),
          const SizedBox(width: 4),
          Flexible(
            child: FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(text, maxLines: 1, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
            ),
          ),
        ]),
      );

  Widget _purchaseTile(_Palette c, Map<String, dynamic> p) {
    final cat = _cat((p['categoryId'] ?? '').toString());
    final look = _look(cat?.icon ?? '');
    final status = (p['status'] ?? '').toString();
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(20), border: Border.all(color: c.line)),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(20),
          onTap: () => _openPurchase(p),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), gradient: LinearGradient(colors: look.colors)),
                child: Icon(look.icon, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(cat?.title() ?? '', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 14)),
                  const SizedBox(height: 2),
                  Text(
                    '${_money((p['amount'] as num?) ?? 0)} · ${p['method'] == 'stripe' ? _t('Card', 'Kadi') : 'Cash App'} · ${_date(p['createdAt'])}',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 11.5, color: c.muted, fontWeight: FontWeight.w600),
                  ),
                ]),
              ),
              const SizedBox(width: 8),
              _StatusChip(status: status, method: (p['method'] ?? '').toString()),
              Icon(Icons.chevron_right_rounded, color: c.muted),
            ]),
          ),
        ),
      ),
    );
  }
}

class _Rise extends StatelessWidget {
  const _Rise({required this.index, required this.child});
  final int index;
  final Widget child;

  @override
  Widget build(BuildContext context) => TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: Duration(milliseconds: 420 + index * 120),
        curve: Curves.easeOutCubic,
        builder: (_, t, child) => Opacity(opacity: t, child: Transform.translate(offset: Offset(0, (1 - t) * 24), child: child)),
        child: child,
      );
}

class _StatusChip extends StatelessWidget {
  const _StatusChip({required this.status, required this.method});
  final String status;
  final String method;

  @override
  Widget build(BuildContext context) {
    final (String text, Color color) = switch (status) {
      'paid' => (_t('PAID', 'IMELIPWA'), _kGreen),
      'rejected' => (_t('REJECTED', 'IMEKATALIWA'), _kRed),
      'cancelled' => (_t('NOT FINISHED', 'HAIKUKAMILIKA'), const Color(0xFF64748B)),
      _ => (method == 'stripe' ? _t('WAITING', 'INASUBIRI') : _t('PENDING', 'INASUBIRI'), _kAmber),
    };
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
      child: Text(text, style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: color, letterSpacing: 0.6)),
    );
  }
}

class _CategoryCard extends StatelessWidget {
  const _CategoryCard({required this.category, required this.latest, required this.onPay, required this.onOpen});
  final NgmyServiceCategory category;
  final Map<String, dynamic>? latest;
  final VoidCallback onPay;
  final ValueChanged<Map<String, dynamic>> onOpen;

  @override
  Widget build(BuildContext context) {
    // Plan cards are always light (white with a pale tint) and use dark text so every word is easy to read.
    final soft = _soft(category.icon);
    const ink = Color(0xFF0F172A);
    const muted = Color(0xFF334155);
    final look = _look(category.icon);
    final accent = _deepInk(category.icon);
    final status = (latest?['status'] ?? '').toString();
    final paid = status == 'paid';
    final waiting = status == 'pending' && latest?['method'] == 'cashapp';
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(soft, Colors.white, 0.18)!, Color.lerp(soft, Colors.white, 0.45)!]),
        borderRadius: BorderRadius.circular(26),
        border: Border.all(color: accent.withValues(alpha: 0.22), width: 1.2),
        boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.10), blurRadius: 28, offset: const Offset(0, 12))],
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Container(
          padding: const EdgeInsets.fromLTRB(16, 16, 16, 16),
          decoration: BoxDecoration(
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [soft, Color.lerp(soft, Colors.white, 0.2)!]),
          ),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
              width: 54,
              height: 54,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(18),
                gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: look.colors),
                boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 6))],
              ),
              child: Icon(look.icon, color: Colors.white, size: 28),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(category.title(), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, height: 1.15, color: ink)),
                const SizedBox(height: 6),
                Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                  Text(_money(category.price), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 26, height: 1, color: accent)),
                  const SizedBox(width: 6),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 2),
                    child: Text(_t('one-time', 'mara moja'), style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: muted)),
                  ),
                ]),
              ]),
            ),
            if (paid || waiting) _StatusChip(status: status, method: (latest?['method'] ?? '').toString()),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 4),
          child: Text(category.description(), style: TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w600, color: ink)),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 6),
          child: Text(
            _t('WHAT THIS PACKAGE INCLUDES', 'KIFURUSHI HIKI KINAJUMUISHA'),
            style: TextStyle(fontSize: 10.5, letterSpacing: 1.5, fontWeight: FontWeight.w900, color: muted),
          ),
        ),
        for (final line in category.includes())
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 4),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Container(
                margin: const EdgeInsets.only(top: 1),
                width: 20,
                height: 20,
                decoration: BoxDecoration(shape: BoxShape.circle, color: accent.withValues(alpha: 0.14)),
                child: Icon(Icons.check_rounded, size: 14, color: accent),
              ),
              const SizedBox(width: 10),
              Expanded(child: Text(line, style: TextStyle(fontSize: 13.5, height: 1.4, color: ink, fontWeight: FontWeight.w600))),
            ]),
          ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
          child: paid
              ? _GradientButton(
                  text: _t('Paid · open receipt and contact', 'Imelipwa · fungua risiti na mawasiliano'),
                  icon: Icons.verified_rounded,
                  colors: const [Color(0xFF22C55E), Color(0xFF15803D)],
                  onTap: () => onOpen(latest!),
                )
              : waiting
                  ? _GradientButton(
                      text: _t('Waiting for approval', 'Inasubiri kuidhinishwa'),
                      icon: Icons.hourglass_top_rounded,
                      colors: const [Color(0xFFFBBF24), Color(0xFFD97706)],
                      onTap: () => onOpen(latest!),
                    )
                  : _GradientButton(
                      text: '${_t('Pay', 'Lipa')} ${_money(category.price)}',
                      icon: Icons.lock_rounded,
                      colors: look.colors,
                      onTap: onPay,
                    ),
        ),
      ]),
    );
  }
}

class _GradientButton extends StatelessWidget {
  const _GradientButton({required this.text, required this.icon, required this.colors, this.onTap, this.busy = false});
  final String text;
  final IconData icon;
  final List<Color> colors;
  final VoidCallback? onTap;
  final bool busy;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: onTap == null ? 0.5 : 1,
      child: Container(
        height: 52,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          gradient: LinearGradient(colors: colors),
          boxShadow: [BoxShadow(color: colors.last.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
        ),
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: busy ? null : onTap,
            child: Center(
              child: busy
                  ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                  : Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        Icon(icon, color: Colors.white, size: 19),
                        const SizedBox(width: 8),
                        Flexible(
                          child: Text(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                        ),
                      ]),
                    ),
            ),
          ),
        ),
      ),
    );
  }
}

// ── One purchase: receipt, status, and (once paid) contact + WhatsApp ────────

class NgmyServicePurchasePage extends StatefulWidget {
  const NgmyServicePurchasePage({super.key, required this.purchase, required this.category, required this.userName, required this.whatsapp});
  final Map<String, dynamic> purchase;
  final NgmyServiceCategory category;
  final String userName;
  final String whatsapp;

  @override
  State<NgmyServicePurchasePage> createState() => _NgmyServicePurchasePageState();
}

class _NgmyServicePurchasePageState extends State<NgmyServicePurchasePage> {
  late Map<String, dynamic> _p = widget.purchase;
  late final TextEditingController _msg = TextEditingController(text: _defaultMessage());
  bool _edited = false;
  bool _checking = false;

  NgmyLangStore get _lang => NgmyHelpServicesLang.store;

  @override
  void initState() {
    super.initState();
    _lang.code.addListener(_langChanged);
    if (_p['method'] == 'stripe' && _p['status'] == 'pending') unawaited(_recheck());
  }

  @override
  void dispose() {
    _lang.code.removeListener(_langChanged);
    _msg.dispose();
    super.dispose();
  }

  void _langChanged() {
    if (!mounted) return;
    setState(() {
      if (!_edited) _msg.text = _defaultMessage();
    });
  }

  String _defaultMessage() {
    final name = widget.userName.trim().isEmpty ? _t('an NGMY member', 'mwanachama wa NGMY') : widget.userName.trim();
    return widget.category
        .whatsappMessage()
        .replaceAll('{name}', name)
        .replaceAll('{plan}', widget.category.title())
        .replaceAll('{price}', _money(widget.category.price));
  }

  Future<void> _recheck() async {
    final id = (_p['id'] ?? '').toString();
    if (id.isEmpty || _checking) return;
    setState(() => _checking = true);
    final res = await NgmyHelpServicesApi.stripeVerify(id);
    if (!mounted) return;
    setState(() {
      _checking = false;
      if (res['purchase'] is Map) _p = Map<String, dynamic>.from(res['purchase'] as Map);
    });
  }

  String get _digits => widget.whatsapp.replaceAll(RegExp(r'[^\d]'), '');

  String get _prettyNumber {
    final d = _digits;
    if (d.length == 10) return '(${d.substring(0, 3)}) ${d.substring(3, 6)}-${d.substring(6)}';
    if (d.length == 11 && d.startsWith('1')) return '+1 (${d.substring(1, 4)}) ${d.substring(4, 7)}-${d.substring(7)}';
    return d.isEmpty ? '—' : '+$d';
  }

  String get _waDigits {
    final d = _digits;
    return d.length == 10 ? '1$d' : d;
  }

  Future<void> _call() async {
    if (_digits.isEmpty) return;
    await launchUrl(Uri.parse('tel:+$_waDigits'), mode: LaunchMode.externalApplication);
  }

  Future<void> _whatsappSend() async {
    if (_digits.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(_t('No WhatsApp number on file yet.', 'Bado hakuna namba ya WhatsApp.'))));
      return;
    }
    final uri = Uri.parse('https://wa.me/$_waDigits?text=${Uri.encodeComponent(_msg.text.trim())}');
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    final c = _Palette(context);
    final status = (_p['status'] ?? '').toString();
    final paid = status == 'paid';
    return Scaffold(
      backgroundColor: c.page,
      appBar: AppBar(
        backgroundColor: c.page,
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        foregroundColor: c.ink,
        leading: IconButton(icon: const Icon(Icons.arrow_back_rounded), onPressed: () => NgmyNavigator.pop(context)),
        title: Text(paid ? _t('Receipt', 'Risiti') : _t('Your payment', 'Malipo yako'), style: const TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 12),
            child: Center(
              child: Container(
                decoration: BoxDecoration(color: const Color(0xFF13306B), borderRadius: BorderRadius.circular(14)),
                child: NgmyLangFlag(store: _lang),
              ),
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 6, 16, 40),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 520),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              _header(c, status),
              const SizedBox(height: 16),
              _receiptCard(c),
              if (paid) ...[
                const SizedBox(height: 16),
                _nextCard(c),
                const SizedBox(height: 16),
                _contactCard(c),
              ],
            ]),
          ),
        ),
      ),
    );
  }

  Widget _header(_Palette c, String status) {
    final method = (_p['method'] ?? '').toString();
    final (IconData icon, List<Color> colors, String title, String body) = switch (status) {
      'paid' => (
          Icons.check_rounded,
          const [Color(0xFF4ADE80), Color(0xFF15803D)],
          _t('Payment complete — thank you!', 'Malipo yamekamilika — asante!'),
          _t('Your receipt is below. Keep it for your records.', 'Risiti yako iko hapa chini. Itunze kwa kumbukumbu zako.'),
        ),
      'rejected' => (
          Icons.close_rounded,
          const [Color(0xFFF87171), Color(0xFFB91C1C)],
          _t('Payment could not be confirmed', 'Malipo hayakuweza kuthibitishwa'),
          _t(
            'We could not confirm your Cash App payment. Check the amount and the code, then try again, or contact the NGMY team.',
            'Hatukuweza kuthibitisha malipo yako ya Cash App. Angalia kiasi na namba ya siri, kisha jaribu tena, au wasiliana na timu ya NGMY.',
          ),
        ),
      'cancelled' => (
          Icons.remove_circle_outline_rounded,
          const [Color(0xFF94A3B8), Color(0xFF475569)],
          _t('Payment not finished', 'Malipo hayakukamilika'),
          _t('This card payment was not finished. Nothing was charged. You can pay again from Help & Services.',
              'Malipo haya ya kadi hayakukamilika. Hakuna pesa iliyokatwa. Unaweza kulipa tena kwenye Msaada na Huduma.'),
        ),
      _ => (
          Icons.hourglass_top_rounded,
          const [Color(0xFFFCD34D), Color(0xFFD97706)],
          method == 'stripe' ? _t('Waiting for Stripe', 'Inasubiri Stripe') : _t('Waiting for approval', 'Inasubiri kuidhinishwa'),
          method == 'stripe'
              ? _t('We are waiting for Stripe to confirm your card payment.', 'Tunasubiri Stripe ithibitishe malipo yako ya kadi.')
              : _t(
                  'We received your Cash App screenshot. An admin is checking it. Once it is approved, your receipt and our contact show here.',
                  'Tumepokea picha yako ya Cash App. Msimamizi anaiangalia. Ikiidhinishwa, risiti yako na mawasiliano yetu yataonekana hapa.',
                ),
        ),
    };
    return Column(children: [
      const SizedBox(height: 8),
      TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: const Duration(milliseconds: 700),
        curve: Curves.elasticOut,
        builder: (_, t, child) => Transform.scale(scale: 0.4 + 0.6 * t, child: child),
        child: Container(
          width: 86,
          height: 86,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: colors),
            boxShadow: [BoxShadow(color: colors.last.withValues(alpha: 0.45), blurRadius: 28, offset: const Offset(0, 10))],
          ),
          child: Icon(icon, color: Colors.white, size: 48),
        ),
      ),
      const SizedBox(height: 16),
      Text(title, textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 22, height: 1.2, color: c.ink)),
      const SizedBox(height: 6),
      Text(body, textAlign: TextAlign.center, style: TextStyle(fontSize: 13.5, height: 1.4, color: c.muted, fontWeight: FontWeight.w600)),
      if (status == 'pending' && method == 'stripe') ...[
        const SizedBox(height: 12),
        Center(
          child: OutlinedButton.icon(
            onPressed: _checking ? null : _recheck,
            icon: _checking
                ? const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2))
                : const Icon(Icons.refresh_rounded, size: 18),
            label: Text(_t('Check again', 'Angalia tena')),
          ),
        ),
      ],
    ]);
  }

  Widget _receiptCard(_Palette c) {
    final look = _look(widget.category.icon);
    final paid = _p['status'] == 'paid';
    Widget row(String k, String v, {bool strong = false}) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 7),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Expanded(child: Text(k, style: TextStyle(color: c.muted, fontSize: 13, fontWeight: FontWeight.w600))),
            const SizedBox(width: 12),
            Flexible(
              child: Text(v,
                  textAlign: TextAlign.right,
                  style: TextStyle(color: c.ink, fontWeight: strong ? FontWeight.w900 : FontWeight.w800, fontSize: strong ? 16 : 13.5)),
            ),
          ]),
        );
    return Container(
      decoration: BoxDecoration(
        color: c.card,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: c.line),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: c.dark ? 0.3 : 0.05), blurRadius: 22, offset: const Offset(0, 10))],
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(gradient: LinearGradient(colors: [look.colors.first.withValues(alpha: 0.18), look.colors.last.withValues(alpha: 0.05)])),
          child: Row(children: [
            Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(15), gradient: LinearGradient(colors: look.colors)),
              child: Icon(look.icon, color: Colors.white),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(widget.category.title(), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: c.ink)),
                Text('${_t('Plan price', 'Bei ya mpango')} ${_money(widget.category.price)}',
                    style: TextStyle(fontSize: 12.5, color: c.muted, fontWeight: FontWeight.w700)),
              ]),
            ),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
          child: Column(children: [
            row(paid ? _t('Amount paid', 'Kiasi kilicholipwa') : _t('Amount', 'Kiasi'), _money((_p['amount'] as num?) ?? 0), strong: true),
            row(_t('Payment method', 'Njia ya malipo'), _p['method'] == 'stripe' ? _t('Card (Stripe)', 'Kadi (Stripe)') : 'Cash App'),
            row(_t('Date', 'Tarehe'), _date(paid ? (_p['paidAt'] ?? _p['createdAt']) : _p['createdAt'])),
            row(_t('Confirmation number', 'Namba ya uthibitisho'), (_p['receiptNo'] ?? '').toString()),
            if (paid && _p['courseAccess'] == true) row(_t('Course access', 'Ufikiaji wa kozi'), _t('Active', 'Hai')),
          ]),
        ),
      ]),
    );
  }

  Widget _nextCard(_Palette c) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: const Color(0xFF0E7490).withValues(alpha: c.dark ? 0.18 : 0.08),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: const Color(0xFF0E7490).withValues(alpha: 0.35)),
        ),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Icon(Icons.rocket_launch_rounded, color: Color(0xFF0E7490)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(_t('What happens next', 'Nini kinafuata'), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: c.ink)),
              const SizedBox(height: 4),
              Text(
                _t(
                  'Our team will now help you with your plan. Send us the message below on WhatsApp so we can start.',
                  'Timu yetu sasa itakusaidia na mpango wako. Tutumie ujumbe ulio hapa chini kwa WhatsApp ili tuanze.',
                ),
                style: TextStyle(fontSize: 13.5, height: 1.4, color: c.ink.withValues(alpha: 0.85), fontWeight: FontWeight.w600),
              ),
            ]),
          ),
        ]),
      );

  Widget _contactCard(_Palette c) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(24), border: Border.all(color: c.line)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(_t('CONTACT US', 'WASILIANA NASI'), style: TextStyle(fontSize: 10.5, letterSpacing: 1.6, fontWeight: FontWeight.w900, color: c.muted)),
          const SizedBox(height: 10),
          Material(
            color: c.tile,
            borderRadius: BorderRadius.circular(18),
            child: InkWell(
              borderRadius: BorderRadius.circular(18),
              onTap: _call,
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: Row(children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF25D366)),
                    child: const Icon(Icons.phone_rounded, color: Colors.white),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(_t('Phone / WhatsApp', 'Simu / WhatsApp'), style: TextStyle(fontSize: 12, color: c.muted, fontWeight: FontWeight.w700)),
                      SelectableText(_prettyNumber, style: TextStyle(fontSize: 21, fontWeight: FontWeight.w900, color: c.ink, letterSpacing: 0.5)),
                    ]),
                  ),
                  Text(_t('Call', 'Piga'), style: const TextStyle(color: Color(0xFF16A34A), fontWeight: FontWeight.w900)),
                ]),
              ),
            ),
          ),
          const SizedBox(height: 14),
          Text(_t('Your message (you can change it)', 'Ujumbe wako (unaweza kuubadilisha)'),
              style: TextStyle(fontSize: 12, color: c.muted, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          TextField(
            controller: _msg,
            minLines: 3,
            maxLines: 6,
            onChanged: (_) => _edited = true,
            style: TextStyle(color: c.ink, fontSize: 14, height: 1.4),
            decoration: InputDecoration(
              filled: true,
              fillColor: c.tile,
              contentPadding: const EdgeInsets.all(12),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: c.line)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: c.line)),
              focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: Color(0xFF25D366), width: 1.4)),
            ),
          ),
          const SizedBox(height: 14),
          _GradientButton(
            text: _t('Send on WhatsApp', 'Tuma kwa WhatsApp'),
            icon: Icons.chat_rounded,
            colors: const [Color(0xFF25D366), Color(0xFF128C7E)],
            onTap: _whatsappSend,
          ),
        ]),
      );
}

// ── Admin: every purchase, approve Cash App screenshots, the WhatsApp number ──

Future<void> showNgmyAdminHelpServicesSheet(BuildContext context, {dynamic config}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _AdminServicesSheet(config: config),
  );
}

class _AdminServicesSheet extends StatefulWidget {
  const _AdminServicesSheet({this.config});
  final dynamic config;

  @override
  State<_AdminServicesSheet> createState() => _AdminServicesSheetState();
}

class _AdminServicesSheetState extends State<_AdminServicesSheet> {
  bool _loading = true;
  String? _error;
  List<Map<String, dynamic>> _rows = [];
  Map<String, String> _titles = {};
  final TextEditingController _wa = TextEditingController();
  bool _savingWa = false;
  String _filter = 'all';

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    _wa.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final res = await NgmyHelpServicesApi.adminList();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res['ok'] == true) {
        _error = null;
        _rows = ((res['purchases'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
        _titles = {
          for (final c in ((res['categories'] as List?) ?? const []).whereType<Map>()) (c['id'] ?? '').toString(): (c['titleEn'] ?? '').toString(),
        };
        final n = (res['whatsappNumber'] ?? '').toString();
        if (_wa.text.isEmpty) _wa.text = n.isNotEmpty ? n : (widget.config == null ? '' : _fallbackWhatsapp(widget.config));
      } else {
        _error = (res['error'] ?? 'Could not load.').toString();
      }
    });
  }

  Future<void> _decide(Map<String, dynamic> p, bool approve) async {
    final res = await NgmyHelpServicesApi.adminDecide((p['id'] ?? '').toString(), approve);
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(res['ok'] == true ? (approve ? 'Approved. The member now sees the receipt and WhatsApp.' : 'Rejected.') : (res['error'] ?? 'Could not update.').toString()),
    ));
    _load();
  }

  Future<void> _saveWa() async {
    setState(() => _savingWa = true);
    final res = await NgmyHelpServicesApi.adminSetWhatsapp(_wa.text.trim());
    if (!mounted) return;
    setState(() => _savingWa = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(res['ok'] == true ? 'WhatsApp number saved.' : (res['error'] ?? 'Could not save.').toString())));
  }

  void _zoom(String url) {
    if (url.isEmpty) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: Colors.black,
        insetPadding: const EdgeInsets.all(14),
        child: Stack(children: [
          InteractiveViewer(child: Center(child: Image.network(url, fit: BoxFit.contain))),
          Positioned(top: 6, right: 6, child: IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded, color: Colors.white))),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _Palette(context);
    final rows = _rows.where((r) => _filter == 'all' || r['status'] == _filter).toList();
    final pending = _rows.where((r) => r['status'] == 'pending' && r['method'] == 'cashapp').length;
    final paidTotal = _rows.where((r) => r['status'] == 'paid').fold<double>(0, (s, r) => s + ((r['amount'] as num?) ?? 0).toDouble());
    return DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.5,
      maxChildSize: 0.96,
      expand: false,
      builder: (_, scroll) => Container(
        decoration: BoxDecoration(color: c.page, borderRadius: const BorderRadius.vertical(top: Radius.circular(26))),
        child: ListView(
          controller: scroll,
          padding: const EdgeInsets.fromLTRB(16, 10, 16, 30),
          children: [
            Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: c.line, borderRadius: BorderRadius.circular(4)))),
            const SizedBox(height: 14),
            Row(children: [
              const Icon(Icons.volunteer_activism_rounded, color: Color(0xFF0E7490)),
              const SizedBox(width: 8),
              Expanded(child: Text('Help & Services purchases', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: c.ink))),
              IconButton(onPressed: _load, icon: Icon(Icons.refresh_rounded, color: c.muted)),
            ]),
            const SizedBox(height: 8),
            Row(children: [
              _stat(c, '$pending', 'To approve', _kAmber),
              const SizedBox(width: 8),
              _stat(c, '${_rows.where((r) => r['status'] == 'paid').length}', 'Paid', _kGreen),
              const SizedBox(width: 8),
              _stat(c, _money(paidTotal), 'Collected', const Color(0xFF0E7490)),
            ]),
            const SizedBox(height: 14),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(18), border: Border.all(color: c.line)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Text('WhatsApp number (shown to every member after they pay)', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: c.muted)),
                const SizedBox(height: 8),
                Row(children: [
                  Expanded(
                    child: TextField(
                      controller: _wa,
                      keyboardType: TextInputType.phone,
                      style: TextStyle(color: c.ink),
                      decoration: InputDecoration(isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)), hintText: '7065551234'),
                    ),
                  ),
                  const SizedBox(width: 8),
                  FilledButton(onPressed: _savingWa ? null : _saveWa, child: Text(_savingWa ? 'Saving…' : 'Save')),
                ]),
              ]),
            ),
            const SizedBox(height: 12),
            Wrap(spacing: 6, children: [
              for (final f in const ['all', 'pending', 'paid', 'rejected', 'cancelled'])
                ChoiceChip(label: Text(f[0].toUpperCase() + f.substring(1)), selected: _filter == f, onSelected: (_) => setState(() => _filter = f)),
            ]),
            const SizedBox(height: 10),
            if (_loading)
              const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
            else if (_error != null)
              Padding(padding: const EdgeInsets.all(24), child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
            else if (rows.isEmpty)
              Padding(padding: const EdgeInsets.all(24), child: Text('No purchases here yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
            else
              for (final p in rows) _card(c, p),
          ],
        ),
      ),
    );
  }

  Widget _stat(_Palette c, String value, String label, Color color) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(color: color.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(14), border: Border.all(color: color.withValues(alpha: 0.35))),
          child: Column(children: [
            FittedBox(child: Text(value, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: c.ink))),
            Text(label, style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w800, color: c.muted)),
          ]),
        ),
      );

  Widget _card(_Palette c, Map<String, dynamic> p) {
    final status = (p['status'] ?? '').toString();
    final method = (p['method'] ?? '').toString();
    final name = (p['name'] ?? '').toString();
    final proof = (p['proofUrl'] ?? '').toString();
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(18), border: Border.all(color: c.line)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(name.isNotEmpty ? name : (p['email'] ?? '').toString(), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: c.ink)),
              if (name.isNotEmpty) Text((p['email'] ?? '').toString(), style: TextStyle(fontSize: 11.5, color: c.muted)),
              Text(_titles[p['categoryId']] ?? (p['categoryId'] ?? '').toString(), style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w800, color: c.ink)),
              Text('${method == 'stripe' ? 'Card (Stripe)' : 'Cash App'} · ${_date(p['createdAt'])} · ${p['receiptNo'] ?? ''}', style: TextStyle(fontSize: 11.5, color: c.muted)),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text(_money((p['amount'] as num?) ?? 0), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: c.ink)),
            const SizedBox(height: 4),
            _StatusChip(status: status, method: method),
          ]),
        ]),
        if (method == 'cashapp' && (proof.isNotEmpty || (p['code'] ?? '').toString().isNotEmpty)) ...[
          const SizedBox(height: 10),
          Row(children: [
            if (proof.isNotEmpty)
              GestureDetector(
                onTap: () => _zoom(proof),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: SizedBox(width: 60, height: 80, child: Image.network(proof, fit: BoxFit.cover, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded))),
                ),
              ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('CODE IN THE CASH APP NOTE', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w800, letterSpacing: 1, color: c.muted)),
                Text((p['code'] ?? '').toString(), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, letterSpacing: 3, color: _kGreen)),
              ]),
            ),
          ]),
        ],
        if (status == 'pending' && method == 'cashapp') ...[
          const SizedBox(height: 10),
          Row(children: [
            Expanded(
              child: OutlinedButton(
                onPressed: () => _decide(p, false),
                style: OutlinedButton.styleFrom(foregroundColor: _kRed, side: const BorderSide(color: _kRed)),
                child: const Text('Reject'),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(child: FilledButton(onPressed: () => _decide(p, true), style: FilledButton.styleFrom(backgroundColor: _kGreen), child: const Text('Approve'))),
          ]),
        ],
      ]),
    );
  }
}
