import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'main.dart';
import 'ngmy_account_snapshot.dart';
import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_local_deposit_qr.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_local_growth_income_stash.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Backup/restore for the Growth Income copy behind the wifi icon.
/// [user]/[transactions] are that copy's current state (not the live
/// database account); [realEmail] is the signed-in account's real email,
/// used only to locate the right local storage slot.
Future<void> showNgmyAccountSnapshotPage(
  BuildContext context, {
  required String realEmail,
  required UserData user,
  required List<AppTransaction> transactions,
  required int walletStateRevision,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyAccountSnapshotPage(
      realEmail: realEmail,
      user: user,
      transactions: transactions,
      walletStateRevision: walletStateRevision,
    ),
    fullscreenDialog: true,
  );
}

class NgmyAccountSnapshotPage extends StatefulWidget {
  const NgmyAccountSnapshotPage({
    super.key,
    required this.realEmail,
    required this.user,
    required this.transactions,
    required this.walletStateRevision,
  });

  final String realEmail;
  final UserData user;
  final List<AppTransaction> transactions;
  final int walletStateRevision;

  @override
  State<NgmyAccountSnapshotPage> createState() => _NgmyAccountSnapshotPageState();
}

class _NgmyAccountSnapshotPageState extends State<NgmyAccountSnapshotPage> {
  static const Color _accent = WorksheetPalette.green;
  late UserData _user;
  late List<AppTransaction> _transactions;
  late int _walletStateRevision;
  bool _working = false;
  String? _statusMessage;

  @override
  void initState() {
    super.initState();
    _user = widget.user;
    _transactions = List<AppTransaction>.from(widget.transactions);
    _walletStateRevision = widget.walletStateRevision;
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _withWork(Future<void> Function() action, {String? busyLabel}) async {
    if (_working) return;
    setState(() {
      _working = true;
      _statusMessage = busyLabel;
    });
    try {
      await action();
    } finally {
      if (mounted) {
        setState(() {
          _working = false;
          _statusMessage = null;
        });
      }
    }
  }

  Future<void> _refreshLocalState() async {
    final loaded = await NgmyLocalGrowthIncomeStore.load(widget.realEmail, _user);
    if (!mounted) return;
    setState(() {
      _user = loaded.user;
      _transactions = List<AppTransaction>.from(loaded.transactions);
      _walletStateRevision = loaded.walletStateRevision;
    });
  }

  NgmyAccountSnapshot _currentSnapshot() {
    return NgmyAccountSnapshot.fromUser(
      _user,
      _transactions,
      ownerRealEmail: widget.realEmail,
      walletStateRevision: _walletStateRevision,
    );
  }

  Future<({String qrPayload, String code})?> _createLiveQrBackup() async {
    await _refreshLocalState();
    if (!mounted) return null;
    return NgmyLocalSnapshotStash.createLive(
      ownerEmail: widget.realEmail,
      snapshotJson: _currentSnapshot().toJson(),
    );
  }

  Future<void> _exportFile() async {
    await _withWork(() async {
      await _refreshLocalState();
      final msg = await NgmyAccountSnapshot.exportToFile(
        _user,
        _transactions,
        ownerRealEmail: widget.realEmail,
        walletStateRevision: _walletStateRevision,
      );
      _toast(msg);
    }, busyLabel: 'Preparing download…');
  }

  Future<void> _showQr() async {
    await _withWork(() async {
      final stashed = await _createLiveQrBackup();
      if (stashed == null) {
        _toast('Could not create a QR right now. Check your connection and try again.');
        return;
      }
      if (!mounted) return;
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          fullscreenDialog: true,
          builder: (_) => _NgmyAccountSnapshotQrPage(
            qrPayload: stashed.qrPayload,
            code: stashed.code,
            realEmail: widget.realEmail,
            seedUser: _user,
          ),
        ),
      );
    }, busyLabel: 'Creating QR code…');
  }

  Future<void> _enterCode() async {
    final code = await _showEnterCodeDialog(context);
    if (code == null || code.trim().isEmpty) return;
    await _withWork(() async {
      if (NgmyLocalDepositQr.looksLikeCode(code)) {
        final handledDeposit = await _redeemDepositByCode(code.trim());
        if (handledDeposit) return;
      }
      final result = await NgmyAccountSnapshot.resolveForRestore(code, widget.realEmail);
      switch (result.outcome) {
        case NgmySnapshotResolveOutcome.wrongAccount:
          _toast(NgmyAccountSnapshot.ownershipBlockMessage(widget.realEmail));
          return;
        case NgmySnapshotResolveOutcome.notFound:
          _toast('That code didn\'t match anything on your account. Double-check it and try again.');
          return;
        case NgmySnapshotResolveOutcome.staleBackup:
          _toast(NgmyAccountSnapshot.staleBackupBlockMessage());
          return;
        case NgmySnapshotResolveOutcome.foundLive:
          await _confirmRestore(result.snapshot!, allowLiveRestore: true);
          return;
        case NgmySnapshotResolveOutcome.found:
          await _confirmRestore(result.snapshot!);
      }
    }, busyLabel: 'Looking up code…');
  }

  Future<String?> _pickBackupText() async {
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: const ['json', 'ngmy'],
        withData: true,
      );
      final file = result?.files.first;
      if (file == null) return null;
      if (file.bytes != null && file.bytes!.isNotEmpty) {
        return String.fromCharCodes(file.bytes!);
      }
    } catch (_) {}
    return ngmyPickBackupJsonViaBrowser();
  }

  bool _isStaleBackup(NgmyAccountSnapshot snapshot) =>
      !NgmyAccountSnapshot.matchesCurrentWalletRevision(snapshot, _walletStateRevision);

  Future<void> _confirmRestore(NgmyAccountSnapshot snapshot, {bool allowLiveRestore = false}) async {
    await _refreshLocalState();
    if (!mounted) return;
    if (!NgmyAccountSnapshot.ownedByRealAccount(snapshot, widget.realEmail)) {
      _toast(NgmyAccountSnapshot.ownershipBlockMessage(widget.realEmail));
      return;
    }
    if (!allowLiveRestore && _isStaleBackup(snapshot)) {
      _toast(NgmyAccountSnapshot.staleBackupBlockMessage());
      return;
    }

    final keepsHistory = snapshot.transactions.isEmpty;
    final ok = await _showRestoreConfirmDialog(
      context,
      snapshot: snapshot,
      realEmail: widget.realEmail,
      keepsHistory: keepsHistory,
    );
    if (ok != true) return;
    final restoredUser = snapshot.toUserData(widget.realEmail);
    final transactions = keepsHistory ? _transactions : snapshot.transactions;
    await NgmyLocalGrowthIncomeStore.replace(
      widget.realEmail,
      restoredUser,
      transactions,
      walletStateRevision: snapshot.walletStateRevision,
    );
    if (!mounted) return;
    setState(() {
      _user = restoredUser;
      _transactions = List<AppTransaction>.from(transactions);
      _walletStateRevision = snapshot.walletStateRevision;
    });
    _toast('Restored your local Growth Income. Go back to see it updated.');
  }

  Future<void> _importFile() async {
    await _withWork(() async {
      final raw = await _pickBackupText();
      if (raw == null || raw.trim().isEmpty) return;
      final snapshot = NgmyAccountSnapshot.parse(raw);
      if (snapshot == null) {
        _toast('Could not read that backup file.');
        return;
      }
      if (!NgmyAccountSnapshot.ownedByRealAccount(snapshot, widget.realEmail)) {
        _toast(NgmyAccountSnapshot.ownershipBlockMessage(widget.realEmail));
        return;
      }
      await _confirmRestore(snapshot);
    }, busyLabel: 'Reading file…');
  }

  Future<void> _creditLocalDeposit(double amount) async {
    final txn = AppTransaction(
      id: 'local_qr_dep_${DateTime.now().microsecondsSinceEpoch}',
      userEmail: _user.email,
      amount: amount,
      type: TransactionType.deposit,
      method: PaymentMethod.system,
      sourceDetails: 'Admin deposit (\$${formatCurrency(amount)})',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    );
    NgmyLocalGrowthIncomeStore.applyTransaction(_user, txn);
    final transactions = [..._transactions, txn];
    await NgmyLocalGrowthIncomeStore.save(widget.realEmail, _user, transactions, bumpWalletRevision: true);
    await _refreshLocalState();
    if (!mounted) return;
    _toast('Deposited \$${formatCurrency(amount)} to your local wallet.');
  }

  Future<String?> _showDepositVerificationDialog(BuildContext context) {
    return showDialog<String>(
      context: context,
      barrierDismissible: true,
      builder: (ctx) {
        final c = TextEditingController();
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return AlertDialog(
          backgroundColor: isDark ? const Color(0xFF151B28) : Colors.white,
          title: const Text('Verification code', style: TextStyle(fontWeight: FontWeight.w900)),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Enter the verification code shown on your local deposit request. It must match what admin used for this QR.',
                style: TextStyle(fontSize: 13, color: isDark ? Colors.white70 : const Color(0xFF64748B), height: 1.4),
              ),
              const SizedBox(height: 14),
              TextField(
                controller: c,
                keyboardType: TextInputType.number,
                textAlign: TextAlign.center,
                decoration: InputDecoration(
                  labelText: 'Verification code',
                  filled: true,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
                autofocus: true,
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, c.text.trim()),
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
              child: const Text('Apply deposit'),
            ),
          ],
        );
      },
    );
  }

  Future<void> _applyDepositRedeemResult(NgmyLocalDepositRedeemResult result) async {
    if (result.success) {
      await _creditLocalDeposit(result.amount);
      return;
    }
    _toast(result.errorMessage ?? 'Could not apply deposit.');
  }

  Future<bool> _redeemDepositByCode(String code) async {
    await _refreshLocalState();
    if (!mounted) return true;
    final peek = await NgmyLocalDepositQr.peekCode(code: code, redeemerEmail: widget.realEmail);
    if (!peek.found) return false;
    if (peek.alreadyUsed) {
      _toast('This deposit code was already used.');
      return true;
    }
    if (peek.notConfigured) {
      _toast('This deposit is not assigned to an account. Ask admin to recreate it with your email and verification code.');
      return true;
    }
    if (peek.wrongAccount) {
      _toast('This deposit is for another NGMY account.');
      return true;
    }
    if (!mounted) return true;
    final verificationCode = await _showDepositVerificationDialog(context);
    if (verificationCode == null || verificationCode.trim().isEmpty) return true;
    final result = await NgmyLocalDepositQr.redeemByCode(
      code: code,
      redeemerEmail: widget.realEmail,
      verificationCode: verificationCode.trim(),
      localTransactions: _transactions,
      localUserEmail: _user.email,
    );
    await _applyDepositRedeemResult(result);
    return true;
  }

  Future<void> _redeemDepositQr(String raw) async {
    await _refreshLocalState();
    if (!mounted) return;
    final peek = await NgmyLocalDepositQr.peekRaw(raw: raw, redeemerEmail: widget.realEmail);
    if (!peek.found) {
      _toast('That deposit QR is invalid or already used.');
      return;
    }
    if (peek.alreadyUsed) {
      _toast('This deposit code was already used.');
      return;
    }
    if (peek.notConfigured) {
      _toast('This deposit is not assigned to an account. Ask admin to recreate it with your email and verification code.');
      return;
    }
    if (peek.wrongAccount) {
      _toast('This deposit is for another NGMY account.');
      return;
    }
    if (!mounted) return;
    final verificationCode = await _showDepositVerificationDialog(context);
    if (verificationCode == null || verificationCode.trim().isEmpty) return;
    final result = await NgmyLocalDepositQr.redeem(
      raw: raw,
      redeemerEmail: widget.realEmail,
      verificationCode: verificationCode.trim(),
      localTransactions: _transactions,
      localUserEmail: _user.email,
    );
    await _applyDepositRedeemResult(result);
  }

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      _toast('Use a phone camera to scan, or upload the backup file instead.');
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute<String>(
        fullscreenDialog: true,
        builder: (_) => const _NgmyAccountSnapshotScanPage(),
      ),
    );
    if (raw == null || raw.trim().isEmpty) return;

    if (raw.trim().startsWith('$kNgmyLocalDepositQrPrefix|')) {
      await _withWork(() => _redeemDepositQr(raw.trim()), busyLabel: 'Applying deposit…');
      return;
    }

    await _withWork(() async {
      final result = await NgmyAccountSnapshot.resolveForRestore(raw, widget.realEmail);
      switch (result.outcome) {
        case NgmySnapshotResolveOutcome.foundLive:
          await _confirmRestore(result.snapshot!, allowLiveRestore: true);
          return;
        case NgmySnapshotResolveOutcome.wrongAccount:
          _toast(NgmyAccountSnapshot.ownershipBlockMessage(widget.realEmail));
          return;
        case NgmySnapshotResolveOutcome.notFound:
          _toast('Could not read that QR code for your account.');
          return;
        case NgmySnapshotResolveOutcome.staleBackup:
          _toast(NgmyAccountSnapshot.staleBackupBlockMessage());
          return;
        case NgmySnapshotResolveOutcome.found:
          await _confirmRestore(result.snapshot!);
      }
    }, busyLabel: 'Loading…');
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
              children: [
                Row(
                  children: [
                    InkWell(
                      onTap: () => Navigator.pop(context),
                      customBorder: const CircleBorder(),
                      child: Container(
                        width: 38,
                        height: 38,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: isDark ? Colors.white12 : Colors.black.withValues(alpha: 0.06), shape: BoxShape.circle),
                        child: Icon(Icons.arrow_back_ios_new_rounded, color: titleColor, size: 16),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Text('Backup & Restore', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 28, color: titleColor, letterSpacing: -0.5)),
                const SizedBox(height: 8),
                Text(
                  'Keep a copy of your local Growth Income on this device, or bring your own backup back. '
                  'You can only restore data from the same NGMY account — not someone else\'s.',
                  style: TextStyle(fontSize: 13.5, height: 1.4, color: muted, fontWeight: FontWeight.w500),
                ),
                const SizedBox(height: 28),
                Row(
                  children: [
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.file_download_rounded,
                        label: 'Download',
                        colors: const [Color(0xFF22C55E), Color(0xFF15803D)],
                        onTap: _working ? null : _exportFile,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.qr_code_2_rounded,
                        label: 'Show QR',
                        colors: const [Color(0xFF6366F1), Color(0xFF4338CA)],
                        onTap: _working ? null : _showQr,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.file_upload_rounded,
                        label: 'Upload',
                        colors: const [Color(0xFFF59E0B), Color(0xFFB45309)],
                        onTap: _working ? null : _importFile,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.qr_code_scanner_rounded,
                        label: 'Scan QR',
                        colors: const [Color(0xFF06B6D4), Color(0xFF0E7490)],
                        onTap: _working ? null : _scanQr,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                _SnapshotWideCard(
                  icon: Icons.pin_rounded,
                  label: 'Enter Code',
                  colors: const [Color(0xFFEC4899), Color(0xFFBE185D)],
                  onTap: _working ? null : _enterCode,
                ),
                const SizedBox(height: 28),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white.withValues(alpha: 0.06) : WorksheetPalette.green.withValues(alpha: 0.08),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(Icons.bolt_rounded, size: 18, color: WorksheetPalette.green),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          'Download a file, show a QR, or get a 6-character code to save where you are now. '
                          'Upload, scan, or type that code later to bring it back — on this device or another. '
                          'Scan also accepts admin deposit QR codes, or type the admin\'s 6-digit deposit code under Enter Code. '
                          'Only your own account can restore a backup, and only if you have not used the wallet since saving. '
                          'Never touches your real, database-backed wallet.',
                          style: TextStyle(fontSize: 12, height: 1.45, color: muted, fontWeight: FontWeight.w600),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            if (_working)
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: Material(
                  elevation: 8,
                  color: isDark ? const Color(0xFF151B28) : Colors.white,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                    child: Row(
                      children: [
                        const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: _accent)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(
                            _statusMessage ?? 'Working…',
                            style: TextStyle(fontWeight: FontWeight.w700, color: titleColor, fontSize: 13),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _SnapshotGridCard extends StatelessWidget {
  const _SnapshotGridCard({required this.icon, required this.label, required this.colors, required this.onTap});

  final IconData icon;
  final String label;
  final List<Color> colors;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      borderRadius: BorderRadius.circular(22),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Container(
          height: 140,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors, begin: Alignment.topLeft, end: Alignment.bottomRight),
            borderRadius: BorderRadius.circular(22),
            boxShadow: [BoxShadow(color: colors.last.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 8))],
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), shape: BoxShape.circle),
                child: Icon(icon, color: Colors.white, size: 30),
              ),
              const SizedBox(height: 12),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}

class _SnapshotWideCard extends StatelessWidget {
  const _SnapshotWideCard({required this.icon, required this.label, required this.colors, required this.onTap});

  final IconData icon;
  final String label;
  final List<Color> colors;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      borderRadius: BorderRadius.circular(22),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 20),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors, begin: Alignment.topLeft, end: Alignment.bottomRight),
            borderRadius: BorderRadius.circular(22),
            boxShadow: [BoxShadow(color: colors.last.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 8))],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), shape: BoxShape.circle),
                child: Icon(icon, color: Colors.white, size: 24),
              ),
              const SizedBox(width: 14),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}

class _NgmyAccountSnapshotQrPage extends StatefulWidget {
  const _NgmyAccountSnapshotQrPage({
    required this.qrPayload,
    required this.code,
    required this.realEmail,
    required this.seedUser,
  });

  final String qrPayload;
  final String code;
  final String realEmail;
  final UserData seedUser;

  @override
  State<_NgmyAccountSnapshotQrPage> createState() => _NgmyAccountSnapshotQrPageState();
}

class _NgmyAccountSnapshotQrPageState extends State<_NgmyAccountSnapshotQrPage> {
  late String _qrPayload = widget.qrPayload;
  late String _code = widget.code;
  Timer? _refreshTimer;

  @override
  void initState() {
    super.initState();
    _refreshTimer = Timer.periodic(const Duration(seconds: 5), (_) => unawaited(_refreshLiveQr()));
  }

  @override
  void dispose() {
    _refreshTimer?.cancel();
    super.dispose();
  }

  Future<void> _refreshLiveQr() async {
    final loaded = await NgmyLocalGrowthIncomeStore.load(widget.realEmail, widget.seedUser);
    final snapshot = NgmyAccountSnapshot.fromUser(
      loaded.user,
      loaded.transactions,
      ownerRealEmail: widget.realEmail,
      walletStateRevision: loaded.walletStateRevision,
    );
    final updated = await NgmyLocalSnapshotStash.createLive(
      ownerEmail: widget.realEmail,
      snapshotJson: snapshot.toJson(),
    );
    if (!mounted || updated == null) return;
    setState(() {
      _qrPayload = updated.qrPayload;
      _code = updated.code;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final titleColor = isDark ? Colors.white : Colors.black87;

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Restore QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Expanded(
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: card,
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const SizedBox(height: 8),
                    NgmyBrandedQrWidget(data: _qrPayload, large: true),
                    const SizedBox(height: 18),
                    Text('Code: $_code', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
                    const SizedBox(height: 8),
                    InkWell(
                      onTap: () {
                        Clipboard.setData(ClipboardData(text: _code));
                        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Code $_code copied')));
                      },
                      borderRadius: BorderRadius.circular(20),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          color: WorksheetPalette.green.withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(Icons.copy_rounded, size: 14, color: WorksheetPalette.green),
                            const SizedBox(width: 6),
                            Text('Copy code', style: TextStyle(color: WorksheetPalette.green, fontWeight: FontWeight.w800, fontSize: 12)),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      'Scan this QR, or type the code, on another device signed into the same NGMY account.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green, minimumSize: const Size(double.infinity, 48)),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NgmyAccountSnapshotScanPage extends StatefulWidget {
  const _NgmyAccountSnapshotScanPage();

  @override
  State<_NgmyAccountSnapshotScanPage> createState() => _NgmyAccountSnapshotScanPageState();
}

class _NgmyAccountSnapshotScanPageState extends State<_NgmyAccountSnapshotScanPage> {
  final MobileScannerController _controller = MobileScannerController();
  bool _handled = false;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text('Scan QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: MobileScanner(
        controller: _controller,
        onDetect: (capture) {
          if (_handled) return;
          for (final barcode in capture.barcodes) {
            final raw = barcode.rawValue?.trim();
            if (raw == null || raw.isEmpty) continue;
            final isOurs = raw.startsWith(kNgmySnapshotQrPrefix) ||
                raw.startsWith('$kNgmyLocalSnapshotStashPrefix|') ||
                raw.startsWith('$kNgmyLocalSnapshotLivePrefix|') ||
                raw.startsWith('$kNgmyLocalDepositQrPrefix|');
            if (!isOurs) continue;
            _handled = true;
            Navigator.pop(context, raw);
            return;
          }
        },
      ),
    );
  }
}

Future<String?> _showEnterCodeDialog(BuildContext context) {
  return showDialog<String>(
    context: context,
    barrierDismissible: true,
    barrierColor: Colors.black54,
    builder: (ctx) => const _EnterCodeDialog(),
  );
}

Future<bool?> _showRestoreConfirmDialog(
  BuildContext context, {
  required NgmyAccountSnapshot snapshot,
  required String realEmail,
  required bool keepsHistory,
}) {
  return showDialog<bool>(
    context: context,
    barrierDismissible: true,
    barrierColor: Colors.black54,
    builder: (ctx) => _RestoreSnapshotDialog(
      snapshot: snapshot,
      realEmail: realEmail,
      keepsHistory: keepsHistory,
    ),
  );
}

class _RestoreSnapshotDialog extends StatelessWidget {
  const _RestoreSnapshotDialog({
    required this.snapshot,
    required this.realEmail,
    required this.keepsHistory,
  });

  final NgmyAccountSnapshot snapshot;
  final String realEmail;
  final bool keepsHistory;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final border = isDark ? Colors.white24 : const Color(0xFFD1D5DB);
    final exported = snapshot.exportedAt;
    final dateLabel = '${exported.month}/${exported.day}/${exported.year}';
    final investment = snapshot.activeInvestment?.name;

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 380),
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: card,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
            boxShadow: [
              BoxShadow(
                color: WorksheetPalette.green.withValues(alpha: 0.16),
                blurRadius: 36,
                offset: const Offset(0, 14),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 58,
                  height: 58,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFF22C55E), Color(0xFF059669)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(18),
                    boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 16, offset: Offset(0, 6))],
                  ),
                  child: const Icon(Icons.restore_rounded, color: Colors.white, size: 30),
                ),
                const SizedBox(height: 16),
                Text(
                  'Restore local backup?',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: fg, fontSize: 21, fontWeight: FontWeight.w900, letterSpacing: -0.3),
                ),
                const SizedBox(height: 8),
                Text(
                  'This replaces your local Growth Income wallet on this device.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: muted, fontSize: 13, height: 1.45),
                ),
                const SizedBox(height: 18),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB),
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.22)),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      _RestoreDetailRow(label: 'Account', value: realEmail.trim(), muted: muted, fg: fg),
                      const SizedBox(height: 10),
                      _RestoreDetailRow(
                        label: 'Balance',
                        value: '\$${formatCurrency(snapshot.accountBalance)}',
                        muted: muted,
                        fg: fg,
                      ),
                      if (investment != null && investment.trim().isNotEmpty) ...[
                        const SizedBox(height: 10),
                        _RestoreDetailRow(label: 'Investment', value: investment, muted: muted, fg: fg),
                      ],
                      const SizedBox(height: 10),
                      _RestoreDetailRow(label: 'Saved on', value: dateLabel, muted: muted, fg: fg),
                      const SizedBox(height: 10),
                      _RestoreDetailRow(
                        label: 'Wallet history',
                        value: keepsHistory ? 'Keeps current history' : 'Restored from backup',
                        muted: muted,
                        fg: fg,
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 14),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF59E0B).withValues(alpha: isDark ? 0.14 : 0.12),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.35)),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(Icons.lock_outline_rounded, size: 16, color: isDark ? const Color(0xFFFBBF24) : const Color(0xFFB45309)),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          'Only backups from this same NGMY account can be restored, and only if you have not used the wallet since saving.',
                          style: TextStyle(
                            fontSize: 11.5,
                            height: 1.4,
                            fontWeight: FontWeight.w700,
                            color: isDark ? const Color(0xFFFDE68A) : const Color(0xFF92400E),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(context, false),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: fg,
                          side: BorderSide(color: border),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      flex: 2,
                      child: FilledButton(
                        onPressed: () => Navigator.pop(context, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: WorksheetPalette.green,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Restore now', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _RestoreDetailRow extends StatelessWidget {
  const _RestoreDetailRow({
    required this.label,
    required this.value,
    required this.muted,
    required this.fg,
  });

  final String label;
  final String value;
  final Color muted;
  final Color fg;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          width: 92,
          child: Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: muted)),
        ),
        Expanded(
          child: Text(value, style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w800, color: fg, height: 1.35)),
        ),
      ],
    );
  }
}

class _EnterCodeDialog extends StatefulWidget {
  const _EnterCodeDialog();

  @override
  State<_EnterCodeDialog> createState() => _EnterCodeDialogState();
}

class _EnterCodeDialogState extends State<_EnterCodeDialog> {
  final _controller = TextEditingController();
  final _focus = FocusNode();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _focus.requestFocus();
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    _focus.dispose();
    super.dispose();
  }

  void _submit() => Navigator.pop(context, _controller.text.trim());

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final fg = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final fieldFill = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final border = isDark ? Colors.white24 : const Color(0xFFD1D5DB);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 360),
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: card,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
            boxShadow: [BoxShadow(color: WorksheetPalette.green.withValues(alpha: 0.18), blurRadius: 32, offset: const Offset(0, 12))],
          ),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFFBE185D)], begin: Alignment.topLeft, end: Alignment.bottomRight),
                    borderRadius: BorderRadius.circular(18),
                    boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 16, offset: Offset(0, 6))],
                  ),
                  child: const Icon(Icons.pin_rounded, color: Colors.white, size: 28),
                ),
                const SizedBox(height: 16),
                Text('Enter restore code', textAlign: TextAlign.center, style: TextStyle(color: fg, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: -0.3)),
                const SizedBox(height: 8),
                Text(
                  'Type the 6-character code shown under the QR on the other device.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: muted, fontSize: 13, height: 1.45),
                ),
                const SizedBox(height: 22),
                TextField(
                  controller: _controller,
                  focusNode: _focus,
                  maxLength: 6,
                  textAlign: TextAlign.center,
                  textCapitalization: TextCapitalization.characters,
                  autocorrect: false,
                  enableSuggestions: false,
                  style: TextStyle(color: fg, fontSize: 28, fontWeight: FontWeight.w800, letterSpacing: 8),
                  inputFormatters: [
                    FilteringTextInputFormatter.allow(RegExp(r'[A-Za-z0-9]')),
                    TextInputFormatter.withFunction(
                      (oldValue, newValue) => newValue.copyWith(text: newValue.text.toUpperCase()),
                    ),
                  ],
                  decoration: InputDecoration(
                    counterText: '',
                    hintText: 'A3K9P2',
                    hintStyle: TextStyle(color: muted.withValues(alpha: 0.45), fontSize: 28, fontWeight: FontWeight.w700, letterSpacing: 8),
                    filled: true,
                    fillColor: fieldFill,
                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 18),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: border)),
                    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: WorksheetPalette.green, width: 2)),
                  ),
                  onSubmitted: (_) => _submit(),
                ),
                const SizedBox(height: 22),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(context),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: fg,
                          side: BorderSide(color: border),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      flex: 2,
                      child: FilledButton(
                        onPressed: _submit,
                        style: FilledButton.styleFrom(
                          backgroundColor: WorksheetPalette.green,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Restore', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
