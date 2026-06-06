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

/// Rebuilt admin Wallet tab — pending approvals, history, payment settings, cloud sync.
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

  @override
  void initState() {
    super.initState();
    _cashAppC = TextEditingController(text: widget.config.officialCashApp);
    _bitcoinC = TextEditingController(text: widget.config.officialBitcoin);
    unawaited(_loadArchive());
    unawaited(_refresh());
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
    } finally {
      if (mounted) setState(() => _processingTxnId = null);
    }
  }

  Future<void> _savePayments() async {
    if (_savingPayments) return;
    setState(() => _savingPayments = true);
    try {
      final ok = await widget.onSavePayments(_cashAppC.text.trim(), _bitcoinC.text.trim());
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(ok ? 'Payment settings saved for all users.' : 'Saved locally — connect internet to sync.'),
          backgroundColor: ok ? const Color(0xFF00B25A) : Colors.orange,
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
      .where((t) =>
          (t.type == TransactionType.deposit ||
              t.type == TransactionType.withdrawal ||
              t.type == TransactionType.adminAdd) &&
          t.status != TransactionStatus.pending)
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
                  'Wallet admin — approve requests, sync balances to Supabase.',
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
                  ? [_empty('No completed wallet transactions yet.', isDark)]
                  : [
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
        selectedColor: const Color(0xFF00B25A).withOpacity(0.2),
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

  Widget _depositCard(AppTransaction t, bool isDark, {bool showActions = true, bool archived = false}) {
    final user = _userFor(t);
    final isInvestment = isInvestmentRequestDetails(t.sourceDetails);
    final meta = parseInvestmentRequestDetails(t.sourceDetails);
    final pending = t.status == TransactionStatus.pending;
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: pending ? Colors.orange.withOpacity(0.5) : (isDark ? Colors.white10 : const Color(0xFFE5E7EB))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: t.status == TransactionStatus.approved
                  ? const Color(0xFF00B25A)
                  : (t.status == TransactionStatus.rejected ? Colors.redAccent : Colors.orange),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(17)),
            ),
            child: Row(
              children: [
                CircleAvatar(backgroundColor: Colors.white24, child: Text(user.username.isNotEmpty ? user.username[0].toUpperCase() : '?', style: const TextStyle(color: Colors.white))),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('@${user.username}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                    Text(user.email, style: const TextStyle(color: Colors.white70, fontSize: 10)),
                  ]),
                ),
                Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                  Text('\$${formatCurrency(t.amount)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                  Text('${t.status.name.toUpperCase()}${archived ? ' · ARCHIVE' : ''}', style: const TextStyle(color: Colors.white70, fontSize: 9, fontWeight: FontWeight.bold)),
                ]),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (isInvestment)
                  Text('Investment: ${meta['plan'] ?? ''} · \$${meta['amount'] ?? ''}', style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.orangeAccent : Colors.orange.shade800))
                else
                  Text('Method: ${t.method.name.toUpperCase()} · ${t.sourceDetails ?? 'N/A'}', style: TextStyle(fontSize: 12, color: isDark ? Colors.white70 : Colors.black87)),
                if (t.verificationCode != null && t.verificationCode!.trim().isNotEmpty) ...[
                  const SizedBox(height: 8),
                  Text('Code: ${t.verificationCode}', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.purpleAccent : Colors.purple)),
                ],
                const SizedBox(height: 10),
                if (showActions && pending)
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      TextButton(onPressed: _processingTxnId == t.id ? null : () => _process(t, false), child: Text(_processingTxnId == t.id ? '…' : 'REJECT')),
                      const SizedBox(width: 8),
                      ElevatedButton(
                        onPressed: _processingTxnId == t.id ? null : () => _process(t, true),
                        style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white),
                        child: Text(_processingTxnId == t.id ? 'SAVING…' : 'APPROVE'),
                      ),
                    ],
                  )
                else if (showActions && !pending && !archived)
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton.icon(
                      onPressed: () => widget.onArchiveRemove(t),
                      icon: const Icon(Icons.archive_outlined, size: 16),
                      label: const Text('Archive & remove'),
                    ),
                  ),
              ],
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
        border: Border.all(color: pending ? Colors.blue.withOpacity(0.4) : (isDark ? Colors.white10 : const Color(0xFFE5E7EB))),
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

/// Rebuilt admin Invest tab — plans CRUD with immediate Supabase sync.
class NgmyAdminInvestTab extends StatefulWidget {
  const NgmyAdminInvestTab({
    super.key,
    required this.isDark,
    required this.globalPlans,
    required this.allTransactions,
    required this.onUpsertPlan,
    required this.onRemovePlan,
    required this.onRefreshPlans,
  });

  final bool isDark;
  final List<InvestmentPlan> globalPlans;
  final List<AppTransaction> allTransactions;
  final Future<bool> Function(InvestmentPlan plan, {InvestmentPlan? replace}) onUpsertPlan;
  final Future<bool> Function(InvestmentPlan plan) onRemovePlan;
  final Future<void> Function() onRefreshPlans;

  @override
  State<NgmyAdminInvestTab> createState() => _NgmyAdminInvestTabState();
}

class _NgmyAdminInvestTabState extends State<NgmyAdminInvestTab> {
  bool _refreshing = false;
  String? _busyPlanKey;

  int get _pendingInvestDeposits => widget.allTransactions
      .where((t) =>
          t.type == TransactionType.deposit &&
          t.status == TransactionStatus.pending &&
          isInvestmentRequestDetails(t.sourceDetails))
      .length;

  Future<void> _refresh() async {
    if (_refreshing) return;
    setState(() => _refreshing = true);
    try {
      await widget.onRefreshPlans();
    } finally {
      if (mounted) setState(() => _refreshing = false);
    }
  }

  String _planKey(InvestmentPlan p) => '${p.name}|${p.price.toStringAsFixed(2)}';

  Future<void> _showEditor({InvestmentPlan? existing}) async {
    final isEdit = existing != null;
    final nameC = TextEditingController(text: existing?.name ?? '');
    final priceC = TextEditingController(text: existing != null ? existing.price.toString() : '');
    final isDark = widget.isDark;
    await showDialog<void>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setDlg) {
          final price = double.tryParse(priceC.text.trim()) ?? 0;
          final daily = price * InvestmentPlan.fixedRoi;
          final total = daily * InvestmentPlan.workDays;
          return AlertDialog(
            title: Text(isEdit ? 'Edit plan' : 'New investment plan'),
            content: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(controller: nameC, decoration: const InputDecoration(labelText: 'Plan name')),
                  const SizedBox(height: 10),
                  TextField(controller: priceC, keyboardType: const TextInputType.numberWithOptions(decimal: true), onChanged: (_) => setDlg(() {}), decoration: const InputDecoration(labelText: 'Price (\$)')),
                  const SizedBox(height: 12),
                  Text('ROI fixed 2.86% · Daily \$${formatCurrency(daily)} · Total \$${formatCurrency(total)}', style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
                ],
              ),
            ),
            actions: [
              TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
              FilledButton(
                onPressed: () async {
                  final name = nameC.text.trim();
                  final p = double.tryParse(priceC.text.trim());
                  if (name.isEmpty || p == null || p <= 0) {
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a valid name and price.')));
                    return;
                  }
                  final plan = InvestmentPlan(name: name, price: p)..applyFixedRoi();
                  Navigator.pop(ctx);
                  setState(() => _busyPlanKey = _planKey(plan));
                  final ok = await widget.onUpsertPlan(plan, replace: existing);
                  if (mounted) {
                    setState(() => _busyPlanKey = null);
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(ok
                            ? 'Plan saved to cloud for all users.'
                            : ngmySupabaseSaveFailureMessage(_ngmyLastSupabasePersistError)),
                        backgroundColor: ok ? const Color(0xFF00B25A) : Colors.orange,
                        duration: Duration(seconds: ok ? 3 : 8),
                      ),
                    );
                  }
                },
                child: Text(isEdit ? 'Save' : 'Create'),
              ),
            ],
          );
        },
      ),
    );
  }

  Future<void> _confirmDelete(InvestmentPlan plan) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('Remove plan?'),
        content: Text('Remove "${plan.name}" (\$${formatCurrency(plan.price)}) from the marketplace?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(style: FilledButton.styleFrom(backgroundColor: Colors.red), onPressed: () => Navigator.pop(c, true), child: const Text('Remove')),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _busyPlanKey = _planKey(plan));
    final saved = await widget.onRemovePlan(plan);
    if (mounted) {
      setState(() => _busyPlanKey = null);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(saved ? 'Plan removed from cloud.' : 'Removed locally — sync when online.'), backgroundColor: saved ? const Color(0xFF00B25A) : Colors.orange),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = widget.isDark;
    final frameBorder = isDark ? const Color(0xFF4B5563) : const Color(0xFFD5DCE5);
    final plans = List<InvestmentPlan>.from(widget.globalPlans)..sort((a, b) => a.price.compareTo(b.price));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
          child: Row(
            children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Investment plans sync to Supabase for every user.', style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
                  if (_pendingInvestDeposits > 0)
                    Text('$_pendingInvestDeposits pending investment deposit(s) — approve in Wallet tab.', style: const TextStyle(fontSize: 11, color: Colors.orange, fontWeight: FontWeight.w700)),
                ]),
              ),
              IconButton(
                tooltip: 'Refresh plans from cloud',
                onPressed: _refreshing ? null : _refresh,
                icon: _refreshing
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                    : Icon(Icons.cloud_sync_rounded, color: isDark ? Colors.white70 : Colors.black54),
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16),
          child: SizedBox(
            width: double.infinity,
            child: ElevatedButton.icon(
              icon: const Icon(Icons.add_rounded),
              label: const Text('CREATE PLAN'),
              style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 50)),
              onPressed: () => _showEditor(),
            ),
          ),
        ),
        Expanded(
          child: plans.isEmpty
              ? Center(child: Text('No plans yet. Create one above.', style: TextStyle(color: isDark ? Colors.white54 : Colors.black54)))
              : ListView.builder(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                  itemCount: plans.length,
                  itemBuilder: (_, i) {
                    final pl = plans[i]..applyFixedRoi();
                    final key = _planKey(pl);
                    final busy = _busyPlanKey == key;
                    return Container(
                      margin: const EdgeInsets.only(bottom: 12),
                      decoration: BoxDecoration(
                        color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: frameBorder),
                      ),
                      child: ListTile(
                        title: Text(pl.name, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black)),
                        subtitle: Text(
                          '\$${formatCurrency(pl.price)} · Daily \$${formatCurrency(pl.dailyIncome)} · 261d \$${formatCurrency(pl.totalReturn)}',
                          style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                        ),
                        trailing: busy
                            ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2))
                            : Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  IconButton(icon: const Icon(Icons.edit_outlined), onPressed: () => _showEditor(existing: pl)),
                                  IconButton(icon: const Icon(Icons.delete_outline, color: Colors.red), onPressed: () => _confirmDelete(pl)),
                                ],
                              ),
                      ),
                    );
                  },
                ),
        ),
      ],
    );
  }
}

/// Admin Creator tab — Terms & Conditions and Privacy Policy editor.
class NgmyAdminLegalTab extends StatefulWidget {
  const NgmyAdminLegalTab({
    super.key,
    required this.isDark,
    required this.terms,
    required this.privacy,
    required this.onSave,
  });

  final bool isDark;
  final String terms;
  final String privacy;
  final Future<bool> Function(String terms, String privacy) onSave;

  @override
  State<NgmyAdminLegalTab> createState() => _NgmyAdminLegalTabState();
}

class _NgmyAdminLegalTabState extends State<NgmyAdminLegalTab> {
  late final TextEditingController _termsC;
  late final TextEditingController _privacyC;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _termsC = TextEditingController(text: widget.terms);
    _privacyC = TextEditingController(text: widget.privacy);
  }

  @override
  void didUpdateWidget(covariant NgmyAdminLegalTab oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.terms != widget.terms && _termsC.text != widget.terms) {
      _termsC.text = widget.terms;
    }
    if (oldWidget.privacy != widget.privacy && _privacyC.text != widget.privacy) {
      _privacyC.text = widget.privacy;
    }
  }

  @override
  void dispose() {
    _termsC.dispose();
    _privacyC.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    if (_saving) return;
    final terms = _termsC.text.trim();
    final privacy = _privacyC.text.trim();
    setState(() => _saving = true);
    try {
      final saved = await widget.onSave(terms, privacy);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(saved
              ? 'Terms & Privacy saved to database for all users.'
              : ngmySupabaseSaveFailureMessage(_ngmyLastSupabasePersistError)),
          backgroundColor: saved ? const Color(0xFF00B25A) : Colors.orange,
          duration: const Duration(seconds: 8),
        ),
      );
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  Widget _editorBox(String label, TextEditingController controller) {
    final isDark = widget.isDark;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFD1D5DB)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(isDark ? 0.22 : 0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(
              fontWeight: FontWeight.w800,
              fontSize: 12,
              color: isDark ? Colors.white70 : const Color(0xFF334155),
            ),
          ),
          const SizedBox(height: 10),
          TextField(
            controller: controller,
            maxLines: 6,
            style: TextStyle(color: isDark ? Colors.white : Colors.black),
            decoration: InputDecoration(
              filled: true,
              fillColor: isDark ? const Color(0xFF0F111A) : Colors.white,
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(12),
                borderSide: BorderSide(color: isDark ? Colors.white24 : const Color(0xFFD1D5DB)),
              ),
              focusedBorder: const OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(12)),
                borderSide: BorderSide(color: Color(0xFF3B82F6), width: 1.4),
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = widget.isDark;
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Legal Content Editor',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: isDark ? Colors.white : Colors.black),
          ),
          const SizedBox(height: 8),
          Text(
            'Changes sync to Supabase so every user sees updated Terms & Privacy in Profile.',
            style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54),
          ),
          const SizedBox(height: 20),
          _editorBox('Terms & Conditions', _termsC),
          const SizedBox(height: 20),
          _editorBox('Privacy Policy', _privacyC),
          const SizedBox(height: 30),
          ElevatedButton(
            onPressed: _saving ? null : _save,
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF00B25A),
              foregroundColor: Colors.white,
              minimumSize: const Size(double.infinity, 55),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
            ),
            child: _saving
                ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('SAVE ALL CHANGES'),
          ),
        ],
      ),
    );
  }
}
