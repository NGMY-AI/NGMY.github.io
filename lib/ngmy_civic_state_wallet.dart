import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_registry_gate.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_nav.dart';

/// Bright animated pin that opens Registry Backup — easy to see, framed lights.
class NgmyCivicBackupPinButton extends StatefulWidget {
  const NgmyCivicBackupPinButton({super.key, required this.onPressed});

  final VoidCallback onPressed;

  @override
  State<NgmyCivicBackupPinButton> createState() => _NgmyCivicBackupPinButtonState();
}

class _NgmyCivicBackupPinButtonState extends State<NgmyCivicBackupPinButton>
    with SingleTickerProviderStateMixin {
  late final AnimationController _spin =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Registry Backup',
      child: GestureDetector(
        onTap: widget.onPressed,
        child: AnimatedBuilder(
          animation: _spin,
          builder: (context, _) {
            return CustomPaint(
              painter: _BackupPinFramePainter(t: _spin.value),
              child: Container(
                width: 28,
                height: 28,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFFEEF2FF), Color(0xFFE0E7FF)],
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF6366F1).withValues(alpha: 0.35),
                      blurRadius: 6,
                      offset: const Offset(0, 2),
                    ),
                  ],
                ),
                child: const Icon(Icons.pin_rounded, size: 15, color: Color(0xFF4F46E5)),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _BackupPinFramePainter extends CustomPainter {
  _BackupPinFramePainter({required this.t});
  final double t;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(
      Rect.fromLTWH(0.8, 0.8, size.width - 1.6, size.height - 1.6),
      const Radius.circular(8),
    );
    final path = Path()..addRRect(r);
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.6
        ..color = const Color(0xFF818CF8).withValues(alpha: 0.55),
    );
    for (final metric in path.computeMetrics()) {
      final len = metric.length;
      final start = (t % 1.0) * len;
      final seg = metric.extractPath(start, start + len * 0.28);
      canvas.drawPath(
        seg,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 2.4
          ..strokeCap = StrokeCap.round
          ..shader = LinearGradient(
            colors: [
              const Color(0xFF6366F1).withValues(alpha: 0),
              const Color(0xFFA78BFA),
              const Color(0xFF38BDF8),
              const Color(0xFF6366F1).withValues(alpha: 0),
            ],
          ).createShader(seg.getBounds()),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _BackupPinFramePainter oldDelegate) => oldDelegate.t != t;
}

class NgmyCivicWalletTxn {
  const NgmyCivicWalletTxn({
    required this.id,
    required this.title,
    required this.amount,
    required this.at,
    required this.isInflow,
  });

  final String id;
  final String title;
  final double amount;
  final DateTime at;
  final bool isInflow;
}

class NgmyCivicWalletCategory {
  const NgmyCivicWalletCategory({
    required this.name,
    required this.amount,
    required this.color,
  });

  final String name;
  final double amount;
  final Color color;
}

class NgmyCivicWalletSpendingRow {
  const NgmyCivicWalletSpendingRow({
    required this.id,
    required this.description,
    required this.amount,
    required this.recordedAt,
    this.campaignId = '',
  });

  final String id;
  final String description;
  final double amount;
  final DateTime recordedAt;
  final String campaignId;
}

class NgmyCivicWalletSnapshot {
  const NgmyCivicWalletSnapshot({
    required this.state,
    required this.collected,
    required this.spent,
    required this.categories,
    required this.recent,
    required this.spendings,
  });

  final String state;
  final double collected;
  final double spent;
  final List<NgmyCivicWalletCategory> categories;
  final List<NgmyCivicWalletTxn> recent;
  final List<NgmyCivicWalletSpendingRow> spendings;

  double get available => math.max(0, collected - spent);
}

/// Normalize name / DOB / registry id for wallet unlock checks.
class NgmyCivicWalletIdentity {
  static String normalizeName(String raw) =>
      raw.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

  static String normalizeDob(String raw) {
    final t = raw.trim();
    final m = RegExp(r'^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$').firstMatch(t);
    if (m == null) return t.toLowerCase();
    final mm = m.group(1)!.padLeft(2, '0');
    final dd = m.group(2)!.padLeft(2, '0');
    final yyyy = m.group(3)!;
    return '$mm/$dd/$yyyy';
  }

  static String normalizeId(String raw) =>
      raw.trim().toUpperCase().replaceAll(RegExp(r'\s+'), '');

  static Map<String, dynamic>? findByName({
    required List<Map<String, dynamic>> members,
    required String state,
    required String fullName,
  }) {
    final want = normalizeName(fullName);
    if (want.isEmpty) return null;
    final st = state.trim().toLowerCase();
    for (final m in members) {
      final ms = (m['state'] ?? '').toString().trim().toLowerCase();
      if (st.isNotEmpty && ms.isNotEmpty && ms != st) continue;
      if (normalizeName((m['fullName'] ?? '').toString()) == want) return m;
    }
    return null;
  }

  static bool dobMatches(Map<String, dynamic> member, String dob) {
    final a = normalizeDob((member['dob'] ?? '').toString());
    final b = normalizeDob(dob);
    return a.isNotEmpty && b.isNotEmpty && a == b;
  }

  static bool idMatches(Map<String, dynamic> member, String registryId) {
    final a = normalizeId((member['registryId'] ?? '').toString());
    final b = normalizeId(registryId);
    return a.isNotEmpty && b.isNotEmpty && a == b;
  }
}

Future<void> openNgmyCivicStateWalletFlow({
  required BuildContext context,
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
  required List<Map<String, dynamic>> members,
  required NgmyCivicWalletSnapshot Function() snapshotBuilder,
  required bool canEdit,
  required Future<void> Function({
    required double amount,
    required String description,
  }) onAddSpending,
  required Future<void> Function({
    required String spendingId,
    required double amount,
    required String description,
  }) onUpdateSpending,
  required Future<void> Function(String spendingId) onDeleteSpending,
}) async {
  final unlocked = await NgmyNavigator.push<bool>(
    context,
    NgmyCivicStateWalletVerifyScreen(
      state: state,
      globalPin: globalPin,
      pinsByState: pinsByState,
      members: members,
    ),
    routeName: 'NgmyCivicStateWalletVerifyScreen',
  );
  if (unlocked != true || !context.mounted) return;
  await NgmyNavigator.push<void>(
    context,
    NgmyCivicStateWalletScreen(
      state: state,
      canEdit: canEdit,
      snapshotBuilder: snapshotBuilder,
      onAddSpending: onAddSpending,
      onUpdateSpending: onUpdateSpending,
      onDeleteSpending: onDeleteSpending,
    ),
    routeName: 'NgmyCivicStateWalletScreen',
  );
}

/// 4-step full-screen unlock: state PIN → real name → DOB → registry ID.
class NgmyCivicStateWalletVerifyScreen extends StatefulWidget {
  const NgmyCivicStateWalletVerifyScreen({
    super.key,
    required this.state,
    required this.globalPin,
    required this.pinsByState,
    required this.members,
  });

  final String state;
  final String globalPin;
  final Map<String, String> pinsByState;
  final List<Map<String, dynamic>> members;

  @override
  State<NgmyCivicStateWalletVerifyScreen> createState() => _NgmyCivicStateWalletVerifyScreenState();
}

class _NgmyCivicStateWalletVerifyScreenState extends State<NgmyCivicStateWalletVerifyScreen> {
  int _step = 0;
  final _pinC = TextEditingController();
  final _nameC = TextEditingController();
  final _dobC = TextEditingController();
  final _idC = TextEditingController();
  String? _error;
  Map<String, dynamic>? _matchedMember;

  static const _titles = [
    'State PIN',
    'Real name',
    'Date of birth',
    'Registry ID',
  ];
  static const _hints = [
    'Enter the Civic Registry PIN for this state to continue.',
    'Enter your full name exactly as it appears on your Civic Registry ID.',
    'Enter the date of birth that matches that registered name (MM/DD/YYYY).',
    'Enter your Civic Registry ID number to open the state wallet.',
  ];

  @override
  void dispose() {
    _pinC.dispose();
    _nameC.dispose();
    _dobC.dispose();
    _idC.dispose();
    super.dispose();
  }

  TextEditingController get _activeController {
    switch (_step) {
      case 0:
        return _pinC;
      case 1:
        return _nameC;
      case 2:
        return _dobC;
      default:
        return _idC;
    }
  }

  TextInputType get _keyboard {
    switch (_step) {
      case 0:
        return TextInputType.number;
      case 2:
        return TextInputType.datetime;
      case 3:
        return TextInputType.text;
      default:
        return TextInputType.name;
    }
  }

  bool get _obscure => _step == 0;

  void _submit() {
    setState(() => _error = null);
    final value = _activeController.text.trim();
    if (value.isEmpty) {
      setState(() => _error = 'This field is required.');
      return;
    }

    if (_step == 0) {
      final expected = civicRegistryEffectivePin(
        globalPin: widget.globalPin,
        pinsByState: widget.pinsByState,
        state: widget.state,
      );
      if (expected.isEmpty) {
        setState(() => _error = 'No state PIN is set yet. Ask a registry king or admin.');
        return;
      }
      if (value != expected) {
        setState(() => _error = 'Incorrect state PIN. Try again.');
        return;
      }
      setState(() => _step = 1);
      return;
    }

    if (_step == 1) {
      final member = NgmyCivicWalletIdentity.findByName(
        members: widget.members,
        state: widget.state,
        fullName: value,
      );
      if (member == null) {
        setState(() => _error = 'That name is not registered in ${widget.state}.');
        return;
      }
      setState(() {
        _matchedMember = member;
        _step = 2;
      });
      return;
    }

    if (_step == 2) {
      final member = _matchedMember;
      if (member == null) {
        setState(() {
          _error = 'Start over — name step was lost.';
          _step = 1;
        });
        return;
      }
      if (!NgmyCivicWalletIdentity.dobMatches(member, value)) {
        setState(() => _error = 'Date of birth does not match that registered name.');
        return;
      }
      setState(() => _step = 3);
      return;
    }

    final member = _matchedMember;
    if (member == null) {
      setState(() {
        _error = 'Start over — verification incomplete.';
        _step = 1;
      });
      return;
    }
    if (!NgmyCivicWalletIdentity.idMatches(member, value)) {
      setState(() => _error = 'Registry ID does not match that member.');
      return;
    }
    NgmyNavigator.pop(context, true);
  }

  @override
  Widget build(BuildContext context) {
    final progress = (_step + 1) / 4.0;
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          const _WalletMeshBackground(),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(22, 8, 22, 22),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      IconButton(
                        onPressed: () => NgmyNavigator.pop(context, false),
                        icon: const Icon(Icons.close_rounded, color: Colors.white),
                      ),
                      const Spacer(),
                      Text(
                        'Step ${_step + 1} of 4',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.85),
                          fontWeight: FontWeight.w700,
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(99),
                    child: LinearProgressIndicator(
                      value: progress,
                      minHeight: 6,
                      backgroundColor: Colors.white.withValues(alpha: 0.18),
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 28),
                  Text(
                    'Unlock state wallet',
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.75),
                      fontWeight: FontWeight.w600,
                      fontSize: 14,
                      letterSpacing: 0.4,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    _titles[_step],
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 34,
                      height: 1.05,
                      letterSpacing: -0.8,
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    _hints[_step],
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.78),
                      fontSize: 15,
                      height: 1.35,
                    ),
                  ),
                  const SizedBox(height: 28),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
                      child: Container(
                        padding: const EdgeInsets.fromLTRB(18, 20, 18, 18),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.16),
                          borderRadius: BorderRadius.circular(24),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Text(
                              widget.state,
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.7),
                                fontWeight: FontWeight.w700,
                                fontSize: 12,
                              ),
                            ),
                            const SizedBox(height: 12),
                            TextField(
                              controller: _activeController,
                              obscureText: _obscure,
                              keyboardType: _keyboard,
                              textInputAction: TextInputAction.done,
                              onSubmitted: (_) => _submit(),
                              style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w700,
                                fontSize: 18,
                              ),
                              cursorColor: Colors.white,
                              decoration: InputDecoration(
                                hintText: _step == 2 ? 'MM/DD/YYYY' : _titles[_step],
                                hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.45)),
                                filled: true,
                                fillColor: Colors.white.withValues(alpha: 0.10),
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(16),
                                  borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.25)),
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(16),
                                  borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.25)),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(16),
                                  borderSide: const BorderSide(color: Colors.white, width: 1.4),
                                ),
                              ),
                              inputFormatters: _step == 0
                                  ? [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(12)]
                                  : null,
                            ),
                            if (_error != null) ...[
                              const SizedBox(height: 12),
                              Text(
                                _error!,
                                style: const TextStyle(
                                  color: Color(0xFFFFCDD2),
                                  fontWeight: FontWeight.w700,
                                  fontSize: 13,
                                ),
                              ),
                            ],
                            const SizedBox(height: 18),
                            FilledButton(
                              onPressed: _submit,
                              style: FilledButton.styleFrom(
                                backgroundColor: Colors.black,
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(vertical: 16),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                              ),
                              child: Text(
                                _step == 3 ? 'Open wallet' : 'Continue',
                                style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 16),
                              ),
                            ),
                            if (_step > 0) ...[
                              const SizedBox(height: 8),
                              TextButton(
                                onPressed: () => setState(() {
                                  _error = null;
                                  _step -= 1;
                                  if (_step < 1) _matchedMember = null;
                                }),
                                child: Text(
                                  'Back',
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.85)),
                                ),
                              ),
                            ],
                          ],
                        ),
                      ),
                    ),
                  ),
                  const Spacer(),
                  Text(
                    'Money access requires all four checks. Wrong answers stop here.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.55),
                      fontSize: 12,
                      height: 1.35,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// POCKET-style glass state wallet — members view; registrars can edit spendings.
class NgmyCivicStateWalletScreen extends StatefulWidget {
  const NgmyCivicStateWalletScreen({
    super.key,
    required this.state,
    required this.canEdit,
    required this.snapshotBuilder,
    required this.onAddSpending,
    required this.onUpdateSpending,
    required this.onDeleteSpending,
  });

  final String state;
  final bool canEdit;
  final NgmyCivicWalletSnapshot Function() snapshotBuilder;
  final Future<void> Function({
    required double amount,
    required String description,
  }) onAddSpending;
  final Future<void> Function({
    required String spendingId,
    required double amount,
    required String description,
  }) onUpdateSpending;
  final Future<void> Function(String spendingId) onDeleteSpending;

  @override
  State<NgmyCivicStateWalletScreen> createState() => _NgmyCivicStateWalletScreenState();
}

class _NgmyCivicStateWalletScreenState extends State<NgmyCivicStateWalletScreen> {
  late NgmyCivicWalletSnapshot _snap;
  int _range = 2; // 0 day 1 week 2 month 3 year — display filter hint

  @override
  void initState() {
    super.initState();
    _snap = widget.snapshotBuilder();
  }

  void _reload() {
    setState(() => _snap = widget.snapshotBuilder());
  }

  String _money(double v) {
    final neg = v < 0;
    final abs = v.abs();
    final whole = abs.floor();
    final cents = ((abs - whole) * 100).round().clamp(0, 99);
    final core = '\$${whole.toString().replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+(?!\d))'), (m) => '${m[1]},')}.${cents.toString().padLeft(2, '0')}';
    return neg ? '-$core' : core;
  }

  Future<void> _promptSpending({NgmyCivicWalletSpendingRow? existing}) async {
    if (!widget.canEdit) return;
    final amountC = TextEditingController(
      text: existing == null ? '' : existing.amount.toStringAsFixed(existing.amount == existing.amount.roundToDouble() ? 0 : 2),
    );
    final noteC = TextEditingController(text: existing?.description ?? '');
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        return AlertDialog(
          backgroundColor: const Color(0xFF111827),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          title: Text(
            existing == null ? 'Add spending' : 'Update spending',
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900),
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: amountC,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                style: const TextStyle(color: Colors.white),
                decoration: _darkField('Amount (\$)'),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: noteC,
                style: const TextStyle(color: Colors.white),
                decoration: _darkField('What was it spent on?'),
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, true),
              style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: Colors.black),
              child: const Text('Save'),
            ),
          ],
        );
      },
    );
    if (ok != true || !mounted) return;
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    final note = noteC.text.trim();
    if (amount <= 0 || note.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid amount and what it was spent on.')),
      );
      return;
    }
    if (existing == null) {
      await widget.onAddSpending(amount: amount, description: note);
    } else {
      await widget.onUpdateSpending(spendingId: existing.id, amount: amount, description: note);
    }
    if (!mounted) return;
    _reload();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Wallet updated — members see it live.')),
    );
  }

  InputDecoration _darkField(String label) {
    return InputDecoration(
      labelText: label,
      labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.65)),
      filled: true,
      fillColor: Colors.white.withValues(alpha: 0.08),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.2)),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final spent = _snap.spent;
    final available = _snap.available;
    final budget = math.max(_snap.collected, spent + available);
    final spentRatio = budget <= 0 ? 0.0 : (spent / budget).clamp(0.0, 1.0);

    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          const _WalletMeshBackground(),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 16, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => NgmyNavigator.pop(context),
                        icon: const Icon(Icons.menu_rounded, color: Colors.white),
                      ),
                      const Spacer(),
                      Column(
                        children: [
                          Text(
                            'State case · ${_snap.state}',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.72),
                              fontWeight: FontWeight.w600,
                              fontSize: 12,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            'My balance',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.55),
                              fontSize: 11,
                            ),
                          ),
                          Text(
                            _money(available),
                            style: const TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w900,
                              fontSize: 34,
                              letterSpacing: -1,
                              height: 1.05,
                            ),
                          ),
                        ],
                      ),
                      const Spacer(),
                      if (widget.canEdit)
                        IconButton(
                          tooltip: 'Add spending',
                          onPressed: () => _promptSpending(),
                          icon: Container(
                            width: 40,
                            height: 40,
                            decoration: const BoxDecoration(
                              color: Colors.black,
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.add, color: Colors.white),
                          ),
                        )
                      else
                        const SizedBox(width: 48),
                    ],
                  ),
                ),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(18, 18, 18, 28),
                    children: [
                      _GlassCard(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              'Monthly Budget',
                              style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16, color: Color(0xFF0F172A)),
                            ),
                            const SizedBox(height: 14),
                            Row(
                              children: [
                                Expanded(
                                  child: _BudgetStat(
                                    label: 'Spent',
                                    value: '${_money(spent)} / ${_money(budget)}',
                                  ),
                                ),
                                Expanded(
                                  child: _BudgetStat(
                                    label: 'Available',
                                    value: _money(available),
                                    alignEnd: true,
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 14),
                            ClipRRect(
                              borderRadius: BorderRadius.circular(99),
                              child: LinearProgressIndicator(
                                value: spentRatio,
                                minHeight: 10,
                                backgroundColor: const Color(0xFFE2E8F0),
                                valueColor: const AlwaysStoppedAnimation(Color(0xFFF97316)),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 14),
                      _GlassCard(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                const Text(
                                  'Expenses',
                                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: Color(0xFF0F172A)),
                                ),
                                const SizedBox(width: 16),
                                Text(
                                  'Income',
                                  style: TextStyle(
                                    fontWeight: FontWeight.w700,
                                    fontSize: 16,
                                    color: Colors.black.withValues(alpha: 0.35),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 14),
                            Wrap(
                              spacing: 8,
                              children: [
                                for (var i = 0; i < 4; i++)
                                  ChoiceChip(
                                    label: Text(const ['Day', 'Week', 'Month', 'Year'][i]),
                                    selected: _range == i,
                                    onSelected: (_) => setState(() => _range = i),
                                    selectedColor: Colors.black,
                                    labelStyle: TextStyle(
                                      color: _range == i ? Colors.white : const Color(0xFF334155),
                                      fontWeight: FontWeight.w700,
                                      fontSize: 12,
                                    ),
                                    backgroundColor: const Color(0xFFF1F5F9),
                                    showCheckmark: false,
                                    padding: const EdgeInsets.symmetric(horizontal: 4),
                                  ),
                              ],
                            ),
                            const SizedBox(height: 18),
                            Row(
                              children: [
                                SizedBox(
                                  width: 140,
                                  height: 140,
                                  child: CustomPaint(
                                    painter: _DonutPainter(
                                      slices: _snap.categories
                                          .map((c) => _DonutSlice(c.amount, c.color))
                                          .toList(),
                                      centerLabel: 'Total',
                                      centerValue: _money(spent),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: Column(
                                    children: [
                                      if (_snap.categories.isEmpty)
                                        Text(
                                          'No spending recorded yet.',
                                          style: TextStyle(color: Colors.black.withValues(alpha: 0.45), fontSize: 13),
                                        )
                                      else
                                        for (final c in _snap.categories.take(6))
                                          Padding(
                                            padding: const EdgeInsets.only(bottom: 8),
                                            child: Row(
                                              children: [
                                                Container(
                                                  width: 8,
                                                  height: 8,
                                                  decoration: BoxDecoration(color: c.color, shape: BoxShape.circle),
                                                ),
                                                const SizedBox(width: 8),
                                                Expanded(
                                                  child: Text(
                                                    c.name,
                                                    style: const TextStyle(
                                                      fontWeight: FontWeight.w700,
                                                      fontSize: 12,
                                                      color: Color(0xFF334155),
                                                    ),
                                                    overflow: TextOverflow.ellipsis,
                                                  ),
                                                ),
                                                Text(
                                                  _money(c.amount),
                                                  style: const TextStyle(
                                                    fontWeight: FontWeight.w800,
                                                    fontSize: 12,
                                                    color: Color(0xFF0F172A),
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 14),
                      _GlassCard(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                const Expanded(
                                  child: Text(
                                    'Last Transactions',
                                    style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: Color(0xFF0F172A)),
                                  ),
                                ),
                                Icon(Icons.tune_rounded, size: 18, color: Colors.black.withValues(alpha: 0.35)),
                                const SizedBox(width: 10),
                                Icon(Icons.search_rounded, size: 18, color: Colors.black.withValues(alpha: 0.35)),
                              ],
                            ),
                            const SizedBox(height: 12),
                            if (_snap.recent.isEmpty)
                              Text(
                                'No wallet activity yet for ${_snap.state}.',
                                style: TextStyle(color: Colors.black.withValues(alpha: 0.45)),
                              )
                            else
                              for (final t in _snap.recent.take(8))
                                Padding(
                                  padding: const EdgeInsets.only(bottom: 12),
                                  child: Row(
                                    children: [
                                      Container(
                                        width: 40,
                                        height: 40,
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFF1F5F9),
                                          borderRadius: BorderRadius.circular(12),
                                        ),
                                        child: Icon(
                                          t.isInflow ? Icons.south_west_rounded : Icons.north_east_rounded,
                                          color: t.isInflow ? const Color(0xFF059669) : const Color(0xFFEA580C),
                                          size: 20,
                                        ),
                                      ),
                                      const SizedBox(width: 10),
                                      Expanded(
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              t.title,
                                              style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 14),
                                              overflow: TextOverflow.ellipsis,
                                            ),
                                            Text(
                                              t.isInflow ? 'Contribution' : 'Spending',
                                              style: TextStyle(
                                                color: Colors.black.withValues(alpha: 0.45),
                                                fontSize: 12,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Text(
                                        '${t.isInflow ? '+' : '-'}${_money(t.amount.abs())}',
                                        style: TextStyle(
                                          fontWeight: FontWeight.w900,
                                          color: t.isInflow ? const Color(0xFF059669) : const Color(0xFF0F172A),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                          ],
                        ),
                      ),
                      if (widget.canEdit) ...[
                        const SizedBox(height: 14),
                        _GlassCard(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  const Expanded(
                                    child: Text(
                                      'Registrar edits',
                                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: Color(0xFF0F172A)),
                                    ),
                                  ),
                                  TextButton.icon(
                                    onPressed: () => _promptSpending(),
                                    icon: const Icon(Icons.add_rounded, size: 18),
                                    label: const Text('Add'),
                                  ),
                                ],
                              ),
                              Text(
                                'Update where money was spent — members see changes in real time.',
                                style: TextStyle(color: Colors.black.withValues(alpha: 0.45), fontSize: 12),
                              ),
                              const SizedBox(height: 10),
                              if (_snap.spendings.isEmpty)
                                Text(
                                  'No spending rows yet.',
                                  style: TextStyle(color: Colors.black.withValues(alpha: 0.4)),
                                )
                              else
                                for (final s in _snap.spendings)
                                  ListTile(
                                    contentPadding: EdgeInsets.zero,
                                    title: Text(s.description, style: const TextStyle(fontWeight: FontWeight.w700)),
                                    subtitle: Text(_money(s.amount)),
                                    trailing: Row(
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        IconButton(
                                          icon: const Icon(Icons.edit_outlined),
                                          onPressed: () => _promptSpending(existing: s),
                                        ),
                                        IconButton(
                                          icon: const Icon(Icons.delete_outline, color: Color(0xFFDC2626)),
                                          onPressed: () async {
                                            await widget.onDeleteSpending(s.id);
                                            if (!mounted) return;
                                            _reload();
                                          },
                                        ),
                                      ],
                                    ),
                                  ),
                            ],
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _BudgetStat extends StatelessWidget {
  const _BudgetStat({required this.label, required this.value, this.alignEnd = false});
  final String label;
  final String value;
  final bool alignEnd;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignEnd ? CrossAxisAlignment.end : CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: Colors.black.withValues(alpha: 0.45), fontSize: 12, fontWeight: FontWeight.w600)),
        const SizedBox(height: 2),
        Text(value, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: Color(0xFF0F172A))),
      ],
    );
  }
}

class _GlassCard extends StatelessWidget {
  const _GlassCard({required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(26),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 16, sigmaY: 16),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.78),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: Colors.white.withValues(alpha: 0.85)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.10),
                blurRadius: 24,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: child,
        ),
      ),
    );
  }
}

class _WalletMeshBackground extends StatelessWidget {
  const _WalletMeshBackground();

  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color(0xFF7C3AED),
            Color(0xFF2563EB),
            Color(0xFFDB2777),
            Color(0xFFF97316),
          ],
          stops: [0.0, 0.35, 0.7, 1.0],
        ),
      ),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Positioned(
            top: -80,
            right: -40,
            child: _blob(220, const Color(0xFFA78BFA).withValues(alpha: 0.45)),
          ),
          Positioned(
            bottom: 80,
            left: -60,
            child: _blob(260, const Color(0xFF38BDF8).withValues(alpha: 0.35)),
          ),
          Positioned(
            bottom: -40,
            right: 20,
            child: _blob(180, const Color(0xFFF472B6).withValues(alpha: 0.4)),
          ),
        ],
      ),
    );
  }

  Widget _blob(double size, Color color) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color,
        boxShadow: [BoxShadow(color: color, blurRadius: 60, spreadRadius: 10)],
      ),
    );
  }
}

class _DonutSlice {
  const _DonutSlice(this.value, this.color);
  final double value;
  final Color color;
}

class _DonutPainter extends CustomPainter {
  _DonutPainter({required this.slices, required this.centerLabel, required this.centerValue});
  final List<_DonutSlice> slices;
  final String centerLabel;
  final String centerValue;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = math.min(size.width, size.height) / 2;
    final rect = Rect.fromCircle(center: center, radius: radius - 6);
    final total = slices.fold<double>(0, (s, e) => s + e.value);
    var start = -math.pi / 2;
    if (total <= 0 || slices.isEmpty) {
      canvas.drawArc(
        rect,
        0,
        math.pi * 2,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 16
          ..color = const Color(0xFFE2E8F0)
          ..strokeCap = StrokeCap.round,
      );
    } else {
      for (final slice in slices) {
        final sweep = (slice.value / total) * math.pi * 2;
        canvas.drawArc(
          rect,
          start,
          sweep,
          false,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 16
            ..color = slice.color
            ..strokeCap = StrokeCap.butt,
        );
        start += sweep;
      }
    }
    final tp1 = TextPainter(
      text: TextSpan(
        text: centerLabel,
        style: TextStyle(color: Colors.black.withValues(alpha: 0.45), fontSize: 11, fontWeight: FontWeight.w600),
      ),
      textDirection: TextDirection.ltr,
    )..layout();
    final tp2 = TextPainter(
      text: TextSpan(
        text: centerValue,
        style: const TextStyle(color: Color(0xFF0F172A), fontSize: 13, fontWeight: FontWeight.w900),
      ),
      textDirection: TextDirection.ltr,
    )..layout(maxWidth: radius);
    tp1.paint(canvas, Offset(center.dx - tp1.width / 2, center.dy - 12));
    tp2.paint(canvas, Offset(center.dx - tp2.width / 2, center.dy + 2));
  }

  @override
  bool shouldRepaint(covariant _DonutPainter oldDelegate) => true;
}

/// Build a wallet snapshot from civic contribution + spending maps.
NgmyCivicWalletSnapshot buildNgmyCivicWalletSnapshot({
  required String state,
  required List<Map<String, dynamic>> contributionRows,
  required List<Map<String, dynamic>> spendingRows,
}) {
  final st = state.trim().toLowerCase();
  final colors = <Color>[
    const Color(0xFFA855F7),
    const Color(0xFF3B82F6),
    const Color(0xFFEC4899),
    const Color(0xFFF97316),
    const Color(0xFF38BDF8),
    const Color(0xFF14B8A6),
  ];

  double collected = 0;
  final recent = <NgmyCivicWalletTxn>[];
  for (final row in contributionRows) {
    final amount = (row['amount'] as num?)?.toDouble() ?? 0;
    collected += amount;
    recent.add(
      NgmyCivicWalletTxn(
        id: (row['id'] ?? '').toString(),
        title: (row['title'] ?? 'Contribution').toString(),
        amount: amount,
        at: DateTime.tryParse((row['at'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0),
        isInflow: true,
      ),
    );
  }

  double spent = 0;
  final byCat = <String, double>{};
  final spendings = <NgmyCivicWalletSpendingRow>[];
  for (final row in spendingRows) {
    final rowState = (row['state'] ?? '').toString().trim().toLowerCase();
    if (st.isNotEmpty && rowState.isNotEmpty && rowState != st) continue;
    final amount = (row['amount'] as num?)?.toDouble() ?? 0;
    final desc = (row['description'] ?? 'Spending').toString().trim();
    spent += amount;
    byCat[desc.isEmpty ? 'Spending' : desc] = (byCat[desc.isEmpty ? 'Spending' : desc] ?? 0) + amount;
    final at = DateTime.tryParse((row['recordedAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
    spendings.add(
      NgmyCivicWalletSpendingRow(
        id: (row['id'] ?? '').toString(),
        description: desc.isEmpty ? 'Spending' : desc,
        amount: amount,
        recordedAt: at,
        campaignId: (row['campaignId'] ?? '').toString(),
      ),
    );
    recent.add(
      NgmyCivicWalletTxn(
        id: (row['id'] ?? '').toString(),
        title: desc.isEmpty ? 'Spending' : desc,
        amount: amount,
        at: at,
        isInflow: false,
      ),
    );
  }

  spendings.sort((a, b) => b.recordedAt.compareTo(a.recordedAt));
  recent.sort((a, b) => b.at.compareTo(a.at));

  final cats = <NgmyCivicWalletCategory>[];
  var i = 0;
  final sorted = byCat.entries.toList()..sort((a, b) => b.value.compareTo(a.value));
  for (final e in sorted) {
    cats.add(NgmyCivicWalletCategory(name: e.key, amount: e.value, color: colors[i % colors.length]));
    i++;
  }

  return NgmyCivicWalletSnapshot(
    state: state,
    collected: collected,
    spent: spent,
    categories: cats,
    recent: recent,
    spendings: spendings,
  );
}

/// Members list for the selected state (for wallet identity checks).
List<Map<String, dynamic>> ngmyCivicMembersForState(dynamic config, String state) {
  final all = NgmyCivicRegistryMembers.listFrom(config);
  final st = state.trim().toLowerCase();
  if (st.isEmpty) return all.map((e) => Map<String, dynamic>.from(e)).toList();
  return all
      .where((m) => (m['state'] ?? '').toString().trim().toLowerCase() == st)
      .map((e) => Map<String, dynamic>.from(e))
      .toList();
}
