import 'dart:async';

import 'package:flutter/material.dart';

import 'main.dart';
import 'ngmy_account_snapshot_ui.dart';
import 'ngmy_local_deposit_qr.dart';
import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_helpers.dart';

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
        transactions: sorted,
        onClockIn: _manualClockIn,
        onOpenInvest: () => setState(() => _idx = 1),
        onOpenWallet: () => setState(() => _idx = 2),
        onBack: () => NgmyNavigator.pop(context),
        onOpenHelper: _openHelper,
      ),
      InvestScreen(
        key: const ValueKey('ngmy_local_invest'),
        user: _user!,
        plans: widget.plans,
        purchaseInFlight: _investPurchaseInFlight,
        onInvest: _onInvest,
      ),
      _LocalWalletTab(
        key: const ValueKey('ngmy_local_wallet'),
        user: _user!,
        realEmail: widget.liveUser.email,
        config: widget.config,
        onAdd: _onAddTransaction,
        onBackup: _openBackup,
      ),
    ];

    final media = MediaQuery.of(context);
    final navSpace = NgmyBottomNavMetrics.localBarHeight + media.padding.bottom + 22;

    // Draw the local shell ourselves instead of relying on Scaffold's
    // bottomNavigationBar. On iOS PWA/web this route was occasionally getting
    // a loose height during transition, which made only the nav render in the
    // middle of a black page. This pins the tabs and menu to the full viewport.
    return Material(
      color: bg,
      child: SizedBox(
        width: double.infinity,
        height: media.size.height,
        child: Stack(
          children: [
            Positioned.fill(child: ColoredBox(color: bg)),
            Positioned.fill(
              bottom: navSpace,
              // Not an IndexedStack on purpose: HomeScreen runs its own ticker
              // while mounted. Building only the active tab tears that ticker
              // down the moment the user leaves Home.
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
    const ball = NgmyBottomNavMetrics.localSelectionBall;
    const itemW = NgmyBottomNavMetrics.localNavItemWidth;
    const gap = NgmyBottomNavMetrics.localNavItemGap;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 0, 20, 14),
      child: SafeArea(
        top: false,
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: NgmyBottomNavMetrics.localNavMaxWidth),
            child: NgmySculptedBottomNavFrame(
              barHeight: NgmyBottomNavMetrics.localBarHeight,
              borderRadius: 24,
              child: Stack(
                alignment: Alignment.center,
                clipBehavior: Clip.none,
                children: [
                  AnimatedAlign(
                    duration: const Duration(milliseconds: 280),
                    curve: Curves.easeOutCubic,
                    alignment: Alignment(-1 + _idx.toDouble(), 0),
                    child: FractionallySizedBox(
                      widthFactor: 1 / 3,
                      child: Center(
                        child: Container(
                          width: ball,
                          height: ball,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                              colors: [
                                WorksheetPalette.green.withValues(alpha: isDark ? 0.30 : 0.16),
                                WorksheetPalette.green.withValues(alpha: isDark ? 0.10 : 0.04),
                              ],
                            ),
                            border: Border.all(color: WorksheetPalette.green.withValues(alpha: isDark ? 0.45 : 0.30), width: 1.2),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      _navIcon(0, Icons.home_rounded, itemW),
                      SizedBox(width: gap),
                      _navIcon(1, Icons.trending_up_rounded, itemW),
                      SizedBox(width: gap),
                      _navIcon(2, Icons.account_balance_wallet_rounded, itemW),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _navIcon(int i, IconData icon, double width) => SizedBox(
        width: width,
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
                  color: _idx == i ? Theme.of(context).colorScheme.primary : Colors.grey,
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
    required this.transactions,
    required this.onClockIn,
    required this.onOpenInvest,
    required this.onOpenWallet,
    required this.onBack,
    required this.onOpenHelper,
  });

  final UserData user;
  final List<AppTransaction> transactions;
  final Future<void> Function() onClockIn;
  final VoidCallback onOpenInvest;
  final VoidCallback onOpenWallet;
  final VoidCallback onBack;
  final VoidCallback onOpenHelper;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final recent = transactions.take(5).toList();
    final active = user.activeInvestment;
    final clockedIn = user.isClockedIn;
    final dailyGoal = user.todayDailyGoal;

    return ColoredBox(
      color: bg,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 26),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            FloatingTitle(
              title: 'LOCAL GROWTH INCOME',
              leading: _roundIcon(
                context,
                icon: Icons.arrow_back_ios_new_rounded,
                onTap: onBack,
                isDark: isDark,
              ),
              trailing: _roundIcon(
                context,
                icon: Icons.forum_rounded,
                onTap: onOpenHelper,
                isDark: isDark,
              ),
            ),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(22),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF0EA5E9), Color(0xFF22C55E)],
                ),
                borderRadius: BorderRadius.circular(30),
                boxShadow: [BoxShadow(color: WorksheetPalette.green.withValues(alpha: 0.26), blurRadius: 24, offset: const Offset(0, 12))],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Local Balance', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                  const SizedBox(height: 8),
                  Text(
                    '\$${formatCurrency(user.accountBalance)}',
                    style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w900, letterSpacing: -0.8),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Expanded(child: _statPill('Today Goal', '\$${formatCurrency(dailyGoal)}')),
                      const SizedBox(width: 10),
                      Expanded(child: _statPill('Total Profit', '\$${formatCurrency(user.totalProfit)}')),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
            _sectionCard(
              isDark: isDark,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Icon(clockedIn ? Icons.verified_rounded : Icons.touch_app_rounded, color: WorksheetPalette.green),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          clockedIn ? 'Clocked in for today' : 'Daily Clock In',
                          style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 18),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Text(
                    active == null
                        ? 'Choose a local investment plan first, then clock in here to start earning.'
                        : clockedIn
                            ? 'Your local earning session is active. Payout settles into your local wallet on the next day.'
                            : 'Tap the button below to start today’s local earning session.',
                    style: TextStyle(color: muted, height: 1.35, fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    height: 52,
                    child: ElevatedButton.icon(
                      onPressed: clockedIn ? null : onClockIn,
                      icon: Icon(clockedIn ? Icons.check_circle_rounded : Icons.login_rounded),
                      label: Text(clockedIn ? 'Already Clocked In' : 'Clock In Now'),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: WorksheetPalette.green,
                        foregroundColor: Colors.white,
                        disabledBackgroundColor: WorksheetPalette.green.withValues(alpha: 0.35),
                        disabledForegroundColor: Colors.white70,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        textStyle: const TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: _quickCard(
                    context,
                    isDark: isDark,
                    icon: Icons.trending_up_rounded,
                    title: active?.name ?? 'No Plan Yet',
                    subtitle: active == null ? 'Open Investment' : '\$${formatCurrency(active.amount)} active',
                    onTap: onOpenInvest,
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: _quickCard(
                    context,
                    isDark: isDark,
                    icon: Icons.account_balance_wallet_rounded,
                    title: 'My Wallet',
                    subtitle: 'Deposit / Withdraw',
                    onTap: onOpenWallet,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            _sectionCard(
              isDark: isDark,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Recent Local Activity', style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 16)),
                  const SizedBox(height: 12),
                  if (recent.isEmpty)
                    Text('No local activity yet. Deposit, invest, or clock in to begin.', style: TextStyle(color: muted, fontWeight: FontWeight.w600))
                  else
                    ...recent.map((t) => _activityRow(context, t, isDark: isDark)),
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
        width: 40,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: isDark ? const Color(0xFF111827) : Colors.white,
          border: Border.all(color: WorksheetPalette.green.withValues(alpha: isDark ? 0.35 : 0.18)),
        ),
        child: Icon(icon, color: WorksheetPalette.green, size: 20),
      ),
    );
  }

  Widget _statPill(String label, String value) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.16),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w700)),
          const SizedBox(height: 4),
          Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        ],
      ),
    );
  }

  Widget _sectionCard({required bool isDark, required Widget child}) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF111827) : Colors.white,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: isDark ? const Color(0xFF1F2937) : const Color(0xFFE5E7EB)),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.20 : 0.07), blurRadius: 18, offset: const Offset(0, 8))],
      ),
      child: child,
    );
  }

  Widget _quickCard(
    BuildContext context, {
    required bool isDark,
    required IconData icon,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(22),
      child: _sectionCard(
        isDark: isDark,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, color: WorksheetPalette.green, size: 24),
            const SizedBox(height: 10),
            Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: titleColor, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: muted, fontSize: 12, fontWeight: FontWeight.w600)),
          ],
        ),
      ),
    );
  }

  Widget _activityRow(BuildContext context, AppTransaction t, {required bool isDark}) {
    final isDebit = t.type == TransactionType.withdrawal || t.type == TransactionType.adminRemove;
    final color = isDebit ? Colors.redAccent : WorksheetPalette.green;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Container(
            width: 34,
            height: 34,
            alignment: Alignment.center,
            decoration: BoxDecoration(shape: BoxShape.circle, color: color.withValues(alpha: 0.14)),
            child: Icon(isDebit ? Icons.arrow_upward_rounded : Icons.arrow_downward_rounded, color: color, size: 18),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(t.sourceDetails?.trim().isNotEmpty == true ? t.sourceDetails!.trim() : t.type.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: titleColor, fontWeight: FontWeight.w800)),
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
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final cardBg = isDark ? const Color(0xFF161B22) : Colors.white;
    final inputBg = isDark ? const Color(0xFF0F141B) : const Color(0xFFF8FAFC);
    final inputBorder = isDark ? const Color(0xFF2B3440) : const Color(0xFFD1D5DB);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);

    return SafeArea(
      bottom: false,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 32),
        child: Column(
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
                    color: isDark ? Colors.transparent : WorksheetPalette.green,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(Icons.info_outline_rounded, color: isDark ? Colors.greenAccent : Colors.white, size: 20),
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
                    color: WorksheetPalette.green.withValues(alpha: isDark ? 0.22 : 0.12),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(Icons.save_alt_rounded, color: WorksheetPalette.green, size: 18),
                ),
              ),
            ),
            const SizedBox(height: 20),
            Container(
              width: double.infinity,
              height: 140,
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [Color(0xFF2E3192), Color(0xFF1BFFFF)]),
                borderRadius: BorderRadius.circular(30),
                boxShadow: [BoxShadow(color: Colors.blue.withValues(alpha: 0.3), blurRadius: 20, offset: const Offset(0, 10))],
              ),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text('Local Balance', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600)),
                    const SizedBox(height: 6),
                    Text(
                      '\$${formatCurrency(widget.user.accountBalance)}',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30),
                    ),
                  ],
                ),
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
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 14, offset: const Offset(0, 4))],
                ),
                child: Column(
                  children: [
                    Text(
                      _view == 0 ? 'Deposit Amount' : 'Withdrawal Amount',
                      style: TextStyle(fontSize: 13, color: titleColor, fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _amt,
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: inputBg,
                        hintText: '\$ 0.00',
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: inputBorder)),
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
                              child: Text('\$$v', style: TextStyle(fontWeight: FontWeight.w700, color: titleColor)),
                            ),
                          );
                        }).toList(),
                      ),
                    ],
                    if (_view == 1) ...[
                      const SizedBox(height: 14),
                      Text(
                        'Your Cash App tag',
                        style: TextStyle(fontSize: 13, color: titleColor, fontWeight: FontWeight.w600),
                      ),
                      const SizedBox(height: 8),
                      TextField(
                        controller: _cashAppTag,
                        decoration: InputDecoration(
                          filled: true,
                          fillColor: inputBg,
                          hintText: 'YourCashTag',
                          prefixText: '\$ ',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: inputBorder)),
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
                          backgroundColor: const Color(0xFF22C55E),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: Text(_view == 0 ? 'Deposit Funds' : 'Withdraw Funds', style: const TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _viewTab(String label, int v) {
    final selected = _view == v;
    return GestureDetector(
      onTap: () => setState(() => _view = v),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          color: selected ? WorksheetPalette.green.withValues(alpha: 0.15) : Colors.transparent,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: selected ? WorksheetPalette.green : Colors.grey.withValues(alpha: 0.3)),
        ),
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: TextStyle(fontWeight: FontWeight.w700, color: selected ? WorksheetPalette.green : Colors.grey),
        ),
      ),
    );
  }

}
