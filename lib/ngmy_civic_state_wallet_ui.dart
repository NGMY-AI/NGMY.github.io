import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_civic_state_wallet.dart';
import 'ngmy_light_notice_dialog.dart';
import 'ngmy_nav.dart';

class _WalletTone {
  _WalletTone(this.isDark);

  final bool isDark;

  Color get pageBg => isDark ? const Color(0xFF0A0A0A) : const Color(0xFFF3F4F6);
  Color get headerFg => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get headerMuted => isDark ? Colors.white70 : const Color(0xFF64748B);
  Color get cardBg => isDark ? const Color(0xFF171717) : Colors.white;
  Color get cardBorder => isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE5E7EB);
  Color get primaryText => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get secondaryText => isDark ? const Color(0xFFA3A3A3) : const Color(0xFF64748B);
  Color get chipBg => isDark ? const Color(0xFF262626) : const Color(0xFFF1F5F9);
  Color get chipSelected => isDark ? Colors.white : Colors.black;
  Color get chipSelectedFg => isDark ? Colors.black : Colors.white;
  Color get iconWell => isDark ? const Color(0xFF262626) : const Color(0xFFF1F5F9);
  Color get progressTrack => isDark ? const Color(0xFF333333) : const Color(0xFFE2E8F0);
  Color get accent => const Color(0xFF059669);
  Color get dialogBg => isDark ? const Color(0xFF141414) : Colors.white;
  Color get fieldFill => isDark ? const Color(0xFF1F1F1F) : const Color(0xFFF8FAFC);
  Color get fieldBorder => isDark ? const Color(0xFF3F3F3F) : const Color(0xFFD1D5DB);
}

/// Themed state wallet (true dark / light — no bluish slate).
class NgmyCivicStateWalletScreen extends StatefulWidget {
  const NgmyCivicStateWalletScreen({
    super.key,
    required this.state,
    required this.canEdit,
    required this.snapshotBuilder,
    required this.onAddSpending,
    required this.onAddTrustDeposit,
    required this.onTransferFunds,
    required this.onApproveTransfer,
    required this.onRejectTransfer,
    required this.currentUserEmail,
    required this.isGlobalAdmin,
    required this.trustOutRequiresDualApproval,
    required this.onUpdateSpending,
    required this.onDeleteSpending,
    this.onPurgeExpired,
    this.canAdminBrowseStates = false,
    this.allStates = const [],
    this.snapshotForState,
    this.onOpenStateCase,
    this.onAdminRemoveAvailable,
    this.onAdminResetStateCase,
    this.onAdminRestoreStateCase,
    this.softResetForState,
    this.nationwideStatsBuilder,
    this.onAdminResetContributionCount,
    this.onAdminDeleteContribution,
    this.onOpenNationwideDeceased,
  });

  final String state;
  final bool canEdit;
  final NgmyCivicWalletSnapshot Function() snapshotBuilder;
  final Future<void> Function({
    required double amount,
    required String description,
    String fund,
  }) onAddSpending;
  final Future<void> Function({
    required double amount,
    required String description,
  }) onAddTrustDeposit;
  final Future<void> Function({
    required double amount,
    required String description,
    required String direction,
  }) onTransferFunds;
  final Future<void> Function(String transferId) onApproveTransfer;
  final Future<void> Function(String transferId) onRejectTransfer;
  final String currentUserEmail;
  final bool isGlobalAdmin;
  /// When true, Trust → Contribution needs a second state registrar (admins bypass).
  final bool trustOutRequiresDualApproval;
  final Future<void> Function({
    required String spendingId,
    required double amount,
    required String description,
  }) onUpdateSpending;
  final Future<void> Function(String spendingId) onDeleteSpending;
  final Future<void> Function()? onPurgeExpired;

  /// Global civic admins can open any state's case and clear available balance.
  final bool canAdminBrowseStates;
  final List<String> allStates;
  final NgmyCivicWalletSnapshot Function(String state)? snapshotForState;
  final Future<void> Function(String state)? onOpenStateCase;
  final Future<void> Function({
    required String state,
    required double amount,
  })? onAdminRemoveAvailable;
  final Future<void> Function({
    required String state,
    required bool hideBudget,
    required bool hideSpendings,
    required bool hideTransactions,
  })? onAdminResetStateCase;
  final Future<void> Function(String state)? onAdminRestoreStateCase;
  final Map<String, dynamic>? Function(String state)? softResetForState;
  final NgmyCivicNationwideStats Function()? nationwideStatsBuilder;
  final Future<void> Function({String? state})? onAdminResetContributionCount;
  final Future<bool> Function(String contributionId)? onAdminDeleteContribution;
  /// Opens the nationwide deceased members list (full read-only records).
  final Future<void> Function()? onOpenNationwideDeceased;

  @override
  State<NgmyCivicStateWalletScreen> createState() => _NgmyCivicStateWalletScreenState();
}

class _NgmyCivicStateWalletScreenState extends State<NgmyCivicStateWalletScreen> {
  late NgmyCivicWalletSnapshot _snap;
  int _range = 2;
  bool _searchOpen = false;
  final _searchC = TextEditingController();
  DateTimeRange? _dateFilter;

  /// 10 quick taps on a spending row unlocks edit; 2s idle resets the count.
  String? _editTapTxnId;
  int _editTapCount = 0;
  Timer? _editTapReset;
  Timer? _countdownTick;
  Timer? _livePoll;

  @override
  void initState() {
    super.initState();
    _snap = widget.snapshotBuilder();
    _searchC.addListener(() => setState(() {}));
    _ensureCountdownTicker();
    NgmyCivicWalletRefresh.addListener(_reload);
    _livePoll = Timer.periodic(const Duration(seconds: 4), (_) {
      if (!mounted) return;
      _reload();
    });
  }

  @override
  void dispose() {
    NgmyCivicWalletRefresh.removeListener(_reload);
    _editTapReset?.cancel();
    _countdownTick?.cancel();
    _livePoll?.cancel();
    _searchC.dispose();
    super.dispose();
  }

  void _ensureCountdownTicker() {
    final needsTick = _snap.recent.any((t) => t.pendingDeleteAt != null);
    if (!needsTick) {
      _countdownTick?.cancel();
      _countdownTick = null;
      return;
    }
    _countdownTick ??= Timer.periodic(const Duration(seconds: 1), (_) async {
      if (!mounted) return;
      final now = DateTime.now();
      final expired = _snap.recent.any(
        (t) => t.pendingDeleteAt != null && !t.pendingDeleteAt!.isAfter(now),
      );
      if (expired) {
        final purge = widget.onPurgeExpired;
        if (purge != null) await purge();
        if (!mounted) return;
        _reload();
      } else {
        setState(() {});
      }
    });
  }

  String _formatDeleteCountdown(DateTime? pendingAt) {
    if (pendingAt == null) return '';
    var left = pendingAt.difference(DateTime.now());
    if (left.isNegative) left = Duration.zero;
    final h = left.inHours;
    final m = left.inMinutes.remainder(60);
    final s = left.inSeconds.remainder(60);
    final hh = h.toString().padLeft(2, '0');
    final mm = m.toString().padLeft(2, '0');
    final ss = s.toString().padLeft(2, '0');
    return '$hh:$mm:$ss';
  }

  void _onTransactionTap(NgmyCivicWalletTxn txn) {
    if (!widget.canEdit || txn.isInflow) return;
    // Silent taps — no counter, no splash, no UI feedback until unlock.
    if (_editTapTxnId != txn.id) {
      _editTapTxnId = txn.id;
      _editTapCount = 0;
    }
    _editTapCount += 1;
    _editTapReset?.cancel();
    if (_editTapCount >= 10) {
      _editTapCount = 0;
      _editTapTxnId = null;
      NgmyCivicWalletSpendingRow? spending;
      for (final s in _snap.spendings) {
        if (s.id == txn.id) {
          spending = s;
          break;
        }
      }
      if (spending != null) {
        unawaited(_promptSpending(existing: spending));
      }
      return;
    }
    _editTapReset = Timer(const Duration(seconds: 2), () {
      _editTapCount = 0;
      _editTapTxnId = null;
    });
  }

  void _reload() {
    setState(() => _snap = widget.snapshotBuilder());
    _ensureCountdownTicker();
  }

  String _money(double v) {
    final neg = v < 0;
    final abs = v.abs();
    final whole = abs.floor();
    final cents = ((abs - whole) * 100).round().clamp(0, 99);
    final core =
        '\$${whole.toString().replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+(?!\d))'), (m) => '${m[1]},')}.${cents.toString().padLeft(2, '0')}';
    return neg ? '-$core' : core;
  }

  Future<void> _showNationwideContributionsDialog(NgmyCivicNationwideStats stats) async {
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final isAdmin = widget.onAdminDeleteContribution != null || widget.onAdminResetContributionCount != null;
    final searchC = TextEditingController();
    final detailSearchC = TextEditingController();
    var campaigns = List<NgmyCivicNationwideCampaign>.from(stats.contributionCampaigns);
    var selectedState = '';
    NgmyCivicNationwideCampaign? openCampaign;
    final states = widget.allStates.isNotEmpty ? widget.allStates : const <String>[];
    await showDialog<void>(
      context: context,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setSheet) {
            final query = searchC.text.trim().toLowerCase();
            final detailQuery = detailSearchC.text.trim().toLowerCase();
            final stateKey = selectedState.trim().toLowerCase();
            final filtered = campaigns.where((c) {
              if (stateKey.isNotEmpty && c.state.trim().toLowerCase() != stateKey) return false;
              if (query.isEmpty) return true;
              final hay = [
                c.title,
                c.state,
                _money(c.totalAmount),
                c.totalAmount.toStringAsFixed(2),
                '${c.at.month}/${c.at.day}/${c.at.year}',
                ...c.contributors.map((p) => p.memberName),
              ].join(' ').toLowerCase();
              return hay.contains(query);
            }).toList();
            final showCampaignDelete = isAdmin && query.isNotEmpty && openCampaign == null;

            Future<void> refreshAfterChange() async {
              final builder = widget.nationwideStatsBuilder;
              if (builder == null) return;
              final refreshed = builder();
              setSheet(() {
                campaigns = List<NgmyCivicNationwideCampaign>.from(refreshed.contributionCampaigns);
                if (openCampaign != null) {
                  final key = openCampaign!.key;
                  NgmyCivicNationwideCampaign? next;
                  for (final c in campaigns) {
                    if (c.key == key) {
                      next = c;
                      break;
                    }
                  }
                  openCampaign = next;
                }
              });
            }

            Future<void> deleteTransactionIds(List<String> ids, {required String label}) async {
              if (widget.onAdminDeleteContribution == null || ids.isEmpty) return;
              final confirm = await showNgmyLightConfirm(
                ctx,
                title: 'Delete $label?',
                message: 'This permanently deletes $label. It will not come back.',
                cancelLabel: 'Keep',
                confirmLabel: 'Delete',
                icon: Icons.delete_outline_rounded,
                destructive: true,
              );
              if (confirm != true) return;
              var ok = true;
              for (final id in ids) {
                if (id.trim().isEmpty) continue;
                final one = await widget.onAdminDeleteContribution!(id);
                if (!one) ok = false;
              }
              if (!ctx.mounted) return;
              await refreshAfterChange();
              if (ctx.mounted) {
                ScaffoldMessenger.of(ctx).showSnackBar(
                  SnackBar(content: Text(ok ? 'Deleted permanently.' : 'Some deletes may not have completed.')),
                );
              }
            }

            Widget stateMenu() {
              if (states.isEmpty) return const SizedBox.shrink();
              return PopupMenuButton<String>(
                tooltip: 'Filter by state',
                padding: EdgeInsets.zero,
                offset: const Offset(0, 36),
                onSelected: (v) => setSheet(() => selectedState = v == '__all__' ? '' : v),
                itemBuilder: (menuCtx) => [
                  PopupMenuItem(
                    value: '__all__',
                    child: Text(
                      'All states',
                      style: TextStyle(fontWeight: selectedState.isEmpty ? FontWeight.w800 : FontWeight.w500, fontSize: 13),
                    ),
                  ),
                  const PopupMenuDivider(height: 8),
                  ...states.map(
                    (st) => PopupMenuItem(
                      value: st,
                      height: 36,
                      child: Text(
                        st,
                        style: TextStyle(
                          fontWeight: selectedState == st ? FontWeight.w800 : FontWeight.w500,
                          fontSize: 13,
                          color: selectedState == st ? tone.accent : null,
                        ),
                      ),
                    ),
                  ),
                ],
                child: Container(
                  margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: selectedState.isEmpty ? tone.fieldFill : tone.accent.withValues(alpha: 0.12),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(
                      color: selectedState.isEmpty ? tone.fieldBorder : tone.accent.withValues(alpha: 0.45),
                    ),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        selectedState.isEmpty
                            ? 'State'
                            : (selectedState.length <= 8 ? selectedState : '${selectedState.substring(0, 6)}…'),
                        style: TextStyle(
                          color: selectedState.isEmpty ? tone.secondaryText : tone.accent,
                          fontSize: 11,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                      const SizedBox(width: 2),
                      Icon(
                        Icons.arrow_drop_down_rounded,
                        size: 16,
                        color: selectedState.isEmpty ? tone.secondaryText : tone.accent,
                      ),
                    ],
                  ),
                ),
              );
            }

            if (openCampaign != null) {
              final campaign = openCampaign!;
              final people = campaign.contributors.where((p) {
                if (detailQuery.isEmpty) return true;
                final hay = [
                  p.memberName,
                  _money(p.amount),
                  p.amount.toStringAsFixed(2),
                  '${p.at.month}/${p.at.day}/${p.at.year}',
                ].join(' ').toLowerCase();
                return hay.contains(detailQuery);
              }).toList();
              final showPersonDelete = isAdmin && detailQuery.isNotEmpty;
              return Dialog(
                backgroundColor: Colors.transparent,
                insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
                child: Container(
                  constraints: const BoxConstraints(maxWidth: 420, maxHeight: 560),
                  padding: const EdgeInsets.fromLTRB(18, 16, 18, 14),
                  decoration: BoxDecoration(
                    color: tone.dialogBg,
                    borderRadius: BorderRadius.circular(22),
                    border: Border.all(color: tone.cardBorder),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Row(
                        children: [
                          IconButton(
                            tooltip: 'Back',
                            onPressed: () => setSheet(() {
                              openCampaign = null;
                              detailSearchC.clear();
                            }),
                            icon: Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: tone.primaryText),
                          ),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  campaign.title,
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 16),
                                ),
                                Text(
                                  '${campaign.state} · ${campaign.contributorCount} contributor${campaign.contributorCount == 1 ? '' : 's'} · ${_money(campaign.totalAmount)}',
                                  style: TextStyle(color: tone.secondaryText, fontSize: 11),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                      if (isAdmin) ...[
                        const SizedBox(height: 10),
                        TextField(
                          controller: detailSearchC,
                          onChanged: (_) => setSheet(() {}),
                          style: TextStyle(color: tone.primaryText, fontSize: 14),
                          decoration: InputDecoration(
                            hintText: 'Search a contributor to delete…',
                            hintStyle: TextStyle(color: tone.secondaryText, fontSize: 13),
                            prefixIcon: Icon(Icons.search_rounded, color: tone.accent, size: 20),
                            filled: true,
                            fillColor: tone.fieldFill,
                            contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: tone.fieldBorder)),
                            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: tone.fieldBorder)),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(14),
                              borderSide: BorderSide(color: tone.accent.withValues(alpha: 0.75), width: 1.4),
                            ),
                          ),
                        ),
                      ],
                      const SizedBox(height: 10),
                      Expanded(
                        child: people.isEmpty
                            ? Center(child: Text('No contributors match.', style: TextStyle(color: tone.secondaryText)))
                            : ListView.separated(
                                itemCount: people.length,
                                separatorBuilder: (_, __) => Divider(height: 1, color: tone.fieldBorder),
                                itemBuilder: (_, i) {
                                  final p = people[i];
                                  final dateLabel =
                                      '${p.at.month}/${p.at.day}/${p.at.year} · ${p.at.hour.toString().padLeft(2, '0')}:${p.at.minute.toString().padLeft(2, '0')}';
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(vertical: 8),
                                    child: Row(
                                      children: [
                                        CircleAvatar(
                                          radius: 16,
                                          backgroundColor: tone.accent.withValues(alpha: 0.14),
                                          child: Text(
                                            (() {
                                              final name = p.memberName.trim();
                                              if (name.isEmpty) return '?';
                                              return name[0].toUpperCase();
                                            })(),
                                            style: TextStyle(color: tone.accent, fontWeight: FontWeight.w900, fontSize: 12),
                                          ),
                                        ),
                                        const SizedBox(width: 10),
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                p.memberName.trim().isEmpty ? 'Contributor' : p.memberName.trim(),
                                                style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w800, fontSize: 13),
                                              ),
                                              Text(dateLabel, style: TextStyle(color: tone.secondaryText, fontSize: 11)),
                                            ],
                                          ),
                                        ),
                                        Text(_money(p.amount), style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 13)),
                                        if (showPersonDelete) ...[
                                          const SizedBox(width: 8),
                                          InkWell(
                                            onTap: () => deleteTransactionIds(
                                              [p.transactionId],
                                              label: 'this contributor record',
                                            ),
                                            borderRadius: BorderRadius.circular(10),
                                            child: Container(
                                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                                              decoration: BoxDecoration(
                                                color: const Color(0xFFFEE2E2).withValues(alpha: tone.isDark ? 0.18 : 1),
                                                borderRadius: BorderRadius.circular(10),
                                                border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.45)),
                                              ),
                                              child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFDC2626), size: 16),
                                            ),
                                          ),
                                        ],
                                      ],
                                    ),
                                  );
                                },
                              ),
                      ),
                      Align(
                        alignment: Alignment.centerRight,
                        child: FilledButton.tonal(
                          onPressed: () => setSheet(() {
                            openCampaign = null;
                            detailSearchC.clear();
                          }),
                          child: const Text('Back'),
                        ),
                      ),
                    ],
                  ),
                ),
              );
            }

            return Dialog(
              backgroundColor: Colors.transparent,
              insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420, maxHeight: 560),
                padding: const EdgeInsets.fromLTRB(18, 16, 18, 14),
                decoration: BoxDecoration(
                  color: tone.dialogBg,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: tone.cardBorder),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: tone.isDark ? 0.4 : 0.1),
                      blurRadius: 24,
                      offset: const Offset(0, 10),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: tone.accent.withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Icon(Icons.flag_rounded, color: tone.accent, size: 20),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            'All contributions',
                            style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 17),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    Text(
                      isAdmin
                          ? 'Each row is one activated help contribution. Tap to see who gave. Search to delete.'
                          : 'Each row is one activated help contribution. Tap to see who contributed.',
                      style: TextStyle(color: tone.secondaryText, fontSize: 11, height: 1.35),
                    ),
                    if (isAdmin &&
                        widget.onAdminResetContributionCount != null &&
                        selectedState.trim().isEmpty) ...[
                      const SizedBox(height: 12),
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () async {
                            await widget.onAdminResetContributionCount!();
                            await refreshAfterChange();
                          },
                          borderRadius: BorderRadius.circular(14),
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                            decoration: BoxDecoration(
                              color: const Color(0xFFFEF2F2),
                              borderRadius: BorderRadius.circular(14),
                              border: Border.all(color: const Color(0xFFDC2626), width: 2),
                            ),
                            child: const Column(
                              children: [
                                Text(
                                  'ALL STATES',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    color: Color(0xFFB91C1C),
                                    fontWeight: FontWeight.w900,
                                    fontSize: 20,
                                    letterSpacing: 1.4,
                                  ),
                                ),
                                SizedBox(height: 4),
                                Text(
                                  'Delete all contributions · 3 confirmations required',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    color: Color(0xFF991B1B),
                                    fontWeight: FontWeight.w700,
                                    fontSize: 11,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                    if (isAdmin) ...[
                      const SizedBox(height: 12),
                      TextField(
                        controller: searchC,
                        onChanged: (_) => setSheet(() {}),
                        style: TextStyle(color: tone.primaryText, fontSize: 14),
                        decoration: InputDecoration(
                          hintText: 'Search contribution name, state…',
                          hintStyle: TextStyle(color: tone.secondaryText, fontSize: 13),
                          prefixIcon: Icon(Icons.search_rounded, color: tone.accent, size: 20),
                          suffixIcon: Padding(padding: const EdgeInsets.only(right: 4), child: stateMenu()),
                          filled: true,
                          fillColor: tone.fieldFill,
                          contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: tone.fieldBorder)),
                          enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: tone.fieldBorder)),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(14),
                            borderSide: BorderSide(color: tone.accent.withValues(alpha: 0.75), width: 1.4),
                          ),
                        ),
                      ),
                      if (selectedState.trim().isNotEmpty && widget.onAdminResetContributionCount != null) ...[
                        const SizedBox(height: 10),
                        Material(
                          color: Colors.transparent,
                          child: InkWell(
                            onTap: () async {
                              await widget.onAdminResetContributionCount!(state: selectedState);
                              await refreshAfterChange();
                            },
                            borderRadius: BorderRadius.circular(12),
                            child: Container(
                              width: double.infinity,
                              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
                              decoration: BoxDecoration(
                                color: const Color(0xFFFEE2E2).withValues(alpha: tone.isDark ? 0.16 : 1),
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(color: const Color(0xFFDC2626), width: 1.6),
                              ),
                              child: Column(
                                children: [
                                  Text(
                                    'Delete all $selectedState',
                                    textAlign: TextAlign.center,
                                    style: const TextStyle(color: Color(0xFFB91C1C), fontWeight: FontWeight.w900, fontSize: 14),
                                  ),
                                  const SizedBox(height: 2),
                                  const Text(
                                    '3 confirmations required · State Trust unchanged',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(color: Color(0xFF991B1B), fontWeight: FontWeight.w700, fontSize: 10),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ] else ...[
                      const SizedBox(height: 10),
                      if (states.isNotEmpty) Align(alignment: Alignment.centerRight, child: stateMenu()),
                    ],
                    if (query.isNotEmpty || stateKey.isNotEmpty) ...[
                      const SizedBox(height: 8),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                          decoration: BoxDecoration(
                            color: tone.accent.withValues(alpha: 0.1),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: Text(
                            [
                              if (stateKey.isNotEmpty) selectedState,
                              '${filtered.length} contribution${filtered.length == 1 ? '' : 's'}',
                              if (query.isNotEmpty) 'matching search',
                            ].join(' · '),
                            style: TextStyle(color: tone.accent, fontSize: 11, fontWeight: FontWeight.w800),
                          ),
                        ),
                      ),
                    ],
                    const SizedBox(height: 10),
                    Expanded(
                      child: filtered.isEmpty
                          ? Center(
                              child: Text(
                                query.isEmpty && stateKey.isEmpty
                                    ? 'No contribution activations yet.'
                                    : 'No contributions match your filters.',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: tone.secondaryText),
                              ),
                            )
                          : ListView.separated(
                              itemCount: filtered.length,
                              separatorBuilder: (_, __) => const SizedBox(height: 8),
                              itemBuilder: (_, i) {
                                final c = filtered[i];
                                final dateLabel = '${c.at.month}/${c.at.day}/${c.at.year}';
                                return Material(
                                  color: Colors.transparent,
                                  child: InkWell(
                                    onTap: () => setSheet(() => openCampaign = c),
                                    borderRadius: BorderRadius.circular(14),
                                    child: Container(
                                      padding: const EdgeInsets.fromLTRB(12, 12, 10, 12),
                                      decoration: BoxDecoration(
                                        color: tone.fieldFill,
                                        borderRadius: BorderRadius.circular(14),
                                        border: Border.all(color: tone.fieldBorder),
                                      ),
                                      child: Row(
                                        children: [
                                          Container(
                                            width: 40,
                                            height: 40,
                                            decoration: BoxDecoration(
                                              color: tone.accent.withValues(alpha: 0.12),
                                              borderRadius: BorderRadius.circular(12),
                                            ),
                                            alignment: Alignment.center,
                                            child: Icon(Icons.volunteer_activism_rounded, color: tone.accent, size: 20),
                                          ),
                                          const SizedBox(width: 10),
                                          Expanded(
                                            child: Column(
                                              crossAxisAlignment: CrossAxisAlignment.start,
                                              children: [
                                                Text(
                                                  c.title,
                                                  maxLines: 2,
                                                  overflow: TextOverflow.ellipsis,
                                                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 14),
                                                ),
                                                const SizedBox(height: 3),
                                                Text(
                                                  '${c.state} · $dateLabel · ${c.contributorCount} people',
                                                  style: TextStyle(color: tone.secondaryText, fontSize: 11),
                                                ),
                                              ],
                                            ),
                                          ),
                                          Column(
                                            crossAxisAlignment: CrossAxisAlignment.end,
                                            children: [
                                              Text(_money(c.totalAmount), style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 13)),
                                              Icon(Icons.chevron_right_rounded, color: tone.secondaryText, size: 18),
                                            ],
                                          ),
                                          if (showCampaignDelete) ...[
                                            const SizedBox(width: 6),
                                            InkWell(
                                              onTap: () => deleteTransactionIds(
                                                c.contributors.map((p) => p.transactionId).toList(),
                                                label: '"${c.title}" for ${c.state}',
                                              ),
                                              borderRadius: BorderRadius.circular(10),
                                              child: Container(
                                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                                                decoration: BoxDecoration(
                                                  color: const Color(0xFFFEE2E2).withValues(alpha: tone.isDark ? 0.18 : 1),
                                                  borderRadius: BorderRadius.circular(10),
                                                  border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.45)),
                                                ),
                                                child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFDC2626), size: 16),
                                              ),
                                            ),
                                          ],
                                        ],
                                      ),
                                    ),
                                  ),
                                );
                              },
                            ),
                    ),
                    const SizedBox(height: 8),
                    Align(
                      alignment: Alignment.centerRight,
                      child: FilledButton.tonal(
                        onPressed: () => Navigator.pop(ctx),
                        child: const Text('Close'),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
    searchC.dispose();
    detailSearchC.dispose();
  }

  Future<void> _showNationwideStatsDialog() async {
    final builder = widget.nationwideStatsBuilder;
    if (builder == null) return;
    final stats = builder();
    if (!mounted) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    await showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 24),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 360),
            padding: const EdgeInsets.fromLTRB(22, 20, 22, 18),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: tone.isDark ? 0.45 : 0.12),
                  blurRadius: 28,
                  offset: const Offset(0, 12),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: _NationwideLiveCornerStat(
                        label: 'Members',
                        value: stats.registeredMembers.toString(),
                        icon: Icons.groups_rounded,
                        alignEnd: false,
                        gradient: const [Color(0xFF2563EB), Color(0xFF1D4ED8), Color(0xFF1E3A8A)],
                        accent: const Color(0xFF93C5FD),
                        enterDelay: Duration.zero,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _NationwideLiveCornerStat(
                        label: 'Family total',
                        value: stats.totalFamilyMembers.toString(),
                        icon: Icons.family_restroom_rounded,
                        alignEnd: true,
                        gradient: const [Color(0xFF7C3AED), Color(0xFF6D28D9), Color(0xFF5B21B6)],
                        accent: const Color(0xFFC4B5FD),
                        enterDelay: const Duration(milliseconds: 80),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: _NationwideLiveCornerStat(
                        label: 'Contributions',
                        value: stats.totalContributions.toString(),
                        icon: Icons.receipt_long_rounded,
                        alignEnd: false,
                        gradient: const [Color(0xFF0891B2), Color(0xFF0E7490), Color(0xFF155E75)],
                        accent: const Color(0xFF67E8F9),
                        enterDelay: const Duration(milliseconds: 160),
                        onTap: () async {
                          Navigator.pop(ctx);
                          await _showNationwideContributionsDialog(stats);
                        },
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _NationwideLiveCornerStat(
                        label: 'Deceased',
                        value: stats.deceasedMembers.toString(),
                        icon: Icons.person_off_rounded,
                        alignEnd: true,
                        gradient: const [Color(0xFF64748B), Color(0xFF475569), Color(0xFF334155)],
                        accent: const Color(0xFFCBD5E1),
                        enterDelay: const Duration(milliseconds: 240),
                        onTap: widget.onOpenNationwideDeceased == null
                            ? null
                            : () async {
                                Navigator.pop(ctx);
                                await widget.onOpenNationwideDeceased!();
                              },
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    color: tone.accent.withValues(alpha: 0.14),
                    shape: BoxShape.circle,
                    border: Border.all(color: tone.accent.withValues(alpha: 0.45)),
                  ),
                  child: Icon(Icons.public_rounded, color: tone.accent, size: 24),
                ),
                const SizedBox(height: 12),
                Text(
                  'United States',
                  style: TextStyle(
                    color: tone.primaryText,
                    fontWeight: FontWeight.w900,
                    fontSize: 18,
                    letterSpacing: -0.3,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'Civic Registry nationwide',
                  style: TextStyle(color: tone.secondaryText, fontSize: 12, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 18),
                _NationwideContributionsKeptHero(
                  tone: tone,
                  amount: _money(stats.contributionsKept),
                  hint:
                      'US-wide money still in contribution cases. Removed, deleted, reset, and deceased-member funds are not counted.',
                ),
                const SizedBox(height: 16),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton(
                    style: FilledButton.styleFrom(
                      backgroundColor: tone.accent,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 12),
                    ),
                    onPressed: () => Navigator.pop(ctx),
                    child: const Text('Close', style: TextStyle(fontWeight: FontWeight.w800)),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  List<NgmyCivicWalletTxn> get _filteredRecent {
    final q = _searchC.text.trim().toLowerCase();
    final now = DateTime.now();
    DateTime? rangeStart;
    switch (_range) {
      case 0:
        rangeStart = DateTime(now.year, now.month, now.day);
        break;
      case 1:
        rangeStart = now.subtract(const Duration(days: 7));
        break;
      case 2:
        rangeStart = DateTime(now.year, now.month, 1);
        break;
      case 3:
        rangeStart = DateTime(now.year, 1, 1);
        break;
    }
    return _snap.recent.where((t) {
      if (q.isNotEmpty && !t.title.toLowerCase().contains(q)) return false;
      if (_dateFilter != null) {
        final d = DateTime(t.at.year, t.at.month, t.at.day);
        final a = DateTime(_dateFilter!.start.year, _dateFilter!.start.month, _dateFilter!.start.day);
        final b = DateTime(_dateFilter!.end.year, _dateFilter!.end.month, _dateFilter!.end.day);
        if (d.isBefore(a) || d.isAfter(b)) return false;
      } else if (rangeStart != null && t.at.isBefore(rangeStart)) {
        return false;
      }
      return true;
    }).toList();
  }

  Future<void> _pickDateFilter() async {
    final now = DateTime.now();
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(now.year - 5),
      lastDate: DateTime(now.year + 1),
      initialDateRange: _dateFilter ??
          DateTimeRange(start: now.subtract(const Duration(days: 30)), end: now),
      helpText: 'Filter by date',
      builder: (context, child) {
        final isDark = Theme.of(context).brightness == Brightness.dark;
        return Theme(
          data: Theme.of(context).copyWith(
            colorScheme: isDark
                ? const ColorScheme.dark(
                    primary: Color(0xFF059669),
                    surface: Color(0xFF141414),
                    onSurface: Colors.white,
                  )
                : const ColorScheme.light(
                    primary: Color(0xFF059669),
                    surface: Colors.white,
                    onSurface: Color(0xFF0F172A),
                  ),
          ),
          child: child!,
        );
      },
    );
    if (!mounted) return;
    setState(() => _dateFilter = picked);
  }

  Future<void> _promptPlusMenu() async {
    if (!widget.canEdit) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final choice = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: tone.dialogBg,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) {
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 12, 18, 20),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(color: tone.cardBorder, borderRadius: BorderRadius.circular(99)),
                ),
                const SizedBox(height: 14),
                Text('State case actions', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 17)),
                const SizedBox(height: 6),
                Text(
                  'State Trust stays separate from contribution money.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: tone.secondaryText, fontSize: 12),
                ),
                const SizedBox(height: 16),
                ListTile(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  tileColor: const Color(0xFF0F766E).withValues(alpha: tone.isDark ? 0.22 : 0.1),
                  leading: const Icon(Icons.account_balance_rounded, color: Color(0xFF0F766E)),
                  title: Text('Add to State Trust', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w800)),
                  subtitle: Text('Registrar deposit into the protected state reserve', style: TextStyle(color: tone.secondaryText, fontSize: 12)),
                  onTap: () => Navigator.pop(ctx, 'trust_deposit'),
                ),
                const SizedBox(height: 8),
                ListTile(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  tileColor: const Color(0xFF1D4ED8).withValues(alpha: tone.isDark ? 0.22 : 0.1),
                  leading: const Icon(Icons.swap_horiz_rounded, color: Color(0xFF2563EB)),
                  title: Text('Transfer between ledgers', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w800)),
                  subtitle: Text(
                    widget.trustOutRequiresDualApproval && !widget.isGlobalAdmin
                        ? 'Trust → Contribution needs a second registrar approval'
                        : 'Move money between Contribution Case and State Trust',
                    style: TextStyle(color: tone.secondaryText, fontSize: 12),
                  ),
                  onTap: () => Navigator.pop(ctx, 'transfer'),
                ),
                const SizedBox(height: 8),
                ListTile(
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  tileColor: tone.chipBg,
                  leading: Icon(Icons.receipt_long_rounded, color: tone.accent),
                  title: Text('Record spending', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w800)),
                  subtitle: Text('Spend from State Trust or Contribution Case', style: TextStyle(color: tone.secondaryText, fontSize: 12)),
                  onTap: () => Navigator.pop(ctx, 'spend'),
                ),
                if (widget.canAdminBrowseStates) ...[
                  const SizedBox(height: 8),
                  ListTile(
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                    leading: Icon(Icons.table_rows_rounded, color: tone.secondaryText),
                    title: Text('Browse all state cases', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700)),
                    onTap: () => Navigator.pop(ctx, 'admin_states'),
                  ),
                ],
              ],
            ),
          ),
        );
      },
    );
    if (!mounted || choice == null) return;
    if (choice == 'admin_states') {
      await _openAdminStateCases();
      return;
    }
    if (choice == 'trust_deposit') {
      await _promptTrustDeposit();
      return;
    }
    if (choice == 'transfer') {
      await _promptTransfer();
      return;
    }
    if (choice == 'spend') {
      await _promptSpending();
    }
  }

  Future<void> _promptTransfer() async {
    if (!widget.canEdit) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    var direction = 'to_trust';
    final amountC = TextEditingController();
    final noteC = TextEditingController();
    final saved = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            final needsDual = direction == 'to_contribution' &&
                widget.trustOutRequiresDualApproval &&
                !widget.isGlobalAdmin;
            return Dialog(
              backgroundColor: Colors.transparent,
              insetPadding: const EdgeInsets.all(20),
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420),
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
                decoration: BoxDecoration(
                  color: tone.dialogBg,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: tone.cardBorder),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text('Transfer funds', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18)),
                    const SizedBox(height: 6),
                    Text(
                      needsDual
                          ? 'Removing money from State Trust requires approval from another authorized registrar in this state.'
                          : 'Transfers are recorded on both ledgers for every member to see.',
                      style: TextStyle(color: tone.secondaryText, fontSize: 12, height: 1.35),
                    ),
                    const SizedBox(height: 14),
                    Text('Direction', style: TextStyle(color: tone.secondaryText, fontWeight: FontWeight.w700, fontSize: 12)),
                    const SizedBox(height: 8),
                    ChoiceChip(
                      label: Text('Contribution → State Trust (${_money(_snap.available)})'),
                      selected: direction == 'to_trust',
                      onSelected: (_) => setLocal(() => direction = 'to_trust'),
                      selectedColor: const Color(0xFF0F766E),
                      labelStyle: TextStyle(
                        color: direction == 'to_trust' ? Colors.white : tone.secondaryText,
                        fontWeight: FontWeight.w700,
                        fontSize: 11,
                      ),
                    ),
                    const SizedBox(height: 8),
                    ChoiceChip(
                      label: Text('State Trust → Contribution (${_money(_snap.trustBalance)})'),
                      selected: direction == 'to_contribution',
                      onSelected: (_) => setLocal(() => direction = 'to_contribution'),
                      selectedColor: const Color(0xFF2563EB),
                      labelStyle: TextStyle(
                        color: direction == 'to_contribution' ? Colors.white : tone.secondaryText,
                        fontWeight: FontWeight.w700,
                        fontSize: 11,
                      ),
                    ),
                    const SizedBox(height: 14),
                    TextField(
                      controller: amountC,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700),
                      decoration: _fieldDec(tone, 'Amount (\$)', Icons.attach_money_rounded),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: noteC,
                      style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                      maxLines: 2,
                      decoration: _fieldDec(tone, 'Note (optional)', Icons.edit_note_rounded),
                    ),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(ctx, false),
                            child: const Text('Cancel'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: FilledButton(
                            onPressed: () => Navigator.pop(ctx, true),
                            style: FilledButton.styleFrom(
                              backgroundColor: needsDual ? const Color(0xFF2563EB) : const Color(0xFF0F766E),
                            ),
                            child: Text(needsDual ? 'Request approval' : 'Transfer'),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    final note = noteC.text.trim();
    amountC.dispose();
    noteC.dispose();
    if (saved != true || !mounted) return;
    if (amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a valid transfer amount.')));
      return;
    }
    final bal = direction == 'to_trust' ? _snap.available : _snap.trustBalance;
    if (amount > bal + 0.001) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Only ${_money(bal)} is available in that ledger.')),
      );
      return;
    }
    await widget.onTransferFunds(
      amount: amount,
      description: note.isEmpty
          ? (direction == 'to_trust' ? 'Transfer to State Trust' : 'Transfer to Contribution Case')
          : note,
      direction: direction,
    );
    if (!mounted) return;
    _reload();
    final needsDual = direction == 'to_contribution' &&
        widget.trustOutRequiresDualApproval &&
        !widget.isGlobalAdmin;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          needsDual
              ? 'Transfer requested — waiting for a second registrar to approve.'
              : 'Transfer of ${_money(amount)} recorded.',
        ),
      ),
    );
  }

  Future<void> _promptTrustDeposit() async {
    if (!widget.canEdit) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final amountC = TextEditingController();
    final noteC = TextEditingController();
    final saved = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.all(20),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 420),
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text('Add to State Trust', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(height: 6),
                Text(
                  'This goes into the state reserve — never mixed with contribution money.',
                  style: TextStyle(color: tone.secondaryText, fontSize: 12, height: 1.35),
                ),
                const SizedBox(height: 16),
                TextField(
                  controller: amountC,
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700),
                  decoration: _fieldDec(tone, 'Amount (\$)', Icons.attach_money_rounded),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: noteC,
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                  maxLines: 2,
                  decoration: _fieldDec(tone, 'Note (optional)', Icons.edit_note_rounded),
                ),
                const SizedBox(height: 18),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        child: const Text('Cancel'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: () => Navigator.pop(ctx, true),
                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFF0F766E)),
                        child: const Text('Deposit'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    amountC.dispose();
    final note = noteC.text.trim();
    noteC.dispose();
    if (saved != true || !mounted) return;
    if (amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a valid deposit amount.')));
      return;
    }
    await widget.onAddTrustDeposit(
      amount: amount,
      description: note.isEmpty ? 'State Trust deposit' : note,
    );
    if (!mounted) return;
    _reload();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Deposited ${_money(amount)} into State Trust.')),
    );
  }

  Future<void> _promptSpending({NgmyCivicWalletSpendingRow? existing}) async {
    if (!widget.canEdit) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    var fund = existing?.fund ?? 'contribution';
    final amountC = TextEditingController(
      text: existing == null
          ? ''
          : existing.amount.toStringAsFixed(existing.amount == existing.amount.roundToDouble() ? 0 : 2),
    );
    final noteC = TextEditingController(text: existing?.description ?? '');
    final action = await showDialog<String>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            return Dialog(
              backgroundColor: Colors.transparent,
              insetPadding: const EdgeInsets.all(20),
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420),
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
                decoration: BoxDecoration(
                  color: tone.dialogBg,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: tone.cardBorder),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: tone.isDark ? 0.45 : 0.12),
                      blurRadius: 28,
                      offset: const Offset(0, 12),
                    ),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 42,
                          height: 42,
                          decoration: BoxDecoration(
                            color: tone.accent.withValues(alpha: tone.isDark ? 0.22 : 0.12),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Icon(Icons.receipt_long_rounded, color: tone.accent),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                existing == null ? 'Record spending' : 'Update spending',
                                style: TextStyle(
                                  color: tone.primaryText,
                                  fontWeight: FontWeight.w900,
                                  fontSize: 18,
                                ),
                              ),
                              Text(
                                existing == null
                                    ? 'Choose which ledger this spend comes from.'
                                    : 'Edit this spending, or use trash to schedule delete.',
                                style: TextStyle(color: tone.secondaryText, fontSize: 12),
                              ),
                            ],
                          ),
                        ),
                        if (existing != null)
                          IconButton(
                            tooltip: 'Delete (takes 24 hours)',
                            onPressed: () => Navigator.pop(ctx, 'delete'),
                            icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFDC2626)),
                          ),
                      ],
                    ),
                    if (existing == null) ...[
                      const SizedBox(height: 14),
                      Text('Fund', style: TextStyle(color: tone.secondaryText, fontWeight: FontWeight.w700, fontSize: 12)),
                      const SizedBox(height: 8),
                      Row(
                        children: [
                          Expanded(
                            child: ChoiceChip(
                              label: Text('Contribution Case (${_money(_snap.available)})'),
                              selected: fund == 'contribution',
                              onSelected: (_) => setLocal(() => fund = 'contribution'),
                              selectedColor: tone.accent,
                              labelStyle: TextStyle(
                                color: fund == 'contribution' ? Colors.white : tone.secondaryText,
                                fontWeight: FontWeight.w700,
                                fontSize: 11,
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: ChoiceChip(
                              label: Text('State Trust (${_money(_snap.trustBalance)})'),
                              selected: fund == 'trust',
                              onSelected: (_) => setLocal(() => fund = 'trust'),
                              selectedColor: const Color(0xFF0F766E),
                              labelStyle: TextStyle(
                                color: fund == 'trust' ? Colors.white : tone.secondaryText,
                                fontWeight: FontWeight.w700,
                                fontSize: 11,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                    const SizedBox(height: 18),
                    TextField(
                      controller: amountC,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700),
                      decoration: _fieldDec(tone, 'Amount (\$)', Icons.attach_money_rounded),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: noteC,
                      style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                      maxLines: 2,
                      decoration: _fieldDec(tone, 'What was it spent on?', Icons.edit_note_rounded),
                    ),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(ctx, 'cancel'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: tone.secondaryText,
                              side: BorderSide(color: tone.fieldBorder),
                              padding: const EdgeInsets.symmetric(vertical: 14),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: FilledButton(
                            onPressed: () => Navigator.pop(ctx, 'save'),
                            style: FilledButton.styleFrom(
                              backgroundColor: tone.accent,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(vertical: 14),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );

    if (action == 'admin_states') {
      amountC.dispose();
      noteC.dispose();
      if (mounted) await _openAdminStateCases();
      return;
    }

    // Trash → schedule 24h delete.
    if (action == 'delete' && existing != null && mounted) {
      final schedule = await showDialog<bool>(
        context: context,
        barrierDismissible: false,
        builder: (ctx) {
          return Dialog(
            backgroundColor: Colors.transparent,
            insetPadding: const EdgeInsets.all(20),
            child: Container(
              constraints: const BoxConstraints(maxWidth: 400),
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
              decoration: BoxDecoration(
                color: tone.dialogBg,
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: tone.cardBorder),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text('Delete spending?', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18)),
                  const SizedBox(height: 8),
                  Text(
                    'This spending will stay visible for 24 hours with a live countdown, then be completely deleted.',
                    style: TextStyle(color: tone.secondaryText, fontSize: 13, height: 1.35),
                  ),
                  const SizedBox(height: 18),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => Navigator.pop(ctx, false),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: tone.secondaryText,
                            side: BorderSide(color: tone.fieldBorder),
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: () => Navigator.pop(ctx, true),
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFFDC2626),
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: const Text('Delete', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          );
        },
      );
      if (schedule == true && mounted) {
        await widget.onDeleteSpending(existing.id);
        if (!mounted) return;
        _reload();
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Delete scheduled — fully removed in 24 hours.')),
        );
      }
      return;
    }

    if (action != 'save' || !mounted) return;
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    final note = noteC.text.trim();
    if (amount <= 0 || note.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid amount and what it was spent on.')),
      );
      return;
    }

    // Second step — confirm amount / purpose before it is recorded.
    final confirmed = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.all(20),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 420),
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Confirm spending',
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18),
                ),
                const SizedBox(height: 8),
                Text(
                  'Double-check this before it is recorded for ${_snap.state}.',
                  style: TextStyle(color: tone.secondaryText, fontSize: 13),
                ),
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: tone.fieldFill,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: tone.fieldBorder),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Amount', style: TextStyle(color: tone.secondaryText, fontSize: 12, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 2),
                      Text(_money(amount), style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 22)),
                      const SizedBox(height: 12),
                      Text('Spent on', style: TextStyle(color: tone.secondaryText, fontSize: 12, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 2),
                      Text(note, style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700, fontSize: 15)),
                    ],
                  ),
                ),
                const SizedBox(height: 18),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: tone.secondaryText,
                          side: BorderSide(color: tone.fieldBorder),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Go back', style: TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: () => Navigator.pop(ctx, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: tone.accent,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Confirm', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
    if (confirmed != true || !mounted) return;

    if (existing == null) {
      final bal = fund == 'trust' ? _snap.trustBalance : _snap.available;
      if (amount > bal + 0.001) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              fund == 'trust'
                  ? 'State Trust only has ${_money(bal)} available.'
                  : 'Contribution Case only has ${_money(bal)} available.',
            ),
          ),
        );
        return;
      }
      await widget.onAddSpending(amount: amount, description: note, fund: fund);
    } else {
      await widget.onUpdateSpending(spendingId: existing.id, amount: amount, description: note);
    }
    if (!mounted) return;
    _reload();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Spending recorded — members see it live.')),
    );
  }

  InputDecoration _fieldDec(_WalletTone tone, String label, IconData icon) {
    return InputDecoration(
      labelText: label,
      labelStyle: TextStyle(color: tone.secondaryText),
      prefixIcon: Icon(icon, color: tone.secondaryText),
      filled: true,
      fillColor: tone.fieldFill,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: tone.fieldBorder),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: tone.accent, width: 1.5),
      ),
    );
  }

  Future<void> _openAdminStateCases() async {
    if (!widget.canAdminBrowseStates) return;
    final forState = widget.snapshotForState;
    final states = widget.allStates;
    if (forState == null || states.isEmpty) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final q = TextEditingController();

    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (sheetCtx) {
        return StatefulBuilder(
          builder: (sheetCtx, setSheet) {
            final query = q.text.trim().toLowerCase();
            final filtered = query.isEmpty
                ? states
                : states.where((s) => s.toLowerCase().contains(query)).toList(growable: false);

            return SafeArea(
              child: Align(
                alignment: Alignment.bottomCenter,
                child: Container(
                  constraints: BoxConstraints(
                    maxWidth: 560,
                    maxHeight: MediaQuery.sizeOf(sheetCtx).height * 0.88,
                  ),
                  margin: const EdgeInsets.fromLTRB(12, 12, 12, 12),
                  decoration: BoxDecoration(
                    color: tone.dialogBg,
                    borderRadius: BorderRadius.circular(24),
                    border: Border.all(color: tone.cardBorder),
                  ),
                  child: Column(
                    children: [
                      const SizedBox(height: 10),
                      Container(
                        width: 40,
                        height: 4,
                        decoration: BoxDecoration(
                          color: tone.secondaryText.withValues(alpha: 0.35),
                          borderRadius: BorderRadius.circular(99),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
                        child: Row(
                          children: [
                            Expanded(
                              child: Text(
                                'State cases',
                                style: TextStyle(
                                  color: tone.primaryText,
                                  fontWeight: FontWeight.w900,
                                  fontSize: 18,
                                ),
                              ),
                            ),
                            IconButton(
                              onPressed: () => Navigator.pop(sheetCtx),
                              icon: Icon(Icons.close_rounded, color: tone.secondaryText),
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
                        child: TextField(
                          controller: q,
                          onChanged: (_) => setSheet(() {}),
                          style: TextStyle(color: tone.primaryText),
                          decoration: InputDecoration(
                            hintText: 'Search states…',
                            hintStyle: TextStyle(color: tone.secondaryText),
                            prefixIcon: Icon(Icons.search_rounded, color: tone.secondaryText),
                            filled: true,
                            fillColor: tone.fieldFill,
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(14),
                              borderSide: BorderSide(color: tone.fieldBorder),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(14),
                              borderSide: BorderSide(color: tone.fieldBorder),
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                        child: Row(
                          children: [
                            Expanded(
                              flex: 3,
                              child: Text('State', style: TextStyle(color: tone.secondaryText, fontWeight: FontWeight.w700, fontSize: 12)),
                            ),
                            Expanded(
                              flex: 2,
                              child: Text('Available', textAlign: TextAlign.right, style: TextStyle(color: tone.secondaryText, fontWeight: FontWeight.w700, fontSize: 12)),
                            ),
                            const SizedBox(width: 132),
                          ],
                        ),
                      ),
                      Expanded(
                        child: ListView.separated(
                          padding: const EdgeInsets.fromLTRB(10, 0, 10, 16),
                          itemCount: filtered.length,
                          separatorBuilder: (_, _) => Divider(height: 1, color: tone.cardBorder),
                          itemBuilder: (ctx, i) {
                            final state = filtered[i];
                            final snap = forState(state);
                            final available = snap.available;
                            final isCurrent = state.trim().toLowerCase() == widget.state.trim().toLowerCase();
                            final soft = widget.softResetForState?.call(state);
                            final restorable = ngmyWalletSoftResetRestorable(soft);
                            return Padding(
                              padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 6),
                              child: Row(
                                children: [
                                  Expanded(
                                    flex: 3,
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          state,
                                          style: TextStyle(
                                            color: tone.primaryText,
                                            fontWeight: FontWeight.w800,
                                            fontSize: 14,
                                          ),
                                        ),
                                        if (isCurrent)
                                          Text('Open now', style: TextStyle(color: tone.accent, fontSize: 11, fontWeight: FontWeight.w700)),
                                        if (restorable)
                                          Text('Reset pending 24h', style: TextStyle(color: const Color(0xFFF59E0B), fontSize: 11, fontWeight: FontWeight.w700)),
                                      ],
                                    ),
                                  ),
                                  Expanded(
                                    flex: 2,
                                    child: Text(
                                      _money(available),
                                      textAlign: TextAlign.right,
                                      style: TextStyle(
                                        color: available > 0 ? tone.accent : tone.secondaryText,
                                        fontWeight: FontWeight.w800,
                                        fontSize: 14,
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 4),
                                  IconButton(
                                    visualDensity: VisualDensity.compact,
                                    onPressed: available <= 0
                                        ? null
                                        : () async {
                                            final removed = await _promptAdminRemoveAvailable(
                                              state: state,
                                              available: available,
                                              tone: tone,
                                            );
                                            if (removed == true && sheetCtx.mounted) {
                                              setSheet(() {});
                                              if (mounted) _reload();
                                            }
                                          },
                                    icon: Icon(
                                      Icons.remove_circle_outline_rounded,
                                      color: available > 0 ? const Color(0xFFEF4444) : tone.secondaryText,
                                    ),
                                  ),
                                  IconButton(
                                    visualDensity: VisualDensity.compact,
                                    onPressed: () async {
                                      if (restorable) {
                                        final restore = widget.onAdminRestoreStateCase;
                                        if (restore != null) {
                                          await restore(state);
                                          if (sheetCtx.mounted) setSheet(() {});
                                          if (mounted) _reload();
                                        }
                                        return;
                                      }
                                      final ok = await _promptAdminResetStateCase(state: state, tone: tone);
                                      if (ok == true && sheetCtx.mounted) {
                                        setSheet(() {});
                                        if (mounted) _reload();
                                      }
                                    },
                                    icon: Icon(
                                      restorable ? Icons.undo_rounded : Icons.restart_alt_rounded,
                                      color: restorable ? tone.accent : const Color(0xFFF59E0B),
                                    ),
                                  ),
                                  IconButton(
                                    visualDensity: VisualDensity.compact,
                                    onPressed: () async {
                                      Navigator.pop(sheetCtx);
                                      final open = widget.onOpenStateCase;
                                      if (open != null) {
                                        await open(state);
                                      }
                                      if (mounted) _reload();
                                    },
                                    icon: Icon(Icons.open_in_new_rounded, color: tone.headerFg),
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        );
      },
    );
    q.dispose();
    if (mounted) _reload();
  }

  Future<bool?> _promptAdminRemoveAvailable({
    required String state,
    required double available,
    required _WalletTone tone,
  }) async {
    final remove = widget.onAdminRemoveAvailable;
    if (remove == null || available <= 0) return false;
    final amountC = TextEditingController(
      text: available == available.roundToDouble()
          ? available.toStringAsFixed(0)
          : available.toStringAsFixed(2),
    );
    final ok = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.all(20),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 400),
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  state,
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 17),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: amountC,
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700),
                  decoration: InputDecoration(
                    labelText: 'Amount',
                    labelStyle: TextStyle(color: tone.secondaryText),
                    filled: true,
                    fillColor: tone.fieldFill,
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                ),
                const SizedBox(height: 10),
                TextButton(
                  onPressed: () {
                    amountC.text = available == available.roundToDouble()
                        ? available.toStringAsFixed(0)
                        : available.toStringAsFixed(2);
                  },
                  child: Text(_money(available), style: TextStyle(color: tone.accent)),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        child: const Text('Cancel'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFFEF4444),
                          foregroundColor: Colors.white,
                        ),
                        onPressed: () => Navigator.pop(ctx, true),
                        child: const Text('Save'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
    if (ok != true) {
      amountC.dispose();
      return false;
    }
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    amountC.dispose();
    if (amount <= 0) return false;
    final clipped = amount > available ? available : amount;
    await remove(state: state, amount: clipped);
    return true;
  }

  Future<bool?> _promptAdminResetStateCase({
    required String state,
    required _WalletTone tone,
  }) async {
    final reset = widget.onAdminResetStateCase;
    if (reset == null) return false;
    var everything = true;
    var hideBudget = true;
    var hideSpendings = true;
    var hideTransactions = true;

    final confirmed = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            void applyEverything(bool v) {
              everything = v;
              if (v) {
                hideBudget = true;
                hideSpendings = true;
                hideTransactions = true;
              }
            }

            void syncEverything() {
              everything = hideBudget && hideSpendings && hideTransactions;
            }

            Widget check({
              required String label,
              required bool value,
              required ValueChanged<bool?> onChanged,
            }) {
              return CheckboxListTile(
                dense: true,
                contentPadding: EdgeInsets.zero,
                controlAffinity: ListTileControlAffinity.leading,
                activeColor: tone.accent,
                value: value,
                onChanged: onChanged,
                title: Text(label, style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700, fontSize: 14)),
              );
            }

            return Dialog(
              backgroundColor: Colors.transparent,
              insetPadding: const EdgeInsets.all(20),
              child: Container(
                constraints: const BoxConstraints(maxWidth: 420),
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
                decoration: BoxDecoration(
                  color: tone.dialogBg,
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: tone.cardBorder),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(state, style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18)),
                    const SizedBox(height: 6),
                    Text(
                      'Choose what to reset. Hidden for 24 hours — you can undo, then it is gone forever.',
                      style: TextStyle(color: tone.secondaryText, fontSize: 12, height: 1.35),
                    ),
                    const SizedBox(height: 10),
                    check(
                      label: 'Everything (start like new)',
                      value: everything,
                      onChanged: (v) => setLocal(() => applyEverything(v == true)),
                    ),
                    check(
                      label: 'Monthly budget',
                      value: hideBudget,
                      onChanged: (v) => setLocal(() {
                        hideBudget = v == true;
                        syncEverything();
                      }),
                    ),
                    check(
                      label: 'Expenses / spending',
                      value: hideSpendings,
                      onChanged: (v) => setLocal(() {
                        hideSpendings = v == true;
                        syncEverything();
                      }),
                    ),
                    check(
                      label: 'Last transactions',
                      value: hideTransactions,
                      onChanged: (v) => setLocal(() {
                        hideTransactions = v == true;
                        syncEverything();
                      }),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(ctx, false),
                            child: const Text('Cancel'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              backgroundColor: const Color(0xFFF59E0B),
                              foregroundColor: Colors.black,
                            ),
                            onPressed: (!hideBudget && !hideSpendings && !hideTransactions)
                                ? null
                                : () => Navigator.pop(ctx, true),
                            child: const Text('Reset'),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
    if (confirmed != true) return false;
    if (!hideBudget && !hideSpendings && !hideTransactions) return false;
    if (!mounted) return false;

    final sure = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.all(20),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 400),
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text('Confirm reset?', style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(height: 8),
                Text(
                  'Reset $state now? You can bring it back within 24 hours. After that it is permanent.',
                  style: TextStyle(color: tone.secondaryText, fontSize: 13, height: 1.35),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        child: const Text('Cancel'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFFDC2626),
                          foregroundColor: Colors.white,
                        ),
                        onPressed: () => Navigator.pop(ctx, true),
                        child: const Text('Confirm'),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
    if (sure != true) return false;
    await reset(
      state: state,
      hideBudget: hideBudget,
      hideSpendings: hideSpendings,
      hideTransactions: hideTransactions,
    );
    return true;
  }

  @override
  Widget build(BuildContext context) {
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final spent = _snap.spent;
    final available = _snap.available;
    final budget = math.max(_snap.collected, spent + available);
    final spentRatio = budget <= 0 ? 0.0 : (spent / budget).clamp(0.0, 1.0);
    final recent = _filteredRecent;

    return Scaffold(
      backgroundColor: tone.pageBg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => NgmyNavigator.pop(context),
                    icon: Icon(Icons.arrow_back_rounded, color: tone.headerFg),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        Text(
                          'State case · ${_snap.state}',
                          style: TextStyle(color: tone.headerMuted, fontWeight: FontWeight.w700, fontSize: 12),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          'Tracked total ${_money(_snap.totalTracked)}',
                          style: TextStyle(
                            color: tone.headerFg,
                            fontWeight: FontWeight.w900,
                            fontSize: 22,
                            letterSpacing: -0.6,
                            height: 1.05,
                          ),
                        ),
                      ],
                    ),
                  ),
                  if (widget.canEdit)
                    IconButton(
                      tooltip: 'Add deposit or record spending',
                      onPressed: () => _promptPlusMenu(),
                      icon: Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: tone.isDark ? Colors.white : Colors.black,
                          shape: BoxShape.circle,
                          boxShadow: [
                            BoxShadow(
                              color: tone.accent.withValues(alpha: 0.35),
                              blurRadius: 12,
                            ),
                          ],
                        ),
                        child: Icon(Icons.add, color: tone.isDark ? Colors.black : Colors.white),
                      ),
                    )
                  else
                    const SizedBox(width: 48),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 10, 18, 0),
              child: Row(
                children: [
                  Expanded(
                    child: _FundFrame(
                      title: 'State Trust',
                      subtitle: 'Registrar reserve',
                      amount: _money(_snap.trustBalance),
                      detail: _snap.trustReserved > 0
                          ? 'In ${_money(_snap.trustDeposited)} · Out ${_money(_snap.trustSpent)} · Reserved ${_money(_snap.trustReserved)}'
                          : 'In ${_money(_snap.trustDeposited)} · Out ${_money(_snap.trustSpent)}',
                      gradient: const [Color(0xFF0F766E), Color(0xFF134E4A)],
                      icon: Icons.account_balance_rounded,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: _FundFrame(
                      title: 'Contribution Case',
                      subtitle: 'Community funds',
                      amount: _money(available),
                      detail: _snap.transferCredits > 0
                          ? 'In ${_money(_snap.collected)} · Credits ${_money(_snap.transferCredits)} · Out ${_money(spent)}'
                          : 'In ${_money(_snap.collected)} · Out ${_money(spent)}',
                      gradient: const [Color(0xFF047857), Color(0xFF065F46)],
                      icon: Icons.volunteer_activism_rounded,
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 10, 18, 0),
              child: Text(
                'Contribution money never enters State Trust. Only an authorized registrar can deposit into Trust or record spending from either ledger.',
                textAlign: TextAlign.center,
                style: TextStyle(color: tone.secondaryText, fontSize: 11, height: 1.35),
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(18, 14, 18, 28),
                children: [
                  if (_snap.pendingTransfers.isNotEmpty) ...[
                    for (final p in _snap.pendingTransfers)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 12),
                        child: _PendingTransferCard(
                          transfer: p,
                          money: _money,
                          canAct: widget.canEdit || widget.isGlobalAdmin,
                          currentEmail: widget.currentUserEmail,
                          isGlobalAdmin: widget.isGlobalAdmin,
                          onApprove: () async {
                            await widget.onApproveTransfer(p.id);
                            if (!mounted) return;
                            _reload();
                          },
                          onReject: () async {
                            await widget.onRejectTransfer(p.id);
                            if (!mounted) return;
                            _reload();
                          },
                        ),
                      ),
                  ],
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Text(
                                'Contribution budget',
                                style: TextStyle(
                                  fontWeight: FontWeight.w800,
                                  fontSize: 16,
                                  color: tone.primaryText,
                                ),
                              ),
                            ),
                            if (widget.nationwideStatsBuilder != null)
                              Material(
                                color: Colors.transparent,
                                child: InkWell(
                                  onTap: _showNationwideStatsDialog,
                                  borderRadius: BorderRadius.circular(8),
                                  child: Padding(
                                    padding: const EdgeInsets.all(4),
                                    child: Icon(
                                      Icons.insights_rounded,
                                      size: 17,
                                      color: tone.accent.withValues(alpha: 0.9),
                                    ),
                                  ),
                                ),
                              ),
                          ],
                        ),
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            Expanded(
                              child: _BudgetStat(tone: tone, label: 'Spent', value: '${_money(spent)} / ${_money(budget)}'),
                            ),
                            Expanded(
                              child: _BudgetStat(tone: tone, label: 'Available', value: _money(available), alignEnd: true),
                            ),
                          ],
                        ),
                        const SizedBox(height: 14),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(99),
                          child: LinearProgressIndicator(
                            value: spentRatio,
                            minHeight: 10,
                            backgroundColor: tone.progressTrack,
                            valueColor: const AlwaysStoppedAnimation(Color(0xFFF97316)),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 14),
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Expenses', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: tone.primaryText)),
                        const SizedBox(height: 14),
                        Wrap(
                          spacing: 8,
                          children: [
                            for (var i = 0; i < 4; i++)
                              ChoiceChip(
                                label: Text(const ['Day', 'Week', 'Month', 'Year'][i]),
                                selected: _range == i && _dateFilter == null,
                                onSelected: (_) => setState(() {
                                  _range = i;
                                  _dateFilter = null;
                                }),
                                selectedColor: tone.chipSelected,
                                labelStyle: TextStyle(
                                  color: (_range == i && _dateFilter == null) ? tone.chipSelectedFg : tone.secondaryText,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 12,
                                ),
                                backgroundColor: tone.chipBg,
                                showCheckmark: false,
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
                                  slices: _snap.categories.map((c) => _DonutSlice(c.amount, c.color)).toList(),
                                  centerLabel: 'Total',
                                  centerValue: _money(spent),
                                  labelColor: tone.secondaryText,
                                  valueColor: tone.primaryText,
                                  emptyColor: tone.progressTrack,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                children: [
                                  if (_snap.categories.isEmpty)
                                    Text('No contribution spending recorded yet.', style: TextStyle(color: tone.secondaryText, fontSize: 13))
                                  else
                                    for (final c in _snap.categories.take(6))
                                      Padding(
                                        padding: const EdgeInsets.only(bottom: 8),
                                        child: Row(
                                          children: [
                                            Container(width: 8, height: 8, decoration: BoxDecoration(color: c.color, shape: BoxShape.circle)),
                                            const SizedBox(width: 8),
                                            Expanded(
                                              child: Text(
                                                c.name,
                                                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: tone.secondaryText),
                                                overflow: TextOverflow.ellipsis,
                                              ),
                                            ),
                                            Text(
                                              _money(c.amount),
                                              style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: tone.primaryText),
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
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: Text('Activity ledger', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: tone.primaryText)),
                            ),
                            IconButton(
                              tooltip: _dateFilter == null ? 'Filter dates' : 'Clear date filter',
                              visualDensity: VisualDensity.compact,
                              onPressed: () async {
                                if (_dateFilter != null) {
                                  setState(() => _dateFilter = null);
                                  return;
                                }
                                await _pickDateFilter();
                              },
                              icon: Icon(
                                Icons.tune_rounded,
                                size: 20,
                                color: _dateFilter == null ? tone.secondaryText : tone.accent,
                              ),
                            ),
                            IconButton(
                              tooltip: 'Search by name',
                              visualDensity: VisualDensity.compact,
                              onPressed: () => setState(() {
                                _searchOpen = !_searchOpen;
                                if (!_searchOpen) _searchC.clear();
                              }),
                              icon: Icon(
                                Icons.search_rounded,
                                size: 20,
                                color: _searchOpen ? tone.accent : tone.secondaryText,
                              ),
                            ),
                          ],
                        ),
                        if (_searchOpen) ...[
                          const SizedBox(height: 4),
                          TextField(
                            controller: _searchC,
                            style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                            decoration: _fieldDec(tone, 'Search contribution or spending name', Icons.search_rounded),
                          ),
                          const SizedBox(height: 8),
                        ],
                        if (_dateFilter != null)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 8),
                            child: Text(
                              'Dates: ${_dateFilter!.start.month}/${_dateFilter!.start.day}/${_dateFilter!.start.year}'
                              ' – ${_dateFilter!.end.month}/${_dateFilter!.end.day}/${_dateFilter!.end.year}',
                              style: TextStyle(color: tone.accent, fontSize: 12, fontWeight: FontWeight.w700),
                            ),
                          ),
                        if (recent.isEmpty)
                          Text(
                            'No matching activity for ${_snap.state}.',
                            style: TextStyle(color: tone.secondaryText),
                          )
                        else
                          for (final t in recent.take(20))
                            Padding(
                              padding: const EdgeInsets.only(bottom: 12),
                              child: GestureDetector(
                                behavior: HitTestBehavior.opaque,
                                onTap: () => _onTransactionTap(t),
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 2),
                                  child: Row(
                                    children: [
                                      Container(
                                        width: 40,
                                        height: 40,
                                        decoration: BoxDecoration(
                                          color: t.isPendingDelete
                                              ? const Color(0xFFDC2626).withValues(alpha: tone.isDark ? 0.22 : 0.12)
                                              : tone.iconWell,
                                          borderRadius: BorderRadius.circular(12),
                                        ),
                                        child: Icon(
                                          t.isPendingDelete
                                              ? Icons.timer_outlined
                                              : (t.isInflow ? Icons.south_west_rounded : Icons.north_east_rounded),
                                          color: t.isPendingDelete
                                              ? const Color(0xFFDC2626)
                                              : (t.isInflow ? const Color(0xFF059669) : const Color(0xFFEA580C)),
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
                                              style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: tone.primaryText),
                                              overflow: TextOverflow.ellipsis,
                                            ),
                                            if (t.isPendingDelete)
                                              Text(
                                                'Deleting in ${_formatDeleteCountdown(t.pendingDeleteAt)}',
                                                style: const TextStyle(
                                                  color: Color(0xFFDC2626),
                                                  fontSize: 12,
                                                  fontWeight: FontWeight.w800,
                                                  fontFeatures: [FontFeature.tabularFigures()],
                                                ),
                                              )
                                            else
                                              Text(
                                                t.isTrust
                                                    ? (t.isInflow ? 'State Trust deposit' : 'State Trust spend')
                                                    : (t.isInflow ? 'Contribution' : 'Contribution spend'),
                                                style: TextStyle(color: tone.secondaryText, fontSize: 12),
                                              ),
                                          ],
                                        ),
                                      ),
                                      Text(
                                        '${t.isInflow ? '+' : '-'}${_money(t.amount.abs())}',
                                        style: TextStyle(
                                          fontWeight: FontWeight.w900,
                                          color: t.isInflow ? const Color(0xFF059669) : tone.primaryText,
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
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PendingTransferCard extends StatelessWidget {
  const _PendingTransferCard({
    required this.transfer,
    required this.money,
    required this.canAct,
    required this.currentEmail,
    required this.isGlobalAdmin,
    required this.onApprove,
    required this.onReject,
  });

  final NgmyCivicWalletPendingTransfer transfer;
  final String Function(double) money;
  final bool canAct;
  final String currentEmail;
  final bool isGlobalAdmin;
  final Future<void> Function() onApprove;
  final Future<void> Function() onReject;

  @override
  Widget build(BuildContext context) {
    final me = currentEmail.toLowerCase().trim();
    final already = transfer.approvals.any(
      (a) => (a['email'] ?? '').toString().toLowerCase().trim() == me,
    );
    final isRequester = transfer.requestedByEmail.toLowerCase().trim() == me;
    final canApprove = canAct && !already && (isGlobalAdmin || !isRequester);
    final canReject = canAct && (isGlobalAdmin || isRequester || canApprove);

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: const LinearGradient(
          colors: [Color(0xFF1E3A8A), Color(0xFF1E40AF)],
        ),
        border: Border.all(color: Colors.white24),
        boxShadow: [
          BoxShadow(color: const Color(0xFF2563EB).withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.hourglass_top_rounded, color: Colors.white, size: 18),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  transfer.isToContribution
                      ? 'Pending Trust → Contribution'
                      : 'Pending Contribution → Trust',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                ),
              ),
              Text(
                money(transfer.amount),
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
              ),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            '${transfer.description} · by ${transfer.requestedByName}',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 12),
          ),
          const SizedBox(height: 4),
          Text(
            'Approvals ${transfer.approvalCount}/${transfer.requiredApprovals}'
            '${transfer.approvalsNeeded > 0 ? ' · needs ${transfer.approvalsNeeded} more' : ''}',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 12, fontWeight: FontWeight.w700),
          ),
          if (canApprove || canReject) ...[
            const SizedBox(height: 12),
            Row(
              children: [
                if (canReject)
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => onReject(),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: Colors.white,
                        side: const BorderSide(color: Colors.white54),
                      ),
                      child: const Text('Reject'),
                    ),
                  ),
                if (canReject && canApprove) const SizedBox(width: 10),
                if (canApprove)
                  Expanded(
                    child: FilledButton(
                      onPressed: () => onApprove(),
                      style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: const Color(0xFF1E3A8A)),
                      child: const Text('Approve'),
                    ),
                  ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

class _BudgetStat extends StatelessWidget {
  const _BudgetStat({required this.tone, required this.label, required this.value, this.alignEnd = false});
  final _WalletTone tone;
  final String label;
  final String value;
  final bool alignEnd;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignEnd ? CrossAxisAlignment.end : CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: tone.secondaryText, fontSize: 12, fontWeight: FontWeight.w600)),
        const SizedBox(height: 2),
        Text(value, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: tone.primaryText)),
      ],
    );
  }
}

class _NationwideLiveCornerStat extends StatefulWidget {
  const _NationwideLiveCornerStat({
    required this.label,
    required this.value,
    required this.icon,
    required this.alignEnd,
    required this.gradient,
    required this.accent,
    this.onTap,
    this.enterDelay = Duration.zero,
  });

  final String label;
  final String value;
  final IconData icon;
  final bool alignEnd;
  final List<Color> gradient;
  final Color accent;
  final VoidCallback? onTap;
  final Duration enterDelay;

  @override
  State<_NationwideLiveCornerStat> createState() => _NationwideLiveCornerStatState();
}

class _NationwideLiveCornerStatState extends State<_NationwideLiveCornerStat>
    with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;
  var _entered = false;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))
      ..repeat(reverse: true);
    Future<void>.delayed(widget.enterDelay, () {
      if (mounted) setState(() => _entered = true);
    });
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    Widget card = AnimatedBuilder(
      animation: _pulse,
      builder: (context, _) {
        final glow = 0.18 + (_pulse.value * 0.12);
        final iconScale = 0.94 + (_pulse.value * 0.06);
        final shimmerX = -1.0 + ((_pulse.value + (widget.enterDelay.inMilliseconds / 3000)) % 1.0) * 2.2;

        return AnimatedScale(
          scale: _entered ? 1 : 0.9,
          duration: const Duration(milliseconds: 420),
          curve: Curves.easeOutBack,
          child: AnimatedOpacity(
            opacity: _entered ? 1 : 0,
            duration: const Duration(milliseconds: 320),
            child: Container(
              height: 104,
              clipBehavior: Clip.antiAlias,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(14),
                gradient: LinearGradient(
                  begin: widget.alignEnd ? Alignment.topRight : Alignment.topLeft,
                  end: widget.alignEnd ? Alignment.bottomLeft : Alignment.bottomRight,
                  colors: widget.gradient,
                ),
                boxShadow: [
                  BoxShadow(
                    color: widget.gradient.first.withValues(alpha: glow),
                    blurRadius: 14 + (_pulse.value * 8),
                    offset: const Offset(0, 6),
                  ),
                ],
                border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
              ),
              child: Stack(
                children: [
                  Positioned.fill(
                    child: Transform.translate(
                      offset: Offset(shimmerX * 48, 0),
                      child: Container(
                        width: 36,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              Colors.transparent,
                              Colors.white.withValues(alpha: 0.12),
                              Colors.transparent,
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 8,
                    left: widget.alignEnd ? null : 8,
                    right: widget.alignEnd ? 8 : null,
                    child: Transform.scale(
                      scale: iconScale,
                      child: Container(
                        width: 26,
                        height: 26,
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.16),
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(color: widget.accent.withValues(alpha: 0.5)),
                        ),
                        child: Icon(widget.icon, size: 14, color: Colors.white),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(10, 38, 10, 10),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text(
                          widget.label,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          textAlign: widget.alignEnd ? TextAlign.right : TextAlign.left,
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.88),
                            fontSize: 9,
                            fontWeight: FontWeight.w800,
                            letterSpacing: 0.2,
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          widget.value,
                          textAlign: widget.alignEnd ? TextAlign.right : TextAlign.left,
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 20,
                            height: 1.05,
                            letterSpacing: -0.4,
                          ),
                        ),
                        const Spacer(),
                        if (widget.onTap != null)
                          Text(
                            'Tap to view',
                            textAlign: widget.alignEnd ? TextAlign.right : TextAlign.left,
                            style: TextStyle(
                              color: widget.accent.withValues(alpha: 0.95),
                              fontSize: 8,
                              fontWeight: FontWeight.w800,
                            ),
                          )
                        else
                          const SizedBox(height: 12),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );

    if (widget.onTap == null) return card;
    return Material(
      color: Colors.transparent,
      child: InkWell(onTap: widget.onTap, borderRadius: BorderRadius.circular(14), child: card),
    );
  }
}

class _NationwideContributionsKeptHero extends StatefulWidget {
  const _NationwideContributionsKeptHero({
    required this.tone,
    required this.amount,
    required this.hint,
  });

  final _WalletTone tone;
  final String amount;
  final String hint;

  @override
  State<_NationwideContributionsKeptHero> createState() => _NationwideContributionsKeptHeroState();
}

class _NationwideContributionsKeptHeroState extends State<_NationwideContributionsKeptHero>
    with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _shimmer;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))
      ..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 2800))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _shimmer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = widget.tone.isDark;
    const emerald = Color(0xFF059669);
    const deep = Color(0xFF064E3B);
    const gold = Color(0xFFFBBF24);

    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.88, end: 1),
      duration: const Duration(milliseconds: 620),
      curve: Curves.easeOutBack,
      builder: (context, scale, child) => Transform.scale(scale: scale, child: child),
      child: AnimatedBuilder(
        animation: Listenable.merge([_pulse, _shimmer]),
        builder: (context, _) {
          final glow = 0.22 + (_pulse.value * 0.14);
          final shimmerX = -1.2 + (_shimmer.value * 2.4);
          return Container(
            width: double.infinity,
            clipBehavior: Clip.antiAlias,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(20),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: isDark
                    ? [const Color(0xFF065F46), deep, const Color(0xFF022C22)]
                    : [emerald, const Color(0xFF047857), deep],
              ),
              boxShadow: [
                BoxShadow(
                  color: emerald.withValues(alpha: glow),
                  blurRadius: 22 + (_pulse.value * 10),
                  offset: const Offset(0, 10),
                ),
              ],
              border: Border.all(color: Colors.white.withValues(alpha: 0.16)),
            ),
            child: Stack(
              children: [
                Positioned.fill(
                  child: Transform.translate(
                    offset: Offset(shimmerX * 120, 0),
                    child: Container(
                      width: 90,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Colors.transparent,
                            Colors.white.withValues(alpha: 0.14),
                            Colors.transparent,
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Transform.scale(
                            scale: 0.96 + (_pulse.value * 0.06),
                            child: Container(
                              width: 34,
                              height: 34,
                              decoration: BoxDecoration(
                                color: Colors.white.withValues(alpha: 0.16),
                                borderRadius: BorderRadius.circular(11),
                                border: Border.all(color: gold.withValues(alpha: 0.45)),
                              ),
                              child: const Icon(Icons.savings_rounded, color: Colors.white, size: 18),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Contributions kept',
                                  style: TextStyle(
                                    color: Colors.white.withValues(alpha: 0.92),
                                    fontWeight: FontWeight.w900,
                                    fontSize: 12,
                                    letterSpacing: 0.3,
                                  ),
                                ),
                                Text(
                                  'Nationwide · contribution cases',
                                  style: TextStyle(
                                    color: Colors.white.withValues(alpha: 0.68),
                                    fontSize: 10,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: gold.withValues(alpha: 0.18),
                              borderRadius: BorderRadius.circular(999),
                              border: Border.all(color: gold.withValues(alpha: 0.45)),
                            ),
                            child: const Text(
                              'US',
                              style: TextStyle(
                                color: Color(0xFFFDE68A),
                                fontWeight: FontWeight.w900,
                                fontSize: 9,
                                letterSpacing: 0.8,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 14),
                      TweenAnimationBuilder<double>(
                        tween: Tween(begin: 0, end: 1),
                        duration: const Duration(milliseconds: 780),
                        curve: Curves.easeOutCubic,
                        builder: (context, t, _) => Transform.translate(
                          offset: Offset(0, (1 - t) * 10),
                          child: Opacity(
                            opacity: t,
                            child: Text(
                              widget.amount,
                              style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w900,
                                fontSize: 28,
                                letterSpacing: -0.8,
                                height: 1.05,
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        widget.hint,
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.72),
                          fontSize: 10,
                          height: 1.35,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _FundFrame extends StatelessWidget {
  const _FundFrame({
    required this.title,
    required this.subtitle,
    required this.amount,
    required this.detail,
    required this.gradient,
    required this.icon,
  });

  final String title;
  final String subtitle;
  final String amount;
  final String detail;
  final List<Color> gradient;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.92, end: 1),
      duration: const Duration(milliseconds: 520),
      curve: Curves.easeOutBack,
      builder: (context, scale, child) => Transform.scale(scale: scale, child: child),
      child: Container(
        padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: gradient,
          ),
          boxShadow: [
            BoxShadow(
              color: gradient.first.withValues(alpha: 0.35),
              blurRadius: 18,
              offset: const Offset(0, 8),
            ),
          ],
          border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.16),
                    borderRadius: BorderRadius.circular(9),
                  ),
                  child: Icon(icon, color: Colors.white, size: 16),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                      Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 10)),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            TweenAnimationBuilder<double>(
              tween: Tween(begin: 0, end: 1),
              duration: const Duration(milliseconds: 700),
              curve: Curves.easeOutCubic,
              builder: (context, t, _) => Opacity(
                opacity: t,
                child: Text(
                  amount,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 18,
                    letterSpacing: -0.5,
                    height: 1.1,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 6),
            Text(
              detail,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 10, fontWeight: FontWeight.w600),
            ),
          ],
        ),
      ),
    );
  }
}

class _Card extends StatelessWidget {
  const _Card({required this.tone, required this.child});
  final _WalletTone tone;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
      decoration: BoxDecoration(
        color: tone.cardBg,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: tone.cardBorder),
        boxShadow: [
          if (!tone.isDark)
            BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 18, offset: const Offset(0, 8)),
        ],
      ),
      child: child,
    );
  }
}

class _DonutSlice {
  const _DonutSlice(this.value, this.color);
  final double value;
  final Color color;
}

class _DonutPainter extends CustomPainter {
  _DonutPainter({
    required this.slices,
    required this.centerLabel,
    required this.centerValue,
    required this.labelColor,
    required this.valueColor,
    required this.emptyColor,
  });
  final List<_DonutSlice> slices;
  final String centerLabel;
  final String centerValue;
  final Color labelColor;
  final Color valueColor;
  final Color emptyColor;

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
          ..color = emptyColor
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
      text: TextSpan(text: centerLabel, style: TextStyle(color: labelColor, fontSize: 11, fontWeight: FontWeight.w600)),
      textDirection: TextDirection.ltr,
    )..layout();
    final tp2 = TextPainter(
      text: TextSpan(text: centerValue, style: TextStyle(color: valueColor, fontSize: 13, fontWeight: FontWeight.w900)),
      textDirection: TextDirection.ltr,
    )..layout(maxWidth: radius);
    tp1.paint(canvas, Offset(center.dx - tp1.width / 2, center.dy - 12));
    tp2.paint(canvas, Offset(center.dx - tp2.width / 2, center.dy + 2));
  }

  @override
  bool shouldRepaint(covariant _DonutPainter oldDelegate) => true;
}

/// Soft mesh only used on the unlock screen (not the wallet itself).
class WalletUnlockMeshBackground extends StatelessWidget {
  const WalletUnlockMeshBackground({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (isDark) {
      return const ColoredBox(color: Color(0xFF0A0A0A));
    }
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF7C3AED), Color(0xFF2563EB), Color(0xFFDB2777), Color(0xFFF97316)],
          stops: [0.0, 0.35, 0.7, 1.0],
        ),
      ),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Positioned(top: -80, right: -40, child: _blob(220, const Color(0xFFA78BFA).withValues(alpha: 0.45))),
          Positioned(bottom: 80, left: -60, child: _blob(260, const Color(0xFF38BDF8).withValues(alpha: 0.35))),
          Positioned(bottom: -40, right: 20, child: _blob(180, const Color(0xFFF472B6).withValues(alpha: 0.4))),
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
