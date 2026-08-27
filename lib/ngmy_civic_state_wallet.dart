import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_identity.dart';
import 'ngmy_civic_registry_gate.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_state_wallet_ui.dart';
import 'ngmy_nav.dart';
import 'ngmy_state_picker.dart';

export 'ngmy_civic_identity.dart' show NgmyCivicWalletIdentity, NgmyCivicDobInputFormatter;
export 'ngmy_civic_state_wallet_ui.dart' show NgmyCivicStateWalletScreen;

/// Compact Registry Backup pin - thin animated outline, no thick white plate.
class NgmyCivicBackupPinButton extends StatefulWidget {
  const NgmyCivicBackupPinButton({
    super.key,
    required this.onPressed,
    this.badgeCount = 0,
  });

  final VoidCallback onPressed;
  /// Soft-deleted members waiting for recover / auto-purge.
  final int badgeCount;

  @override
  State<NgmyCivicBackupPinButton> createState() => _NgmyCivicBackupPinButtonState();
}

class _NgmyCivicBackupPinButtonState extends State<NgmyCivicBackupPinButton>
    with SingleTickerProviderStateMixin {
  late final AnimationController _spin =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final iconColor = isDark ? const Color(0xFF6EE7B7) : const Color(0xFF059669);
    final badge = widget.badgeCount.clamp(0, 99);
    return Tooltip(
      message: badge > 0 ? 'Registry Backup · $badge pending delete' : 'Registry Backup',
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: widget.onPressed,
          customBorder: const CircleBorder(),
          child: SizedBox(
            width: 28,
            height: 28,
            child: Stack(
              clipBehavior: Clip.none,
              children: [
                Positioned.fill(
                  child: AnimatedBuilder(
                    animation: _spin,
                    builder: (context, _) {
                      return CustomPaint(
                        painter: _BackupPinFramePainter(
                          t: _spin.value,
                          accent: iconColor,
                        ),
                        child: Center(
                          child: Icon(Icons.pin_rounded, size: 14, color: iconColor),
                        ),
                      );
                    },
                  ),
                ),
                if (badge > 0)
                  Positioned(
                    right: -4,
                    top: -4,
                    child: Container(
                      constraints: const BoxConstraints(minWidth: 14, minHeight: 14),
                      padding: const EdgeInsets.symmetric(horizontal: 3),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: const Color(0xFFEF4444),
                        borderRadius: BorderRadius.circular(99),
                        border: Border.all(
                          color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
                          width: 1,
                        ),
                      ),
                      child: Text(
                        badge > 9 ? '9+' : '$badge',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 8,
                          fontWeight: FontWeight.w900,
                          height: 1.1,
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _BackupPinFramePainter extends CustomPainter {
  _BackupPinFramePainter({required this.t, required this.accent});
  final double t;
  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    // Hairline ring only â€” sits on top of the icon, not a filled white box.
    final r = RRect.fromRectAndRadius(
      Rect.fromLTWH(0.5, 0.5, size.width - 1, size.height - 1),
      const Radius.circular(7),
    );
    final path = Path()..addRRect(r);
    canvas.drawRRect(
      r,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 0.9
        ..color = accent.withValues(alpha: 0.35),
    );
    for (final metric in path.computeMetrics()) {
      final len = metric.length;
      final start = (t % 1.0) * len;
      final seg = metric.extractPath(start, start + len * 0.22);
      canvas.drawPath(
        seg,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.15
          ..strokeCap = StrokeCap.round
          ..color = accent.withValues(alpha: 0.95),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _BackupPinFramePainter oldDelegate) =>
      oldDelegate.t != t || oldDelegate.accent != accent;
}

class NgmyCivicWalletTxn {
  const NgmyCivicWalletTxn({
    required this.id,
    required this.title,
    required this.amount,
    required this.at,
    required this.isInflow,
    this.pendingDeleteAt,
    this.fund = 'contribution',
  });

  final String id;
  final String title;
  final double amount;
  final DateTime at;
  final bool isInflow;
  /// When set, this spending is scheduled for full removal after this time.
  final DateTime? pendingDeleteAt;
  /// `contribution` = community case · `trust` = State Trust ledger.
  final String fund;

  bool get isPendingDelete => pendingDeleteAt != null;
  bool get isTrust => fund == 'trust';
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
    this.pendingDeleteAt,
    this.fund = 'contribution',
  });

  final String id;
  final String description;
  final double amount;
  final DateTime recordedAt;
  final String campaignId;
  final DateTime? pendingDeleteAt;
  final String fund;

  bool get isTrust => fund == 'trust';
}

class NgmyCivicWalletSnapshot {
  const NgmyCivicWalletSnapshot({
    required this.state,
    required this.collected,
    required this.spent,
    required this.categories,
    required this.recent,
    required this.spendings,
    this.trustDeposited = 0,
    this.trustSpent = 0,
    this.transferCredits = 0,
    this.trustReserved = 0,
    this.pendingTransfers = const [],
  });

  final String state;
  /// Community contribution inflows (never mixed into State Trust).
  final double collected;
  /// Spending recorded against the contribution case.
  final double spent;
  /// Registrar deposits into State Trust.
  final double trustDeposited;
  /// Spending recorded against State Trust.
  final double trustSpent;
  /// Credits moved into Contribution Case from State Trust.
  final double transferCredits;
  /// Trust amount locked in pending dual-approval transfers out.
  final double trustReserved;
  final List<NgmyCivicWalletPendingTransfer> pendingTransfers;
  final List<NgmyCivicWalletCategory> categories;
  final List<NgmyCivicWalletTxn> recent;
  final List<NgmyCivicWalletSpendingRow> spendings;

  double get available => math.max(0, collected + transferCredits - spent);
  double get trustBalance => math.max(0, trustDeposited - trustSpent - trustReserved);
  double get totalTracked => available + trustBalance;
}

bool ngmyIsStateTrustDeposit(Map<String, dynamic> row) {
  if (row['walletTrustDeposit'] == true) return true;
  final kind = (row['kind'] ?? '').toString().trim();
  if (kind == 'state_trust_deposit' || kind == 'transfer_from_contribution') return true;
  final id = (row['id'] ?? '').toString();
  return id.startsWith('trust_deposit_') || id.startsWith('xfer_in_trust_');
}

String ngmyWalletFundOf(Map<String, dynamic> row) {
  if (ngmyIsStateTrustDeposit(row)) return 'trust';
  final fund = (row['fund'] ?? '').toString().trim().toLowerCase();
  if (fund == 'trust' || fund == 'contribution') return fund;
  return 'contribution';
}

bool ngmyIsFundTransferPending(Map<String, dynamic> row) {
  final kind = (row['kind'] ?? '').toString().trim();
  if (kind == 'fund_transfer_pending') return true;
  return (row['id'] ?? '').toString().startsWith('xfer_pending_') &&
      (row['status'] ?? 'pending').toString().toLowerCase() == 'pending';
}

bool ngmyIsFundTransferCompleted(Map<String, dynamic> row) {
  final kind = (row['kind'] ?? '').toString().trim();
  return kind == 'transfer_to_trust' ||
      kind == 'transfer_to_contribution' ||
      kind == 'transfer_from_contribution' ||
      kind == 'transfer_from_trust';
}

bool ngmyIsContributionTransferCredit(Map<String, dynamic> row) {
  final kind = (row['kind'] ?? '').toString().trim();
  return kind == 'transfer_from_trust' || row['contributionTransferCredit'] == true;
}

class NgmyCivicWalletPendingTransfer {
  const NgmyCivicWalletPendingTransfer({
    required this.id,
    required this.amount,
    required this.description,
    required this.direction,
    required this.requestedByEmail,
    required this.requestedByName,
    required this.requestedAt,
    required this.approvals,
    required this.requiredApprovals,
  });

  final String id;
  final double amount;
  final String description;
  /// `to_trust` | `to_contribution`
  final String direction;
  final String requestedByEmail;
  final String requestedByName;
  final DateTime requestedAt;
  final List<Map<String, dynamic>> approvals;
  final int requiredApprovals;

  int get approvalCount => approvals.length;
  int get approvalsNeeded => math.max(0, requiredApprovals - approvalCount);
  bool get isToContribution => direction == 'to_contribution';
}

Future<void> openNgmyCivicStateWalletFlow({
  required BuildContext context,
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
  required List<Map<String, dynamic>> members,
  required NgmyCivicWalletSnapshot Function() snapshotBuilder,
  required bool canEdit,
  /// Authorized registrars skip PIN / name / DOB / ID only when the caller
  /// sets [skipUnlockCodes] (first AR of the state, or King/Admin).
  bool skipUnlockCodes = false,
  required Future<void> Function({
    required double amount,
    required String description,
    String fund,
  }) onAddSpending,
  required Future<void> Function({
    required double amount,
    required String description,
  }) onAddTrustDeposit,
  required Future<void> Function({
    required double amount,
    required String description,
    required String direction,
  }) onTransferFunds,
  required Future<void> Function(String transferId) onApproveTransfer,
  required Future<void> Function(String transferId) onRejectTransfer,
  required String currentUserEmail,
  required bool isGlobalAdmin,
  required bool trustOutRequiresDualApproval,
  required Future<void> Function({
    required String spendingId,
    required double amount,
    required String description,
  }) onUpdateSpending,
  required Future<void> Function(String spendingId) onDeleteSpending,
  Future<void> Function()? onPurgeExpired,
  bool canAdminBrowseStates = false,
  List<String> allStates = const [],
  NgmyCivicWalletSnapshot Function(String state)? snapshotForState,
  Future<void> Function(String state)? onOpenStateCase,
  Future<void> Function({
    required String state,
    required double amount,
  })? onAdminRemoveAvailable,
  Future<void> Function({
    required String state,
    required bool hideBudget,
    required bool hideSpendings,
    required bool hideTransactions,
  })? onAdminResetStateCase,
  Future<void> Function(String state)? onAdminRestoreStateCase,
  Map<String, dynamic>? Function(String state)? softResetForState,
  NgmyCivicNationwideStats Function()? nationwideStatsBuilder,
  Future<void> Function({String? state})? onAdminResetContributionCount,
  Future<bool> Function(String contributionId)? onAdminDeleteContribution,
}) async {
  if (!skipUnlockCodes) {
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
  }
  if (!context.mounted) return;
  await NgmyNavigator.push<void>(
    context,
    NgmyCivicStateWalletScreen(
      state: state,
      canEdit: canEdit,
      snapshotBuilder: snapshotBuilder,
      onAddSpending: onAddSpending,
      onAddTrustDeposit: onAddTrustDeposit,
      onTransferFunds: onTransferFunds,
      onApproveTransfer: onApproveTransfer,
      onRejectTransfer: onRejectTransfer,
      currentUserEmail: currentUserEmail,
      isGlobalAdmin: isGlobalAdmin,
      trustOutRequiresDualApproval: trustOutRequiresDualApproval,
      onUpdateSpending: onUpdateSpending,
      onDeleteSpending: onDeleteSpending,
      onPurgeExpired: onPurgeExpired,
      canAdminBrowseStates: canAdminBrowseStates,
      allStates: allStates,
      snapshotForState: snapshotForState,
      onOpenStateCase: onOpenStateCase,
      onAdminRemoveAvailable: onAdminRemoveAvailable,
      onAdminResetStateCase: onAdminResetStateCase,
      onAdminRestoreStateCase: onAdminRestoreStateCase,
      softResetForState: softResetForState,
      nationwideStatsBuilder: nationwideStatsBuilder,
      onAdminResetContributionCount: onAdminResetContributionCount,
      onAdminDeleteContribution: onAdminDeleteContribution,
    ),
    routeName: 'NgmyCivicStateWalletScreen',
  );
}

/// 4-step full-screen unlock: state PIN â†’ real name â†’ DOB â†’ registry ID.
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
        return TextInputType.number;
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
          _error = 'Start over â€” name step was lost.';
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
        _error = 'Start over â€” verification incomplete.';
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
          const WalletUnlockMeshBackground(),
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
                      backgroundColor: Colors.white.withValues(alpha: 0.22),
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
                              key: ValueKey('wallet-verify-$_step'),
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
                                  : _step == 2
                                      ? [
                                          const NgmyCivicDobInputFormatter(),
                                          LengthLimitingTextInputFormatter(10),
                                        ]
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

// Wallet screen UI lives in ngmy_civic_state_wallet_ui.dart (dark/light themed).

/// Silent admin cuts — reduce collected/available/budget, never shown in txns.
bool ngmyIsSilentAdminWalletRemoval(Map<String, dynamic> row) {
  if (row['silentAdminRemoval'] == true) return true;
  final desc = (row['description'] ?? '').toString().trim();
  return desc == 'Admin available balance adjustment';
}

bool ngmyIsWalletSoftResetRecord(Map<String, dynamic> row) =>
    row['walletSoftReset'] == true;

/// Active soft-reset for [state], if any (pending 24h or permanent).
Map<String, dynamic>? ngmyActiveWalletSoftReset(
  List<Map<String, dynamic>> spendingRows,
  String state, {
  DateTime? now,
}) {
  final st = state.trim().toLowerCase();
  if (st.isEmpty) return null;
  final n = now ?? DateTime.now();
  Map<String, dynamic>? best;
  DateTime? bestAt;
  for (final raw in spendingRows) {
    final row = Map<String, dynamic>.from(raw);
    if (!ngmyIsWalletSoftResetRecord(row)) continue;
    final rowState = (row['state'] ?? '').toString().trim().toLowerCase();
    if (rowState != st) continue;
    final permanent = row['permanent'] == true;
    final purgeRaw = (row['purgeAt'] ?? '').toString().trim();
    final purgeAt = purgeRaw.isEmpty ? null : DateTime.tryParse(purgeRaw)?.toLocal();
    if (!permanent && purgeAt != null && !purgeAt.isAfter(n)) {
      // Expired pending reset — purge job should remove it; ignore for UI.
      continue;
    }
    final created = DateTime.tryParse((row['recordedAt'] ?? '').toString()) ??
        DateTime.fromMillisecondsSinceEpoch(0);
    if (best == null || created.isAfter(bestAt!)) {
      best = row;
      bestAt = created;
    }
  }
  return best;
}

bool ngmyWalletSoftResetRestorable(Map<String, dynamic>? reset, {DateTime? now}) {
  if (reset == null || reset['permanent'] == true) return false;
  final purgeRaw = (reset['purgeAt'] ?? '').toString().trim();
  final purgeAt = purgeRaw.isEmpty ? null : DateTime.tryParse(purgeRaw)?.toLocal();
  if (purgeAt == null) return false;
  return purgeAt.isAfter(now ?? DateTime.now());
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
  final now = DateTime.now();
  final soft = ngmyActiveWalletSoftReset(spendingRows, state, now: now);
  final hideBudget = soft?['hideBudget'] == true;
  final hideSpendings = soft?['hideSpendings'] == true;
  final hideTransactions = soft?['hideTransactions'] == true;

  double collected = 0;
  final recent = <NgmyCivicWalletTxn>[];
  for (final row in contributionRows) {
    final amount = (row['amount'] as num?)?.toDouble() ?? 0;
    if (!hideBudget) {
      collected += amount;
    }
    if (!hideBudget && !hideTransactions) {
      recent.add(
        NgmyCivicWalletTxn(
          id: (row['id'] ?? '').toString(),
          title: (row['title'] ?? 'Contribution').toString(),
          amount: amount,
          at: DateTime.tryParse((row['at'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0),
          isInflow: true,
          fund: 'contribution',
        ),
      );
    }
  }

  double spent = 0;
  double trustDeposited = 0;
  double trustSpent = 0;
  double transferCredits = 0;
  double trustReserved = 0;
  double silentCollectedCut = 0;
  final byCat = <String, double>{};
  final spendings = <NgmyCivicWalletSpendingRow>[];
  final pendingTransfers = <NgmyCivicWalletPendingTransfer>[];
  for (final row in spendingRows) {
    final rowState = (row['state'] ?? '').toString().trim().toLowerCase();
    if (st.isNotEmpty && rowState.isNotEmpty && rowState != st) continue;
    if (ngmyIsWalletSoftResetRecord(row)) continue;
    final pendingRaw = (row['pendingDeleteAt'] ?? '').toString().trim();
    final pendingAt = pendingRaw.isEmpty ? null : DateTime.tryParse(pendingRaw)?.toLocal();
    // Already past the 24h window — omit from wallet UI.
    if (pendingAt != null && !pendingAt.isAfter(now)) continue;
    final amount = (row['amount'] as num?)?.toDouble() ?? 0;
    if (ngmyIsSilentAdminWalletRemoval(row)) {
      if (hideBudget || hideSpendings) continue;
      // Cuts contribution case available with no spending / last-txn trail.
      silentCollectedCut += amount;
      continue;
    }

    // Dual-approval transfers waiting on a second registrar.
    if (ngmyIsFundTransferPending(row)) {
      final status = (row['status'] ?? 'pending').toString().toLowerCase();
      if (status != 'pending') continue;
      final direction = (row['direction'] ?? 'to_contribution').toString();
      if (!hideBudget && direction == 'to_contribution') {
        trustReserved += amount;
      }
      final approvalsRaw = row['approvals'];
      final approvals = approvalsRaw is List
          ? approvalsRaw.map((e) => Map<String, dynamic>.from(e as Map)).toList()
          : <Map<String, dynamic>>[];
      final at = DateTime.tryParse((row['requestedAt'] ?? row['recordedAt'] ?? '').toString()) ??
          DateTime.fromMillisecondsSinceEpoch(0);
      final desc = (row['description'] ?? 'Fund transfer').toString().trim();
      pendingTransfers.add(
        NgmyCivicWalletPendingTransfer(
          id: (row['id'] ?? '').toString(),
          amount: amount,
          description: desc.isEmpty ? 'Fund transfer' : desc,
          direction: direction,
          requestedByEmail: (row['requestedByEmail'] ?? '').toString(),
          requestedByName: (row['requestedByName'] ?? 'Registrar').toString(),
          requestedAt: at,
          approvals: approvals,
          requiredApprovals: (row['requiredApprovals'] as num?)?.toInt() ?? 2,
        ),
      );
      if (!hideTransactions) {
        recent.add(
          NgmyCivicWalletTxn(
            id: (row['id'] ?? '').toString(),
            title: direction == 'to_contribution'
                ? 'Pending: Trust → Contribution'
                : 'Pending: Contribution → Trust',
            amount: amount,
            at: at,
            isInflow: direction == 'to_trust',
            fund: direction == 'to_contribution' ? 'trust' : 'contribution',
          ),
        );
      }
      continue;
    }

    // Credits into Contribution Case from completed Trust → Contribution transfers.
    if (ngmyIsContributionTransferCredit(row)) {
      if (!hideBudget) transferCredits += amount;
      if (!hideBudget && !hideTransactions) {
        final at = DateTime.tryParse((row['recordedAt'] ?? '').toString()) ??
            DateTime.fromMillisecondsSinceEpoch(0);
        final desc = (row['description'] ?? 'Transfer from State Trust').toString().trim();
        recent.add(
          NgmyCivicWalletTxn(
            id: (row['id'] ?? '').toString(),
            title: desc.isEmpty ? 'Transfer from State Trust' : desc,
            amount: amount,
            at: at,
            isInflow: true,
            fund: 'contribution',
            pendingDeleteAt: pendingAt,
          ),
        );
      }
      continue;
    }

    // State Trust deposits — never counted as contributions.
    if (ngmyIsStateTrustDeposit(row)) {
      if (!hideBudget) trustDeposited += amount;
      if (!hideBudget && !hideTransactions) {
        final at = DateTime.tryParse((row['recordedAt'] ?? '').toString()) ??
            DateTime.fromMillisecondsSinceEpoch(0);
        final kind = (row['kind'] ?? '').toString();
        final defaultTitle = kind == 'transfer_from_contribution'
            ? 'Transfer from Contribution Case'
            : 'State Trust deposit';
        final desc = (row['description'] ?? defaultTitle).toString().trim();
        recent.add(
          NgmyCivicWalletTxn(
            id: (row['id'] ?? '').toString(),
            title: desc.isEmpty ? defaultTitle : desc,
            amount: amount,
            at: at,
            isInflow: true,
            fund: 'trust',
            pendingDeleteAt: pendingAt,
          ),
        );
      }
      continue;
    }

    if (hideSpendings) continue;
    final fund = ngmyWalletFundOf(row);
    final desc = (row['description'] ?? 'Spending').toString().trim();
    final kind = (row['kind'] ?? '').toString();
    final label = desc.isEmpty
        ? (kind == 'transfer_to_trust'
            ? 'Transfer to State Trust'
            : kind == 'transfer_to_contribution'
                ? 'Transfer to Contribution Case'
                : 'Spending')
        : desc;
    if (fund == 'trust') {
      trustSpent += amount;
    } else {
      spent += amount;
      if (kind != 'transfer_to_trust') {
        byCat[label] = (byCat[label] ?? 0) + amount;
      }
    }
    final at = DateTime.tryParse((row['recordedAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
    spendings.add(
      NgmyCivicWalletSpendingRow(
        id: (row['id'] ?? '').toString(),
        description: label,
        amount: amount,
        recordedAt: at,
        campaignId: (row['campaignId'] ?? '').toString(),
        pendingDeleteAt: pendingAt,
        fund: fund,
      ),
    );
    if (!hideTransactions) {
      recent.add(
        NgmyCivicWalletTxn(
          id: (row['id'] ?? '').toString(),
          title: label,
          amount: amount,
          at: at,
          isInflow: false,
          pendingDeleteAt: pendingAt,
          fund: fund,
        ),
      );
    }
  }
  collected = math.max(0.0, collected - silentCollectedCut);

  spendings.sort((a, b) => b.recordedAt.compareTo(a.recordedAt));
  recent.sort((a, b) => b.at.compareTo(a.at));
  pendingTransfers.sort((a, b) => b.requestedAt.compareTo(a.requestedAt));

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
    trustDeposited: trustDeposited,
    trustSpent: trustSpent,
    transferCredits: transferCredits,
    trustReserved: trustReserved,
    pendingTransfers: pendingTransfers,
    categories: cats,
    recent: recent,
    spendings: spendings,
  );
}

/// One nationwide contribution row for drill-down lists.
class NgmyCivicNationwideContributionRow {
  const NgmyCivicNationwideContributionRow({
    required this.id,
    required this.amount,
    required this.title,
    required this.at,
    required this.state,
    this.memberName = '',
  });

  final String id;
  final double amount;
  final String title;
  final DateTime at;
  final String state;
  final String memberName;
}

/// Nationwide Civic Registry + contribution-case totals (US only).
class NgmyCivicNationwideStats {
  const NgmyCivicNationwideStats({
    required this.registeredMembers,
    required this.contributionsKept,
    required this.totalContributions,
    required this.deceasedMembers,
    required this.contributionRecords,
  });

  /// Enrolled civic registry members across all US states (active only).
  final int registeredMembers;

  /// Contribution-case money still held nationwide — excludes admin removals,
  /// soft-resets, deleted/pending-delete spend rows, and deceased members.
  final double contributionsKept;

  /// Approved contribution records since the last admin counter reset (excludes deceased).
  final int totalContributions;

  /// Members marked deceased nationwide.
  final int deceasedMembers;

  /// All US contribution records for the public drill-down list (newest first).
  final List<NgmyCivicNationwideContributionRow> contributionRecords;
}

/// Each contribution row should include `state` (receipt state) and `at` (ISO8601).
NgmyCivicNationwideStats buildNgmyCivicNationwideStats({
  required int registeredMembers,
  required List<Map<String, dynamic>> countedContributionRows,
  required List<Map<String, dynamic>> allContributionRows,
  required List<Map<String, dynamic>> allSpendingRows,
  List<String> states = kNgmyUsStates,
  int deceasedMembers = 0,
}) {
  final byState = <String, List<Map<String, dynamic>>>{};
  for (final row in allContributionRows) {
    final st = (row['state'] ?? '').toString().trim().toLowerCase();
    if (st.isEmpty) continue;
    byState.putIfAbsent(st, () => []).add(row);
  }
  var kept = 0.0;
  for (final state in states) {
    final st = state.trim().toLowerCase();
    final snap = buildNgmyCivicWalletSnapshot(
      state: state,
      contributionRows: byState[st] ?? const [],
      spendingRows: allSpendingRows,
    );
    kept += snap.available;
  }
  List<NgmyCivicNationwideContributionRow> mapRows(List<Map<String, dynamic>> rows) => rows
      .map((row) {
        final atRaw = (row['at'] ?? '').toString();
        return NgmyCivicNationwideContributionRow(
          id: (row['id'] ?? '').toString(),
          amount: (row['amount'] as num?)?.toDouble() ?? 0,
          title: (row['title'] ?? 'Contribution').toString(),
          at: DateTime.tryParse(atRaw)?.toLocal() ?? DateTime.fromMillisecondsSinceEpoch(0),
          state: (row['state'] ?? '').toString(),
          memberName: (row['memberName'] ?? '').toString(),
        );
      })
      .toList()
    ..sort((a, b) => b.at.compareTo(a.at));

  return NgmyCivicNationwideStats(
    registeredMembers: registeredMembers,
    contributionsKept: kept,
    totalContributions: countedContributionRows.length,
    deceasedMembers: deceasedMembers,
    contributionRecords: mapRows(allContributionRows),
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

