import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'main.dart';
import 'ngmy_account_snapshot_ui.dart';
import 'ngmy_local_deposit_qr.dart';
import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_helpers.dart';

String _ngmyLocalProfileDisplayName(UserData live) {
  final full = live.fullName?.trim();
  if (full != null && full.isNotEmpty) return full;
  final name = live.username.trim();
  if (name.isNotEmpty && name.toLowerCase() != 'user') return name;
  final email = live.email.trim();
  if (email.contains('@')) return email.split('@').first;
  return 'Member';
}

/// Entry point for the wifi-icon button on the home screen: a second,
/// fully local copy of Growth Income (Home / Invest / Wallet) that never
/// touches Supabase. The real Growth Income tabs are untouched.
Future<void> showNgmyLocalGrowthIncomePage(
  BuildContext context, {
  required UserData liveUser,
  required AppConfig config,
  required List<InvestmentPlan> plans,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyLocalGrowthIncomeScreen(liveUser: liveUser, config: config, plans: plans),
    fullscreenDialog: true,
  );
}

class NgmyLocalGrowthIncomeScreen extends StatefulWidget {
  const NgmyLocalGrowthIncomeScreen({super.key, required this.liveUser, required this.config, required this.plans});

  final UserData liveUser;
  final AppConfig config;
  final List<InvestmentPlan> plans;

  @override
  State<NgmyLocalGrowthIncomeScreen> createState() => _NgmyLocalGrowthIncomeScreenState();
}

class _NgmyLocalGrowthIncomeScreenState extends State<NgmyLocalGrowthIncomeScreen> {
  UserData? _user;
  List<AppTransaction> _transactions = [];
  int _walletStateRevision = 0;
  int _idx = 0;
  bool _investPurchaseInFlight = false;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  @override
  void dispose() {
    super.dispose();
  }

  Future<void> _load() async {
    final loaded = await NgmyLocalGrowthIncomeStore.load(widget.liveUser.email, widget.liveUser);
    final user = loaded.user;
    final transactions = List<AppTransaction>.from(loaded.transactions);
    var revision = loaded.walletStateRevision;
    final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, transactions);
    if (!mounted) return;
    setState(() {
      _user = user;
      _transactions = transactions;
      _walletStateRevision = revision;
      _loading = false;
    });
    unawaited(_persist(bumpWalletRevision: payoutAdded));
  }

  Future<void> _persist({bool bumpWalletRevision = false}) async {
    final user = _user;
    if (user == null) return;
    await NgmyLocalGrowthIncomeStore.save(
      widget.liveUser.email,
      user,
      _transactions,
      bumpWalletRevision: bumpWalletRevision,
    );
    if (bumpWalletRevision) {
      _walletStateRevision++;
    }
  }

  void _onDataChanged() {
    setState(() {});
    unawaited(_persist());
  }

  void _onAddTransaction(AppTransaction t, {bool bumpWalletRevision = true}) {
    final user = _user;
    if (user == null) return;
    NgmyLocalGrowthIncomeStore.applyTransaction(user, t);
    setState(() => _transactions = [..._transactions, t]);
    unawaited(_persist(bumpWalletRevision: bumpWalletRevision));
  }

  void _onInvest(String name, double price, double roi, double cost) {
    final user = _user;
    if (user == null || _investPurchaseInFlight) return;
    if (cost <= 0 || ngmyUserHasActivePlan(user, planName: name, planAmount: price)) {
      _toast('This plan is already active.');
      return;
    }
    final txnId = ngmyInvestPurchaseTxnId(user.email, name, price);
    if (ngmyHasApprovedInvestPurchase(user.email, _transactions, txnId)) {
      _toast('You already own this plan.');
      return;
    }
    if (user.accountBalance < cost) {
      _toast('Insufficient balance. Add funds in the Wallet tab first.');
      return;
    }
    setState(() => _investPurchaseInFlight = true);
    setState(() {
      user.activeInvestment = ActiveInvestment(
        name: name,
        amount: price,
        dailyROI: InvestmentPlan.fixedRoi,
        purchaseDate: DateTime.now(),
        daysClockedIn: 0,
        totalEarned: 0.0,
      );
      user.pendingInvestmentName = null;
      user.pendingInvestmentAmount = null;
      user.pendingInvestmentRoi = null;
    });
    _onAddTransaction(AppTransaction(
      id: txnId,
      userEmail: user.email,
      amount: cost,
      type: TransactionType.adminRemove,
      method: PaymentMethod.system,
      sourceDetails: 'Direct investment buy: $name',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    setState(() => _investPurchaseInFlight = false);
    _toast('Plan purchased: $name');
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _openBackup() async {
    final user = _user;
    if (user == null) return;
    await showNgmyAccountSnapshotPage(
      context,
      realEmail: widget.liveUser.email,
      user: user,
      transactions: _transactions,
      walletStateRevision: _walletStateRevision,
    );
    await _load();
  }

  Future<void> _openHelper() async {
    final user = _user;
    if (user == null) return;
    await NgmyNavigator.push(
      context,
      AnnouncementScreen(
        user: user,
        allUsers: [user],
        announcements: const [],
        config: widget.config,
        onPostToNews: (_) {},
        onAddTransaction: _onAddTransaction,
        onDataChanged: _onDataChanged,
      ),
    );
  }

  Future<void> _openGameCenter() async {
    final user = _user;
    if (user == null) return;
    await NgmyNavigator.push(
      context,
      GameCenterScreen(
        user: user,
        config: widget.config,
        allTransactions: _transactions,
        onAddTransaction: _onAddTransaction,
        onDataChanged: _onDataChanged,
        onGoToInvest: () => setState(() => _idx = 1),
      ),
      routeName: 'LocalGrowthGameCenter',
    );
  }

  Future<void> _manualClockIn() async {
    final user = _user;
    if (user == null) return;
    final now = DateTime.now();
    final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, _transactions);
    if (payoutAdded) {
      await _persist(bumpWalletRevision: true);
    }
    if (user.activeInvestment == null) {
      _toast('Choose an investment plan first, then come back to clock in.');
      setState(() => _idx = 1);
      return;
    }
    if (NgmyLocalGrowthIncomeStore.isWeekend(now)) {
      _toast('Clock-in opens Monday through Friday.');
      return;
    }
    if (NgmyLocalGrowthIncomeStore.sameCalendarDay(user.lastClockInEarningsDate, now)) {
      _toast('Today has already been completed. Come back tomorrow.');
      return;
    }
    if (user.isClockedIn) {
      _toast('You are already clocked in for today.');
      return;
    }
    final penalty = NgmyLocalGrowthIncomeStore.latePenaltyPercent(now);
    final sessionId = 'local_clockin_manual_${user.email}_${now.millisecondsSinceEpoch}';
    setState(() {
      user.isClockedIn = true;
      user.clockInStartTime = now;
      user.lastClockInDate = now;
      user.clockInPenaltyPercent = penalty;
    });
    _onAddTransaction(
      AppTransaction(
        id: sessionId,
        userEmail: user.email,
        amount: 0,
        type: TransactionType.reimbursement,
        method: PaymentMethod.system,
        sourceDetails: 'Clock-in session started (local)',
        status: TransactionStatus.approved,
        timestamp: now,
      ),
      bumpWalletRevision: false,
    );
    _toast('Clock-in started. Keep Local Growth active for today.');
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);

    if (_loading || _user == null) {
      return Scaffold(
        backgroundColor: bg,
        body: const Center(child: CircularProgressIndicator(color: WorksheetPalette.green)),
      );
    }

    final sorted = List<AppTransaction>.from(_transactions)..sort((a, b) => b.timestamp.compareTo(a.timestamp));

    final pages = <Widget>[
      _LocalGrowthHomeTab(
        key: const ValueKey('ngmy_local_home'),
        user: _user!,
        profileDisplayName: _ngmyLocalProfileDisplayName(widget.liveUser),
        transactions: sorted,
        onClockIn: _manualClockIn,
        onOpenInvest: () => setState(() => _idx = 1),
        onOpenWallet: () => setState(() => _idx = 2),
        onBack: () => NgmyNavigator.pop(context),
        onOpenHelper: _openHelper,
        onOpenGameCenter: _openGameCenter,
      ),
      ColoredBox(
        color: bg,
        child: InvestScreen(
          key: const ValueKey('ngmy_local_invest'),
          user: _user!,
          plans: widget.plans,
          purchaseInFlight: _investPurchaseInFlight,
          onInvest: _onInvest,
        ),
      ),
      ColoredBox(
        color: bg,
        child: _LocalWalletTab(
          key: const ValueKey('ngmy_local_wallet'),
          user: _user!,
          realEmail: widget.liveUser.email,
          config: widget.config,
          onAdd: _onAddTransaction,
          onBackup: _openBackup,
        ),
      ),
    ];

    final media = MediaQuery.of(context);
    // Draw the local shell ourselves instead of relying on Scaffold's
    // bottomNavigationBar. On iOS PWA/web this route was occasionally getting
    // a loose height during transition, which made only the nav render in the
    // middle of a black page. This pins the tabs and menu to the full viewport,
    // while the page remains visible behind the transparent nav area.
    return Material(
      color: bg,
      child: SizedBox(
        width: double.infinity,
        height: media.size.height,
        child: Stack(
          children: [
            Positioned.fill(child: ColoredBox(color: bg)),
            Positioned.fill(
              child: SafeArea(
                bottom: false,
                child: pages[_idx],
              ),
            ),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: _buildLocalBottomNavBar(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildLocalBottomNavBar() {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    const glassGreen = Color(0xFF2EF6A3);
    const ball = NgmyBottomNavMetrics.localSelectionBall;
    const barHeight = NgmyBottomNavMetrics.localBarHeight;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 0, 20, 14),
      child: SafeArea(
        top: false,
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: NgmyBottomNavMetrics.localNavMaxWidth),
            child: NgmySculptedBottomNavFrame(
              barHeight: barHeight,
              borderRadius: 24,
              child: LayoutBuilder(
                builder: (context, constraints) {
                  final tabW = constraints.maxWidth / 3;
                  final ballLeft = _idx * tabW + (tabW - ball) / 2;
                  final ballTop = (barHeight - ball) / 2;
                  return Stack(
                    clipBehavior: Clip.none,
                    children: [
                      AnimatedPositioned(
                        duration: const Duration(milliseconds: 280),
                        curve: Curves.easeOutCubic,
                        left: ballLeft,
                        top: ballTop,
                        width: ball,
                        height: ball,
                        child: DecoratedBox(
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                              colors: [
                                glassGreen.withValues(alpha: isDark ? 0.34 : 0.20),
                                const Color(0xFF10B981).withValues(alpha: isDark ? 0.16 : 0.06),
                              ],
                            ),
                            border: Border.all(color: glassGreen.withValues(alpha: isDark ? 0.50 : 0.34), width: 1.2),
                            boxShadow: [BoxShadow(color: glassGreen.withValues(alpha: 0.18), blurRadius: 14)],
                          ),
                        ),
                      ),
                      Row(
                        children: [
                          _navIcon(0, Icons.home_rounded),
                          _navIcon(1, Icons.trending_up_rounded),
                          _navIcon(2, Icons.account_balance_wallet_rounded),
                        ],
                      ),
                    ],
                  );
                },
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _navIcon(int i, IconData icon) => Expanded(
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: () => setState(() => _idx = i),
            customBorder: const CircleBorder(),
            splashColor: Colors.transparent,
            highlightColor: Colors.transparent,
            child: SizedBox(
              height: NgmyBottomNavMetrics.localBarHeight,
              child: Center(
                child: Icon(
                  icon,
                  color: _idx == i ? const Color(0xFF2EF6A3) : Colors.grey,
                  size: NgmyBottomNavMetrics.sideIconSize,
                ),
              ),
            ),
          ),
        ),
      );
}

class _LocalGrowthHomeTab extends StatelessWidget {
  const _LocalGrowthHomeTab({
    super.key,
    required this.user,
    required this.profileDisplayName,
    required this.transactions,
    required this.onClockIn,
    required this.onOpenInvest,
    required this.onOpenWallet,
    required this.onBack,
    required this.onOpenHelper,
    required this.onOpenGameCenter,
  });

  final UserData user;
  final String profileDisplayName;
  final List<AppTransaction> transactions;
  final Future<void> Function() onClockIn;
  final VoidCallback onOpenInvest;
  final VoidCallback onOpenWallet;
  final VoidCallback onBack;
  final VoidCallback onOpenHelper;
  final VoidCallback onOpenGameCenter;

  double _liveEarningsAt(DateTime now) {
    final goal = user.todayDailyGoal;
    if (goal <= 0) return 0;
    final start = user.clockInStartTime;
    if (!user.isClockedIn || start == null) {
      return user.todayClockInEarned.clamp(0, goal).toDouble();
    }
    final noon = DateTime(start.year, start.month, start.day, 12);
    if (!noon.isAfter(start)) return goal;
    if (!now.isAfter(start)) return user.todayClockInEarned.clamp(0, goal).toDouble();
    if (!now.isBefore(noon)) return goal;
    final totalMs = noon.difference(start).inMilliseconds;
    if (totalMs <= 0) return goal;
    final elapsedMs = now.difference(start).inMilliseconds.clamp(0, totalMs);
    final live = goal * (elapsedMs / totalMs);
    return live.clamp(user.todayClockInEarned, goal).toDouble();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    const bg = Color(0xFF101010);
    final card = isDark ? const Color(0xFF1C1C1E) : const Color(0xFF1C1C1E);
    final muted = Colors.white.withValues(alpha: 0.58);
    const glassGreen = Color(0xFF2EF6A3);
    final recent = transactions.take(3).toList();
    final active = user.activeInvestment;
    final clockedIn = user.isClockedIn;
    final dailyGoal = user.todayDailyGoal;

    return ColoredBox(
      color: bg,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 8, 20, 120),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            FloatingTitle(
              title: 'GROWTH INCOME',
              leading: _roundIcon(
                context,
                icon: Icons.attach_money_rounded,
                onTap: onBack,
                isDark: true,
              ),
              trailing: _roundIcon(
                context,
                icon: Icons.forum_rounded,
                onTap: onOpenHelper,
                isDark: true,
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: StreamBuilder<DateTime>(
                    stream: Stream.periodic(const Duration(seconds: 1), (_) => DateTime.now()),
                    initialData: DateTime.now(),
                    builder: (context, snapshot) => _topMetricCard(
                      icon: Icons.trending_up_rounded,
                      iconColor: glassGreen,
                      title: 'Today',
                      value: '\$${formatCurrency(_liveEarningsAt(snapshot.data ?? DateTime.now()))}',
                      valueColor: glassGreen,
                      card: card,
                      onTap: () => unawaited(onClockIn()),
                    ),
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _topMetricCard(
                    icon: Icons.account_balance_rounded,
                    iconColor: const Color(0xFF6366F1),
                    title: 'Balance',
                    value: '\$${formatCurrency(user.accountBalance)}',
                    valueColor: const Color(0xFF60A5FA),
                    card: card,
                    onTap: onOpenWallet,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 22),
            _LocalClockInShowcase(
              profileDisplayName: profileDisplayName,
              dailyGoal: dailyGoal,
              clockedIn: clockedIn,
              hasPlan: active != null,
              green: glassGreen,
              card: card,
              liveEarningsAt: _liveEarningsAt,
              onClockIn: onClockIn,
            ),
            const SizedBox(height: 24),
            _networkStatus(card: card, green: glassGreen),
            const SizedBox(height: 14),
            Row(
              children: [
                Expanded(child: _smallTotalBox('Total Profit', '\$${formatCurrency(user.totalProfit)}', card: card)),
                const SizedBox(width: 16),
                Expanded(child: _smallTotalBox('Total Investment', '\$${formatCurrency(active?.amount ?? 0)}', card: card, onTap: onOpenInvest)),
              ],
            ),
            const SizedBox(height: 14),
            Container(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
              decoration: BoxDecoration(
                color: card,
                borderRadius: BorderRadius.circular(26),
                border: Border.all(color: Colors.white.withValues(alpha: 0.05)),
              ),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: const BoxDecoration(color: glassGreen, shape: BoxShape.circle),
                      ),
                      const SizedBox(width: 10),
                      Text('LIVE ACTIVITY', style: TextStyle(color: muted, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.1)),
                    ],
                  ),
                  const SizedBox(height: 14),
                  if (recent.isEmpty)
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      child: Text('No local activity yet. Deposit, invest, or clock in to begin.', textAlign: TextAlign.center, style: TextStyle(color: muted, fontWeight: FontWeight.w700)),
                    )
                  else
                    ...recent.map((t) => _activityRow(context, t, isDark: true)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _roundIcon(BuildContext context, {required IconData icon, required VoidCallback onTap, required bool isDark}) {
    return InkWell(
      onTap: onTap,
      customBorder: const CircleBorder(),
      child: Container(
        width: 38,
        height: 38,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              const Color(0xFF2EF6A3).withValues(alpha: 0.24),
              const Color(0xFF0F172A).withValues(alpha: 0.72),
            ],
          ),
          border: Border.all(color: const Color(0xFF2EF6A3).withValues(alpha: 0.38)),
          boxShadow: [BoxShadow(color: const Color(0xFF2EF6A3).withValues(alpha: 0.18), blurRadius: 16)],
        ),
        child: Icon(icon, color: const Color(0xFF2EF6A3), size: 19),
      ),
    );
  }

  Widget _topMetricCard({
    required IconData icon,
    required Color iconColor,
    required String title,
    required String value,
    required Color valueColor,
    required Color card,
    VoidCallback? onTap,
  }) {
    final content = Container(
      height: 88,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 29,
                height: 29,
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [iconColor.withValues(alpha: 0.95), iconColor.withValues(alpha: 0.55)],
                  ),
                  borderRadius: BorderRadius.circular(8),
                  boxShadow: [BoxShadow(color: iconColor.withValues(alpha: 0.22), blurRadius: 12)],
                ),
                child: Icon(icon, color: Colors.white, size: 17),
              ),
              const SizedBox(width: 9),
              Text(title, style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontWeight: FontWeight.w800, fontSize: 12)),
            ],
          ),
          const Spacer(),
          Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: valueColor, fontWeight: FontWeight.w900, fontSize: 20)),
        ],
      ),
    );
    if (onTap == null) return content;
    return InkWell(onTap: onTap, borderRadius: BorderRadius.circular(14), child: content);
  }

  Widget _networkStatus({required Color card, required Color green}) {
    return Container(
      height: 72,
      padding: const EdgeInsets.symmetric(horizontal: 15),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: Colors.white.withValues(alpha: 0.05)),
        boxShadow: [BoxShadow(color: green.withValues(alpha: 0.14), blurRadius: 20)],
      ),
      child: Row(
        children: [
          Container(
            width: 46,
            height: 46,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [green.withValues(alpha: 0.92), const Color(0xFF047857).withValues(alpha: 0.65)],
              ),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: Colors.white.withValues(alpha: 0.24)),
              boxShadow: [BoxShadow(color: green.withValues(alpha: 0.44), blurRadius: 18)],
            ),
            child: const Icon(Icons.wifi_rounded, color: Colors.white, size: 25),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Network Status', style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
                Text('Real-time statistics', style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          InkWell(
            onTap: onOpenGameCenter,
            borderRadius: BorderRadius.circular(22),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [green.withValues(alpha: 0.88), const Color(0xFF16A34A).withValues(alpha: 0.70)],
                ),
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: Colors.white.withValues(alpha: 0.30)),
                boxShadow: [BoxShadow(color: green.withValues(alpha: 0.46), blurRadius: 16)],
              ),
              child: const Row(
                children: [
                  Icon(Icons.sports_esports_rounded, color: Colors.white, size: 14),
                  SizedBox(width: 6),
                  Text('ACTIVE', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
                  SizedBox(width: 7),
                  Icon(Icons.flash_on_rounded, color: Colors.white, size: 13),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _smallTotalBox(String title, String value, {required Color card, VoidCallback? onTap}) {
    final content = Container(
      height: 76,
      padding: const EdgeInsets.fromLTRB(16, 13, 16, 11),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: Colors.white.withValues(alpha: 0.05)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: TextStyle(color: Colors.white.withValues(alpha: 0.52), fontSize: 11, fontWeight: FontWeight.w800)),
          const Spacer(),
          Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
        ],
      ),
    );
    if (onTap == null) return content;
    return InkWell(onTap: onTap, borderRadius: BorderRadius.circular(18), child: content);
  }

  Widget _activityRow(BuildContext context, AppTransaction t, {required bool isDark}) {
    final isDebit = t.type == TransactionType.withdrawal || t.type == TransactionType.adminRemove;
    final color = isDebit ? Colors.redAccent : WorksheetPalette.green;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 7),
      child: Row(
        children: [
          Container(
            width: 31,
            height: 31,
            alignment: Alignment.center,
            decoration: BoxDecoration(shape: BoxShape.circle, color: color.withValues(alpha: 0.14)),
            child: Icon(isDebit ? Icons.arrow_upward_rounded : Icons.arrow_downward_rounded, color: color, size: 16),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(t.sourceDetails?.trim().isNotEmpty == true ? t.sourceDetails!.trim() : t.type.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: titleColor, fontSize: 12, fontWeight: FontWeight.w800)),
                Text('${t.timestamp.month}/${t.timestamp.day}/${t.timestamp.year}', style: TextStyle(color: muted, fontSize: 11, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          Text(
            '${isDebit ? '-' : '+'}\$${formatCurrency(t.amount)}',
            style: TextStyle(color: color, fontWeight: FontWeight.w900),
          ),
        ],
      ),
    );
  }
}

class _LocalClockInShowcase extends StatefulWidget {
  const _LocalClockInShowcase({
    required this.profileDisplayName,
    required this.dailyGoal,
    required this.clockedIn,
    required this.hasPlan,
    required this.green,
    required this.card,
    required this.liveEarningsAt,
    required this.onClockIn,
  });

  final String profileDisplayName;
  final double dailyGoal;
  final bool clockedIn;
  final bool hasPlan;
  final Color green;
  final Color card;
  final double Function(DateTime now) liveEarningsAt;
  final Future<void> Function() onClockIn;

  @override
  State<_LocalClockInShowcase> createState() => _LocalClockInShowcaseState();
}

class _LocalClockInShowcaseState extends State<_LocalClockInShowcase> with TickerProviderStateMixin {
  late final AnimationController _spinCtrl;
  late final AnimationController _glowCtrl;

  @override
  void initState() {
    super.initState();
    _spinCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 14))..repeat();
    _glowCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _spinCtrl.dispose();
    _glowCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final status = widget.clockedIn ? 'ACTIVE' : 'CLOSED';
    final name = widget.profileDisplayName.trim().isEmpty ? 'Member' : widget.profileDisplayName.trim().toUpperCase();

    return InkWell(
      onTap: widget.clockedIn ? null : () => unawaited(widget.onClockIn()),
      borderRadius: BorderRadius.circular(24),
      child: Container(
        height: 370,
        decoration: BoxDecoration(
          color: widget.card,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: Colors.white.withValues(alpha: 0.05)),
        ),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned(
              top: 13,
              left: 12,
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 168),
                child: Container(
                  padding: const EdgeInsets.all(3),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(13),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        Colors.white.withValues(alpha: 0.25),
                        widget.green.withValues(alpha: 0.28),
                        Colors.white.withValues(alpha: 0.08),
                      ],
                    ),
                    boxShadow: [BoxShadow(color: widget.green.withValues(alpha: 0.38), blurRadius: 18)],
                  ),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [widget.green.withValues(alpha: 0.90), const Color(0xFF047857).withValues(alpha: 0.72)],
                      ),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.40)),
                    ),
                    child: Text(
                      name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 0.7),
                    ),
                  ),
                ),
              ),
            ),
            StreamBuilder<DateTime>(
              stream: Stream.periodic(const Duration(seconds: 1), (_) => DateTime.now()),
              initialData: DateTime.now(),
              builder: (context, snapshot) {
                final now = snapshot.data ?? DateTime.now();
                final live = widget.liveEarningsAt(now);
                final progress = widget.dailyGoal <= 0 ? 0.0 : (live / widget.dailyGoal).clamp(0.0, 1.0);
                return AnimatedBuilder(
                  animation: Listenable.merge([_spinCtrl, _glowCtrl]),
                  builder: (context, _) {
                    final glow = 0.72 + _glowCtrl.value * 0.28;
                    return Center(
                      child: SizedBox(
                        width: 258,
                        height: 258,
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            CustomPaint(
                              size: const Size(258, 258),
                              painter: _ClockInRingPainter(
                                progress: progress,
                                spin: _spinCtrl.value,
                                clockedIn: widget.clockedIn,
                                accent: widget.green,
                                glowStrength: glow,
                              ),
                            ),
                            Container(
                              width: 188,
                              height: 188,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                gradient: RadialGradient(
                                  colors: [
                                    const Color(0xFF3A403D).withValues(alpha: 0.96),
                                    const Color(0xFF1A1D1B).withValues(alpha: 0.98),
                                    const Color(0xFF0E1011),
                                  ],
                                ),
                                border: Border.all(color: const Color(0xFFFFD166).withValues(alpha: 0.30), width: 2),
                                boxShadow: [
                                  BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 22, offset: const Offset(0, 10)),
                                  BoxShadow(color: widget.green.withValues(alpha: widget.clockedIn ? 0.14 : 0.06), blurRadius: 24),
                                ],
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Container(
                                    width: 56,
                                    height: 56,
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      gradient: LinearGradient(
                                        begin: Alignment.topLeft,
                                        end: Alignment.bottomRight,
                                        colors: [
                                          widget.green.withValues(alpha: 0.50),
                                          const Color(0xFF064E3B).withValues(alpha: 0.62),
                                        ],
                                      ),
                                      border: Border.all(color: widget.green.withValues(alpha: 0.40)),
                                    ),
                                    child: Icon(Icons.savings_rounded, color: Colors.white.withValues(alpha: 0.92), size: 30),
                                  ),
                                  const SizedBox(height: 10),
                                  Text('Daily Earnings', style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 10, fontWeight: FontWeight.w800)),
                                  const SizedBox(height: 6),
                                  TweenAnimationBuilder<double>(
                                    tween: Tween<double>(begin: live, end: live),
                                    duration: const Duration(milliseconds: 900),
                                    curve: Curves.easeOutCubic,
                                    builder: (context, value, _) => Text(
                                      '\$${formatCurrency(value)}',
                                      style: const TextStyle(color: Color(0xFFFFD166), fontSize: 30, fontWeight: FontWeight.w900),
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    widget.hasPlan ? status : 'NO PLAN',
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 0.6),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _ClockInRingPainter extends CustomPainter {
  _ClockInRingPainter({
    required this.progress,
    required this.spin,
    required this.clockedIn,
    required this.accent,
    required this.glowStrength,
  });

  final double progress;
  final double spin;
  final bool clockedIn;
  final Color accent;
  final double glowStrength;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = size.width / 2 - 8;
    const stroke = 11.0;

    final track = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = stroke
      ..strokeCap = StrokeCap.round
      ..color = Colors.white.withValues(alpha: 0.08);
    canvas.drawCircle(center, radius, track);

    if (progress > 0.01) {
      final arcRect = Rect.fromCircle(center: center, radius: radius);
      final sweep = progress.clamp(0.0, 1.0) * math.pi * 2;
      final progressPaint = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = stroke
        ..strokeCap = StrokeCap.round
        ..shader = SweepGradient(
          startAngle: -math.pi / 2,
          endAngle: math.pi * 1.5,
          colors: [
            const Color(0xFFFFD166),
            const Color(0xFFFFF3B0),
            accent.withValues(alpha: 0.95),
            const Color(0xFFFFD166),
          ],
        ).createShader(arcRect);
      canvas.drawArc(arcRect, -math.pi / 2, sweep, false, progressPaint);
    }

    if (clockedIn) {
      final highlightRect = Rect.fromCircle(center: center, radius: radius);
      final highlightSweep = math.pi / 5;
      final highlightPaint = Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 4
        ..strokeCap = StrokeCap.round
        ..color = Colors.white.withValues(alpha: 0.16 + glowStrength * 0.12);
      canvas.drawArc(highlightRect, spin * math.pi * 2, highlightSweep, false, highlightPaint);
    }
  }

  @override
  bool shouldRepaint(covariant _ClockInRingPainter oldDelegate) =>
      oldDelegate.progress != progress ||
      oldDelegate.spin != spin ||
      oldDelegate.clockedIn != clockedIn ||
      oldDelegate.glowStrength != glowStrength;
}

/// Mirrors WalletScreen's look (FloatingTitle, gradient header, Deposit /
/// Withdraw / History 3-way switch, same presets/fee/minimum). Deposits use
/// the same payment proof flow as the main wallet; admin credits via QR scan.
class _LocalWalletTab extends StatefulWidget {
  const _LocalWalletTab({
    super.key,
    required this.user,
    required this.realEmail,
    required this.config,
    required this.onAdd,
    required this.onBackup,
  });

  final UserData user;
  final String realEmail;
  final AppConfig config;
  final void Function(AppTransaction) onAdd;
  final VoidCallback onBackup;

  @override
  State<_LocalWalletTab> createState() => _LocalWalletTabState();
}

class _LocalWalletTabState extends State<_LocalWalletTab> {
  final TextEditingController _amt = TextEditingController();
  final TextEditingController _cashAppTag = TextEditingController();
  int _view = 0; // 0: Deposit, 1: Withdraw

  @override
  void dispose() {
    _amt.dispose();
    _cashAppTag.dispose();
    super.dispose();
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _notifyWhatsApp(AppTransaction transaction) async {
    final message = ngmyLocalDepositWhatsAppMessage(
      user: widget.user,
      realEmail: widget.realEmail,
      transaction: transaction,
      config: widget.config,
    );
    await ngmyShareLocalWalletWhatsApp(
      config: widget.config,
      message: message,
      screenshotDataUrl: transaction.screenshotPath,
      realEmail: widget.realEmail,
      transactionId: transaction.id,
    );
  }

  void _submitLocalDeposit(AppTransaction transaction) {
    widget.onAdd(transaction);
    unawaited(_notifyWhatsApp(transaction));
    _toast('Deposit request sent. Share payment proof on WhatsApp — admin will send a one-time deposit QR.');
  }

  void _openDepositPaymentPage(double amount) {
    NgmyNavigator.push(
      context,
      SubmitPaymentPage(
        user: widget.user,
        amount: amount,
        onAdd: _submitLocalDeposit,
        config: widget.config,
        requestTitle: 'Submit Local Deposit',
        successHint:
            'After you pay on Cash App or Bitcoin, submit here then send the WhatsApp message. '
            'Admin will verify and send a deposit QR to scan in Backup & Restore.',
      ),
    );
  }

  void _startDeposit() {
    final a = double.tryParse(_amt.text);
    if (a == null || a <= 0) {
      _toast('Enter an amount to deposit.');
      return;
    }
    _openDepositPaymentPage(a);
  }

  void _withdraw() {
    final a = double.tryParse(_amt.text);
    if (a == null || a <= 0) {
      _toast('Enter an amount to withdraw.');
      return;
    }
    if (a < kNgmyMinimumWithdrawalAmount) {
      _toast('Minimum withdrawal is \$${formatCurrency(kNgmyMinimumWithdrawalAmount)}.');
      return;
    }
    if (a > widget.user.accountBalance) {
      _toast('Insufficient balance. You have \$${formatCurrency(widget.user.accountBalance)}.');
      return;
    }
    final tag = ngmyNormalizeCashAppTagForSubmit(_cashAppTag.text);
    if (tag.isEmpty) {
      _toast('Enter your Cash App tag so admin knows where to send your money.');
      return;
    }
    final fee = a * 0.15;
    final receive = a - fee;
    widget.onAdd(AppTransaction(
      id: 'local_wd_${DateTime.now().microsecondsSinceEpoch}',
      userEmail: widget.user.email,
      amount: a,
      type: TransactionType.withdrawal,
      method: PaymentMethod.cashApp,
      sourceDetails: 'Withdrawal to \$$tag — Fee: \$${formatCurrency(fee)} — You receive: \$${formatCurrency(receive)}',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    _toast('Withdrawal request sent on WhatsApp.');
    unawaited(ngmyShareLocalWalletWhatsApp(
      config: widget.config,
      message: ngmyLocalWithdrawWhatsAppMessage(
        user: widget.user,
        realEmail: widget.realEmail,
        amount: a,
        fee: fee,
        receive: receive,
        cashAppTag: tag,
      ),
    ));
    _amt.clear();
    _cashAppTag.clear();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF101010);
    const cardBg = Color(0xFF1C1C1E);
    const glassGreen = Color(0xFF2EF6A3);
    final inputBg = Colors.white.withValues(alpha: 0.06);
    final inputBorder = Colors.white.withValues(alpha: 0.10);

    return ColoredBox(
      color: bg,
      child: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 8, 20, 126),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            FloatingTitle(
              title: 'LOCAL WALLET',
              leading: InkWell(
                onTap: () => _toast('This wallet is separate from Growth Income. Add funds here to invest locally.'),
                customBorder: const CircleBorder(),
                child: Container(
                  width: 40,
                  height: 40,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [glassGreen.withValues(alpha: 0.24), const Color(0xFF0F172A).withValues(alpha: 0.72)],
                    ),
                    border: Border.all(color: glassGreen.withValues(alpha: 0.38)),
                    boxShadow: [BoxShadow(color: glassGreen.withValues(alpha: 0.18), blurRadius: 16)],
                  ),
                  child: const Icon(Icons.info_outline_rounded, color: glassGreen, size: 20),
                ),
              ),
              trailing: InkWell(
                onTap: widget.onBackup,
                customBorder: const CircleBorder(),
                child: Container(
                  width: 40,
                  height: 40,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [glassGreen.withValues(alpha: 0.24), const Color(0xFF0F172A).withValues(alpha: 0.72)],
                    ),
                    border: Border.all(color: glassGreen.withValues(alpha: 0.38)),
                    boxShadow: [BoxShadow(color: glassGreen.withValues(alpha: 0.18), blurRadius: 16)],
                  ),
                  child: const Icon(Icons.save_alt_rounded, color: glassGreen, size: 18),
                ),
              ),
            ),
            const SizedBox(height: 20),
            Container(
              width: double.infinity,
              height: 154,
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [cardBg, const Color(0xFF064E3B).withValues(alpha: 0.86), cardBg],
                ),
                borderRadius: BorderRadius.circular(28),
                border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                boxShadow: [BoxShadow(color: glassGreen.withValues(alpha: 0.16), blurRadius: 26, offset: const Offset(0, 12))],
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    width: 56,
                    height: 56,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: LinearGradient(colors: [glassGreen.withValues(alpha: 0.82), const Color(0xFF16A34A).withValues(alpha: 0.56)]),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
                      boxShadow: [BoxShadow(color: glassGreen.withValues(alpha: 0.28), blurRadius: 20)],
                    ),
                    child: const Icon(Icons.account_balance_rounded, color: Colors.white, size: 30),
                  ),
                  const SizedBox(height: 10),
                  const Text('Local Balance', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 5),
                  Text(
                    '\$${formatCurrency(widget.user.accountBalance)}',
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 32, letterSpacing: -0.5),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 18),
            Row(
              children: [
                Expanded(child: _viewTab('Deposit', 0)),
                const SizedBox(width: 8),
                Expanded(child: _viewTab('Withdraw', 1)),
              ],
            ),
            const SizedBox(height: 16),
            Container(
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: cardBg,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.07)),
                  boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.22), blurRadius: 18, offset: const Offset(0, 8))],
                ),
                child: Column(
                  children: [
                    Text(
                      _view == 0 ? 'Deposit Amount' : 'Withdrawal Amount',
                      style: const TextStyle(fontSize: 13, color: Colors.white, fontWeight: FontWeight.w800),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _amt,
                      keyboardType: TextInputType.number,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: inputBg,
                        hintText: '\$ 0.00',
                        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.42), fontWeight: FontWeight.w700),
                        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: inputBorder)),
                        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: glassGreen.withValues(alpha: 0.55))),
                      ),
                    ),
                    if (_view == 0) ...[
                      const SizedBox(height: 14),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: [10, 50, 100, 200].map((v) {
                          return GestureDetector(
                            onTap: () => setState(() => _amt.text = v.toString()),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                              decoration: BoxDecoration(
                                color: inputBg,
                                borderRadius: BorderRadius.circular(10),
                                border: Border.all(color: inputBorder),
                              ),
                              child: Text('\$$v', style: const TextStyle(fontWeight: FontWeight.w800, color: Colors.white)),
                            ),
                          );
                        }).toList(),
                      ),
                    ],
                    if (_view == 1) ...[
                      const SizedBox(height: 14),
                      Text(
                        'Your Cash App tag',
                        style: const TextStyle(fontSize: 13, color: Colors.white, fontWeight: FontWeight.w800),
                      ),
                      const SizedBox(height: 8),
                      TextField(
                        controller: _cashAppTag,
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                        decoration: InputDecoration(
                          filled: true,
                          fillColor: inputBg,
                          hintText: 'YourCashTag',
                          prefixText: '\$ ',
                          hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.42), fontWeight: FontWeight.w700),
                          prefixStyle: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: inputBorder)),
                          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: glassGreen.withValues(alpha: 0.55))),
                        ),
                      ),
                    ],
                    const SizedBox(height: 18),
                    SizedBox(
                      width: double.infinity,
                      height: 50,
                      child: ElevatedButton(
                        onPressed: _view == 0 ? _startDeposit : _withdraw,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF059669),
                          foregroundColor: Colors.white,
                          shadowColor: const Color(0xFF059669).withValues(alpha: 0.42),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        ),
                        child: Text(_view == 0 ? 'Deposit Funds' : 'Withdraw Funds', style: const TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ),
        ),
      ),
    );
  }

  Widget _viewTab(String label, int v) {
    final selected = _view == v;
    const glassGreen = Color(0xFF2EF6A3);
    return GestureDetector(
      onTap: () => setState(() => _view = v),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          gradient: selected
              ? LinearGradient(colors: [glassGreen.withValues(alpha: 0.22), const Color(0xFF047857).withValues(alpha: 0.18)])
              : null,
          color: selected ? null : Colors.white.withValues(alpha: 0.04),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: selected ? glassGreen.withValues(alpha: 0.48) : Colors.white.withValues(alpha: 0.10)),
          boxShadow: selected ? [BoxShadow(color: glassGreen.withValues(alpha: 0.14), blurRadius: 14)] : null,
        ),
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: TextStyle(fontWeight: FontWeight.w900, color: selected ? glassGreen : Colors.white60),
        ),
      ),
    );
  }

}
