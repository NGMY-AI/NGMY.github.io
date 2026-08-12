import 'dart:math' as math;
import 'dart:ui' show ImageFilter;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_registry_gate.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_civic_state_wallet_ui.dart';
import 'ngmy_nav.dart';

export 'ngmy_civic_state_wallet_ui.dart' show NgmyCivicStateWalletScreen;

/// Compact Registry Backup pin - thin animated outline, no thick white plate.
class NgmyCivicBackupPinButton extends StatefulWidget {
  const NgmyCivicBackupPinButton({super.key, required this.onPressed});

  final VoidCallback onPressed;

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
    return Tooltip(
      message: 'Registry Backup',
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: widget.onPressed,
          customBorder: const CircleBorder(),
          child: AnimatedBuilder(
            animation: _spin,
            builder: (context, _) {
              return CustomPaint(
                painter: _BackupPinFramePainter(
                  t: _spin.value,
                  accent: iconColor,
                ),
                child: SizedBox(
                  width: 24,
                  height: 24,
                  child: Icon(Icons.pin_rounded, size: 14, color: iconColor),
                ),
              );
            },
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
  });

  final String id;
  final String title;
  final double amount;
  final DateTime at;
  final bool isInflow;
  /// When set, this spending is scheduled for full removal after this time.
  final DateTime? pendingDeleteAt;

  bool get isPendingDelete => pendingDeleteAt != null;
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
  });

  final String id;
  final String description;
  final double amount;
  final DateTime recordedAt;
  final String campaignId;
  final DateTime? pendingDeleteAt;
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
  /// Authorized registrars skip PIN / name / DOB / ID â€” open wallet directly.
  bool skipUnlockCodes = false,
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
  Future<void> Function()? onPurgeExpired,
  bool canAdminBrowseStates = false,
  List<String> allStates = const [],
  NgmyCivicWalletSnapshot Function(String state)? snapshotForState,
  Future<void> Function(String state)? onOpenStateCase,
  Future<void> Function({
    required String state,
    required double amount,
  })? onAdminRemoveAvailable,
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
      onUpdateSpending: onUpdateSpending,
      onDeleteSpending: onDeleteSpending,
      onPurgeExpired: onPurgeExpired,
      canAdminBrowseStates: canAdminBrowseStates,
      allStates: allStates,
      snapshotForState: snapshotForState,
      onOpenStateCase: onOpenStateCase,
      onAdminRemoveAvailable: onAdminRemoveAvailable,
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

// Wallet screen UI lives in ngmy_civic_state_wallet_ui.dart (dark/light themed).

/// Silent admin cuts — reduce collected/available/budget, never shown in txns.
bool ngmyIsSilentAdminWalletRemoval(Map<String, dynamic> row) {
  if (row['silentAdminRemoval'] == true) return true;
  final desc = (row['description'] ?? '').toString().trim();
  return desc == 'Admin available balance adjustment';
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
  double silentCollectedCut = 0;
  final byCat = <String, double>{};
  final spendings = <NgmyCivicWalletSpendingRow>[];
  final now = DateTime.now();
  for (final row in spendingRows) {
    final rowState = (row['state'] ?? '').toString().trim().toLowerCase();
    if (st.isNotEmpty && rowState.isNotEmpty && rowState != st) continue;
    final pendingRaw = (row['pendingDeleteAt'] ?? '').toString().trim();
    final pendingAt = pendingRaw.isEmpty ? null : DateTime.tryParse(pendingRaw)?.toLocal();
    // Already past the 24h window — omit from wallet UI.
    if (pendingAt != null && !pendingAt.isAfter(now)) continue;
    final amount = (row['amount'] as num?)?.toDouble() ?? 0;
    if (ngmyIsSilentAdminWalletRemoval(row)) {
      // Cuts monthly budget + available with no spending / last-txn trail.
      silentCollectedCut += amount;
      continue;
    }
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
        pendingDeleteAt: pendingAt,
      ),
    );
    recent.add(
      NgmyCivicWalletTxn(
        id: (row['id'] ?? '').toString(),
        title: desc.isEmpty ? 'Spending' : desc,
        amount: amount,
        at: at,
        isInflow: false,
        pendingDeleteAt: pendingAt,
      ),
    );
  }
  collected = math.max(0.0, collected - silentCollectedCut);

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

