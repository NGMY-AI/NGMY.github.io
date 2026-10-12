import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'main.dart';
import 'ngmy_account_snapshot_ui.dart';
import 'ngmy_db_relay.dart';
import 'ngmy_local_deposit_qr.dart';
import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_feature_sync_session.dart';
import 'ngmy_game_session.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_back_scope.dart';
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

/// Entry point for the wifi-icon button on the home screen: Growth Income
/// (Home / Invest / Wallet) for this NGMY account. The wallet is cached on
/// the phone and synced to the cloud so every device on the same login
/// shows the same balance, plan, and profit. The main app tabs are untouched.
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
  DateTime? _walletUpdatedAt;
  List<String> _creditedTxnIds = [];
  bool _cloudBusy = false;
  int _idx = 0;
  bool _investPurchaseInFlight = false;
  Timer? _balancePoll;
  Timer? _earningsTick;

  /// Growth Income's balance at the moment it last matched the app balance.
  double? _alignedBase;

  /// The app's account balance is the one real wallet — it already holds every
  /// in-app movement (clock-in, games, fees, admin top-ups). Growth Income shows
  /// that number; it never overwrites it with its own copy.
  void _adoptAppBalance() {
    final user = _user;
    final live = widget.liveUser.accountBalance.clamp(0.0, double.infinity);
    if (user != null) user.accountBalance = live;
    _alignedBase = live;
    if (user != null) ngmySeedLiveBalance(user.email, live, allowIncrease: true);
  }

  /// One shared spendable balance for Growth Income AND the whole app.
  /// [balance] is Growth Income's new figure; only the CHANGE since it last
  /// matched the app balance is applied, so money that moved elsewhere in the
  /// app meanwhile is never lost or double-counted.
  void _publishAppBalance(double balance, {required bool allowDecrease}) {
    final bal = ngmyGrowthIncomeAppliedBalance(
      appBalance: widget.liveUser.accountBalance,
      alignedBase: _alignedBase,
      growthIncomeBalance: balance,
      allowDecrease: allowDecrease,
    );
    _alignedBase = bal;
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
    _user = NgmyLocalGrowthIncomeStore.previewUser(widget.liveUser);
    _mirrorWalletOntoLiveUser();
    _adoptAppBalance();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) unawaited(_load());
    });
    // Each pull is a wallet fetch plus deposit-status fetches; resume also pulls.
    _balancePoll = Timer.periodic(const Duration(seconds: 30), (_) {
      final s = WidgetsBinding.instance.lifecycleState;
      if (s == AppLifecycleState.hidden || s == AppLifecycleState.paused) return;
      unawaited(_pullCloudWallet());
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

  /// Same-day completion: pay only if the user actually clocked in before noon.
  /// No clock-in / no session start ⇒ $0 — never auto-pay at midday.
  void _tickLocalClockInEarnings() {
    final user = _user;
    if (user == null || !mounted) return;
    // No active session ⇒ nothing to settle (missed days stay unpaid).
    if (!user.isClockedIn || user.clockInStartTime == null) return;
    final now = DateTime.now();
    if (!NgmyLocalGrowthIncomeStore.sameCalendarDay(user.clockInStartTime, now)) {
      final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, _transactions);
      if (payoutAdded) {
        setState(() {
          _publishAppBalance(user.accountBalance, allowDecrease: false);
        });
        unawaited(_persist(bumpWalletRevision: true, syncBalance: true, allowDecrease: false));
      } else if (mounted) {
        setState(() {});
      }
      return;
    }
    final start = user.clockInStartTime!.isUtc
        ? user.clockInStartTime!.toLocal()
        : user.clockInStartTime!;
    // Defense: never pay a session that did not start before midday.
    if (!NgmyLocalGrowthIncomeStore.startedBeforeNoon(start)) {
      setState(() => NgmyLocalGrowthIncomeStore.clearUnpayableSession(user));
      unawaited(_persist(bumpWalletRevision: false));
      return;
    }
    final goal = user.todayDailyGoal;
    if (goal <= 0) return;
    final noon = DateTime(now.year, now.month, now.day, 12);
    final reachedNoon = !now.isBefore(noon);
    // Use the same clock-in→noon accrual shown in the circle so water never
    // stalls mid-session while the ticker waits on a different formula.
    final live = NgmyLocalGrowthIncomeStore.liveEarningsTowardNoon(user, now);
    if (!reachedNoon && live < goal - 0.0001) {
      if (mounted) setState(() {});
      return;
    }
    final payoutId =
        'local_clockin_payout_${user.email}_${user.clockInStartTime!.millisecondsSinceEpoch}';
    if (_transactions.any((t) => t.id == payoutId)) {
      // Already paid — keep the bowl full/gold for the rest of the day.
      setState(() {
        user.isClockedIn = false;
        user.clockInStartTime = null;
        user.clockInPenaltyPercent = 0;
        user.lastClockInDate = now;
        user.lastClockInEarningsDate = now;
        user.todayClockInEarned = goal;
      });
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
        timestamp: now,
        status: TransactionStatus.approved,
      ),
    );
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      unawaited(_pullCloudWallet());
    }
  }

  /// Copies clock-in / plan fields onto the app user. The balance is NOT copied
  /// here — it only moves through [_publishAppBalance] as a change.
  void _mirrorWalletOntoLiveUser() {
    final user = _user;
    if (user == null) return;
    widget.liveUser.totalProfit = user.totalProfit;
    widget.liveUser.isClockedIn = user.isClockedIn;
    widget.liveUser.clockInStartTime = user.clockInStartTime;
    widget.liveUser.clockInPenaltyPercent = user.clockInPenaltyPercent;
    widget.liveUser.lastClockInDate = user.lastClockInDate;
    widget.liveUser.lastClockInEarningsDate = user.lastClockInEarningsDate;
    widget.liveUser.todayClockInEarned = user.todayClockInEarned;
    widget.liveUser.pendingInvestmentName = user.pendingInvestmentName;
    widget.liveUser.pendingInvestmentAmount = user.pendingInvestmentAmount;
    widget.liveUser.pendingInvestmentRoi = user.pendingInvestmentRoi;
    final inv = user.activeInvestment;
    widget.liveUser.activeInvestment = inv == null
        ? null
        : ActiveInvestment(
            name: inv.name,
            amount: inv.amount,
            dailyROI: inv.dailyROI,
            purchaseDate: inv.purchaseDate,
            daysClockedIn: inv.daysClockedIn,
            totalEarned: inv.totalEarned,
          );
  }

  Future<void> _syncBalanceToCloud({required bool allowDecrease}) async {
    final user = _user;
    if (user == null) return;
    _mirrorWalletOntoLiveUser();
    _publishAppBalance(user.accountBalance, allowDecrease: allowDecrease);
    await widget.onPersistBalanceToCloud?.call(widget.liveUser.accountBalance, allowDecrease: allowDecrease);
  }

  /// Pull the saved account wallet from the cloud so every device on this
  /// login shows the same money, plan, and profit.
  Future<void> _pullCloudWallet() async {
    if (_cloudBusy || _user == null) return;
    _cloudBusy = true;
    try {
      final synced = await NgmyLocalGrowthIncomeStore.reconcileWithCloud(
        realEmail: widget.liveUser.email,
        localUser: _user!,
        localTransactions: _transactions,
        localRevision: _walletStateRevision,
        localUpdatedAt: _walletUpdatedAt,
        localCreditedIds: _creditedTxnIds,
        pushIfLocalWins: false,
      );
      if (!mounted) return;
      if (synced.adoptedCloud) {
        setState(() {
          _user = synced.user;
          _transactions = List<AppTransaction>.from(synced.transactions);
          _walletStateRevision = synced.walletStateRevision;
          _walletUpdatedAt = synced.updatedAt;
          _creditedTxnIds = List<String>.from(synced.creditedTxnIds);
          _mirrorWalletOntoLiveUser();
          _adoptAppBalance();
        });
        unawaited(_syncBalanceToCloud(allowDecrease: false));
      }
      await _refreshDepositStatusesFromCloud();
    } catch (e) {
      debugPrint('[growth income] pull wallet: $e');
      await _refreshDepositStatusesFromCloud();
    } finally {
      _cloudBusy = false;
    }
  }

  Future<void> _pullApprovedBalanceFromCloud() => _pullCloudWallet();

  /// Credits approved deposits that never hit the balance (tracked per txn id so we never double-pay).
  Future<void> _applyMissingWalletCredits({Iterable<String>? onlyIds}) async {
    final user = _user;
    if (user == null) return;
    final prefs = await SharedPreferences.getInstance();
    final key = NgmyLocalGrowthIncomeStore.creditedPrefsKey(widget.liveUser.email);
    final credited = {..._creditedTxnIds, ...(prefs.getStringList(key) ?? <String>[])};
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
    _creditedTxnIds = credited.toList();
    await NgmyLocalGrowthIncomeStore.saveCreditedIds(widget.liveUser.email, _creditedTxnIds);
    unawaited(_persist(syncBalance: true, allowDecrease: false));
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Balance updated: +\$${formatCurrency(gained)} from approved deposits.')),
      );
    }
  }

  Future<void> _markTxnCredited(String txnId) async {
    if (txnId.isEmpty) return;
    await NgmyLocalGrowthIncomeStore.saveCreditedIds(
      widget.liveUser.email,
      {..._creditedTxnIds, txnId}.toList(),
    );
    _creditedTxnIds = {..._creditedTxnIds, txnId}.toList();
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
        final rows = await ngmyDbRelaySelect(
          'transactions',
          cols: 'id,status',
          inFilter: {'id': ids},
          timeout: kNgmyCloudLoadTimeout,
        );
        if (!mounted) return;
        var changed = false;
        for (final row in rows) {
          final map = row;
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
    final synced = await NgmyLocalGrowthIncomeStore.reconcileWithCloud(
      realEmail: widget.liveUser.email,
      localUser: loaded.user,
      localTransactions: loaded.transactions,
      localRevision: loaded.walletStateRevision,
      localUpdatedAt: loaded.updatedAt,
      localCreditedIds: loaded.creditedTxnIds,
    );
    final user = synced.user;
    final transactions = List<AppTransaction>.from(synced.transactions);
    var revision = synced.walletStateRevision;
    _creditedTxnIds = List<String>.from(synced.creditedTxnIds);
    _walletUpdatedAt = synced.updatedAt;
    _user = user;
    _mirrorWalletOntoLiveUser();
    _adoptAppBalance();
    final payoutAdded = NgmyLocalGrowthIncomeStore.applyDailyRollover(user, transactions);
    if (payoutAdded) {
      _publishAppBalance(user.accountBalance, allowDecrease: false);
    }

    _mirrorWalletOntoLiveUser();

    // Admin "Send money now" credits are collected app-wide by MainScreen into
    // the account balance (the one wallet) — not here, so they're never applied twice.

    if (!mounted) return;
    setState(() {
      _user = user;
      _transactions = transactions;
      _walletStateRevision = revision;
      _walletUpdatedAt = DateTime.now().toUtc();
    });
    unawaited(_persist(
      bumpWalletRevision: payoutAdded,
      syncBalance: true,
      allowDecrease: false,
    ));
  }

  Future<void> _persist({bool bumpWalletRevision = false, bool syncBalance = false, bool allowDecrease = false}) async {
    final user = _user;
    if (user == null) return;
    if (bumpWalletRevision) {
      _walletStateRevision++;
    }
    final at = DateTime.now().toUtc();
    _walletUpdatedAt = at;
    await NgmyLocalGrowthIncomeStore.save(
      widget.liveUser.email,
      user,
      _transactions,
      walletStateRevision: _walletStateRevision,
      updatedAt: at,
      creditedTxnIds: _creditedTxnIds,
    );
    unawaited(NgmyLocalGrowthIncomeStore.pushCloudWallet(
      realEmail: widget.liveUser.email,
      user: user,
      transactions: _transactions,
      walletStateRevision: _walletStateRevision,
      updatedAt: at,
      creditedTxnIds: _creditedTxnIds,
    ));
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
      // Only the withdrawal amount moves; _publishAppBalance applies it to the app balance.
      _publishAppBalance(user.accountBalance - t.amount, allowDecrease: true);
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
    // Hard stop after midday — clock-in after 12:00 PM would instantly pay out.
    if (!NgmyLocalGrowthIncomeStore.isClockInWindowOpen(now)) {
      _toast('Today\'s session ended at 12:00 PM. Come back tomorrow morning.');
      return;
    }
    if (NgmyLocalGrowthIncomeStore.sameCalendarDay(user.lastClockInEarningsDate, now) &&
        user.todayClockInEarned > 0) {
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

    if (_user == null) {
      return ColoredBox(
        color: bg,
        child: const SizedBox.expand(),
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
          titleLeading: _giHomeButton(),
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
          homeButton: _giHomeButton(),
        ),
      ),
    ];

    final media = MediaQuery.of(context);
    // Draw the local shell ourselves instead of relying on Scaffold's
    // bottomNavigationBar. On iOS PWA/web this route was occasionally getting
    // a loose height during transition, which made only the nav render in the
    // middle of a black page. This pins the tabs and menu to the full viewport,
    // while the page remains visible behind the transparent nav area.
    return NgmyTabBackScope(
      activeTab: _idx,
      onTabBack: () => setState(() => _idx = (_idx - 1).clamp(0, 2)),
      child: Material(
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
    ),
    );
  }

  /// The $ button on Wallet and Investment: back to Growth Income's own home
  /// (on the Home tab the same button leaves Growth Income for the main app).
  Widget _giHomeButton() {
    const green = Color(0xFF2EF6A3);
    return Tooltip(
      message: 'Growth Income home',
      child: InkWell(
        onTap: () {
          HapticFeedback.selectionClick();
          setState(() => _idx = 0);
        },
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
              colors: [green.withValues(alpha: 0.24), const Color(0xFF0F172A).withValues(alpha: 0.72)],
            ),
            border: Border.all(color: green.withValues(alpha: 0.38)),
            boxShadow: [BoxShadow(color: green.withValues(alpha: 0.18), blurRadius: 16)],
          ),
          child: const Icon(Icons.attach_money_rounded, color: green, size: 20),
        ),
      ),
    );
  }

  // Growth Income's own floating menu: a dark emerald glass bar with a gold
  // circle that slides behind the selected tab. Each tab is a full-height
  // target across the whole bar, so taps always land.
  static const _navGold = Color(0xFFD4AF37);
  static const _navGoldLight = Color(0xFFF6E27A);
  static const _navTabs = <({IconData icon, String label})>[
    (icon: Icons.home_rounded, label: 'Home'),
    (icon: Icons.trending_up_rounded, label: 'Growth'),
    (icon: Icons.account_balance_wallet_rounded, label: 'Wallet'),
  ];

  Widget _buildLocalBottomNavBar() {
    const barHeight = 54.0;
    const orb = 40.0;
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      child: SafeArea(
        top: false,
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 330),
            child: Container(
              height: barHeight,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(barHeight / 2),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF0F2A22), Color(0xFF07130F), Color(0xFF0B1F19)],
                ),
                border: Border.all(color: _navGold.withValues(alpha: 0.45), width: 1),
                boxShadow: [
                  BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 24, offset: const Offset(0, 10)),
                  BoxShadow(color: _navGold.withValues(alpha: 0.12), blurRadius: 18, spreadRadius: -2),
                ],
              ),
              child: LayoutBuilder(
                builder: (context, c) {
                  final cell = c.maxWidth / _navTabs.length;
                  return Stack(
                    children: [
                      // The gold circle slides to the selected tab.
                      AnimatedPositioned(
                        duration: const Duration(milliseconds: 380),
                        curve: Curves.easeOutBack,
                        left: cell * _idx + (cell - orb) / 2,
                        top: (barHeight - 2 - orb) / 2,
                        width: orb,
                        height: orb,
                        child: Container(
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: const LinearGradient(
                              begin: Alignment.topLeft,
                              end: Alignment.bottomRight,
                              colors: [_navGoldLight, _navGold, Color(0xFFB8860B)],
                            ),
                            border: Border.all(color: Colors.white.withValues(alpha: 0.55), width: 1.2),
                            boxShadow: [
                              BoxShadow(color: _navGold.withValues(alpha: 0.55), blurRadius: 18, spreadRadius: 1),
                            ],
                          ),
                        ),
                      ),
                      Row(
                        children: [for (var i = 0; i < _navTabs.length; i++) _navItem(i)],
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

  Widget _navItem(int i) {
    final selected = _idx == i;
    final tab = _navTabs[i];
    return Expanded(
      child: Semantics(
        button: true,
        selected: selected,
        label: tab.label,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () {
            if (_idx == i) return;
            HapticFeedback.selectionClick();
            setState(() => _idx = i);
          },
          child: SizedBox.expand(
            child: AnimatedSwitcher(
              duration: const Duration(milliseconds: 220),
              child: selected
                  ? Icon(tab.icon, key: ValueKey('on$i'), size: 21, color: const Color(0xFF1A1405))
                  : Column(
                      key: ValueKey('off$i'),
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(tab.icon, size: 19, color: Colors.white.withValues(alpha: 0.62)),
                        const SizedBox(height: 2),
                        Text(
                          tab.label,
                          maxLines: 1,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700, fontSize: 9.5),
                        ),
                      ],
                    ),
            ),
          ),
        ),
      ),
    );
  }
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

  double _liveEarningsAt(DateTime now) =>
      NgmyLocalGrowthIncomeStore.liveEarningsTowardNoon(user, now);

  static String _formatTxnDateTime(DateTime raw) {
    final t = raw.isUtc ? raw.toLocal() : raw;
    final h24 = t.hour;
    final h12 = h24 == 0 ? 12 : (h24 > 12 ? h24 - 12 : h24);
    final ampm = h24 >= 12 ? 'PM' : 'AM';
    final min = t.minute.toString().padLeft(2, '0');
    return '${t.month}/${t.day}/${t.year} · $h12:$min $ampm';
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
    final now = DateTime.now();
    final clockedIn = user.isClockedIn;
    final sessionComplete = NgmyLocalGrowthIncomeStore.sessionCompleteToday(user, now);
    final canClockIn = active != null &&
        !clockedIn &&
        !sessionComplete &&
        NgmyLocalGrowthIncomeStore.isClockInWindowOpen(now);
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
                      onTap: canClockIn ? () => unawaited(onClockIn()) : null,
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
              sessionComplete: sessionComplete,
              canClockIn: canClockIn,
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
            _giFramedCard(
              radius: 24,
              accent: glassGreen,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
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
    final content = _giFramedCard(
      radius: 18,
      accent: iconColor,
      child: SizedBox(
        height: 88,
        child: Padding(
          padding: const EdgeInsets.all(14),
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
                      border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
                      boxShadow: [BoxShadow(color: iconColor.withValues(alpha: 0.28), blurRadius: 12)],
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
        ),
      ),
    );
    if (onTap == null) return content;
    return InkWell(onTap: onTap, borderRadius: BorderRadius.circular(20), child: content);
  }

  Widget _networkStatus({required Color card, required Color green}) {
    return _giFramedCard(
      radius: 22,
      accent: green,
      child: SizedBox(
        height: 76,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15),
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
                  border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
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
                borderRadius: BorderRadius.circular(24),
                child: Container(
                  padding: const EdgeInsets.all(2.2),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(24),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        Colors.white.withValues(alpha: 0.55),
                        green.withValues(alpha: 0.70),
                        Colors.white.withValues(alpha: 0.22),
                      ],
                    ),
                    boxShadow: [
                      BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4)),
                      BoxShadow(color: green.withValues(alpha: 0.28), blurRadius: 14),
                    ],
                  ),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [green.withValues(alpha: 0.95), const Color(0xFF16A34A).withValues(alpha: 0.82)],
                      ),
                      borderRadius: BorderRadius.circular(22),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.38)),
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
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _giFramedCard({
    required Widget child,
    required double radius,
    Color accent = const Color(0xFF2EF6A3),
  }) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(radius + 3),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Colors.white.withValues(alpha: 0.28),
            accent.withValues(alpha: 0.34),
            Colors.white.withValues(alpha: 0.10),
          ],
        ),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.42), blurRadius: 18, offset: const Offset(0, 8)),
          BoxShadow(color: accent.withValues(alpha: 0.14), blurRadius: 20, offset: const Offset(0, 3)),
        ],
      ),
      padding: const EdgeInsets.all(1.7),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(radius),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF262B34), Color(0xFF16191F)],
          ),
          border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
        ),
        child: child,
      ),
    );
  }

  Widget _smallTotalBox(String title, String value, {required Color card, VoidCallback? onTap}) {
    final content = _giFramedCard(
      radius: 18,
      accent: const Color(0xFF67E8F9),
      child: SizedBox(
        height: 76,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 13, 16, 11),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: TextStyle(color: Colors.white.withValues(alpha: 0.52), fontSize: 11, fontWeight: FontWeight.w800)),
              const Spacer(),
              Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            ],
          ),
        ),
      ),
    );
    if (onTap == null) return content;
    return InkWell(onTap: onTap, borderRadius: BorderRadius.circular(20), child: content);
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
                Text(_formatTxnDateTime(t.timestamp), style: TextStyle(color: muted, fontSize: 11, fontWeight: FontWeight.w600)),
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
    required this.sessionComplete,
    required this.canClockIn,
    required this.hasPlan,
    required this.green,
    required this.card,
    required this.liveEarningsAt,
    required this.onClockIn,
  });

  final String profileDisplayName;
  final double dailyGoal;
  final bool clockedIn;
  /// Today's session finished at noon — keep bowl full and gold until midnight.
  final bool sessionComplete;
  final bool canClockIn;
  final bool hasPlan;
  final Color green;
  final Color card;
  final double Function(DateTime now) liveEarningsAt;
  final Future<void> Function() onClockIn;

  @override
  State<_LocalClockInShowcase> createState() => _LocalClockInShowcaseState();
}

class _LocalClockInShowcaseState extends State<_LocalClockInShowcase> with TickerProviderStateMixin {
  late final AnimationController _waveCtrl;
  late final AnimationController _smokeCtrl;

  static const _gold = Color(0xFFD4AF37);
  static const _goldLight = Color(0xFFF6E27A);
  static const _goldDeep = Color(0xFF8A6A12);

  @override
  void initState() {
    super.initState();
    _waveCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
    _smokeCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 4200))..repeat();
  }

  @override
  void dispose() {
    _waveCtrl.dispose();
    _smokeCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Gold while filling AND after noon payout so the bowl stays full/gold.
    final filledGold = widget.clockedIn || widget.sessionComplete;
    final status = widget.clockedIn
        ? 'COUNTING TO 12 PM'
        : (widget.sessionComplete
            ? 'SESSION COMPLETE'
            : (widget.hasPlan ? 'CLOCK IN' : 'NO PLAN'));
    final name = widget.profileDisplayName.trim().isEmpty ? 'Member' : widget.profileDisplayName.trim().toUpperCase();
    final accent = filledGold ? _gold : widget.green;

    return InkWell(
      onTap: widget.canClockIn ? () => unawaited(widget.onClockIn()) : null,
      borderRadius: BorderRadius.circular(32),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 520),
        height: 392,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(32),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: filledGold
                ? const [Color(0xFF2A2210), Color(0xFF16120A), Color(0xFF0C1016)]
                : const [Color(0xFF1A2330), Color(0xFF12161E), Color(0xFF0C1016)],
          ),
          border: Border.all(
            color: (filledGold ? _goldLight : const Color(0xFF67E8F9)).withValues(alpha: 0.28),
            width: 1.4,
          ),
          boxShadow: [
            BoxShadow(
              color: (filledGold ? _gold : const Color(0xFF22D3EE)).withValues(alpha: 0.16),
              blurRadius: 28,
              offset: const Offset(0, 12),
            ),
          ],
        ),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            if (filledGold) ...[
              Positioned(right: -24, top: -30, child: _glowBlob(_goldLight, 130)),
              Positioned(left: -28, bottom: -36, child: _glowBlob(_gold, 140)),
            ] else ...[
              Positioned(right: -30, top: -36, child: _glowBlob(const Color(0xFF22D3EE), 120)),
              Positioned(left: -36, bottom: -40, child: _glowBlob(widget.green, 130)),
            ],
            Positioned(
              top: 14,
              left: 14,
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 176),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(999),
                    color: Colors.white.withValues(alpha: 0.06),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.16)),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: accent,
                          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.5), blurRadius: 8)],
                        ),
                      ),
                      const SizedBox(width: 8),
                      Flexible(
                        child: Text(
                          name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.8),
                        ),
                      ),
                    ],
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
                // After noon settlement keep the bowl maxed so gold fill never drops.
                final progress = widget.sessionComplete
                    ? 1.0
                    : (widget.dailyGoal <= 0 ? 0.0 : (live / widget.dailyGoal).clamp(0.0, 1.0));
                return AnimatedBuilder(
                  animation: Listenable.merge([_waveCtrl, _smokeCtrl]),
                  builder: (context, _) {
                    return Center(
                      child: SizedBox(
                        width: 276,
                        height: 276,
                        child: Stack(
                          alignment: Alignment.center,
                          clipBehavior: Clip.none,
                          children: [
                            if (filledGold)
                              ...List.generate(7, (i) {
                                final t = (_smokeCtrl.value + i * 0.14) % 1.0;
                                final drift = math.sin((_smokeCtrl.value * math.pi * 2) + i) * 18;
                                return Positioned(
                                  top: -8 - t * 54,
                                  left: 118 + drift + (i.isEven ? -10 : 16),
                                  child: IgnorePointer(
                                    child: Opacity(
                                      opacity: (1 - t) * 0.42,
                                      child: Container(
                                        width: 22 + (i % 3) * 10,
                                        height: 28 + (i % 2) * 12,
                                        decoration: BoxDecoration(
                                          borderRadius: BorderRadius.circular(40),
                                          gradient: RadialGradient(
                                            colors: [
                                              _goldLight.withValues(alpha: 0.38),
                                              Colors.white.withValues(alpha: 0.08),
                                              Colors.transparent,
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              }),
                            CustomPaint(
                              size: const Size(276, 276),
                              painter: _ClockInCirclePainter(
                                progress: progress,
                                wave: _waveCtrl.value,
                                clockedIn: filledGold,
                                accent: accent,
                                goldLight: _goldLight,
                                goldDeep: _goldDeep,
                              ),
                            ),
                            Container(
                              width: 176,
                              height: 176,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: Colors.transparent,
                                border: Border.all(color: Colors.white.withValues(alpha: 0.10), width: 1.2),
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Icon(
                                    filledGold ? Icons.local_fire_department_rounded : Icons.fingerprint_rounded,
                                    color: filledGold ? _goldLight : const Color(0xFF67E8F9),
                                    size: 26,
                                  ),
                                  const SizedBox(height: 6),
                                  Text(
                                    widget.clockedIn
                                        ? 'FILLING TO 12 PM'
                                        : (widget.sessionComplete ? 'FULL DAY EARNED' : 'DAILY EARNINGS'),
                                    style: TextStyle(
                                      color: Colors.white.withValues(alpha: 0.62),
                                      fontSize: 9,
                                      fontWeight: FontWeight.w800,
                                      letterSpacing: 1.1,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    '\$${formatCurrency(widget.sessionComplete && widget.dailyGoal > 0 ? widget.dailyGoal : live)}',
                                    style: TextStyle(
                                      color: filledGold ? _goldLight : Colors.white,
                                      fontSize: 28,
                                      fontWeight: FontWeight.w900,
                                      letterSpacing: -0.6,
                                    ),
                                  ),
                                  const SizedBox(height: 8),
                                  Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(999),
                                      color: accent.withValues(alpha: 0.16),
                                      border: Border.all(color: accent.withValues(alpha: 0.50)),
                                    ),
                                    child: Text(
                                      status,
                                      style: TextStyle(
                                        color: filledGold ? _goldLight : const Color(0xFFA5F3FC),
                                        fontSize: 9,
                                        fontWeight: FontWeight.w900,
                                        letterSpacing: 1.1,
                                      ),
                                    ),
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

  Widget _glowBlob(Color color, double size) {
    return IgnorePointer(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: RadialGradient(colors: [color.withValues(alpha: 0.22), color.withValues(alpha: 0)]),
        ),
      ),
    );
  }
}

class _ClockInCirclePainter extends CustomPainter {
  _ClockInCirclePainter({
    required this.progress,
    required this.wave,
    required this.clockedIn,
    required this.accent,
    required this.goldLight,
    required this.goldDeep,
  });

  final double progress;
  final double wave;
  final bool clockedIn;
  final Color accent;
  final Color goldLight;
  final Color goldDeep;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final outer = size.width / 2 - 4;
    final frameRadius = outer - 7;
    final bowlRadius = outer - 22;

    canvas.drawCircle(
      center,
      frameRadius,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 14
        ..color = (clockedIn ? goldDeep : const Color(0xFF67E8F9)).withValues(alpha: 0.22),
    );
    canvas.drawCircle(
      center,
      outer - 1,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.7
        ..color = (clockedIn ? goldLight : Colors.white).withValues(alpha: 0.28),
    );
    canvas.drawCircle(
      center,
      bowlRadius + 8,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.6
        ..color = Colors.white.withValues(alpha: 0.16),
    );

    final tickPaint = Paint()
      ..strokeWidth = 1.5
      ..strokeCap = StrokeCap.round
      ..color = (clockedIn ? goldLight : Colors.white).withValues(alpha: 0.22);
    for (var i = 0; i < 12; i++) {
      final a = (i / 12) * math.pi * 2 - math.pi / 2;
      final inner = Offset(center.dx + math.cos(a) * (outer - 3), center.dy + math.sin(a) * (outer - 3));
      final tip = Offset(center.dx + math.cos(a) * (outer + 2), center.dy + math.sin(a) * (outer + 2));
      canvas.drawLine(inner, tip, tickPaint);
    }

    canvas.save();
    canvas.clipPath(Path()..addOval(Rect.fromCircle(center: center, radius: bowlRadius)));
    canvas.drawRect(
      Rect.fromCircle(center: center, radius: bowlRadius),
      Paint()
        ..shader = const RadialGradient(
          center: Alignment(-0.25, -0.35),
          radius: 1.05,
          colors: [Color(0xFF243044), Color(0xFF141A24), Color(0xFF0A0D12)],
        ).createShader(Rect.fromCircle(center: center, radius: bowlRadius)),
    );

    final fill = progress.clamp(0.0, 1.0);
    if (fill > 0.004) {
      final surfaceY = center.dy + bowlRadius - (bowlRadius * 2 * fill);
      final waveAmp = clockedIn ? 5.2 : 1.8;
      final fillPath = Path()..moveTo(center.dx - bowlRadius, center.dy + bowlRadius + 4);
      for (var x = center.dx - bowlRadius; x <= center.dx + bowlRadius; x += 3) {
        final t = (x - center.dx) / bowlRadius;
        final y = surfaceY +
            math.sin((t * math.pi * 2) + (wave * math.pi * 2)) * waveAmp +
            math.sin((t * math.pi * 3.1) - (wave * math.pi * 2.2)) * (waveAmp * 0.42);
        fillPath.lineTo(x, y);
      }
      fillPath
        ..lineTo(center.dx + bowlRadius, center.dy + bowlRadius + 4)
        ..close();

      canvas.drawPath(
        fillPath,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: clockedIn
                ? [
                    goldLight.withValues(alpha: 0.55),
                    accent.withValues(alpha: 0.78),
                    goldDeep.withValues(alpha: 0.92),
                  ]
                : [
                    accent.withValues(alpha: 0.22),
                    const Color(0xFF2EF6A3).withValues(alpha: 0.34),
                    const Color(0xFF0F766E).withValues(alpha: 0.62),
                  ],
          ).createShader(Rect.fromCircle(center: center, radius: bowlRadius)),
      );
      canvas.drawPath(
        fillPath,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2
          ..color = Colors.white.withValues(alpha: clockedIn ? 0.28 : 0.14),
      );
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _ClockInCirclePainter oldDelegate) =>
      oldDelegate.progress != progress ||
      oldDelegate.wave != wave ||
      oldDelegate.clockedIn != clockedIn;
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
    this.homeButton,
  });

  /// The $ button that returns to Growth Income's home.
  final Widget? homeButton;
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

  static const _green = Color(0xFF2EF6A3);
  static const _emerald = Color(0xFF059669);
  static const _gold = Color(0xFFD4AF37);
  static const _ink = Color(0xFF0B0F14);
  static const _panel = Color(0xFF151A21);

  ({double inflow, double outflow}) _totals() {
    var inflow = 0.0;
    var outflow = 0.0;
    for (final t in widget.transactions) {
      if (t.status != TransactionStatus.approved || !_isGrowthIncomeHistoryRow(t)) continue;
      final out = t.type == TransactionType.withdrawal || t.type == TransactionType.adminRemove;
      if (out) {
        outflow += t.amount;
      } else {
        inflow += t.amount;
      }
    }
    return (inflow: inflow, outflow: outflow);
  }

  @override
  Widget build(BuildContext context) {
    final totals = _totals();
    final pendingCount = widget.transactions.where((t) => t.status == TransactionStatus.pending).length;
    return ColoredBox(
      color: _ink,
      child: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(18, 8, 18, 130),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              FloatingTitle(
                title: 'WALLET',
                leading: widget.homeButton,
                trailing: _circleIconButton(Icons.save_alt_rounded, 'Back up wallet', widget.onBackup),
              ),
              const SizedBox(height: 18),
              _balanceCard(totals.inflow, totals.outflow, pendingCount),
              const SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  _actionCircle(Icons.south_west_rounded, 'Deposit', 0),
                  _actionCircle(Icons.north_east_rounded, 'Withdraw', 1),
                  _actionCircle(Icons.receipt_long_rounded, 'History', 2),
                ],
              ),
              const SizedBox(height: 20),
              AnimatedSwitcher(
                duration: const Duration(milliseconds: 250),
                child: _view == 2 ? _historyPanel() : _moneyForm(),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _circleIconButton(IconData icon, String tip, VoidCallback onTap) {
    return Tooltip(
      message: tip,
      child: InkWell(
        onTap: onTap,
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
              colors: [_green.withValues(alpha: 0.24), const Color(0xFF0F172A).withValues(alpha: 0.72)],
            ),
            border: Border.all(color: _green.withValues(alpha: 0.38)),
          ),
          child: Icon(icon, color: _green, size: 18),
        ),
      ),
    );
  }

  /// Card-style balance: the one wallet for all in-app money.
  Widget _balanceCard(double inflow, double outflow, int pending) {
    final email = widget.realEmail.trim();
    final masked = email.contains('@') ? '${email.substring(0, math.min(3, email.indexOf('@')))}•••${email.substring(email.indexOf('@'))}' : email;
    return AspectRatio(
      aspectRatio: 1.62,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(26),
        child: Stack(
          children: [
            const Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF065F46), Color(0xFF047857), Color(0xFF0F766E), Color(0xFF0B3B36)],
                    stops: [0, 0.35, 0.7, 1],
                  ),
                ),
              ),
            ),
            // Soft decorative rings.
            Positioned(right: -60, top: -70, child: _ring(220, 0.10)),
            Positioned(right: 30, bottom: -90, child: _ring(200, 0.07)),
            Positioned(left: -40, bottom: -60, child: _ring(150, 0.05)),
            Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(26),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 38,
                        height: 28,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(6),
                          gradient: const LinearGradient(colors: [Color(0xFFF6E27A), _gold, Color(0xFFB8860B)]),
                        ),
                        child: CustomPaint(painter: _CardChipLinesPainter()),
                      ),
                      const Spacer(),
                      const Text('NGMY  WALLET', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 2.4)),
                    ],
                  ),
                  const Spacer(),
                  Text('Available balance', style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w700, fontSize: 12)),
                  const SizedBox(height: 2),
                  FittedBox(
                    fit: BoxFit.scaleDown,
                    alignment: Alignment.centerLeft,
                    child: Text(
                      '\$${formatCurrency(widget.user.accountBalance)}',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 38, letterSpacing: -0.8, height: 1.05),
                    ),
                  ),
                  const Spacer(),
                  Row(
                    children: [
                      Expanded(child: _cardStat(Icons.arrow_downward_rounded, 'In', inflow)),
                      Expanded(child: _cardStat(Icons.arrow_upward_rounded, 'Out', outflow)),
                      if (pending > 0)
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                          decoration: BoxDecoration(
                            color: Colors.orange.withValues(alpha: 0.22),
                            borderRadius: BorderRadius.circular(99),
                            border: Border.all(color: Colors.orangeAccent.withValues(alpha: 0.6)),
                          ),
                          child: Text('$pending pending', style: const TextStyle(color: Colors.orangeAccent, fontWeight: FontWeight.w800, fontSize: 10.5)),
                        ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(masked, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 10.5, fontWeight: FontWeight.w600, letterSpacing: 0.4)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _ring(double size, double alpha) => Container(
        width: size,
        height: size,
        decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white.withValues(alpha: alpha), width: 22)),
      );

  Widget _cardStat(IconData icon, String label, double amount) {
    return Row(
      children: [
        Container(
          width: 22,
          height: 22,
          decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.16)),
          child: Icon(icon, size: 13, color: Colors.white),
        ),
        const SizedBox(width: 6),
        Flexible(
          child: FittedBox(
            fit: BoxFit.scaleDown,
            alignment: Alignment.centerLeft,
            child: Text(
              '$label  \$${formatCurrency(amount)}',
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
            ),
          ),
        ),
      ],
    );
  }

  /// Round action buttons — the selected one fills with gold.
  Widget _actionCircle(IconData icon, String label, int v) {
    final selected = _view == v;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: () {
        HapticFeedback.selectionClick();
        setState(() => _view = v);
        if (v == 2) unawaited(widget.onRefreshBalance?.call() ?? Future.value());
      },
      child: SizedBox(
        width: 92,
        child: Column(
          children: [
            AnimatedContainer(
              duration: const Duration(milliseconds: 240),
              curve: Curves.easeOutCubic,
              width: 62,
              height: 62,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: selected
                    ? const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFF6E27A), _gold])
                    : LinearGradient(colors: [Colors.white.withValues(alpha: 0.08), Colors.white.withValues(alpha: 0.03)]),
                border: Border.all(color: selected ? Colors.white.withValues(alpha: 0.6) : _green.withValues(alpha: 0.25)),
                boxShadow: selected ? [BoxShadow(color: _gold.withValues(alpha: 0.45), blurRadius: 18)] : null,
              ),
              child: Icon(icon, size: 26, color: selected ? const Color(0xFF1A1405) : _green),
            ),
            const SizedBox(height: 7),
            Text(
              label,
              style: TextStyle(color: selected ? Colors.white : Colors.white60, fontWeight: FontWeight.w800, fontSize: 12.5),
            ),
          ],
        ),
      ),
    );
  }

  Widget _moneyForm() {
    final deposit = _view == 0;
    final fieldBg = Colors.white.withValues(alpha: 0.05);
    final fieldBorder = Colors.white.withValues(alpha: 0.10);
    InputDecoration deco(String hint, {String? prefix}) => InputDecoration(
          filled: true,
          fillColor: fieldBg,
          hintText: hint,
          prefixText: prefix,
          prefixStyle: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
          hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontWeight: FontWeight.w700),
          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: fieldBorder)),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: _green.withValues(alpha: 0.6))),
        );
    return Container(
      key: ValueKey('form$_view'),
      padding: const EdgeInsets.fromLTRB(18, 18, 18, 18),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withValues(alpha: 0.07)),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 20, offset: const Offset(0, 10))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            deposit ? 'How much are you adding?' : 'How much are you taking out?',
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15),
          ),
          const SizedBox(height: 4),
          Text(
            deposit
                ? 'Send your payment, upload proof, and admin credits your wallet.'
                : 'Admin sends it to your Cash App. A 15% fee applies · minimum \$${formatCurrency(kNgmyMinimumWithdrawalAmount)}.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11.5, fontWeight: FontWeight.w600, height: 1.35),
          ),
          const SizedBox(height: 14),
          TextField(
            controller: _amt,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30),
            decoration: deco('0.00', prefix: '\$ '),
            onChanged: (_) => setState(() {}),
          ),
          if (deposit) ...[
            const SizedBox(height: 12),
            Row(
              children: [
                for (final v in const [10, 50, 100, 200])
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 3),
                      child: GestureDetector(
                        onTap: () => setState(() => _amt.text = v.toString()),
                        child: Container(
                          height: 40,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: _amt.text == '$v' ? _green.withValues(alpha: 0.16) : fieldBg,
                            borderRadius: BorderRadius.circular(99),
                            border: Border.all(color: _amt.text == '$v' ? _green.withValues(alpha: 0.6) : fieldBorder),
                          ),
                          child: Text('\$$v', style: const TextStyle(fontWeight: FontWeight.w900, color: Colors.white)),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ] else ...[
            const SizedBox(height: 12),
            TextField(
              controller: _cashAppTag,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
              decoration: deco('YourCashTag', prefix: '\$ ').copyWith(labelText: 'Your Cash App tag', labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.6))),
            ),
            Builder(builder: (_) {
              final a = double.tryParse(_amt.text) ?? 0;
              if (a <= 0) return const SizedBox.shrink();
              return Padding(
                padding: const EdgeInsets.only(top: 10),
                child: Text(
                  'You receive \$${formatCurrency(a * 0.85)} after the \$${formatCurrency(a * 0.15)} fee',
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: _green, fontWeight: FontWeight.w800, fontSize: 12),
                ),
              );
            }),
          ],
          const SizedBox(height: 16),
          SizedBox(
            height: 54,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(18),
                gradient: const LinearGradient(colors: [Color(0xFF10B981), _emerald]),
                boxShadow: [BoxShadow(color: _emerald.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 8))],
              ),
              child: ElevatedButton.icon(
                onPressed: deposit ? _startDeposit : _withdraw,
                icon: Icon(deposit ? Icons.add_circle_outline_rounded : Icons.send_rounded, size: 20),
                label: Text(deposit ? 'Deposit funds' : 'Request withdrawal', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.transparent,
                  shadowColor: Colors.transparent,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _historyPanel() {
    final wallet = widget.transactions.where(_isGrowthIncomeHistoryRow).toList()
      ..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    return Container(
      key: const ValueKey('history'),
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 8),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white.withValues(alpha: 0.07)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Expanded(
                child: Text('Activity', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
              ),
              InkWell(
                borderRadius: BorderRadius.circular(99),
                onTap: () async {
                  await widget.onRefreshBalance?.call();
                  if (mounted) setState(() {});
                  _toast('Balance refreshed.');
                },
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(99),
                    border: Border.all(color: _green.withValues(alpha: 0.4)),
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.refresh_rounded, size: 15, color: _green),
                      SizedBox(width: 4),
                      Text('Refresh', style: TextStyle(color: _green, fontWeight: FontWeight.w800, fontSize: 12)),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          if (wallet.isEmpty)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 30),
              child: Column(
                children: [
                  Icon(Icons.account_balance_wallet_outlined, size: 40, color: Colors.white.withValues(alpha: 0.25)),
                  const SizedBox(height: 10),
                  const Text(
                    'No money recorded yet.\nClock-in earnings, deposits and withdrawals show here.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w700, height: 1.4),
                  ),
                ],
              ),
            )
          else
            for (final t in wallet.take(80)) _historyRow(t),
        ],
      ),
    );
  }

  Widget _historyRow(AppTransaction t) {
    final approved = t.status == TransactionStatus.approved;
    final pending = t.status == TransactionStatus.pending;
    final outgoing = t.type == TransactionType.withdrawal || t.type == TransactionType.adminRemove;
    final color = approved
        ? (outgoing ? const Color(0xFFF87171) : _green)
        : (pending ? Colors.orangeAccent : Colors.redAccent);
    final sign = outgoing ? '-' : '+';
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 11),
      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.06)))),
      child: Row(
        children: [
          Container(
            width: 42,
            height: 42,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: color.withValues(alpha: 0.14),
              border: Border.all(color: color.withValues(alpha: 0.4)),
            ),
            child: Icon(outgoing ? Icons.north_east_rounded : Icons.south_west_rounded, size: 19, color: color),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(_growthIncomeHistoryTitle(t), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                const SizedBox(height: 2),
                Text(
                  _LocalGrowthHomeTab._formatTxnDateTime(t.timestamp),
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w600),
                ),
                if ((t.sourceDetails ?? '').trim().isNotEmpty)
                  Text(
                    t.sourceDetails!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10.5),
                  ),
              ],
            ),
          ),
          const SizedBox(width: 8),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                t.amount == 0 ? '—' : '$sign\$${formatCurrency(t.amount)}',
                style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 15),
              ),
              const SizedBox(height: 4),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(99)),
                child: Text(
                  approved ? 'Done' : (pending ? 'Pending' : t.status.name),
                  style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 9.5),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  bool _isGrowthIncomeHistoryRow(AppTransaction t) {
    if (t.status == TransactionStatus.rejected) return false;
    final details = (t.sourceDetails ?? '').toLowerCase();
    if (details.contains('clock-in session started')) return false;
    if (t.type == TransactionType.contribution) return false;
    if (t.type == TransactionType.deposit || t.type == TransactionType.withdrawal) return true;
    if (t.type == TransactionType.adminAdd || t.type == TransactionType.adminRemove) return true;
    if (t.type == TransactionType.claim) return true;
    if (t.type == TransactionType.reimbursement) {
      return details.contains('clock-in') || t.amount > 0;
    }
    return false;
  }

  String _growthIncomeHistoryTitle(AppTransaction t) {
    final details = (t.sourceDetails ?? '').toLowerCase();
    if (details.contains('clock-in')) return 'Clock-in earnings';
    if (details.contains('investment')) return 'Investment';
    switch (t.type) {
      case TransactionType.deposit:
        return 'Deposit';
      case TransactionType.withdrawal:
        return 'Withdrawal';
      case TransactionType.adminAdd:
        return 'Added';
      case TransactionType.adminRemove:
        return 'Spent';
      case TransactionType.claim:
        return 'Claim';
      case TransactionType.reimbursement:
        return 'Earnings';
      case TransactionType.contribution:
        return 'Contribution';
    }
  }

}

/// The gold "chip" lines on the wallet card.
class _CardChipLinesPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = const Color(0xFF7A5A12).withValues(alpha: 0.55)
      ..strokeWidth = 1;
    canvas.drawLine(Offset(s.width * 0.35, 0), Offset(s.width * 0.35, s.height), p);
    canvas.drawLine(Offset(s.width * 0.65, 0), Offset(s.width * 0.65, s.height), p);
    canvas.drawLine(Offset(0, s.height * 0.5), Offset(s.width, s.height * 0.5), p);
  }

  @override
  bool shouldRepaint(covariant _CardChipLinesPainter old) => false;
}
