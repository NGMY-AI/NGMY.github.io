import 'dart:async';

import 'package:flutter/material.dart';

import 'main.dart';
import 'ngmy_account_snapshot_ui.dart';
import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_clock_in_investment_dialog.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_weekend_clock_overlay.dart';
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
  int _idx = 0;
  bool _investPurchaseInFlight = false;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  Future<void> _load() async {
    final loaded = await NgmyLocalGrowthIncomeStore.load(widget.liveUser);
    final user = loaded.user;
    final transactions = List<AppTransaction>.from(loaded.transactions);
    NgmyLocalGrowthIncomeStore.applyDailyRollover(user, transactions);
    if (!mounted) return;
    setState(() {
      _user = user;
      _transactions = transactions;
      _loading = false;
    });
    unawaited(_persist());
  }

  Future<void> _persist() async {
    final user = _user;
    if (user == null) return;
    await NgmyLocalGrowthIncomeStore.save(widget.liveUser.email, user, _transactions);
  }

  void _onDataChanged() {
    setState(() {});
    unawaited(_persist());
  }

  void _onAddTransaction(AppTransaction t) {
    final user = _user;
    if (user == null) return;
    NgmyLocalGrowthIncomeStore.applyTransaction(user, t);
    setState(() => _transactions = [..._transactions, t]);
    unawaited(_persist());
  }

  Future<void> _onClockIn() async {
    final user = _user;
    if (user == null) return;
    final now = DateTime.now();
    NgmyLocalGrowthIncomeStore.applyDailyRollover(user, _transactions);

    if (user.activeInvestment == null) {
      await NgmyClockInInvestmentDialog.show(context, onGoToInvest: () => setState(() => _idx = 1));
      return;
    }
    if (NgmyLocalGrowthIncomeStore.isWeekend(now)) {
      await NgmyWeekendClockOverlay.show(context);
      return;
    }
    if (NgmyLocalGrowthIncomeStore.sameCalendarDay(user.lastClockInEarningsDate, now)) {
      _toast('You already earned today\'s clock-in payout. Check back tomorrow.');
      return;
    }
    if (user.isClockedIn) {
      _toast('Your local clock-in session is already running.');
      return;
    }
    if (!NgmyLocalGrowthIncomeStore.isClockInWindowOpen(now)) {
      _toast('Clock-in window has closed for today (opens again at midnight).');
      return;
    }
    final penalty = NgmyLocalGrowthIncomeStore.latePenaltyPercent(now);
    final sessionId = 'local_clockin_start_${user.email}_${now.millisecondsSinceEpoch}';
    setState(() {
      user.isClockedIn = true;
      user.clockInStartTime = now;
      user.clockInPenaltyPercent = penalty;
    });
    _onAddTransaction(AppTransaction(
      id: sessionId,
      userEmail: user.email,
      amount: 0,
      type: TransactionType.reimbursement,
      method: PaymentMethod.system,
      sourceDetails: 'Clock-in session started (local)',
      status: TransactionStatus.approved,
      timestamp: now,
    ));
    _toast('Local clock-in started. Earnings settle the next time you open this.');
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
      _toast('You already own this plan locally.');
      return;
    }
    if (user.accountBalance < cost) {
      _toast('Insufficient local balance. Add funds in the Wallet tab first.');
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
      sourceDetails: 'Direct investment buy (local): $name',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    setState(() => _investPurchaseInFlight = false);
    _toast('Plan purchased locally: $name');
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _openBackup() async {
    final user = _user;
    if (user == null) return;
    await showNgmyAccountSnapshotPage(context, user: user, transactions: _transactions);
    await _load();
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
      HomeScreen(
        key: const ValueKey('ngmy_local_home'),
        user: _user!,
        onClockIn: _onClockIn,
        allTransactions: sorted,
        onProcess: (_, _) async {},
        allUsers: [_user!],
        globalPlans: widget.plans,
        onAddPlan: (_) {},
        onAddTransaction: _onAddTransaction,
        onDataChanged: _onDataChanged,
        config: widget.config,
        allMedia: const [],
        allAnnouncements: const [],
        onAddAnnouncement: (_) {},
        onDeleteAnnouncement: (_) {},
        onClearAllAnnouncements: () {},
        onOpenInvest: () => setState(() => _idx = 1),
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
        transactions: sorted,
        onAdd: _onAddTransaction,
      ),
    ];

    return Scaffold(
      extendBody: true,
      backgroundColor: bg,
      body: Column(
        children: [
          SafeArea(
            bottom: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 10, 20, 0),
              child: FloatingTitle(
                title: 'LOCAL GROWTH INCOME',
                leading: _headerCircleButton(
                  icon: Icons.arrow_back_ios_new_rounded,
                  isDark: isDark,
                  onTap: () => Navigator.pop(context),
                ),
                trailing: _headerCircleButton(
                  icon: Icons.save_alt_rounded,
                  isDark: isDark,
                  onTap: _openBackup,
                ),
              ),
            ),
          ),
          Expanded(child: IndexedStack(index: _idx, children: pages)),
        ],
      ),
      bottomNavigationBar: Material(
        type: MaterialType.transparency,
        elevation: 0,
        color: Colors.transparent,
        child: _buildLocalBottomNavBar(),
      ),
    );
  }

  Widget _headerCircleButton({required IconData icon, required bool isDark, required VoidCallback onTap}) {
    return InkWell(
      onTap: onTap,
      customBorder: const CircleBorder(),
      child: Container(
        width: 40,
        height: 40,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: WorksheetPalette.green.withValues(alpha: isDark ? 0.22 : 0.12),
          shape: BoxShape.circle,
        ),
        child: Icon(icon, color: WorksheetPalette.green, size: 18),
      ),
    );
  }

  Widget _buildLocalBottomNavBar() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(15, 0, 15, 20),
      child: SafeArea(
        top: false,
        child: NgmySculptedBottomNavFrame(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              _navIcon(0, Icons.home_rounded),
              _navIcon(1, Icons.trending_up_rounded),
              _navIcon(2, Icons.account_balance_wallet_rounded),
            ],
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
            child: SizedBox(
              height: NgmyBottomNavMetrics.barHeight,
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

/// Mirrors WalletScreen's look (FloatingTitle, gradient header, Deposit /
/// Withdraw / History 3-way switch, same presets/fee/minimum) but applies
/// instantly to the local balance — there's no admin to approve anything
/// in this local-only copy.
class _LocalWalletTab extends StatefulWidget {
  const _LocalWalletTab({super.key, required this.user, required this.transactions, required this.onAdd});

  final UserData user;
  final List<AppTransaction> transactions;
  final void Function(AppTransaction) onAdd;

  @override
  State<_LocalWalletTab> createState() => _LocalWalletTabState();
}

class _LocalWalletTabState extends State<_LocalWalletTab> {
  final TextEditingController _amt = TextEditingController();
  int _view = 0; // 0: Deposit, 1: Withdraw, 2: History

  @override
  void dispose() {
    _amt.dispose();
    super.dispose();
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  void _deposit() {
    final a = double.tryParse(_amt.text);
    if (a == null || a <= 0) {
      _toast('Enter an amount to add.');
      return;
    }
    widget.onAdd(AppTransaction(
      id: 'local_dep_${DateTime.now().microsecondsSinceEpoch}',
      userEmail: widget.user.email,
      amount: a,
      type: TransactionType.deposit,
      method: PaymentMethod.system,
      sourceDetails: 'Local deposit',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    _toast('Added \$${formatCurrency(a)} to your local balance.');
    _amt.clear();
    setState(() {});
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
      _toast('Insufficient local balance. You have \$${formatCurrency(widget.user.accountBalance)}.');
      return;
    }
    final fee = a * 0.15;
    final receive = a - fee;
    widget.onAdd(AppTransaction(
      id: 'local_wd_${DateTime.now().microsecondsSinceEpoch}',
      userEmail: widget.user.email,
      amount: a,
      type: TransactionType.withdrawal,
      method: PaymentMethod.system,
      sourceDetails: 'Local withdrawal - Fee: \$${formatCurrency(fee)} - You receive: \$${formatCurrency(receive)}',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    _toast('Withdrew \$${formatCurrency(a)} locally. You receive \$${formatCurrency(receive)} after fee.');
    _amt.clear();
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final cardBg = isDark ? const Color(0xFF161B22) : Colors.white;
    final inputBg = isDark ? const Color(0xFF0F141B) : const Color(0xFFF8FAFC);
    final inputBorder = isDark ? const Color(0xFF2B3440) : const Color(0xFFD1D5DB);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return SafeArea(
      bottom: false,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 10, 20, 32),
        child: Column(
          children: [
            const FloatingTitle(title: 'MY WALLET (LOCAL)'),
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
                const SizedBox(width: 8),
                Expanded(child: _viewTab('History', 2)),
              ],
            ),
            const SizedBox(height: 16),
            if (_view == 2)
              _historyList(muted, titleColor, cardBg)
            else
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
                    const SizedBox(height: 18),
                    SizedBox(
                      width: double.infinity,
                      height: 50,
                      child: ElevatedButton(
                        onPressed: _view == 0 ? _deposit : _withdraw,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF22C55E),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: Text(_view == 0 ? 'Add Funds' : 'Withdraw Funds', style: const TextStyle(fontWeight: FontWeight.w700)),
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

  Widget _historyList(Color muted, Color titleColor, Color cardBg) {
    if (widget.transactions.isEmpty) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 30),
        child: Text('No local transactions yet.', style: TextStyle(color: muted)),
      );
    }
    return Column(
      children: widget.transactions.map((t) {
        final isWithdrawal = t.type == TransactionType.withdrawal;
        final isAdd = t.type == TransactionType.deposit || t.type == TransactionType.reimbursement;
        return Container(
          margin: const EdgeInsets.only(bottom: 8),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(color: cardBg, borderRadius: BorderRadius.circular(14)),
          child: Row(
            children: [
              Icon(
                isWithdrawal ? Icons.south_west_rounded : Icons.north_east_rounded,
                color: isAdd ? const Color(0xFF22C55E) : Colors.redAccent,
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(t.sourceDetails ?? t.type.name, style: TextStyle(color: titleColor, fontWeight: FontWeight.w700, fontSize: 12)),
                    Text('${t.timestamp.month}/${t.timestamp.day}/${t.timestamp.year}', style: TextStyle(color: muted, fontSize: 11)),
                  ],
                ),
              ),
              Text(
                '${isAdd ? '+' : '-'}\$${formatCurrency(t.amount)}',
                style: TextStyle(fontWeight: FontWeight.w800, color: isAdd ? const Color(0xFF22C55E) : Colors.redAccent),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }
}
