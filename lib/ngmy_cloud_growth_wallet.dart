import 'dart:async';

import 'package:flutter/material.dart';

import 'main.dart';
import 'ngmy_feature_sync_session.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_helpers.dart';

/// Cloud Growth Income wallet (deposit / withdraw / history).
/// Opens only while this page is on screen; marks [NgmyFeatureSyncSession]
/// so wallet cloud sync is not run in the background when unused.
Future<void> showNgmyCloudGrowthWalletPage(
  BuildContext context, {
  required UserData user,
  required List<AppTransaction> allTransactions,
  required AppConfig config,
  required void Function(AppTransaction) onAdd,
  required VoidCallback onDataChanged,
  Future<void> Function()? onRefreshWallet,
}) {
  return NgmyNavigator.push<void>(
    context,
    _NgmyCloudGrowthWalletPage(
      user: user,
      allTransactions: allTransactions,
      config: config,
      onAdd: onAdd,
      onDataChanged: onDataChanged,
      onRefreshWallet: onRefreshWallet,
    ),
    fullscreenDialog: true,
    routeName: 'NgmyCloudGrowthWallet',
  );
}

class _NgmyCloudGrowthWalletPage extends StatefulWidget {
  const _NgmyCloudGrowthWalletPage({
    required this.user,
    required this.allTransactions,
    required this.config,
    required this.onAdd,
    required this.onDataChanged,
    this.onRefreshWallet,
  });

  final UserData user;
  final List<AppTransaction> allTransactions;
  final AppConfig config;
  final void Function(AppTransaction) onAdd;
  final VoidCallback onDataChanged;
  final Future<void> Function()? onRefreshWallet;

  @override
  State<_NgmyCloudGrowthWalletPage> createState() => _NgmyCloudGrowthWalletPageState();
}

class _NgmyCloudGrowthWalletPageState extends State<_NgmyCloudGrowthWalletPage> {
  final _amt = TextEditingController();
  final _cashAppTag = TextEditingController();
  int _view = 0; // 0 deposit, 1 withdraw, 2 history
  Timer? _poll;

  @override
  void initState() {
    super.initState();
    NgmyFeatureSyncSession.enterGrowthIncomeUser();
    unawaited(widget.onRefreshWallet?.call());
    _poll = Timer.periodic(const Duration(seconds: 12), (_) {
      if (!mounted) return;
      unawaited(widget.onRefreshWallet?.call());
      setState(() {});
    });
  }

  @override
  void dispose() {
    _poll?.cancel();
    NgmyFeatureSyncSession.leaveGrowthIncomeUser();
    _amt.dispose();
    _cashAppTag.dispose();
    super.dispose();
  }

  void _toast(String m) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(m)));
  }

  List<AppTransaction> get _mine => ngmyUserWalletHistoryTransactions(
        widget.allTransactions,
        widget.user.email,
      );

  void _deposit() {
    final a = double.tryParse(_amt.text.trim());
    if (a == null || a <= 0) {
      _toast('Enter an amount to deposit.');
      return;
    }
    NgmyNavigator.push(
      context,
      SubmitPaymentPage(
        user: widget.user,
        amount: a,
        onAdd: (t) {
          widget.onAdd(t);
          widget.onDataChanged();
          if (mounted) {
            setState(() {
              _view = 2;
              _amt.clear();
            });
          }
        },
        config: widget.config,
        requestTitle: 'Submit Deposit',
        successHint: 'Your deposit is pending. Admin will verify your proof in Growth Income.',
      ),
    );
  }

  void _withdraw() {
    final a = double.tryParse(_amt.text.trim());
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
      id: 'wd_${DateTime.now().microsecondsSinceEpoch}',
      userEmail: widget.user.email,
      amount: a,
      type: TransactionType.withdrawal,
      method: PaymentMethod.cashApp,
      sourceDetails: 'Withdrawal to \$$tag — Fee: \$${formatCurrency(fee)} — You receive: \$${formatCurrency(receive)}',
      status: TransactionStatus.pending,
      timestamp: DateTime.now(),
    ));
    widget.onDataChanged();
    _toast('Withdrawal submitted — waiting for admin approval.');
    _amt.clear();
    _cashAppTag.clear();
    setState(() => _view = 2);
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF3F7FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Growth Income', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 4, 20, 12),
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: LinearGradient(
                  colors: [WorksheetPalette.green, WorksheetPalette.green.withValues(alpha: 0.75)],
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Balance', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700)),
                  const SizedBox(height: 4),
                  Text(
                    '\$${formatCurrency(widget.user.accountBalance)}',
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30),
                  ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                for (final e in const [(0, 'Deposit'), (1, 'Withdraw'), (2, 'History')])
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      child: ChoiceChip(
                        label: Center(child: Text(e.$2, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12))),
                        selected: _view == e.$1,
                        onSelected: (_) => setState(() => _view = e.$1),
                        selectedColor: WorksheetPalette.green.withValues(alpha: 0.22),
                      ),
                    ),
                  ),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 28),
              children: [
                if (_view == 0 || _view == 1) ...[
                  TextField(
                    controller: _amt,
                    keyboardType: const TextInputType.numberWithOptions(decimal: true),
                    style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 18),
                    decoration: InputDecoration(
                      labelText: 'Amount',
                      prefixText: '\$ ',
                      filled: true,
                      fillColor: card,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                  ),
                  if (_view == 1) ...[
                    const SizedBox(height: 12),
                    TextField(
                      controller: _cashAppTag,
                      style: TextStyle(color: ink),
                      decoration: InputDecoration(
                        labelText: 'Your Cash App tag',
                        prefixText: '\$',
                        filled: true,
                        fillColor: card,
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text('15% fee applies (shown after submit).', style: TextStyle(color: muted, fontSize: 12)),
                  ],
                  const SizedBox(height: 16),
                  FilledButton(
                    onPressed: _view == 0 ? _deposit : _withdraw,
                    style: FilledButton.styleFrom(
                      backgroundColor: WorksheetPalette.green,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    child: Text(
                      _view == 0 ? 'Continue to payment proof' : 'Submit withdrawal',
                      style: const TextStyle(fontWeight: FontWeight.w900),
                    ),
                  ),
                ] else ...[
                  if (_mine.isEmpty)
                    Padding(
                      padding: const EdgeInsets.only(top: 40),
                      child: Text('No wallet history yet.', textAlign: TextAlign.center, style: TextStyle(color: muted)),
                    )
                  else
                    ..._mine.take(80).map((t) {
                      final color = t.status == TransactionStatus.approved
                          ? WorksheetPalette.green
                          : (t.status == TransactionStatus.rejected ? Colors.redAccent : Colors.orange);
                      return Container(
                        margin: const EdgeInsets.only(bottom: 10),
                        padding: const EdgeInsets.all(14),
                        decoration: BoxDecoration(
                          color: card,
                          borderRadius: BorderRadius.circular(16),
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
                                    style: TextStyle(fontWeight: FontWeight.w900, color: ink),
                                  ),
                                  Text(
                                    t.status.name.toUpperCase(),
                                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: color),
                                  ),
                                  if ((t.sourceDetails ?? '').isNotEmpty)
                                    Text(t.sourceDetails!, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, color: muted)),
                                ],
                              ),
                            ),
                            Text(
                              '${t.type == TransactionType.withdrawal ? '-' : '+'}\$${formatCurrency(t.amount)}',
                              style: TextStyle(fontWeight: FontWeight.w900, color: color),
                            ),
                          ],
                        ),
                      );
                    }),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
