part of 'main.dart';

InputDecoration ngmyAdminInputDecoration({
  required String label,
  required bool isDark,
  String? hint,
}) {
  final borderColor = isDark ? Colors.white24 : const Color(0xFFD1D5DB);
  return InputDecoration(
    labelText: label,
    hintText: hint,
    isDense: true,
    filled: true,
    fillColor: isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC),
    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide(color: borderColor),
    ),
    focusedBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(14)),
      borderSide: BorderSide(color: Color(0xFF3B82F6), width: 1.4),
    ),
  );
}


class NgmyAdminWalletTab extends StatefulWidget {
  const NgmyAdminWalletTab({
    super.key,
    required this.isDark,
    required this.config,
    required this.allTransactions,
    required this.allUsers,
    required this.onProcess,
    required this.onDataChanged,
    required this.onRefresh,
    required this.onSavePayments,
    required this.onArchiveRemove,
  });

  final bool isDark;
  final AppConfig config;
  final List<AppTransaction> allTransactions;
  final List<UserData> allUsers;
  final Future<void> Function(AppTransaction t, bool approve) onProcess;
  final VoidCallback onDataChanged;
  final Future<void> Function() onRefresh;
  final Future<bool> Function(String cashApp, String bitcoin) onSavePayments;
  final Future<void> Function(AppTransaction t) onArchiveRemove;

  @override
  State<NgmyAdminWalletTab> createState() => _NgmyAdminWalletTabState();
}

class _NgmyAdminWalletTabState extends State<NgmyAdminWalletTab> {
  int _section = 0;
  String? _processingTxnId;
  bool _refreshing = false;
  bool _savingPayments = false;
  List<AppTransaction> _archive = const [];
  late final TextEditingController _cashAppC;
  late final TextEditingController _bitcoinC;
  Timer? _livePoll;

  @override
  void initState() {
    super.initState();
    NgmyFeatureSyncSession.enterGrowthIncomeAdmin();
    _cashAppC = TextEditingController(text: widget.config.officialCashApp);
    _bitcoinC = TextEditingController(text: widget.config.officialBitcoin);
    unawaited(_loadArchive());
    unawaited(_refresh());
    _livePoll = Timer.periodic(const Duration(seconds: 12), (_) {
      if (!mounted) return;
      unawaited(_refresh());
    });
  }

  @override
  void didUpdateWidget(covariant NgmyAdminWalletTab oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.config.officialCashApp != widget.config.officialCashApp) {
      _cashAppC.text = widget.config.officialCashApp;
    }
    if (oldWidget.config.officialBitcoin != widget.config.officialBitcoin) {
      _bitcoinC.text = widget.config.officialBitcoin;
    }
  }

  @override
  void dispose() {
    _livePoll?.cancel();
    NgmyFeatureSyncSession.leaveGrowthIncomeAdmin();
    _cashAppC.dispose();
    _bitcoinC.dispose();
    super.dispose();
  }

  Future<void> _loadArchive() async {
    final loaded = await NgmyAdminWalletApprovedArchive.load();
    if (!mounted) return;
    setState(() => _archive = loaded);
  }

  Future<void> _refresh() async {
    if (_refreshing) return;
    setState(() => _refreshing = true);
    try {
      await widget.onRefresh();
      await _loadArchive();
    } finally {
      if (mounted) setState(() => _refreshing = false);
    }
  }

  Future<void> _process(AppTransaction t, bool approve) async {
    if (_processingTxnId == t.id) return;
    setState(() => _processingTxnId = t.id);
    try {
      await widget.onProcess(t, approve);
      if (mounted) setState(() {});
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not ${approve ? 'approve' : 'reject'}: $e'), backgroundColor: Colors.redAccent),
        );
      }
    } finally {
      if (mounted) setState(() => _processingTxnId = null);
    }
  }

  void _openDepositScreenshot(String? path) {
    if (path == null || path.trim().isEmpty) return;
    showNgmyPaymentProofFullscreen(context, path);
  }

  Future<void> _savePayments() async {
    if (_savingPayments) return;
    setState(() => _savingPayments = true);
    try {
      final cash = _cashAppC.text.trim();
      final btc = _bitcoinC.text.trim();
      final ok = await widget.onSavePayments(cash, btc);
      if (!mounted) return;
      widget.config.officialCashApp = cash;
      widget.config.officialBitcoin = btc;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            ok
                ? 'Cash App and Bitcoin saved — all users will see these payment addresses.'
                : btc.isEmpty
                    ? 'Saved locally — enter a Bitcoin address and connect internet to sync.'
                    : 'Saved locally — connect internet and tap Save again to sync Bitcoin & Cash App.',
          ),
          backgroundColor: ok ? const Color(0xFF00B25A) : Colors.orange,
          duration: const Duration(seconds: 6),
        ),
      );
    } finally {
      if (mounted) setState(() => _savingPayments = false);
    }
  }

  List<AppTransaction> get _pendingDeposits => widget.allTransactions
      .where((t) => t.type == TransactionType.deposit && t.status == TransactionStatus.pending)
      .toList()
    ..sort((a, b) => b.timestamp.compareTo(a.timestamp));

  List<AppTransaction> get _pendingWithdrawals => widget.allTransactions
      .where((t) => t.type == TransactionType.withdrawal && t.status == TransactionStatus.pending)
      .toList()
    ..sort((a, b) => b.timestamp.compareTo(a.timestamp));

  List<AppTransaction> get _resolvedWallet => widget.allTransactions
      .where((t) {
        if (t.status == TransactionStatus.pending) return false;
        if (t.type == TransactionType.deposit ||
            t.type == TransactionType.withdrawal ||
            t.type == TransactionType.adminAdd) {
          return true;
        }
        if (t.type == TransactionType.reimbursement) {
          final details = (t.sourceDetails ?? '').toLowerCase();
          if (details.contains('clock-in session started')) return false;
          return details.contains('clock-in');
        }
        return false;
      })
      .toList()
    ..sort((a, b) => b.timestamp.compareTo(a.timestamp));

  @override
  Widget build(BuildContext context) {
    final isDark = widget.isDark;
    final frameBorder = isDark ? const Color(0xFF4B5563) : const Color(0xFFD5DCE5);
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
          child: Row(
            children: [
              Expanded(
                child: Text(
                  'Growth Income — approve deposits & withdrawals with payment proofs.',
                  style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54),
                ),
              ),
              IconButton(
                tooltip: 'Refresh from cloud',
                onPressed: _refreshing ? null : _refresh,
                icon: _refreshing
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                    : Icon(Icons.cloud_sync_rounded, color: isDark ? Colors.white70 : Colors.black54),
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                _chip('Deposits (${_pendingDeposits.length})', 0, isDark, frameBorder),
                _chip('Withdrawals (${_pendingWithdrawals.length})', 1, isDark, frameBorder),
                _chip('History', 2, isDark, frameBorder),
                _chip('Payments', 3, isDark, frameBorder),
              ],
            ),
          ),
        ),
        Expanded(
          child: ListView(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
            children: switch (_section) {
              0 => _pendingDeposits.isEmpty
                  ? [_empty('No pending deposits or investment payments.', isDark)]
                  : _pendingDeposits.map((t) => _depositCard(t, isDark)).toList(),
              1 => _pendingWithdrawals.isEmpty
                  ? [_empty('No pending withdrawal requests.', isDark)]
                  : _pendingWithdrawals.map((t) => _withdrawalCard(t, isDark)).toList(),
              2 => _resolvedWallet.isEmpty && _archive.isEmpty
                  ? [_empty('No completed wallet, clock-in, or deposit history yet.', isDark)]
                  : [
                      Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Text(
                          'Approved deposits keep View proof for $kNgmyWalletReceiptRetentionDays days, then receipts auto-delete from the app and database.',
                          style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black54),
                        ),
                      ),
                      ..._resolvedWallet.take(40).map((t) => t.type == TransactionType.withdrawal
                          ? _withdrawalCard(t, isDark, showActions: false)
                          : _depositCard(t, isDark, showActions: false)),
                      if (_archive.isNotEmpty) ...[
                        const SizedBox(height: 12),
                        Text('Archived receipts', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white70 : Colors.black87)),
                        const SizedBox(height: 8),
                        ..._archive.take(30).map((t) => _depositCard(t, isDark, showActions: false, archived: true)),
                      ],
                    ],
              _ => [_paymentsPanel(isDark, frameBorder)],
            },
          ),
        ),
      ],
    );
  }

  Widget _chip(String label, int index, bool isDark, Color border) {
    final selected = _section == index;
    return Padding(
      padding: const EdgeInsets.only(right: 8),
      child: ChoiceChip(
        label: Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700)),
        selected: selected,
        onSelected: (_) => setState(() => _section = index),
        selectedColor: const Color(0xFF00B25A).withValues(alpha: 0.2),
        side: BorderSide(color: selected ? const Color(0xFF00B25A) : border, width: selected ? 2 : 1),
      ),
    );
  }

  Widget _empty(String msg, bool isDark) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 40),
        child: Center(child: Text(msg, textAlign: TextAlign.center, style: TextStyle(color: isDark ? Colors.white54 : Colors.black54))),
      );

  Widget _paymentsPanel(bool isDark, Color frameBorder) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: frameBorder),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('USER PAYMENT DESTINATIONS', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12, color: isDark ? Colors.white70 : Colors.black54)),
            const SizedBox(height: 14),
            TextField(controller: _cashAppC, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: ngmyAdminInputDecoration(label: 'Cash App \$cashtag', isDark: isDark)),
            const SizedBox(height: 12),
            TextField(controller: _bitcoinC, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: ngmyAdminInputDecoration(label: 'Bitcoin address', isDark: isDark)),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: _savingPayments ? null : _savePayments,
                style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 48)),
                child: Text(_savingPayments ? 'Saving…' : 'SAVE TO CLOUD'),
              ),
            ),
          ],
        ),
      );

  UserData _userFor(AppTransaction t) {
    final key = ngmyNormalizeEmail(t.userEmail);
    for (final u in widget.allUsers) {
      if (ngmyNormalizeEmail(u.email) == key) return u;
    }
    return UserData(email: t.userEmail, username: t.userEmail.split('@').first);
  }

  // A deposit to review: who, how much, the code to match in the payment note,
  // and the payment screenshot shown large right in the card (tap = full screen).
  Widget _depositCard(AppTransaction t, bool isDark, {bool showActions = true, bool archived = false}) {
    final user = _userFor(t);
    final isInvestment = isInvestmentRequestDetails(t.sourceDetails);
    final meta = parseInvestmentRequestDetails(t.sourceDetails);
    final pending = t.status == TransactionStatus.pending;
    final busy = _processingTxnId == t.id;
    final proof = (t.screenshotPath ?? '').trim();
    final statusColor = t.status == TransactionStatus.approved
        ? const Color(0xFF00B25A)
        : (t.status == TransactionStatus.rejected ? Colors.redAccent : const Color(0xFFF59E0B));
    final card = isDark ? const Color(0xFF161A26) : Colors.white;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : Colors.black54;
    final code = (t.verificationCode ?? '').trim();
    final payer = isInvestment ? (meta['payer'] ?? '') : (t.sourceDetails ?? '');
    final when = '${t.timestamp.month}/${t.timestamp.day} · ${t.timestamp.hour.toString().padLeft(2, '0')}:${t.timestamp.minute.toString().padLeft(2, '0')}';

    Widget info(IconData icon, String label, String value, {Color? color}) => Padding(
          padding: const EdgeInsets.only(bottom: 8),
          child: Row(
            children: [
              Icon(icon, size: 16, color: muted),
              const SizedBox(width: 8),
              Text(label, style: TextStyle(color: muted, fontSize: 12, fontWeight: FontWeight.w600)),
              const Spacer(),
              Flexible(
                child: Text(
                  value,
                  textAlign: TextAlign.right,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(color: color ?? ink, fontSize: 13, fontWeight: FontWeight.w800),
                ),
              ),
            ],
          ),
        );

    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: statusColor.withValues(alpha: pending ? 0.55 : 0.3), width: 1.4),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.08), blurRadius: 18, offset: const Offset(0, 8))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Who and how much.
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 10),
            child: Row(
              children: [
                CircleAvatar(
                  radius: 22,
                  backgroundColor: statusColor.withValues(alpha: 0.15),
                  child: Text(
                    user.username.isNotEmpty ? user.username[0].toUpperCase() : '?',
                    style: TextStyle(color: statusColor, fontWeight: FontWeight.w900, fontSize: 18),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('@${user.username}', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                      Text(user.email, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: muted, fontSize: 11)),
                    ],
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text('\$${formatCurrency(t.amount)}', style: TextStyle(color: statusColor, fontWeight: FontWeight.w900, fontSize: 22)),
                    Container(
                      margin: const EdgeInsets.only(top: 2),
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(color: statusColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(99)),
                      child: Text(
                        '${t.status.name.toUpperCase()}${archived ? ' · ARCHIVE' : ''}',
                        style: TextStyle(color: statusColor, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.6),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              children: [
                if (isInvestment) info(Icons.trending_up_rounded, 'Investment', '${meta['plan'] ?? ''} · \$${meta['amount'] ?? ''}', color: Colors.orange),
                info(t.method == PaymentMethod.bitcoin ? Icons.currency_bitcoin : Icons.attach_money_rounded, t.method == PaymentMethod.bitcoin ? 'Paid by Bitcoin' : 'Paid from Cash App', payer.isEmpty ? '—' : payer),
                if (code.isNotEmpty) info(Icons.tag_rounded, 'Code in payment note', code, color: const Color(0xFF8B5CF6)),
                info(Icons.schedule_rounded, 'Sent', when),
              ],
            ),
          ),
          // The payment screenshot, big enough to read.
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
            child: proof.isNotEmpty
                ? GestureDetector(
                    onTap: () => _openDepositScreenshot(proof),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Container(
                        color: Colors.black,
                        constraints: const BoxConstraints(minHeight: 160, maxHeight: 420),
                        width: double.infinity,
                        child: Stack(
                          children: [
                            Center(child: NgmyPaymentProofImage(path: proof)),
                            Positioned(
                              right: 10,
                              bottom: 10,
                              child: Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.65), borderRadius: BorderRadius.circular(99)),
                                child: const Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.zoom_out_map_rounded, color: Colors.white, size: 14),
                                    SizedBox(width: 5),
                                    Text('Tap to enlarge', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  )
                : Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.04),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Row(
                      children: [
                        Icon(Icons.image_not_supported_outlined, size: 18, color: muted),
                        const SizedBox(width: 8),
                        Text(
                          !pending && t.status == TransactionStatus.approved ? 'Proof expired' : (isInvestment ? 'No screenshot needed' : 'No screenshot attached'),
                          style: TextStyle(color: muted, fontSize: 12, fontWeight: FontWeight.w700),
                        ),
                      ],
                    ),
                  ),
          ),
          if (showActions && pending)
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: busy ? null : () => _process(t, false),
                      icon: const Icon(Icons.close_rounded, size: 18),
                      label: const Text('Reject', style: TextStyle(fontWeight: FontWeight.w900)),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.redAccent,
                        side: const BorderSide(color: Colors.redAccent),
                        minimumSize: const Size(0, 50),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    flex: 2,
                    child: ElevatedButton.icon(
                      onPressed: busy ? null : () => _process(t, true),
                      icon: busy
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.check_rounded, size: 20),
                      label: Text(busy ? 'Saving…' : 'Approve \$${formatCurrency(t.amount)}', style: const TextStyle(fontWeight: FontWeight.w900)),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF00B25A),
                        foregroundColor: Colors.white,
                        disabledBackgroundColor: const Color(0xFF00B25A).withValues(alpha: 0.5),
                        disabledForegroundColor: Colors.white,
                        minimumSize: const Size(0, 50),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                    ),
                  ),
                ],
              ),
            )
          else if (showActions && !pending && !archived)
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 0, 8, 8),
              child: Align(
                alignment: Alignment.centerRight,
                child: TextButton.icon(
                  onPressed: () => widget.onArchiveRemove(t),
                  icon: const Icon(Icons.archive_outlined, size: 16),
                  label: const Text('Archive & remove'),
                ),
              ),
            ),
        ],
      ),
    );
  }

  Widget _withdrawalCard(AppTransaction t, bool isDark, {bool showActions = true}) {
    final user = _userFor(t);
    final trial = user.isOnFreeTrial || (t.sourceDetails ?? '').contains('Free trial');
    final feeRate = trial ? 0.0 : 0.15;
    final pending = t.status == TransactionStatus.pending;
    final net = t.amount * (1 - feeRate);
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: pending ? Colors.blue.withValues(alpha: 0.4) : (isDark ? Colors.white10 : const Color(0xFFE5E7EB))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [
            Expanded(child: Text('@${user.username}', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black))),
            Text('\$${formatCurrency(t.amount)}', style: const TextStyle(color: Color(0xFF00B25A), fontWeight: FontWeight.w900)),
          ]),
          Text(user.email, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
          const SizedBox(height: 8),
          Text('Send to user: \$${formatCurrency(net)} · Fee ${(feeRate * 100).toInt()}% · ${t.status.name.toUpperCase()}', style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
          Text('Payout: ${t.sourceDetails ?? t.method.name}', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
          if (showActions && pending) ...[
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(onPressed: _processingTxnId == t.id ? null : () => _process(t, false), child: const Text('REJECT')),
                const SizedBox(width: 8),
                ElevatedButton(
                  onPressed: _processingTxnId == t.id ? null : () => _process(t, true),
                  style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white),
                  child: Text(_processingTxnId == t.id ? 'SAVING…' : 'APPROVE'),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}
