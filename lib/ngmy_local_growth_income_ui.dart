import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'main.dart';
import 'ngmy_account_snapshot_ui.dart';
import 'ngmy_local_deposit_qr.dart';
import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_feature_sync_session.dart';
import 'ngmy_game_session.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_network_resilience.dart';
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
  void Function(AppTransaction transaction)? onCloudAddTransaction,
  Future<void> Function(double balance, {required bool allowDecrease})? onPersistBalanceToCloud,
}) {
  if (!liveUser.isAdmin) return Future.value();
  return NgmyNavigator.push<void>(
    context,
    NgmyLocalGrowthIncomeScreen(
      liveUser: liveUser,
      config: config,
      plans: plans,
      onCloudAddTransaction: onCloudAddTransaction,
      onPersistBalanceToCloud: onPersistBalanceToCloud,
    ),
    fullscreenDialog: true,
  );
}

class NgmyLocalGrowthIncomeScreen extends StatefulWidget {
  const NgmyLocalGrowthIncomeScreen({
    super.key,
    required this.liveUser,
    required this.config,
    required this.plans,
    this.onCloudAddTransaction,
    this.onPersistBalanceToCloud,
  });

  final UserData liveUser;
  final AppConfig config;
  final List<InvestmentPlan> plans;
  final void Function(AppTransaction transaction)? onCloudAddTransaction;
  /// Persist balance to the users table. [allowDecrease] only for withdraw/invest spends.
  final Future<void> Function(double balance, {required bool allowDecrease})? onPersistBalanceToCloud;

  @override
  State<NgmyLocalGrowthIncomeScreen> createState() => _NgmyLocalGrowthIncomeScreenState();
}

class _NgmyLocalGrowthIncomeScreenState extends State<NgmyLocalGrowthIncomeScreen> with WidgetsBindingObserver {
  UserData? _user;
  List<AppTransaction> _transactions = [];
  int _walletStateRevision = 0;
  int _idx = 0;
  bool _investPurchaseInFlight = false;
  bool _loading = true;
  Timer? _balancePoll;
  Timer? _earningsTick;

  /// One shared spendable balance for Growth Income AND the whole app.
  void _publishAppBalance(double balance, {required bool allowDecrease}) {
    final bal = balance.clamp(0.0, double.infinity);
    final user = _user;
    if (user != null) user.accountBalance = bal;
    widget.liveUser.accountBalance = bal;
    // Seed both identities so GI UI and app-wide payments/games caches stay aligned.
    if (user != null) {
      ngmySeedLiveBalance(user.email, bal, allowIncrease: true);
    }
    ngmySeedLiveBalance(widget.liveUser.email, bal, allowIncrease: true);
    ngmyNotifyBalanceChanged(
      email: widget.liveUser.email,
      balance: bal,
      allowIncrease: true,
    );
  }

  @override
  void initState() {
    super.initState();
    if (!widget.liveUser.isAdmin) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) NgmyNavigator.pop(context);
      });
      return;
    }
    WidgetsBinding.instance.addObserver(this);
    NgmyFeatureSyncSession.enterGrowthIncomeUser();
    unawaited(_load());
    _balancePoll = Timer.periodic(const Duration(seconds: 8), (_) {
      unawaited(_pullApprovedBalanceFromCloud());
    });
    _earningsTick = Timer.periodic(const Duration(seconds: 2), (_) {
      _tickLocalClockInEarnings();
    });
  }

  @override
  void dispose() {
    _balancePoll?.cancel();
    _earningsTick?.cancel();
    WidgetsBinding.instance.removeObserver(this);
    NgmyFeatureSyncSession.leaveGrowthIncomeUser();
    super.dispose();
  }

  /// Same-day completion: when the local clock-in goal is reached, stack the
  /// payout into balance immediately (not only on next-day rollover).
  void _tickLocalClockInEarnings() {
    final user = _user;
    if (user == null || !mounted) return;
    if (!user.isClockedIn || user.clockInStartTime == null) return;
    final now = DateTime.now();
    if (!NgmyLocalGrowthIncomeStore.sameCalendarDay(user.clockInStartTime, now)) {
      final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, _transactions);
      if (payoutAdded) {
        setState(() {
          _publishAppBalance(user.accountBalance, allowDecrease: false);
        });
        unawaited(_persist(bumpWalletRevision: true, syncBalance: true, allowDecrease: false));
      }
      return;
    }
    final goal = user.todayDailyGoal;
    if (goal <= 0) return;
    if (user.currentTodayEarnings < goal - 0.0001) {
      if (mounted) setState(() {});
      return;
    }
    final payoutId =
        'local_clockin_payout_${user.email}_${user.clockInStartTime!.millisecondsSinceEpoch}';
    if (_transactions.any((t) => t.id == payoutId)) {
      user.isClockedIn = false;
      user.clockInStartTime = null;
      user.clockInPenaltyPercent = 0;
      return;
    }
    final earned = goal;
    setState(() {
      user.totalProfit += earned;
      if (user.activeInvestment != null) {
        user.activeInvestment!.totalEarned += earned;
        user.activeInvestment!.daysClockedIn += 1;
      }
      user.isClockedIn = false;
      user.clockInStartTime = null;
      user.clockInPenaltyPercent = 0;
      user.lastClockInDate = now;
      user.lastClockInEarningsDate = now;
      user.todayClockInEarned = earned;
      if (widget.liveUser.activeInvestment != null && user.activeInvestment != null) {
        widget.liveUser.activeInvestment!.totalEarned = user.activeInvestment!.totalEarned;
        widget.liveUser.activeInvestment!.daysClockedIn = user.activeInvestment!.daysClockedIn;
      }
    });
    _onAddTransaction(
      AppTransaction(
        id: payoutId,
        userEmail: user.email,
        amount: earned,
        type: TransactionType.reimbursement,
        method: PaymentMethod.system,
        sourceDetails: 'Clock-in daily earnings (local)',
        status: TransactionStatus.approved,
        timestamp: now,
      ),
    );
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      unawaited(_pullApprovedBalanceFromCloud());
    }
  }

  Future<void> _syncBalanceToCloud({required bool allowDecrease}) async {
    final user = _user;
    if (user == null) return;
    // Growth Income shares the main account balance used by every payment in the app.
    if (!allowDecrease && user.accountBalance + 0.01 < widget.liveUser.accountBalance) {
      _publishAppBalance(widget.liveUser.accountBalance, allowDecrease: false);
      return;
    }
    _publishAppBalance(user.accountBalance, allowDecrease: allowDecrease);
    await widget.onPersistBalanceToCloud?.call(widget.liveUser.accountBalance, allowDecrease: allowDecrease);
  }

  /// Pull the saved account balance from the database so admin-approved deposits appear.
  /// Authority order: never wipe stacked Growth Income earnings — cloud/live may only raise the balance.
  Future<void> _pullApprovedBalanceFromCloud() async {
    final user = _user;
    if (user == null) return;
    final email = ngmyNormalizeEmail(widget.liveUser.email);
    if (email.isEmpty) return;
    try {
      final row = await Supabase.instance.client
          .from('users')
          .select('accountBalance')
          .eq('email', email)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (!mounted) return;
      final cloud = row == null
          ? 0.0
          : ((row['accountBalance'] as num?)?.toDouble() ?? 0).clamp(0.0, double.infinity);
      // Never replace a higher local balance with a lower cloud/live figure —
      // that was wiping day-to-day stacked earnings (looking like "replace").
      final best = math.max(
        user.accountBalance,
        math.max(cloud, widget.liveUser.accountBalance),
      );
      if (best > user.accountBalance + 0.009) {
        setState(() => _publishAppBalance(best, allowDecrease: false));
      }
      // Always reconcile approved deposit history → balance (even if cloud still shows old amount).
      await _refreshDepositStatusesFromCloud();
      unawaited(_persist(syncBalance: false));
    } catch (e) {
      debugPrint('[growth income] pull balance: $e');
      await _refreshDepositStatusesFromCloud();
    }
  }

  /// Credits approved deposits that never hit the balance (tracked per txn id so we never double-pay).
  Future<void> _applyMissingWalletCredits({Iterable<String>? onlyIds}) async {
    final user = _user;
    if (user == null) return;
    final prefs = await SharedPreferences.getInstance();
    final key = 'ngmy_gi_credited_txn_ids_${ngmyNormalizeEmail(widget.liveUser.email)}';
    final credited = (prefs.getStringList(key) ?? <String>[]).toSet();
    var gained = 0.0;
    final newlyCredited = <String>[];
    final idFilter = onlyIds?.toSet();

    for (final t in _transactions) {
      if (credited.contains(t.id)) continue;
      if (idFilter != null && !idFilter.contains(t.id)) continue;
      if (t.type == TransactionType.deposit && t.status == TransactionStatus.approved && t.amount > 0) {
        gained += t.amount;
        newlyCredited.add(t.id);
      }
    }

    if (gained < 0.01) return;

    if (!mounted) return;
    setState(() {
      _publishAppBalance(user.accountBalance + gained, allowDecrease: false);
    });
    credited.addAll(newlyCredited);
    await prefs.setStringList(key, credited.toList());
    unawaited(_persist(syncBalance: true, allowDecrease: false));
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Balance updated: +\$${formatCurrency(gained)} from approved deposits.')),
      );
    }
  }

  Future<void> _markTxnCredited(String txnId) async {
    if (txnId.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    final key = 'ngmy_gi_credited_txn_ids_${ngmyNormalizeEmail(widget.liveUser.email)}';
    final credited = (prefs.getStringList(key) ?? <String>[]).toSet()..add(txnId);
    await prefs.setStringList(key, credited.toList());
  }

  Future<void> _refreshDepositStatusesFromCloud() async {
    final pending = _transactions
        .where((t) =>
            (t.type == TransactionType.deposit || t.type == TransactionType.withdrawal) &&
            t.status == TransactionStatus.pending)
        .toList();
    final justApproved = <String>[];
    if (pending.isNotEmpty) {
      try {
        final ids = pending.map((t) => t.id).toList();
        final rows = await Supabase.instance.client
            .from('transactions')
            .select('id,status')
            .inFilter('id', ids)
            .timeout(kNgmyCloudLoadTimeout);
        if (!mounted) return;
        var changed = false;
        for (final row in (rows as List)) {
          final map = Map<String, dynamic>.from(row as Map);
          final id = (map['id'] ?? '').toString();
          final statusIdx = (map['status'] as num?)?.toInt() ?? 0;
          if (id.isEmpty) continue;
          final idx = _transactions.indexWhere((t) => t.id == id);
          if (idx < 0) continue;
          final was = _transactions[idx].status;
          final next = statusIdx == 1
              ? TransactionStatus.approved
              : (statusIdx == 2 ? TransactionStatus.rejected : TransactionStatus.pending);
          if (was != next) {
            _transactions[idx].status = next;
            changed = true;
            if (was == TransactionStatus.pending &&
                next == TransactionStatus.approved &&
                _transactions[idx].type == TransactionType.deposit) {
              justApproved.add(id);
            }
            if (was == TransactionStatus.pending &&
                next == TransactionStatus.rejected &&
                _transactions[idx].type == TransactionType.withdrawal) {
              // Refund held withdrawal.
              final user = _user;
              if (user != null) {
                _publishAppBalance(user.accountBalance + _transactions[idx].amount, allowDecrease: false);
                unawaited(_persist(syncBalance: true, allowDecrease: false));
              }
            }
          }
        }
        if (changed && mounted) setState(() {});
      } catch (e) {
        debugPrint('[growth income] refresh deposit status: $e');
      }
    }

    // Credit newly approved rows — and one repair pass for older approved rows never credited.
    if (justApproved.isNotEmpty) {
      await _applyMissingWalletCredits(onlyIds: justApproved);
    } else {
      await _applyMissingWalletCredits();
    }
  }

  Future<void> _load() async {
    final loaded = await NgmyLocalGrowthIncomeStore.load(widget.liveUser.email, widget.liveUser);
    final user = loaded.user;
    final transactions = List<AppTransaction>.from(loaded.transactions);
    var revision = loaded.walletStateRevision;
    // Keep the higher of live wallet vs saved GI wallet so stacked earnings
    // are not wiped when reopening Growth Income.
    final liveBal = widget.liveUser.accountBalance.clamp(0.0, double.infinity);
    final prefsBal = user.accountBalance.clamp(0.0, double.infinity);
    final seedBal = math.max(liveBal, prefsBal);
    user.accountBalance = seedBal;
    _user = user;
    _publishAppBalance(seedBal, allowDecrease: seedBal < liveBal);
    final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, transactions);
    if (payoutAdded) {
      _publishAppBalance(user.accountBalance, allowDecrease: false);
    }

    // Keep live app user investment in sync so daily clock-in outside GI works.
    if (user.activeInvestment != null) {
      final inv = user.activeInvestment!;
      widget.liveUser.activeInvestment = ActiveInvestment(
        name: inv.name,
        amount: inv.amount,
        dailyROI: inv.dailyROI,
        purchaseDate: inv.purchaseDate,
        daysClockedIn: inv.daysClockedIn,
        totalEarned: inv.totalEarned,
      );
    }

    // Admin "Send money now" credits — no QR scan required.
    final pendingAdminCredits = await NgmyLocalDepositQr.claimPendingCredits(widget.liveUser.email);
    final appliedCreditIds = <String>[];
    for (final credit in pendingAdminCredits) {
      final txnId = 'local_admin_push_${credit.id}';
      if (transactions.any((t) => t.id == txnId)) {
        appliedCreditIds.add(credit.id);
        continue;
      }
      final txn = AppTransaction(
        id: txnId,
        userEmail: user.email,
        amount: credit.amount,
        type: TransactionType.deposit,
        method: PaymentMethod.system,
        sourceDetails: 'Admin deposit (\$${formatCurrency(credit.amount)})',
        status: TransactionStatus.approved,
        timestamp: DateTime.now(),
      );
      NgmyLocalGrowthIncomeStore.applyTransaction(user, txn);
      transactions.add(txn);
      appliedCreditIds.add(credit.id);
      unawaited(_markTxnCredited(txnId));
    }
    if (appliedCreditIds.isNotEmpty) {
      unawaited(NgmyLocalDepositQr.markCreditsClaimed(widget.liveUser.email, appliedCreditIds));
      _publishAppBalance(user.accountBalance, allowDecrease: false);
    }

    if (!mounted) return;
    setState(() {
      _user = user;
      _transactions = transactions;
      _walletStateRevision = revision;
      _loading = false;
    });
    unawaited(_persist(bumpWalletRevision: payoutAdded || appliedCreditIds.isNotEmpty, syncBalance: false));
    if (appliedCreditIds.isNotEmpty) {
      // Raise cloud balance to include admin push credits — never lower it.
      unawaited(_syncBalanceToCloud(allowDecrease: false));
    }
    unawaited(_pullApprovedBalanceFromCloud());
  }

  Future<void> _persist({bool bumpWalletRevision = false, bool syncBalance = false, bool allowDecrease = false}) async {
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
    if (syncBalance) {
      unawaited(_syncBalanceToCloud(allowDecrease: allowDecrease));
    }
  }

  void _onDataChanged() {
    setState(() {});
    unawaited(_persist(syncBalance: true, allowDecrease: false));
  }

  void _onAddTransaction(AppTransaction t, {bool bumpWalletRevision = true, bool cloudRequest = false}) {
    final user = _user;
    if (user == null) return;

    if (cloudRequest) {
      final forCloud = AppTransaction(
        id: t.id,
        userEmail: widget.liveUser.email,
        amount: t.amount,
        type: t.type,
        method: t.method,
        sourceDetails: t.sourceDetails,
        screenshotPath: t.screenshotPath,
        verificationCode: t.verificationCode,
        status: t.status,
        timestamp: t.timestamp,
      );
      widget.onCloudAddTransaction?.call(forCloud);
    }

    var allowDecrease = false;
    if (t.status == TransactionStatus.pending && t.type == TransactionType.deposit) {
      // History only — balance credits when admin approves (pulled from cloud).
    } else if (t.status == TransactionStatus.pending && t.type == TransactionType.withdrawal) {
      allowDecrease = true;
      final next = (math.min(user.accountBalance, widget.liveUser.accountBalance) - t.amount)
          .clamp(0.0, double.infinity);
      _publishAppBalance(next, allowDecrease: true);
    } else {
      NgmyLocalGrowthIncomeStore.applyTransaction(user, t);
      if (t.type == TransactionType.withdrawal || t.type == TransactionType.adminRemove) {
        allowDecrease = true;
      }
      // Mirror every GI earn/spend onto the app-wide account balance.
      _publishAppBalance(user.accountBalance, allowDecrease: allowDecrease);
    }

    setState(() => _transactions = [..._transactions, t]);
    final shouldSyncBalance =
        t.type == TransactionType.withdrawal ||
        t.type == TransactionType.adminRemove ||
        t.status == TransactionStatus.approved ||
        t.type == TransactionType.reimbursement;
    unawaited(_persist(
      bumpWalletRevision: bumpWalletRevision,
      syncBalance: shouldSyncBalance,
      allowDecrease: allowDecrease,
    ));
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
    final purchased = ActiveInvestment(
      name: name,
      amount: price,
      dailyROI: InvestmentPlan.fixedRoi,
      purchaseDate: DateTime.now(),
      daysClockedIn: 0,
      totalEarned: 0.0,
    );
    setState(() {
      user.activeInvestment = purchased;
      user.pendingInvestmentName = null;
      user.pendingInvestmentAmount = null;
      user.pendingInvestmentRoi = null;
      // Mirror onto the live app user so MainScreen daily clock-in / crown paths work.
      widget.liveUser.activeInvestment = ActiveInvestment(
        name: purchased.name,
        amount: purchased.amount,
        dailyROI: purchased.dailyROI,
        purchaseDate: purchased.purchaseDate,
        daysClockedIn: purchased.daysClockedIn,
        totalEarned: purchased.totalEarned,
      );
      widget.liveUser.pendingInvestmentName = null;
      widget.liveUser.pendingInvestmentAmount = null;
      widget.liveUser.pendingInvestmentRoi = null;
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
    _toast('Clock-in started. Keep Growth Income open for today.');
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
          transactions: List<AppTransaction>.from(_transactions),
          onAdd: (t, {bool cloudRequest = false}) => _onAddTransaction(t, cloudRequest: cloudRequest),
          onBackup: _openBackup,
          onRefreshBalance: () => _pullApprovedBalanceFromCloud(),
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
                      child: Text('No activity yet. Deposit, invest, or clock in to begin.', textAlign: TextAlign.center, style: TextStyle(color: muted, fontWeight: FontWeight.w700)),
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

/// Wallet tab for Growth Income (deposit / withdraw / history).
/// History stays on-device; deposit & withdraw requests go to cloud for admin review.
/// Balance is saved in the database.
class _LocalWalletTab extends StatefulWidget {
  const _LocalWalletTab({
    super.key,
    required this.user,
    required this.realEmail,
    required this.config,
    required this.transactions,
    required this.onAdd,
    required this.onBackup,
    this.onRefreshBalance,
  });

  final UserData user;
  final String realEmail;
  final AppConfig config;
  final List<AppTransaction> transactions;
  final void Function(AppTransaction t, {bool cloudRequest}) onAdd;
  final VoidCallback onBackup;
  final Future<void> Function()? onRefreshBalance;

  @override
  State<_LocalWalletTab> createState() => _LocalWalletTabState();
}

class _LocalWalletTabState extends State<_LocalWalletTab> {
  final TextEditingController _amt = TextEditingController();
  final TextEditingController _cashAppTag = TextEditingController();
  int _view = 0; // 0 Deposit, 1 Withdraw, 2 History

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

  void _submitDeposit(AppTransaction transaction) {
    // Keep a local history copy; send the pending request to cloud for admin review.
    // No WhatsApp popup — admin reviews the proof inside Growth Income.
    widget.onAdd(transaction, cloudRequest: true);
    _toast('Deposit submitted. Admin will review your payment proof.');
    setState(() {});
  }

  void _openDepositPaymentPage(double amount) {
    NgmyNavigator.push(
      context,
      SubmitPaymentPage(
        user: widget.user,
        amount: amount,
        onAdd: _submitDeposit,
        config: widget.config,
        requestTitle: 'Submit Deposit',
        successHint:
            'Your deposit is pending. Admin will verify your payment proof and credit your balance.',
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
    widget.onAdd(
      AppTransaction(
        id: 'wd_${DateTime.now().microsecondsSinceEpoch}',
        userEmail: widget.user.email,
        amount: a,
        type: TransactionType.withdrawal,
        method: PaymentMethod.cashApp,
        sourceDetails: 'Withdrawal to \$$tag — Fee: \$${formatCurrency(fee)} — You receive: \$${formatCurrency(receive)}',
        status: TransactionStatus.pending,
        timestamp: DateTime.now(),
      ),
      cloudRequest: true,
    );
    _toast('Withdrawal submitted — waiting for admin approval.');
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
              title: 'WALLET',
              leading: InkWell(
                onTap: () => _toast('Deposit and withdraw here. Balance is saved to your account.'),
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
                  const Text('Balance', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
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
                const SizedBox(width: 8),
                Expanded(child: _viewTab('History', 2)),
              ],
            ),
            const SizedBox(height: 16),
            if (_view == 2)
              _historyPanel()
            else
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

  Widget _historyPanel() {
    final wallet = widget.transactions
        .where((t) => t.type == TransactionType.deposit || t.type == TransactionType.withdrawal)
        .toList()
      ..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF1C1C1E),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withValues(alpha: 0.07)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Expanded(
                child: Text('Transaction history', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
              ),
              TextButton(
                onPressed: () async {
                  await widget.onRefreshBalance?.call();
                  if (mounted) setState(() {});
                  _toast('Balance refreshed.');
                },
                child: const Text('Refresh', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
              ),
            ],
          ),
          const SizedBox(height: 8),
          if (wallet.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 28),
              child: Text(
                'No deposits or withdrawals yet.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w700),
              ),
            )
          else
            ...wallet.take(40).map((t) {
              final approved = t.status == TransactionStatus.approved;
              final pending = t.status == TransactionStatus.pending;
              final color = approved
                  ? const Color(0xFF2EF6A3)
                  : (pending ? Colors.orangeAccent : Colors.redAccent);
              final sign = t.type == TransactionType.withdrawal ? '-' : '+';
              return Container(
                margin: const EdgeInsets.only(bottom: 10),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.04),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: color.withValues(alpha: 0.35)),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            t.type == TransactionType.deposit ? 'Deposit' : 'Withdrawal',
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            t.status.name.toUpperCase(),
                            style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 11),
                          ),
                          if ((t.sourceDetails ?? '').trim().isNotEmpty)
                            Text(
                              t.sourceDetails!,
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
                            ),
                        ],
                      ),
                    ),
                    Text(
                      '$sign\$${formatCurrency(t.amount)}',
                      style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                  ],
                ),
              );
            }),
        ],
      ),
    );
  }

  Widget _viewTab(String label, int v) {
    final selected = _view == v;
    const glassGreen = Color(0xFF2EF6A3);
    return GestureDetector(
      onTap: () {
        setState(() => _view = v);
        if (v == 2) unawaited(widget.onRefreshBalance?.call() ?? Future.value());
      },
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
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12, color: selected ? glassGreen : Colors.white60),
        ),
      ),
    );
  }

}
